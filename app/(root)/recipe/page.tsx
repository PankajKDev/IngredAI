"use client";
import React from "react";
import { Heart, Clock, Users, ChefHat, Sparkles } from "lucide-react";
import RecipeSection from "@/components/shared/Recipe/RecipeSection";
import { favoriteRecipes, premadeRecipes, userMadeRecipes } from "@/constants";

const RecipePage: React.FC = () => {
  const handleViewRecipe = (id: string) => {
    // Navigate to recipe detail page
    console.log("View recipe:", id);
    // router.push(`/recipe/${id}`);
  };

  const handleToggleFavorite = (id: string) => {
    // Toggle favorite status
    console.log("Toggle favorite:", id);
  };

  return (
    <div className=" ">
      {/* Header */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-orange-500">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">My Recipes</h1>
          </div>
          <p className="text-gray-400">
            Discover and organize your favorite healthy meals
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Favorite Recipes */}
        <RecipeSection
          title="Favorite Recipes"
          icon={<Heart className="w-5 h-5 text-red-400" />}
          recipes={favoriteRecipes}
          onViewRecipe={handleViewRecipe}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* User Made Recipes */}
        <RecipeSection
          title="User Made"
          icon={<Sparkles className="w-5 h-5 text-purple-400" />}
          recipes={userMadeRecipes}
          onViewRecipe={handleViewRecipe}
        />

        {/* Premade Recipes */}
        <RecipeSection
          title="Premade Recipes"
          icon={<ChefHat className="w-5 h-5 text-orange-400" />}
          recipes={premadeRecipes}
          onViewRecipe={handleViewRecipe}
          onToggleFavorite={handleToggleFavorite}
        />
      </div>
    </div>
  );
};

export default RecipePage;
