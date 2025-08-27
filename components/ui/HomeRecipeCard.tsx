import { Clock, Search, Star } from "lucide-react";
import Image from "next/image";

function HomeRecipeCard() {
  return (
    <div className="w-[80%]  flex-row flex bg-amber-500   p-4 border border-gray-800 overflow-clip rounded-lg">
      <div className="md:w-1/2 w-full h-64 flex bg-red-600 flex-col gap-3">
        <Image
          src="/Home/hero.jpg"
          alt="FOod"
          height={100}
          width={100}
          className="w-64 h-full object-contain rounded-sm"
        />
        <div className="flex text-yellow-400 gap-1">
          <Star size={18} />
          <Star size={18} />
          <Star size={18} />
          <Star size={18} />
          <Star size={18} />
        </div>
      </div>
      <div className="bg-blue-700 p-2 w-full">
        <h1>Thai pasta</h1>
      </div>
    </div>
  );
}

export default HomeRecipeCard;
