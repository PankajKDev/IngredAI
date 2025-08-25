"use client";
import { authLinks, navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Crown, CrownIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" bg-black w-full h-16 flex">
      <div className="flex  font-bold  justify-center items-center text-xl w-1/3 ">
        <a className="text-purple-600 cursor-pointer hover:text-purple-800 transition-colors duration-0 ease-in-out">
          IngredAI
        </a>
      </div>
      <div className="w-2/3  ">
        <div className="justify-center  gap-10 hidden md:flex items-center h-full w-full  ">
          {/* SIGNED IN USER */}
          <SignedIn>
            {navLinks.map((item, index) => (
              <Link className="hoverLink" href={item.linkname} key={index}>
                {item.name}
              </Link>
            ))}
            <UserButton />
          </SignedIn>
          {/* SIGNED OUT USER */}
          <SignedOut>
            {authLinks.map((item, index) => (
              <Link className="hoverLink" href={item.linkname} key={index}>
                {item.name}
              </Link>
            ))}
          </SignedOut>
        </div>
        <div className="justify-end relative group  items-center h-full mr-5 flex md:hidden">
          <MenuIcon
            onClick={() => setIsOpen((state) => !state)}
            className={` ${
              isOpen ? "rotate-90" : "rotate-0"
            } ease-in-out duration-700`}
          />
          <SignedIn>
            <div
              className={`w-72 h-72 z-[100] rounded-b-lg  justify-center  flex-col absolute bg-black right-0 top-0  mt-15 ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              {isOpen ? (
                <>
                  {navLinks.map((item, index) => (
                    <Link
                      onClick={() => setIsOpen((state) => !state)}
                      className="hoverLink p-3"
                      href={item.linkname}
                      key={index}
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              ) : (
                ""
              )}
              <div className="w-full items-center flex gap-2 ml-5">
                <UserButton />
                <div className="font-sans gap-2 bg-orange-500 flex rounded-l-lg rounded-r-lg font-semibold  p-1 text-xs">
                  <CrownIcon size={16} />
                  Premium Active
                </div>
              </div>
            </div>
          </SignedIn>
          <SignedOut>
            <div
              className={`w-72 h-72 z-[100] rounded-b-lg  bg-black  flex-col absolute right-0 top-0  mt-15 ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              {isOpen ? (
                <>
                  {authLinks.map((item, index) => (
                    <Link
                      onClick={() => setIsOpen((state) => !state)}
                      className=" p-4"
                      href={item.linkname}
                      key={index}
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
