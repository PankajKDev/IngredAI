import Recipe from "@/models/Recipe.schema";
import connectDB from "../connectDB";
import { revalidatePath } from "next/cache";
import Workout from "@/models/Workout.schema";

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
    return JSON.parse(JSON.stringify(fetchedRecipes));
  } catch (error) {
    console.log(`Error fetching recipes ${error}`);
  }
}

export async function fetchFavouriteRecipesByUserId(id: string) {
  await connectDB();
  try {
    const fetchedRecipes = await Recipe.find({
      userId: id,
      isFavourite: true,
    }).lean();
    return JSON.parse(JSON.stringify(fetchedRecipes));
  } catch (error) {
    console.log(`Error fetching favourite recipes: ${error}`);
  }
}

export async function fetchWorkoutById(id: string) {
  await connectDB();
  try {
    const fetchedWorkout = await Workout.findOne({ _id: id }).lean();
    return JSON.parse(JSON.stringify(fetchedWorkout));
  } catch (error) {
    console.log(error);
  }
}

export async function fetchWorkoutsByUserId(id: string) {
  await connectDB();
  try {
    const fetchedRecipes = await Workout.find({ userId: id }).lean();
    return JSON.parse(JSON.stringify(fetchedRecipes));
  } catch (error) {
    console.log(`Error fetching recipes ${error}`);
  }
}
