import CallToAction from "@/components/shared/Home/CallToAction";

import { HeroSectionOne } from "@/components/shared/Home/Hero";
import HowItWorks from "@/components/shared/Home/HowItWorks";

import { RecipeInput } from "@/components/shared/Home/RecipeInput";
import Testimonials from "@/components/shared/Home/Testimonials";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedOut>
        <HeroSectionOne />
        <HowItWorks />
        <Testimonials />
        <CallToAction />
      </SignedOut>
      <SignedIn>
        <RecipeInput />
      </SignedIn>
    </>
  );
}
