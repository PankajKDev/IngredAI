import PricingCard from "@/components/shared/pricing/PricingCard";

function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-center font-bold mt-10 font-sans text-4xl  md:text-6xl">
        Fair Pricing plans
      </h1>
      <div className="w-[80%] gap-5 mt-5 flex justify-center items-center flex-col md:flex-row">
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  );
}

export default page;
