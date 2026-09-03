import connectDB from "@/lib/connectDB";
import { fallbackModel, primaryModel } from "@/lib/ai";
import { recipeSchema } from "@/lib/schemas";
import Recipe from "@/models/Recipe.schema";
import { IRecipe } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { generateObject, type LanguageModel } from "ai";
import { createApi } from "unsplash-js";

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

export async function GET(req: Request) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  try {
    const recipes: IRecipe[] = await Recipe.find({ userId: userId }).lean();
    const favouriteRecipes: IRecipe[] = recipes.filter(
      (recipe) => recipe.isFavourite === true,
    );

    return Response.json({
      success: true,
      data: {
        recipes: recipes,
        favouriteRecipes: favouriteRecipes,
      },
    });
  } catch (error) {
    console.log(`error :`, error);
  }
}

async function generateRecipeWithFailover(inputState: string) {
  const generate = (model: LanguageModel) =>
    generateObject({
      model,
      schema: recipeSchema,
      maxRetries: 1,
      prompt: `
    You are an expert culinary AI assistant named "IngredAI". Your primary goal is to provide a single, safe, delicious, and easy-to-follow recipe. You must strictly follow the directives below.

---
### Directive 1: Safety and Input Validation (Highest Priority)

Before any other action, perform a safety and sanity check on the provided userIngredients list.

1.  **Analyze Ingredients:** Scan the list for any items that are clearly not safe, edible, or logical for cooking (e.g., hazardous materials, illegal substances, or abstract concepts such as plutonium hasbrowns).
2.   **Direct Request:** If a single safe dish name is provided (e.g., "Sushi", "Pizza", "Chicken Curry"), generate the complete recipe for that specific dish using standard, safe ingredients.
3.  **Handle Unsafe Inputs:** If a single unsafe or illogical ingredient is detected, immediately abort the recipe generation and return a recipe with title "The 'Nothing' Burger", description "An inedible dish for an illogical request. Pairs well with a glass of common sense.", cuisine "Conceptual", cookTime 0, servings 0, difficulty "Hard", calories 0, protein 0, fat 0, carbohydrates 0, empty ingredients, and a single instruction with step 1 and details "Please review your ingredient list and provide only safe, edible items."

---
### Directive 2: Recipe Generation (Only if all inputs are safe)

If all ingredients are safe and edible, proceed with the following task.

Your Task:
Based on the user's available ingredients and preferences, generate the best possible recipe.

**User Input:** ${inputState}

Return a single recipe following the schema. For the Unsplash image query, include the dish title and cuisine.
    `,
    });

  try {
    return await generate(primaryModel());
  } catch {
    return await generate(fallbackModel());
  }
}

export async function POST(request: Request) {
  await connectDB();
  const { userId } = await auth();
  const { inputState } = await request.json();
  const { object: text } = await generateRecipeWithFailover(inputState);
  const data = text;

  const unsplashResponse = await serverApi.search.getPhotos({
    query: `${data.title} ${data.cuisine} food recipe`,
    perPage: 1,
    orderBy: "relevant",
    orientation: "landscape",
    contentFilter: "high",
  });

  const photos = unsplashResponse.response?.results;
  const photo = Array.isArray(photos) && photos.length > 0 ? photos[0] : null;
  const imageUrl =
    photo?.urls?.regular ||
    "https://placehold.co/600x400/black/orange?text=Error+fetching+image";

  try {
    const newRecipe = new Recipe({
      title: data.title,
      imageUrl: imageUrl,
      userId: userId,
      description: data.description,
      cuisine: data.cuisine,
      cookTime: data.cookTime,
      servings: data.servings,
      difficulty: data.difficulty,
      calories: data.calories,
      protein: data.protein,
      fat: data.fat,
      carbohydrates: data.carbohydrates,
      ingredients: data.ingredients,
      instructions: data.instructions,
      isFavourite: false,
    });
    const savedRecipe = await newRecipe.save();
    const savedRecipeID = savedRecipe._id;
    return Response.json({ id: savedRecipeID }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
