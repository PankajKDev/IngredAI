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
