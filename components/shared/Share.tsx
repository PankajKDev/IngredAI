"use client";
import { ShareIcon } from "lucide-react";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";

function Share() {
  const handleCopy = async () => {
    const fullurl = window.location.href;

    try {
      await navigator.clipboard.writeText(fullurl);
      toast("Copied url");
    } catch (error) {
      toast("Error copying url");
    }
  };
  return (
    <>
      <button
        onClick={() => handleCopy()}
        className="flex w-full mt-5 items-center justify-center gap-2 rounded-lg bg-black hover:text-black px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-white cursor-pointer"
      >
        <ShareIcon className="w-5 h-5" />
        Share
      </button>
      <Toaster />
    </>
  );
}

export default Share;
