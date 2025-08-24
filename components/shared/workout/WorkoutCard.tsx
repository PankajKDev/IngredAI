import { Flame } from "lucide-react";
import Image from "next/image";

// Type definition for the component props for better type-safety.
type WorkoutCardProps = {
  imageUrl: string;
  title: string;
  difficulty: number;
};

const DifficultyRating = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center mb-4">
      <span className="text-gray-400 mr-2">Difficulty:</span>
      <div className="flex">
        {[...Array(3)].map((_, index) => (
          <Flame
            key={index}
            size={20}
            className={index < level ? "text-red-500" : "text-gray-600"}
            fill={index < level ? "currentColor" : "none"}
          />
        ))}
      </div>
    </div>
  );
};

const WorkoutCard = ({ imageUrl, title, difficulty }: WorkoutCardProps) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl w-72 overflow-hidden flex flex-col h-[400px]">
      <Image
        src={imageUrl}
        height={192} // h-48 is 192px
        width={256} // w-64 is 256px
        alt={title}
        className="w-full h-48 object-cover  transition-opacity"
      />

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <DifficultyRating level={difficulty} />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition mt-auto">
          View Workout
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
