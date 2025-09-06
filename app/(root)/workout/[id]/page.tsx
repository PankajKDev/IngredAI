import { fetchWorkoutById } from "@/lib/actions/general.action";
import { IExercise, RouteParams } from "@/types";
import {
  ArrowLeft,
  ClockIcon,
  DumbbellIcon,
  FlameIcon,
  TargetIcon,
} from "lucide-react";
import Link from "next/link";

async function page({ params }: RouteParams) {
  const { id } = await params;
  const workoutData = await fetchWorkoutById(id);
  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-12">
          <Link
            href="/workout"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Workouts
          </Link>
          <div className="relative w-full h-80 mb-8 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={workoutData.image || "/placeholder.svg"}
              alt={workoutData.title}
              className=" object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h1 className="text-5xl font-bold text-balance leading-tight">
                {workoutData.title}
              </h1>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-balance">
              Workout <span className="text-blue-400">for your needs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty leading-relaxed">
              {workoutData.description}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="text-blue-400">
                  <ClockIcon />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">
                    Total Time
                  </p>
                  <p className="text-xl font-bold text-white">
                    {workoutData.totalTime} min
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="text-blue-400">
                  <TargetIcon />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">
                    Difficulty
                  </p>
                  <p className="text-xl font-bold text-white">
                    {workoutData.difficulty}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="text-blue-400">
                  <DumbbellIcon />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Type</p>
                  <p className="text-xl font-bold text-white">
                    {workoutData.type}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="text-blue-400">
                  <FlameIcon />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Calories</p>
                  <p className="text-xl font-bold text-white">
                    {workoutData.caloriesBurned}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Target Muscles
            </h3>
            <div className="flex flex-wrap gap-3">
              {workoutData.targetMuscles.map(
                (muscle: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-slate-700 to-slate-800 text-gray-200 px-4 py-2 rounded-full text-sm font-medium border border-slate-600"
                  >
                    {muscle}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Equipment Needed
            </h3>
            <div className="flex flex-wrap gap-3">
              {workoutData.equipment.map((item: string, index: number) => (
                <span
                  key={index}
                  className="border-2 border-blue-400 text-white px-4 py-2 rounded-full text-sm font-medium bg-blue-600/80 hover:bg-blue-600 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
              🔥 Warmup
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                {workoutData.warmup.duration} min
              </span>
            </h2>
            <p className="text-gray-400">
              Prepare your body for the workout ahead
            </p>
          </div>
          <div className="space-y-4">
            {workoutData.warmup.exercises.map(
              (exercise: IExercise, index: number) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-xl p-6 border border-slate-600"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {exercise.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-4">
                    {exercise.duration !== "N/A" && (
                      <span className="flex items-center gap-2 bg-slate-600 px-3 py-1 rounded-full">
                        <ClockIcon />
                        {exercise.duration}
                      </span>
                    )}
                    {exercise.reps !== "N/A" && (
                      <span className="bg-slate-600 px-3 py-1 rounded-full">
                        {exercise.reps}
                      </span>
                    )}
                    {exercise.sets && (
                      <span className="bg-slate-600 px-3 py-1 rounded-full">
                        {exercise.sets} sets
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {exercise.instructions}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
              💪 Main Workout
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                {workoutData.workout.duration} min
              </span>
            </h2>
            <p className="text-gray-400">
              The core strength-building exercises
            </p>
          </div>
          <div className="space-y-4">
            {workoutData.workout.exercises.map(
              (exercise: IExercise, index: number) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-xl p-6 border border-slate-600"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {exercise.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-4">
                    {exercise.duration !== "N/A" && (
                      <span className="flex items-center gap-2 bg-slate-600 px-3 py-1 rounded-full">
                        <ClockIcon />
                        {exercise.duration}
                      </span>
                    )}
                    {exercise.reps !== "N/A" && (
                      <span className="bg-slate-600 px-3 py-1 rounded-full">
                        {exercise.reps}
                      </span>
                    )}
                    {exercise.sets && (
                      <span className="bg-slate-600 px-3 py-1 rounded-full">
                        {exercise.sets} sets
                      </span>
                    )}
                    {exercise.restBetweenSets && (
                      <span className="bg-blue-600 px-3 py-1 rounded-full">
                        Rest: {exercise.restBetweenSets}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {exercise.instructions}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-slate-700">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-2">
              🧘 Cooldown
              <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                {workoutData.cooldown.duration} min
              </span>
            </h2>
            <p className="text-gray-400">
              Stretch and recover after your workout
            </p>
          </div>
          <div className="space-y-4">
            {workoutData.cooldown.exercises.map(
              (exercise: IExercise, index: number) => (
                <div
                  key={index}
                  className="bg-slate-700/50 rounded-xl p-6 border border-slate-600"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {exercise.name}
                  </h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-4">
                    {exercise.duration !== "N/A" && (
                      <span className="flex items-center gap-2 bg-slate-600 px-3 py-1 rounded-full">
                        <ClockIcon />
                        {exercise.duration}
                      </span>
                    )}
                    {exercise.reps !== "N/A" && (
                      <span className="bg-slate-600 px-3 py-1 rounded-full">
                        {exercise.reps}
                      </span>
                    )}
                    {exercise.sets && (
                      <span className="bg-slate-600 px-3 py-1 rounded-full">
                        {exercise.sets} sets
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {exercise.instructions}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
          <h2 className="text-lg font-bold text-white mb-2">
            Additional Properties
          </h2>
          <p className="text-gray-400">
            Version:{" "}
            <span className="text-blue-400 font-mono">{workoutData.__v}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
