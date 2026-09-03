import connectDB from "@/lib/connectDB";
import Recipe from "@/models/Recipe.schema";
import Workout from "@/models/Workout.schema";
import { IRecipe, IWorkout } from "@/types";

export async function fetchRecipe(id: string): Promise<IRecipe | null> {
  await connectDB();
  return Recipe.findOne({ _id: id }).lean() as unknown as Promise<IRecipe | null>;
}

export async function fetchWorkout(id: string): Promise<IWorkout | null> {
  await connectDB();
  return Workout.findOne({ _id: id }).lean() as unknown as Promise<IWorkout | null>;
}
