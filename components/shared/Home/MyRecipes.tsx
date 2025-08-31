"use client";
import RecipeSection from "../Recipe/RecipeSection";
import { LeafyGreen, Sparkles } from "lucide-react";
import { premadeRecipes, userMadeRecipes } from "@/constants";

function MyRecipes() {
  const handleViewRecipe = (id: string) => {
    // Navigate to recipe detail page
    console.log("View recipe:", id);
    // router.push(`/recipe/${id}`);
  };

  return (
    <div className="w-[80%]">
      <RecipeSection
        title="Must Try"
        icon={<LeafyGreen className="w-5 h-5 text-green-400" />}
        recipes={premadeRecipes}
        onViewRecipe={handleViewRecipe}
      />
    </div>
  );
}

export default MyRecipes;
