"use client";

import { useRouter } from "next/navigation";

function ViewButton({ id, mode }: { id: string; mode: string }) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`/${mode}/${id}`)}
      className="w-full cursor-pointer py-2 px-4 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-medium rounded-lg hover:from-purple-700 hover:to-orange-600 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25"
    >
      {mode == "recipe" ? "View Recipe" : "View Workout"}
    </button>
  );
}

export default ViewButton;
