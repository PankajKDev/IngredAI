import HowCard from "@/components/ui/HowCard";
import { HowItWorksData } from "@/constants";
import { ArrowRightCircle } from "lucide-react";
import React from "react";

function HowItWorks() {
  return (
    <div className="w-full flex flex-col items-center gap-5 justify-center">
      <div className="w-[80%]">
        <h1 className="text-5xl mask-linear-from-neutral-300 text-center justify-center items-center font-sans  font-semibold">
          How it works?
        </h1>
        <div className="flex flex-col justify-center items-center    md:flex-row gap-5 mt-14">
          {HowItWorksData.map((item) => (
            <React.Fragment key={item.id}>
              <HowCard img={item.img} text={item.text} id={item.id} />
              {item.id < 3 ? (
                <ArrowRightCircle className="rotate-90 md:rotate-0" size={64} />
              ) : (
                ""
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
