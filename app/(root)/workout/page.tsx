import WorkoutSection from "@/components/shared/workout/WorkoutSection";
import { fetchWorkoutsByUserId } from "@/lib/actions/general.action";
import { auth } from "@clerk/nextjs/server";

import { Flame } from "lucide-react";
async function page() {
  const { userId } = await auth();
  const workouts = await fetchWorkoutsByUserId(userId!);
  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-[80%]">
        <WorkoutSection
          title="Recent Workouts"
          icon={<Flame color="red" />}
          data={workouts}
        />
      </div>
    </div>
  );
}

export default page;
