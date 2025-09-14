import React from "react";
import { Heart, Clock, ChefHat } from "lucide-react";
import RecipeSection from "@/components/shared/Recipe/RecipeSection";
import { auth } from "@clerk/nextjs/server";

const RecipePage: React.FC = async () => {
  const { userId } = await auth();
  const response = await fetch(
    `${process.env.NEXT_BASE_URL}/api/recipe?userId=${userId}`
  );
  if (!response.ok) {
    return (
      <div className="min-h-[80vh] w-full flex justify-center items-center">
        <h1 className="text-3xl font-sans text-red-600">
          Error Fetching Recipes
        </h1>
      </div>
    );
  }
  const data = await response.json();

  const { recipes, favouriteRecipes } = data.data;

  return (
    <div>
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

      <div className="max-w-7xl mx-auto px-4 py-8">
        <RecipeSection
          title="Favorite Recipes"
          icon={<Heart className="w-5 h-5 text-red-400" />}
          recipes={favouriteRecipes}
        />
        <RecipeSection
          title="Recipes made by you"
          icon={<Clock className="w-5 h-5 text-blue-400" />}
          recipes={recipes}
        />
      </div>
    </div>
  );
};

export default RecipePage;
