import HomeRecipeCard from "@/components/ui/HomeRecipeCard";
import { div } from "motion/react-client";

function MyRecipes() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-3 place-items-center">
        <HomeRecipeCard />
        <HomeRecipeCard />
        <HomeRecipeCard />
      </div>
    </div>
  );
}

export default MyRecipes;
