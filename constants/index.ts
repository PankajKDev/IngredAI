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
