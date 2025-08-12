import Features from "@/components/shared/Home/Features";
import { HeroSectionOne } from "@/components/shared/Home/Hero";
import HowItWorks from "@/components/shared/Home/HowItWorks";
import Testimonials from "@/components/shared/Home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSectionOne />
      <HowItWorks />

      <Testimonials />
    </>
  );
}
