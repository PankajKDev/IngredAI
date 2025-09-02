"use client";
import Lottie from "lottie-react";
import AnimationData from "../../public/anim.json";
function FoodLoading() {
  return <Lottie animationData={AnimationData} loop={true} />;
}

export default FoodLoading;
