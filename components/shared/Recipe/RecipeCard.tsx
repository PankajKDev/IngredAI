"use client";
import { Recipe } from "@/types";
import { Heart, Clock, Users } from "lucide-react";
import { useRouter } from "next/navigation";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const router = useRouter();
  const favBool = recipe.isFavourite;
  const handleFavourite = async (id: string) => {
    try {
      const likedRecipe = await fetch("/api/recipe", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, favBool }),
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Favorite Button */}

        <button
          onClick={() => handleFavourite(recipe._id!)}
          className="absolute cursor-pointer top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors"
        >
          <Heart
            className={`w-4 h-4 ${
              recipe.isFavourite ? "fill-red-500 text-red-500" : "text-white"
            }`}
          />
        </button>

        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
              recipe.difficulty === "Easy"
                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                : recipe.difficulty === "Medium"
                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                : "bg-red-500/20 text-red-300 border border-red-500/30"
            }`}
          >
            {recipe.difficulty}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
          {recipe.title}
        </h3>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.cookTime}m</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{recipe.servings}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-gray-700/30 rounded-lg p-2 text-center">
            <div className="text-sm font-semibold text-orange-400">
              {recipe.calories}
            </div>
            <div className="text-xs text-gray-400">Calories</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-2 text-center">
            <div className="text-sm font-semibold text-purple-400">
              {recipe.protein}g
            </div>
            <div className="text-xs text-gray-400">Protein</div>
          </div>
          <div className="bg-gray-700/30 rounded-lg p-2 text-center">
            <div className="text-sm font-semibold text-blue-400">
              {recipe.fat}g
            </div>
            <div className="text-xs text-gray-400">Fat</div>
          </div>
        </div>

        <button
          onClick={() => router.push(`/recipe/${recipe._id}`)}
          className="w-full cursor-pointer py-2 px-4 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
