import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center">{children}</div>
    </>
  );
}

export default layout;
