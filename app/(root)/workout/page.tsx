import WorkoutSection from "@/components/shared/workout/WorkoutSection";
import { auth } from "@clerk/nextjs/server";

import { Flame } from "lucide-react";
async function page() {
  const { userId } = await auth();
  const response = await fetch(
    `${process.env.NEXT_BASE_URL}/api/workout?userId=${userId}`
  );
  const { fetchedWorkouts } = await response.json();

  return (
    <div className="w-full flex items-center flex-col">
      <div className="w-[80%]">
        <WorkoutSection
          title="Recent Workouts"
          icon={<Flame color="red" />}
          data={fetchedWorkouts}
        />
      </div>
    </div>
  );
}

export default page;
