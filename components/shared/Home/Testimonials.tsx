"use client";

import { AnimatedTestimonials } from "@/components/ui/testimonials-ui";
import { testimonials } from "@/constants";
import React from "react";

function Testimonials() {
  return (
    <div className="w-full mt-32 ">
      <h1 className="text-center mask-linear-from-neutral-300 font-semibold text-5xl font-sans text-orange-500">
        Hear from our clients
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}

export default Testimonials;
