"use client";

import { PlaceholdersAndVanishInput } from "../../ui/placeholders-and-vanish-input";

export default function WorkoutPlanBanner() {
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
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[30rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20  text-xl text-center sm:text-5xl  text-orange-500 font-semibold font-sans">
        Generate Recipe for your dietary needs
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
