import { IPricingData } from "@/types";
import {
  ActivitySquare,
  BadgeCheck,
  BadgeX,
  Circle,
  ShoppingCart,
} from "lucide-react";

function PricingCard({ pricingData }: { pricingData: IPricingData }) {
  return (
    <div className="w-64   p-5 h-[500px]  rounded-lg border flex flex-col justify-between">
      <h1 className="font-sans text-xl font-bold text-slate-300">
        {pricingData.name}
      </h1>
      <div className=" flex flex-col gap-1">
        <h2 className=" text-sm font-semibold  ">This plan offers :</h2>

        {pricingData.features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-sm justify-center font-sans"
          >
            {item.present ? (
              <BadgeCheck className="w-5 h-5" color="green" />
            ) : (
              <BadgeX className="w-5 h-5" color="red" />
            )}
            <span className="w-full">{item.feature}</span>
          </div>
        ))}
      </div>
      <div className="w-full justify-end h-28 flex items-end">
        {pricingData.name == "Free Tier" ? (
          <button className="w-full  flex gap-2 cursor-pointer border-gray-700  border hover:opacity-100 font-sans font-semibold duration-150 ease-in-out justify-center items-center h-12 rounded-sm transition-opacity opacity-70 bg-black">
            <ActivitySquare color="green" size={18} />
            <span className="text-white font-sans text-sm ">Active plan</span>
          </button>
        ) : (
          <button className="w-full flex gap-2 cursor-pointer border-white border hover:opacity-40 font-sans font-semibold duration-150 ease-in-out justify-center items-center h-12 rounded-sm transition-opacity bg-white">
            <ShoppingCart color="black" size={18} />
            <span className="text-black font-sans text-sm ">Buy plan</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default PricingCard;
