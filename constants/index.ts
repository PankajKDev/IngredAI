export const navLinks = [
  {
    name: "Home",
    linkname: "/",
  },
  {
    name: "Recipe",
    linkname: "/recipe",
  },
  {
    name: "Workout",
    linkname: "/workout",
  },
  {
    name: "Pricing",
    linkname: "/pricing",
  },
];

export const authLinks = [
  {
    name: "Sign In",
    linkname: "/sign-in",
  },
  {
    name: "Sign Up",
    linkname: "/sign-up",
  },
];

export const HowItWorksData = [
  {
    id: 1,
    img: "/Home/task.jpg",
    text: "Tell us your dietary needs, allergies, and fitness goals.",
  },
  {
    id: 2,
    img: "/Home/meal.jpg",
    text: "Our AI instantly generates delicious recipes tailored just for you.",
  },
  {
    id: 3,
    img: "/Home/salad.jpg",
    text: "Follow easy instructions and enjoy healthy meals that you'll actually love.",
  },
];

export const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const freePlan = {
  name: "Free Tier",
  features: [
    { feature: "AI Recipe Generator (basic filters)", present: true },
    { feature: "Recipe Library (standard set)", present: true },
    { feature: "Recipe Saves (up to 20)", present: true },
    { feature: "Calorie Tracking (manual only)", present: true },
    { feature: "Macro Breakdown (basic view)", present: true },
    { feature: "Shopping List (1–2 recipes)", present: true },
    { feature: "Community Access (browse only)", present: true },
  ],
};

export const premiumPlan = {
  name: "Premium Tier",
  features: [
    { feature: "AI Recipe Generator (all filters)", present: true },
    { feature: "Recipe Library (full access)", present: true },
    { feature: "Recipe Saves (unlimited)", present: true },
    { feature: "Calorie Tracking (smart scan)", present: true },
    { feature: "Macro Breakdown (detailed view)", present: true },
    { feature: "Shopping List (weekly smart)", present: true },
    { feature: "Community Access (post & share)", present: true },
  ],
};

export const favoriteRecipes = [
  {
    id: "1",
    title: "Grilled Chicken Breast with Quinoa",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400",
    calories: 485,
    protein: 42,
    fat: 12,
    cookTime: 25,
    servings: 2,
    difficulty: "Easy",
    isFavorite: true,
  },
  {
    id: "2",
    userId: "",
    title: "Salmon Avocado Bowl",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
    calories: 520,
    protein: 38,
    fat: 28,
    cookTime: 15,
    servings: 1,
    difficulty: "Easy",
    isFavorite: true,
  },
];

export const userMadeRecipes = [
  {
    id: "3",
    title: "My Special Protein Smoothie",
    image: "https://images.unsplash.com/photo-1553530979-d6cb2ac801d2?w=400",
    calories: 320,
    protein: 28,
    fat: 8,
    cookTime: 5,
    servings: 1,
    difficulty: "Easy",
  },
];

export const premadeRecipes = [
  {
    id: "4",
    title: "Mediterranean Turkey Wrap",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    calories: 420,
    protein: 32,
    fat: 15,
    cookTime: 10,
    servings: 1,
    difficulty: "Easy",
  },
  {
    id: "5",
    title: "Asian Beef Stir Fry",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
    calories: 380,
    protein: 35,
    fat: 18,
    cookTime: 20,
    servings: 2,
    difficulty: "Medium",
  },
  {
    id: "6",
    title: "Veggie Power Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    calories: 350,
    protein: 15,
    fat: 12,
    cookTime: 15,
    servings: 1,
    difficulty: "Easy",
  },
];
