import { model, models, Schema } from "mongoose";

const ExerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    reps: {
      type: String,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
      min: 1,
    },
    restBetweenSets: {
      type: String,
    },
    instructions: {
      type: String,
    },
  },
  { _id: false }
);

const SubWorkoutSchema = new Schema(
  {
    duration: {
      type: Number,
      required: true,
      min: 0,
    },
    exercises: [ExerciseSchema],
  },
  { _id: false }
);

const WorkoutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  totalTime: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  targetMuscles: {
    type: [String],
    required: true,
  },
  equipment: {
    type: [String],
    required: true,
  },
  caloriesBurned: {
    type: Number,
    min: 0,
    required: true,
  },
  warmup: {
    type: SubWorkoutSchema,
    required: true,
  },
  workout: {
    type: SubWorkoutSchema,
    required: true,
  },
  cooldown: {
    type: SubWorkoutSchema,
    required: true,
  },
});

const Workout = models.Workout || model("Workout", WorkoutSchema);
export default Workout;
