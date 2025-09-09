import type React from "react";
import type { WorkoutSectionProps } from "@/types";
import WorkoutCard from "./WorkoutCard";

const WorkoutSection: React.FC<WorkoutSectionProps> = ({
  title,
  icon,
  data = [],
  showViewAll = true,
}) => {
  return (
    <section className="mb-12 mt-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600/30 to-black/40 border border-blue-500/30">
            {icon}
          </div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <span className="text-gray-400">({data.length})</span>
        </div>
      </div>

      {data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.slice(0, 8).map((workout) => (
            <WorkoutCard key={workout._id} workout={workout} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-900/30 rounded-xl border border-gray-700/30 border-dashed">
          <div className="text-gray-400 mb-2">No workouts found</div>
          <div className="text-sm text-gray-500">
            Your workouts will appear here
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkoutSection;
