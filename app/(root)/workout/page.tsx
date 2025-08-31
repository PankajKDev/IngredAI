import PreMadeWorkouts from "@/components/shared/workout/PreMadeWorkouts";
import WorkoutPlanBanner from "@/components/shared/workout/WorkoutPlanBanner";

function page() {
  return (
    <div className="flex items-center flex-col">
      <div className="w-[80%]">
        <WorkoutPlanBanner />
        <PreMadeWorkouts />
      </div>
    </div>
  );
}

export default page;
