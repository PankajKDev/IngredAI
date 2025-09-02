export interface Features {
  feature: string;
  present: boolean;
}
export interface IPricingData {
  name: string;
  features: Features[];
}

export interface RecipeSectionProps {
  title: string;
  icon: React.ReactNode;
  recipes: Recipe[];
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
export interface Recipe {
  _id?: string;
  title: string;
  userId: string;
  imageUrl?: string;
  description?: string;
  cuisine?: string;
  cookTime?: number;
  servings?: number;
  difficulty?: string;
  calories?: number;
  protein?: number;
  fat?: number;
  carbohydrates?: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
  isFavourite: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
