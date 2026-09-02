import { AnimatedTestimonials } from "@/components/ui/testimonials-ui";

const testimonials = [
  {
    quote: "IngredAI completely changed how I meal prep. I just type what I have in the fridge and get a full recipe with macros.",
    name: "Sarah K.",
    designation: "Fitness Enthusiast",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    quote: "The workout generator is insane. I told it I only have dumbbells and 30 minutes — it gave me a perfect routine.",
    name: "Mike R.",
    designation: "Personal Trainer",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    quote: "As someone who eats the same 5 meals on rotation, this app is a game changer for variety.",
    name: "Emma L.",
    designation: "Home Cook",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    quote: "I love that I can save my favourite recipes and build a personal cookbook over time.",
    name: "David C.",
    designation: "Meal Prep Beginner",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

function Testimonials() {
  return (
    <div className="w-full flex flex-col items-center gap-5 justify-center mt-16">
      <h1 className="text-5xl text-orange-400 mask-linear-from-neutral-300 text-center font-sans font-semibold">
        What people are saying
      </h1>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </div>
  );
}

export default Testimonials;
