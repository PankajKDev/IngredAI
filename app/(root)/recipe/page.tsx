import { Book } from "lucide-react";

function page() {
  return (
    <div className="flex flex-col">
      <h1 className="text-center flex gap-3 items-center justify-center font-bold mt-10 font-sans text-4xl w-full ">
        <Book className="w-10 h-10 text-yellow-500" />
        My Recipes
      </h1>
    </div>
  );
}

export default page;
