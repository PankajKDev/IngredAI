import connectDB from "@/lib/connectDB";
import Recipe from "@/models/Recipe.schema";
import Workout from "@/models/Workout.schema";
import { IRecipe, IWorkout } from "@/types";

export async function fetchRecipe(id: string): Promise<IRecipe | null> {
  await connectDB();
  const doc = await Recipe.findOne({ _id: id }).lean();
  if (!doc) return null;
  return { ...(doc as IRecipe), _id: String((doc as IRecipe)._id) };
}

export async function fetchWorkout(id: string): Promise<IWorkout | null> {
  await connectDB();
  const doc = await Workout.findOne({ _id: id }).lean();
  if (!doc) return null;
  return { ...(doc as unknown as IWorkout), _id: String((doc as unknown as IWorkout)._id) };
}
