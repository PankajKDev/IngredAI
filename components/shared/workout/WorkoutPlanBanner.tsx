function WorkoutPlanBanner() {
  return (
    <div className="flex items-center mt-10 flex-col">
      <h1 className="text-5xl font-bold font-sans">
        Workout <span className=" text-blue-700">for your needs</span>
      </h1>
      <div className="bg-gray-800 w-full mt-10 border border-gray-700 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Create a custom workout</h3>
          <p className="text-gray-400">
            Tailor a plan that fits your schedule and goals.
          </p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition w-full sm:w-auto">
          Get Started
        </button>
      </div>

      <div className="bg-gray-900 w-full mt-5 border border-gray-700 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Access your old workouts</h3>
          <p className="text-gray-400">access your old workout sessions</p>
        </div>
        <button className="bg-black hover:bg-white text-white hover:text-black font-bold py-3 px-6 rounded-lg transition w-full sm:w-auto">
          View Now
        </button>
      </div>
    </div>
  );
}

export default WorkoutPlanBanner;
