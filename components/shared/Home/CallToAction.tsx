import { Link2, LinkIcon } from "lucide-react";
import Link from "next/link";

function CallToAction() {
  return (
    <div className="w-full flex justify-center mt-32">
      <div className="w-[80%] items-center justify-center bg-amber-700 flex flex-col border border-orange-400  h-64 rounded-md">
        <h1 className="text-center  text-3xl font-sans">
          Your dream body is closer than you think
        </h1>
        <h2 className="text-center font-sans hidden md:block">
          Sign up to take a step towards your dream body and health
        </h2>
        <Link href="/sign-up">
          <button className="mt-5 flex gap-1 bg-black items-center w-fit p-2 rounded-lg cursor-pointer font-sans hover:bg-white hover:text-black transition duration-400 ease-in-out ">
            <span>Sign Up</span> <LinkIcon size={16} />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;
