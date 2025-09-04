"use client";

import { cn } from "@/lib/utils";

interface ModeSwitchProps {
  mode: "recipe" | "workout";
  onModeChange: (mode: "recipe" | "workout") => void;
  className?: string;
}

export function ModeSwitch({ mode, onModeChange, className }: ModeSwitchProps) {
  return (
    <div className={cn("flex items-center justify-center mb-10", className)}>
      <div className="relative bg-gray-800 p-1 rounded-lg border border-gray-700">
        <div className="flex">
          <button
            onClick={() => onModeChange("recipe")}
            className={cn(
              "relative px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 z-10",
              mode === "recipe"
                ? "text-black"
                : "text-gray-400 hover:text-white"
            )}
          >
            🍳 Recipe
          </button>
          <button
            onClick={() => onModeChange("workout")}
            className={cn(
              "relative px-6 py-2 text-sm font-medium rounded-md transition-all duration-200 z-10",
              mode === "workout"
                ? "text-black"
                : "text-gray-400 hover:text-white"
            )}
          >
            💪 Workout
          </button>
        </div>

        <div
          className={cn(
            "absolute top-1 bottom-1 bg-orange-500 rounded-md transition-all duration-200 ease-in-out",
            mode === "recipe" ? "left-1 right-1/2" : "left-1/2 right-1"
          )}
        />
      </div>
    </div>
  );
}
