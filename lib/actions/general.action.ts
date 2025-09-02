import Recipe from "@/models/Recipe.schema";
import connectDB from "../connectDB";

export async function fetchRecipeById(id: string) {
  await connectDB();
  try {
    const fetchedRecipe = await Recipe.findOne({ _id: id }).lean();
    return JSON.parse(JSON.stringify(fetchedRecipe));
  } catch (error) {
    console.log("Error :", error);
  }
}

export async function fetchRecipesByUserId(id: string) {
  await connectDB();
  try {
    const fetchedRecipes = await Recipe.find({ userId: id }).lean();
    console.log(...fetchedRecipes);
    return JSON.parse(JSON.stringify(fetchedRecipes));
  } catch (error) {
    console.log(`Error fetching recipes ${error}`);
  }
}
