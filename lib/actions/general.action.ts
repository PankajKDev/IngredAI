"use server";
import Recipe from "@/models/Recipe.schema";
import connectDB from "../connectDB";
import Workout from "@/models/Workout.schema";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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
    revalidatePath("/recipe");
  } catch (error) {
    console.log(`error adding recipe as favourite ${error}`);
  }
}
