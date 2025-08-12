"use client";

import { AnimatedTestimonials } from "@/components/ui/testimonials-ui";
import { testimonials } from "@/constants";
import React from "react";

function Testimonials() {
  return (
    <div className="w-full mt-16 ">
      <h1 className="text-center mask-linear-from-neutral-300 font-semibold text-4xl font-sans">
        Hear from our clients
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}

export default Testimonials;
