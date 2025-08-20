import PricingCard from "@/components/shared/pricing/PricingCard";
import { freePlan, premiumPlan } from "@/constants";
import { DollarSign } from "lucide-react";

function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-center flex gap-1 items-center font-bold mt-10 font-sans text-4xl  ">
        <DollarSign className="w-10 h-10 text-green-500" />
        Fair Pricing plans
      </h1>
      <div className="w-[80%] gap-5  mt-15 flex justify-center items-center flex-col md:flex-row">
        <PricingCard pricingData={freePlan} />
        <PricingCard pricingData={premiumPlan} />
      </div>
    </div>
  );
}

export default page;
