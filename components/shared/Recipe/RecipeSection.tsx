import { RecipeSectionProps } from "@/types";
import RecipeCard from "./RecipeCard";

const RecipeSection: React.FC<RecipeSectionProps> = ({
  title,
  icon,
  recipes,
  onViewRecipe,
  onToggleFavorite,
  showViewAll = true,
}) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600/20 to-orange-500/20 border border-purple-500/20">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <span className="text-gray-400">({recipes.length})</span>
        </div>

        {showViewAll && recipes.length > 6 && (
          <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
            View All
          </button>
        )}
      </div>

      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.slice(0, 8).map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onViewRecipe={onViewRecipe}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-800/20 rounded-xl border border-gray-700/30 border-dashed">
          <div className="text-gray-400 mb-2">No recipes found</div>
          <div className="text-sm text-gray-500">
            Your recipes will appear here
          </div>
        </div>
      )}
    </section>
  );
};

export default RecipeSection;
