import connectDB from "@/lib/connectDB";
import Workout from "@/models/Workout.schema";
import { google } from "@ai-sdk/google";
import { auth } from "@clerk/nextjs/server";
import { generateText } from "ai";
import { createApi } from "unsplash-js";

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

export async function POST(request: Request) {
  await connectDB();
  const { userId } = await auth();
  const { inputState } = await request.json();
  const { text } = await generateText({
    model: google("gemini-2.0-flash-exp"),
    prompt: `
    You are an expert fitness AI assistant named "WorkoutAI". Your primary goal is to provide a single, safe, effective, and easy-to-follow workout routine. You must strictly follow the directives below.

Directive 1: Safety and Input Validation (Highest Priority)
Before any other action, perform a safety and sanity check on the provided user fitness inputs.

Analyze Inputs: Scan the request for any activities, equipment, or conditions that are clearly unsafe, inappropriate, or illogical for fitness (e.g., dangerous movements, medical contraindications, or abstract concepts).
Handle Unsafe Inputs: If a single unsafe or illogical request is detected, immediately abort the workout generation. Return the following exact JSON object without any surrounding text or markdown.

JSON Response for Unsafe Inputs:
{
  "workouts": [
    {
      "title": "The 'Couch Potato' Routine",
      "category":string(give it a category of "temp")
      "imageUrl": "string (the image name to be searched on unsplash which is funny)",
      "description": "A non-workout for an unsafe request. Best paired with common sense and proper form.",
      "type": "Safety First",
      "totalTime": 0,
      "difficulty": "Impossible",
      "targetMuscles": [],
      "equipment": [],
      "caloriesBurned": 0,
      "warmup": {
        "duration": 0,
        "exercises": []
      },
      "workout": {
        "duration": 0,
        "exercises": []
      },
      "cooldown": {
        "duration": 0,
        "exercises": []
      },
      "instructions": [
        {
          "step": 1,
          "details": "Please review your request and provide only safe, appropriate fitness goals and equipment."
        }
      ]
    }
  ]
}
Directive 2: Workout Generation (Only if all inputs are safe)
If all inputs are safe and appropriate, proceed with the following task.
Your Task:
Based on the user's fitness level, available equipment, time constraints, and goals, generate the best possible workout routine.
User Input: ${inputState}
Output Requirements:
You must return a single, valid JSON object without any surrounding text or markdown. This object must contain a single workout routine following the exact structure and data types below while using only single backticks surrounding it strictly.
JSON Object Structure:
{
  "title": "string (Workout name, e.g., 'Upper Body Strength Builder')",
  "category":string(give it a category of "workout")
  "image": "string (name of a fitness image to search on Unsplash, e.g., 'home gym workout fitness')",
  "description": "string (A short, motivating one-sentence description of the workout.)",
  "type": "string (Workout category, e.g., 'Strength', 'Cardio', 'HIIT', 'Flexibility')",
  "totalTime": "number (Total estimated time in minutes, e.g., 45)",
  "difficulty": "string ('Beginner', 'Intermediate', or 'Advanced')",
  "targetMuscles": ["string (Primary muscle groups targeted, e.g., 'Chest', 'Shoulders')"],
  "equipment": ["string (Required equipment, e.g., 'Dumbbells', 'Bodyweight only')"],
  "caloriesBurned": "number (Estimated calories burned, e.g., 300)",
  "warmup": {
    "duration": "number (Duration in minutes, e.g., 5)",
    "exercises": [
      {
        "name": "string (Exercise name)",
        "duration": "string (Time duration, e.g., '30 seconds')",
        "reps": "string (If applicable, e.g., '10 reps' or 'N/A')",
        "sets": "number (Always 1 for warmup)",
        "instructions": "string (Brief form cues and tips)"
      }
    ]
  },
  "workout": {
    "duration": "number (Main workout duration in minutes, e.g., 30)",
    "exercises": [
      {
        "name": "string (Exercise name)",
        "duration": "string (Time per set if timed, e.g., '45 seconds' or 'N/A')",
        "reps": "string (Repetitions per set, e.g., '12-15 reps')",
        "sets": "number (Number of sets, e.g., 3)",
        "restBetweenSets": "string (Rest time, e.g., '60 seconds')",
        "instructions": "string (Detailed form instructions, modifications, and safety tips)"
      }
    ]
  },
  "cooldown": {
    "duration": "number (Duration in minutes, e.g., 10)",
    "exercises": [
      {
        "name": "string (Stretch/recovery exercise name)",
        "duration": "string (Hold time, e.g., '30 seconds each side')",
        "reps": "string (If applicable, usually 'N/A' for stretches)",
        "sets": "number (Usually 1-2 for cooldown)",
        "instructions": "string (Stretching technique and breathing cues)"
      }
    ]
  }
}
    `,
  });
  const cleanJSON = text.slice(7, -3);
  const parsedjson = JSON.parse(cleanJSON);
  console.log(parsedjson);
  const data = parsedjson.workouts[0];
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
      instructions: data.instructions,
    });
    const savedWorkout = await newWorkout.save();
    const savedWorkoutId = savedWorkout._id;
    return Response.json({ id: savedWorkoutId }, { status: 200 });
  } catch (error) {
    console.log(`Error saving workout :${error}`);
  }
}
