import Recipe from "@/models/Recipe.schema";
import connectDB from "../connectDB";

export async function fetchRecipeById(id: string) {
  await connectDB();
  try {
    const fetchedRecipe = await Recipe.find({ _id: id }).lean();
    return JSON.parse(JSON.stringify(fetchedRecipe));
  } catch (error) {
    console.log("Error :", error);
  }
}
