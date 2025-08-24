import { authLinks, navLinks } from "@/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

function Footer() {
  const date = new Date();
  return (
    <div className="w-full mt-10 gap-5 flex flex-col h-64 bg-black border-t-2 border-gray-950 p-10">
      <div className="w-full">
        <h1 className="text-xl font-semibold font-sans">Ingred.AI</h1>
        <h3 className="font-sans">Your diet and body goals all covered</h3>
      </div>
      <div className="w-full flex gap-10 justify-center">
        <div className="flex flex-col text-sm text-gray-600">
          <SignedIn>
            {navLinks.map((item) => (
              <Link key={item.name} href={item.linkname}>
                {item.name}
              </Link>
            ))}
          </SignedIn>
          <SignedOut>
            {authLinks.map((item) => (
              <Link key={item.name} href={item.linkname}>
                {item.name}
              </Link>
            ))}
          </SignedOut>
        </div>

        <div className="flex flex-col text-sm text-gray-600">
          <p>Privacy policy</p>
          <p>Refund policy</p>
        </div>
      </div>
      <h2 className="w-full  h-5 text-sm text-center ">
        © {date.getFullYear()} IngredAI. All rights reserved.
      </h2>
    </div>
  );
}

export default Footer;
