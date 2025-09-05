"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../../ui/placeholders-and-vanish-input";

import FoodLoading from "@/components/shared/FoodLoading";
import { useRouter } from "next/navigation";
import { LoaderFive } from "@/components/ui/loader";
import { ModeSwitch } from "@/components/ui/ModeSwitch";

export function RecipeInput() {
  const [mode, setMode] = useState<"recipe" | "workout">("recipe");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [inputState, setInputState] = useState({});
  const recipePlaceholders = [
    "Give me a keto-friendly chicken curry recipe",

    "How to make a high-protein vegan breakfast burrito?",
    "Gluten-free pasta recipe with pesto",
    "Whole30 approved chicken stir fry",
    "Low-carb vegetarian lasagna recipe",
    "Mediterranean diet grilled fish with veggies",
    "Dairy-free creamy mushroom soup",
  ];

  const workoutPlaceholders = [
    "Create a 30-minute full body HIIT workout routine",
    "Upper body strength training for beginners",
    "Best stretching routine for post-workout recovery",
    "Cardio workout  for weight loss goals",
    "Core strengthening exercises for back pain relief",
    "Pre-workout warm-up routine for runners",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const fetchData = await fetch(
        `/api/${mode == "recipe" ? "recipe" : "workout"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputState }),
        }
      );
      const data = await fetchData.json();
      router.push(`/${mode == "recipe" ? "recipe" : "workout"}/${data.id}`);
    } catch (error) {
      console.error(`Failed to fetch recipe:`, error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-[30rem] flex flex-col justify-center  items-center px-4">
      {isLoading ? (
        <>
          <FoodLoading mode={mode == "recipe" ? "recipe" : "workout"} />
          <LoaderFive text="Generating recipe..." />
        </>
      ) : (
        <>
          <h2
            className={`mb-10 sm:mb-20  text-3xl text-center sm:text-5xl  ${
              mode == "recipe" ? "text-orange-500" : "text-blue-700"
            } font-semibold font-sans transition-all duration-300 ease-in-out`}
          >
            {mode == "recipe"
              ? "Generate Recipe for your dietary needs"
              : "Generate Workout for your fitness needs"}
          </h2>
          <ModeSwitch mode={mode} onModeChange={setMode} />
          <PlaceholdersAndVanishInput
            placeholders={
              mode == "recipe" ? recipePlaceholders : workoutPlaceholders
            }
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </>
      )}
    </div>
  );
}
