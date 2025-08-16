import { BadgeCheck, BadgeX, Circle, ShoppingCart } from "lucide-react";

function PricingCard() {
  return (
    <div className="w-64 mt-32 p-4 h-96  rounded-lg border flex flex-col justify-between">
      <h1 className="font-sans text-xl font-bold text-slate-300">Free tier</h1>
      <div className=" flex flex-col gap-1">
        <h2 className=" text-sm font-semibold  ">This plan offers :</h2>
        <div className="flex items-center gap-3 text-sm justify-center font-sans">
          <BadgeCheck color="green" size={20} />
          <span>10 Recipes per month</span>
        </div>

        <div className="flex items-center gap-3 text-sm justify-center font-sans">
          <BadgeCheck color="green" size={20} />
          <span>10 Recipes per month</span>
        </div>

        <div className="flex items-center gap-3 text-sm justify-center font-sans">
          <BadgeX color="red" size={20} />
          <span>10 Recipes per month</span>
        </div>

        <div className="flex items-center gap-3 text-sm justify-center font-sans">
          <BadgeX color="red" size={20} />
          <span>10 Recipes per month</span>
        </div>
      </div>
      <div className="w-full justify-end h-28 flex items-end">
        <button className="w-full flex gap-2 cursor-pointer border-white border hover:opacity-40 font-sans font-semibold duration-150 ease-in-out justify-center items-center h-12 rounded-sm transition-opacity bg-white">
          <ShoppingCart color="black" size={18} />
          <span className="text-black font-sans text-sm ">Buy plan</span>
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
