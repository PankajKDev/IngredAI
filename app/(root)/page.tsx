import { HeroSectionOne } from "@/components/shared/Hero";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

import { slideData, testimonials } from "@/constants";

export default function Home() {
  return (
    <>
      <HeroSectionOne />
      <AnimatedTestimonials testimonials={testimonials} />
    </>
  );
}
