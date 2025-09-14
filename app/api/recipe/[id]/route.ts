import connectDB from "@/lib/connectDB";
import Recipe from "@/models/Recipe.schema";
import { RouteParams } from "@/types";

export async function GET(req: Request, { params }: RouteParams) {
  await connectDB();

  const { id } = await params;

  try {
    const fetchedRecipe = await Recipe.findOne({ _id: id }).lean();
    return Response.json({ ...fetchedRecipe }, { status: 200 });
  } catch (error) {
    console.log("Error :", error);
  }
}
