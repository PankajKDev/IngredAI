"use client";
import type React from "react";
import type { IWorkout } from "@/types";
import { Clock, Flame, Dumbbell, LucideDumbbell } from "lucide-react";
import { useRouter } from "next/navigation";

interface WorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {
  const router = useRouter();

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner":
        return "bg-green-500/20 text-green-300 border border-green-500/30";
      case "intermediate":
        return "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30";
      case "advanced":
        return "bg-red-500/20 text-red-300 border border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border border-gray-500/30";
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={workout.image}
          alt={workout.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute top-3 right-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${getDifficultyColor(
              workout.difficulty
            )}`}
          >
            {workout.difficulty}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-orange-300 transition-colors">
          {workout.title}
        </h3>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-orange-400" />
            <span>{workout.totalTime} min</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4 text-red-400" />
            <span>{workout.caloriesBurned} cal</span>
          </div>
          <div className="flex items-center gap-1">
            <Dumbbell className="w-4 h-4 text-blue-400" />
            <span>{workout.type}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {workout.targetMuscles.slice(0, 3).map((muscle, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-gray-700/30 text-gray-400 rounded-full"
            >
              {muscle}
            </span>
          ))}
          {workout.targetMuscles.length > 3 && (
            <span className="px-3 py-1 text-xs font-medium bg-gray-700/30 text-gray-400 rounded-full">
              +{workout.targetMuscles.length - 3} more
            </span>
          )}
        </div>

        <button
          onClick={() => router.push(`/workout/${workout._id}`)}
          className="w-full cursor-pointer py-2 px-4 bg-gradient-to-r from-orange-600 to-red-500 text-white font-medium rounded-lg hover:from-orange-700 hover:to-red-600 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
        >
          View Workout
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
