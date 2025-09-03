import connectDB from "@/lib/connectDB";
import Recipe from "@/models/Recipe.schema";

export async function POST(request: Request) {
  await connectDB();
  try {
    const { id, favBool } = await request.json();
    const favouriteRecipe = await Recipe.findOneAndUpdate({ _id: id }, [
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
