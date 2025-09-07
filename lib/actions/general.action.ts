"use server";
import Recipe from "@/models/Recipe.schema";
import connectDB from "../connectDB";
import Workout from "@/models/Workout.schema";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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
    const fetchedWorkouts = await Workout.find({ userId: id }).lean();
    return JSON.parse(JSON.stringify(fetchedWorkouts));
  } catch (error) {
    console.log(`Error fetching recipes ${error}`);
  }
}

export async function DeleteObjectByID(formData: FormData) {
  const id = formData.get("id") as string;
  const mode = formData.get("mode") as string;
  await connectDB();
  try {
    if (mode == "recipe") {
      const deletedRecipe = await Recipe.deleteOne({ _id: id });
      console.log(deletedRecipe);
    } else {
      const deletedWorkout = await Workout.deleteOne({ _id: id });
      console.log(deletedWorkout);
    }
    revalidatePath(`/${mode}`);
  } catch (error) {
    console.log(error);
  }
  redirect(`/${mode}`);
}

export async function FavouriteRecipeById(formData: FormData) {
  await connectDB();
  const id = formData.get("id") as string;
  const favBool = formData.get("favBool") === "on";
  try {
    const favouriteRecipe = await Recipe.updateOne({ _id: id }, [
      {
        $set: {
          isFavourite: !favBool,
        },
      },
    ]);
  } catch (error) {
    console.log(`error adding recipe as favourite ${error}`);
  }
}
