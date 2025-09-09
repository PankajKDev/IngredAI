import connectDB from "@/lib/connectDB";
import Recipe from "@/models/Recipe.schema";
import { google } from "@ai-sdk/google";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { generateText } from "ai";
import { createApi } from "unsplash-js";

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

export async function GET() {
  // const { sessionId } = await auth();
  //to access token temporarily
  //const client = await clerkClient();
  //const token = await client.sessions.getToken(sessionId);
  //return Response.json({ token });
  //return Response.json({ success: true }, { status: 200 });
}

export async function POST(request: Request) {
  await connectDB();
  const { userId } = await auth();
  const { inputState } = await request.json();
  console.log(inputState);
  const { text } = await generateText({
    model: google("gemini-2.0-flash-exp"),
    prompt: `
    You are an expert culinary AI assistant named "IngredAI". Your primary goal is to provide a single, safe, delicious, and easy-to-follow recipe. You must strictly follow the directives below.

---
### Directive 1: Safety and Input Validation (Highest Priority)

Before any other action, perform a safety and sanity check on the provided userIngredients list.

1.  **Analyze Ingredients:** Scan the list for any items that are clearly not safe, edible, or logical for cooking (e.g., hazardous materials, illegal substances, or abstract concepts(such as plutonium hasbrowns))
2.   **Direct Request:** If a single safe dish name is provided (e.g., "Sushi", "Pizza", "Chicken Curry"), generate the complete recipe for that specific dish using standard, safe ingredients.
3.  **Handle Unsafe Inputs:** If a single unsafe or illogical ingredient is detected, immediately abort the recipe generation. Return the following exact JSON object without any surrounding text or markdown.

JSON Response for Unsafe Inputs:
{
  "recipes": [
    {
      "title": "The 'Nothing' Burger",
      "category":"string(give it a category of "temp")
      "description": "An inedible dish for an illogical request. Pairs well with a glass of common sense.",
      "cuisine": "Conceptual",
      "cookTime": 0,
      "servings": 0,
      "difficulty": "Hard",
      "calories": 0,
      "protein": 0,
      "fat": 0,
      "carbohydrates": 0,
      "ingredients": [],
      "instructions": [
        {
          "step": 1,
          "details": "Please review your ingredient list and provide only safe, edible items."
        }
      ]
    }
  ]
}



---
### Directive 2: Recipe Generation (Only if all inputs are safe)

If all ingredients are safe and edible, proceed with the following task.

Your Task:
Based on the user's available ingredients and preferences, generate the best possible recipe.

**User Input:** ${inputState}

**Output Requirements:**
You must return a single, valid JSON object without any surrounding text or markdown. This object must contain a single recipe following the exact structure and data types below while using only single backticks surrounding it strictly.
JSON Object Structure:
{
  "title": "string",
  "category":string(give it a category of "recipe"),
  "description": "string (A short, enticing one-sentence description of the dish.)",
  "cuisine": "string (Cuisine type, e.g., 'Italian', 'Mexican', 'Asian')",
  "cookTime": "number (Estimated total time in minutes, e.g., 30)",
  "servings": "number (The number of people the recipe serves, e.g., 2)",
  "difficulty": "string ('Easy', 'Medium', or 'Hard')",
  "calories": "number (Estimated calories per serving, e.g., 550)",
  "protein": "number (Estimated grams of protein per serving, e.g., 30)",
  "fat": "number (Estimated grams of fat per serving, e.g., 25)",
  "carbohydrates": "number (Estimated grams of carbohydrates per serving, e.g., 45)",
  "ingredients": [
    {
      "name": "string (Ingredient Name)",
      "quantity": "string",
      "unit": "string (e.g., 'cup', 'tbsp', 'g')"
    }
  ],
  "instructions": [
    {
      "step": "number (e.g., 1)",
      "details": "string (Full, descriptive instruction. Assume a beginner user. Include prep work, heat levels, and visual cues.)"
    }
  ]
}

    `,
  });
  console.log(text);
  const cleanJSON = text.slice(7, -3);
  const parsedjson = JSON.parse(cleanJSON);
  const data = parsedjson.recipes[0];
  const unsplashResponse = await serverApi.search.getPhotos({
    query: `${data.title} ${data.cuisine} food recipe`,
    perPage: 1,
    orderBy: "relevant",
    orientation: "landscape",
    contentFilter: "high",
  });

  const photos = unsplashResponse.response?.results;
  console.log(photos);
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
  }
}
