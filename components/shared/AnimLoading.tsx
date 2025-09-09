"use client";
import Lottie from "lottie-react";
import AnimationData from "../../public/anim2.json";
import AnimationData2 from "../../public/anim3.json";
import { LoaderFive } from "../ui/loader";
type Mode = "recipe" | "workout";
interface AnimLoadingProps {
  mode: Mode;
}
function AnimLoading({ mode }: AnimLoadingProps) {
  return (
    <div className="h-[80vh] w-full flex flex-col justify-center items-center">
      <Lottie
        animationData={mode == "recipe" ? AnimationData : AnimationData2}
        loop={true}
      />
      <LoaderFive text={`generating ${mode}...`} />
    </div>
  );
}

export default AnimLoading;
