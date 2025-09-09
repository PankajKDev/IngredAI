export interface Features {
  feature: string;
  present: boolean;
}
export interface IPricingData {
  name: string;
  features: Features[];
}

export interface WorkoutSectionProps {
  title: string;
  icon: React.ReactNode;
  data: IWorkout[];
  showViewAll?: boolean;
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

export interface IExercise {
  name: string;
  duration: string;
  reps: string;
  sets: number;
  restBetweenSets: string;
  instructions: string;
}

export interface ISubWorkout {
  duration: number;
  exercises: IExercise[];
}

export interface IWorkout {
  _id: string;
  userId: string;
  title: string;
  image: string;
  description: string;
  type: string;
  totalTime: number;
  difficulty: string;
  targetMuscles: string[];
  equipment: string[];
  caloriesBurned: number;
  warmup: ISubWorkout;
  workout: ISubWorkout;
  cooldown: ISubWorkout;
}

export interface ModeSwitchProps {
  mode: "recipe" | "workout";
  onModeChange: (mode: "recipe" | "workout") => void;
  className?: string;
}
