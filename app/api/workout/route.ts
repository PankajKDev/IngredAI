import connectDB from "@/lib/connectDB";
import { fallbackModel, primaryModel } from "@/lib/ai";
import { workoutSchema } from "@/lib/schemas";
import Workout from "@/models/Workout.schema";
import { auth } from "@clerk/nextjs/server";
import { generateObject, type LanguageModel } from "ai";
import { createApi } from "unsplash-js";

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

async function generateWorkoutWithFailover(inputState: string) {
  const generate = (model: LanguageModel) =>
    generateObject({
      model,
      schema: workoutSchema,
      maxRetries: 1,
      prompt: `
    You are an expert fitness AI assistant named "IngredAI". Your primary goal is to provide a single, safe, effective, and easy-to-follow workout routine. You must strictly follow the directives below.

### Directive 1: Safety and Input Validation (Highest Priority)

Before any other action, perform a safety and sanity check on the provided user fitness inputs.

1. **Analyze Inputs:** Scan the request for any activities, equipment, or conditions that are clearly unsafe, inappropriate, or illogical for fitness (e.g., dangerous movements, medical contraindications, or abstract concepts).
2. **Handle Unsafe Inputs:** If a single unsafe or illogical request is detected, immediately abort the workout generation and return a workout with title "The 'Couch Potato' Routine", description "A non-workout for an unsafe request. Best paired with common sense and proper form.", type "Safety First", totalTime 0, difficulty "Impossible", empty targetMuscles, empty equipment, caloriesBurned 0, and warmup/workout/cooldown each with duration 0 and empty exercises.

### Directive 2: Workout Generation (Only if all inputs are safe)

If all inputs are safe and appropriate, proceed with the following task.

Your Task:
Based on the user's fitness level, available equipment, time constraints, and goals, generate the best possible workout routine.

**User Input:** ${inputState}

Return a single workout routine following the schema. The "image" field is a name of a fitness image to search on Unsplash (e.g., 'home gym workout fitness'). When an exercise has no fixed rest period, set restBetweenSets to an empty string "".
    `,
    });

  try {
    return await generate(primaryModel());
  } catch {
    return await generate(fallbackModel());
  }
}

export async function POST(request: Request) {
  await connectDB();
  const { userId } = await auth();
  const { inputState } = await request.json();
  const { object: text } = await generateWorkoutWithFailover(inputState);
  const data = text;

  const result = await serverApi.search.getPhotos({
    query: `${data.image}`,
    perPage: 1,
    orderBy: "relevant",
  });
  const photos = result.response?.results;

  const photo = Array.isArray(photos) && photos.length > 0 ? photos[0] : null;
  const imageUrl =
    photo?.urls?.regular ||
    "https://placehold.co/600x400/black/orange?text=Error+fetching+image";

  try {
    const newWorkout = new Workout({
      title: data.title,
      userId: userId,
      image: imageUrl,
      description: data.description,
      type: data.type,
      totalTime: data.totalTime,
      difficulty: data.difficulty,
      caloriesBurned: data.caloriesBurned,
      targetMuscles: data.targetMuscles,
      equipment: data.equipment,
      warmup: data.warmup,
      workout: data.workout,
      cooldown: data.cooldown,
      objectCategory: "workout",
    });
    const savedWorkout = await newWorkout.save();
    const savedWorkoutId = savedWorkout._id;
    return Response.json({ id: savedWorkoutId }, { status: 200 });
  } catch (error) {
    console.log(`Error saving workout :${error}`);
    return Response.json({ success: false }, { status: 500 });
  }
}

export async function GET(req: Request) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("userId");

  try {
    const fetchedWorkouts = await Workout.find({ userId: id }).lean();
    return Response.json({ fetchedWorkouts });
  } catch (error) {
    console.log(`Error fetching recipes ${error}`);
  }
}
