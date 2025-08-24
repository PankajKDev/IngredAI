import WorkoutCard from "./WorkoutCard";

function PreMadeWorkouts() {
  const workouts = [
    {
      id: 1,
      title: "Intense Cardio",
      imageUrl: "/Workout/image1.jpg",
      difficulty: 3,
    },
    {
      id: 2,
      title: "Full-Body Strength",
      imageUrl: "/Workout/image2.jpg",
      difficulty: 2,
    },
    {
      id: 3,
      title: "HIIT Challenge",
      imageUrl: "/Workout/image3.jpg",
      difficulty: 3,
    },
  ];

  return (
    <div className="mt-10 flex flex-col">
      <h1 className="m font-bold text-2xl text-center mb-5">
        Premade Workouts
      </h1>
      <div className="w-full flex-col md:flex-row items-center gap-5 flex justify-center">
        {workouts.map((item) => (
          <WorkoutCard
            key={item.id}
            title={item.title}
            difficulty={item.difficulty}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default PreMadeWorkouts;
