import { LinkIcon } from "lucide-react";
import Link from "next/link";

function CallToAction() {
  return (
    <div className="w-full flex justify-center mt-32 px-4">
      <div className="w-full max-w-4xl p-8 sm:p-12 md:p-16 rounded-xl border border-gray-800 bg-black text-white shadow-2xl transition-all duration-300 ease-in-out hover:border-orange-500/50">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200 mb-2">
            Your dream body is closer than you think
          </h1>
          <h2 className="text-sm sm:text-base text-gray-400 max-w-2xl mb-8">
            Sign up to take a step towards your dream body and health.
          </h2>
          <Link href="/sign-up">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full text-black font-semibold bg-orange-500 hover:bg-orange-400 transition-colors duration-200 ease-in-out">
              <span>Sign Up</span>
              <LinkIcon size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
