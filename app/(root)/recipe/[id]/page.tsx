import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DeleteRecipeByID,
  fetchRecipeById,
} from "@/lib/actions/general.action";
import { Ingredient, Instruction, RouteParams } from "@/types";
import {
  ArrowLeft,
  Beef,
  ChefHat,
  Clock,
  DeleteIcon,
  Droplets,
  Flame,
  LucideDelete,
  Trash2,
  Users,
  Wheat,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import DeleteButton from "@/components/shared/DeleteButton";

async function page({ params }: RouteParams) {
  const { id } = await params;
  const recipe = await fetchRecipeById(id);
  if (!recipe) {
    redirect("/");
  }
  const {
    _id,
    title,
    imageUrl,
    username,
    description,
    cuisine,
    cookTime,
    servings,
    calories,
    protein,
    carbohydrates,
    fat,
    difficulty,
    instructions,
    ingredients,
    createdAt,
    updatedAt,
  } = recipe;

  const fmt = (v: unknown) =>
    v === null || v === undefined || v === "" ? "—" : String(v);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="flex justify-between mb-5">
        <Link
          href="/recipe"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Recipes
        </Link>

        <DeleteButton id={id} mode="recipe" />
      </div>

      {/* Recipe Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-80 object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
            <p className="text-muted-foreground text-lg">{description}</p>
          </div>

          {/* Recipe Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-orange-500" />
              <span className="text-sm text-muted-foreground">Cuisine:</span>
              <span className="text-sm font-medium">{cuisine}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-muted-foreground">Cook Time:</span>
              <span className="text-sm font-medium">{cookTime} min</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <span className="text-sm text-muted-foreground">Servings:</span>
              <span className="text-sm font-medium">{servings}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant={
                  difficulty === "Easy"
                    ? "default"
                    : difficulty === "Medium"
                    ? "secondary"
                    : "destructive"
                }
              >
                {difficulty}
              </Badge>
            </div>
          </div>

          {/* Nutritional Info */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg">Nutritional Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-muted-foreground">
                    Calories:
                  </span>
                  <span className="text-sm font-medium">{calories}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Beef className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-muted-foreground">
                    Protein:
                  </span>
                  <span className="text-sm font-medium">{protein}g</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">Fat:</span>
                  <span className="text-sm font-medium">{fat}g</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wheat className="w-4 h-4 text-amber-500" />
                  <span className="text-sm text-muted-foreground">Carbs:</span>
                  <span className="text-sm font-medium">{carbohydrates}g</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Ingredients and Instructions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ingredients */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl">Ingredients</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {ingredients.map((ingredient: Ingredient, index: number) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0" />
                  <span className="text-sm">
                    <span className="font-medium">
                      {ingredient.quantity} {ingredient.unit}
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {ingredient.name}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl">Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {instructions.map((instruction: Instruction) => (
                <li key={instruction.step} className="flex gap-4">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {instruction.step}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {instruction.details}
                  </p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default page;
