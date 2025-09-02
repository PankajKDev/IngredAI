export interface Features {
  feature: string;
  present: boolean;
}
export interface IPricingData {
  name: string;
  features: Features[];
}

export interface Recipe {
  id: string;
  userID: string;
  imageUrl: string;
  title: string;
  image: string;
  calories: number;
  protein: number;
  fat: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  isFavorite?: boolean;
}

export interface RecipeSectionProps {
  title: string;
  icon: React.ReactNode;
  recipes: Recipe[];
  onViewRecipe: (id: string) => void;
  onToggleFavorite?: (id: string) => void;
  showViewAll?: boolean;
}

export interface RouteParams {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}

export interface Instruction {
  step: number | undefined;
  details: string | undefined;
}

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}
