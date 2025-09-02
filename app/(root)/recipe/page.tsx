import React from "react";
import { Heart, Clock, Users, ChefHat, Sparkles } from "lucide-react";
import RecipeSection from "@/components/shared/Recipe/RecipeSection";
import { fetchRecipesByUserId } from "@/lib/actions/general.action";
import { useAuth } from "@clerk/nextjs";
import { useReducedMotion } from "motion/react";
import { auth } from "@clerk/nextjs/server";

const RecipePage: React.FC = async () => {
  const { userId } = await auth();
  const handleViewRecipe = (id: string) => {
    // Navigate to recipe detail page
    console.log("View recipe:", id);
    // router.push(`/recipe/${id}`);
  };

  const handleToggleFavorite = (id: string) => {
    // Toggle favorite status
    console.log("Toggle favorite:", id);
  };
  const recipes = await fetchRecipesByUserId(userId!);
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
        {/* <RecipeSection
          title="Favorite Recipes"
          icon={<Heart className="w-5 h-5 text-red-400" />}
          recipes={favoriteRecipes}
          onViewRecipe={handleViewRecipe}
          onToggleFavorite={handleToggleFavorite}
        /> */}
        <RecipeSection
          title="Recipes made by you"
          icon={<Clock className="w-5 h-5 text-blue-400" />}
          recipes={recipes}
          onViewRecipe={handleViewRecipe}
          onnToggleFavorite={handleToggleFavorite}
        />
      </div>
    </div>
  );
};

export default RecipePage;
