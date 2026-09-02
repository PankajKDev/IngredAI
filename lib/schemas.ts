import { z } from "zod";

const ingredientSchema = z.object({
  name: z.string(),
  quantity: z.string(),
  unit: z.string(),
});

const instructionSchema = z.object({
  step: z.number(),
  details: z.string(),
});

export const recipeSchema = z.object({
  title: z.string(),
  description: z.string(),
  cuisine: z.string(),
  cookTime: z.number(),
  servings: z.number(),
  difficulty: z.string(),
  calories: z.number(),
  protein: z.number(),
  fat: z.number(),
  carbohydrates: z.number(),
  ingredients: z.array(ingredientSchema),
  instructions: z.array(instructionSchema),
});

const exerciseSchema = z.object({
  name: z.string(),
  duration: z.string(),
  reps: z.string(),
  sets: z.number(),
  restBetweenSets: z.string().optional(),
  instructions: z.string(),
});

const subWorkoutSchema = z.object({
  duration: z.number(),
  exercises: z.array(exerciseSchema),
});

export const workoutSchema = z.object({
  title: z.string(),
  image: z.string(),
  description: z.string(),
  type: z.string(),
  totalTime: z.number(),
  difficulty: z.string(),
  targetMuscles: z.array(z.string()),
  equipment: z.array(z.string()),
  caloriesBurned: z.number(),
  warmup: subWorkoutSchema,
  workout: subWorkoutSchema,
  cooldown: subWorkoutSchema,
});
