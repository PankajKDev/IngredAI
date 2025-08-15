import { Clock, Search, Star } from "lucide-react";
import Image from "next/image";

function HomeRecipeCard() {
  return (
    <div className="w-64 p-4 h-64 border border-gray-800 overflow-clip rounded-lg">
      <Image src="/Home/hero.jpg" alt="" width={256} height={128} />
      <div className="mt-2 flex justify-between">
        <h2 className="font-sans w-fit">Egyptian Pasta</h2>
        <h2 className="flex justify-center items-center gap-1">
          <Clock color="yellow" size={16} />
          5h25m
        </h2>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <div className="flex">
          <Star color="yellow" size={16} />
          <Star color="yellow" size={16} />
          <Star color="yellow" size={16} />
          <Star color="grey" size={16} />
          <Star color="grey" size={16} />
        </div>
        <div>
          <Search className=" text-yellow-400 cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
}

export default HomeRecipeCard;
