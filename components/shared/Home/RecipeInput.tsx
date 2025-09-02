"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../../ui/placeholders-and-vanish-input";

import FoodLoading from "@/components/shared/FoodLoading";
import { useRouter } from "next/navigation";

export function RecipeInput() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [inputState, setInputState] = useState({});
  const placeholders = [
    "Give me a keto-friendly chicken curry recipe",

    "How to make a high-protein vegan breakfast burrito?",
    "Gluten-free pasta recipe with pesto",
    "Whole30 approved chicken stir fry",
    "Low-carb vegetarian lasagna recipe",
    "Mediterranean diet grilled fish with veggies",
    "Dairy-free creamy mushroom soup",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const fetchData = await fetch("/api/getrecipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputState }),
      });
      const data = await fetchData.json();
      router.push(`/recipe/${data.recipeId}`);
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
          <FoodLoading />
          <h2 className="font-sans text-2xl ">Loading...</h2>
        </>
      ) : (
        <>
          <h2 className="mb-10 sm:mb-20  text-xl text-center sm:text-5xl  text-orange-500 font-semibold font-sans">
            Generate Recipe for your dietary needs
          </h2>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </>
      )}
    </div>
  );
}
