"use client";
import Lottie from "lottie-react";
import AnimationData from "../../public/anim2.json";
import AnimationData2 from "../../public/anim3.json";
type Mode = "recipe" | "workout";
interface FoodLoadingProps {
  mode: Mode;
}
function FoodLoading({ mode }: FoodLoadingProps) {
  return (
    <Lottie
      animationData={mode == "recipe" ? AnimationData : AnimationData2}
      loop={true}
    />
  );
}

export default FoodLoading;
