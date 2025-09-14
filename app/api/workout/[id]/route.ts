import connectDB from "@/lib/connectDB";
import Workout from "@/models/Workout.schema";
import { RouteParams } from "@/types";

export async function GET(req: Request, { params }: RouteParams) {
  await connectDB();
  const { id } = await params;
  try {
    const fetchedWorkout = await Workout.findOne({ _id: id }).lean();
    console.log(fetchedWorkout);
    return Response.json({ ...fetchedWorkout }, { status: 200 });
  } catch (error) {
    console.log("Error :", error);
  }
}
