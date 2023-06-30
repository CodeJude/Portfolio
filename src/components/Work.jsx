import {
  Summarify,
  Workout,
  Weather,
  LeadTracker,
  Portfolio,
  Rekindle,
} from "../assets";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]  "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container for all Card */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <WorkCard
            props={{
              image: Summarify,
              title: "Summarify",
              demo: "https://summarify.netlify.app/",
              code: "https://github.com/CodeJude/Summarify",
            }}
          />
          <WorkCard
            props={{
              image: Portfolio,
              title: "Personal Portfolio",
              demo: "https://judevector.netlify.app/",
              code: "https://github.com/CodeJude/Portfolio",
            }}
          />
          <WorkCard
            props={{
              image: Rekindle,
              title: "Rekindle App",
              demo: "https://rekindleapp.netlify.app/",
              code: "https://github.com/CodeJude/Rekindle",
            }}
          />
          <WorkCard
            props={{
              image: Workout,
              title: "Workout Logger",
              demo: "https://workout-logger.up.railway.app/",
              code: "https://github.com/CodeJude/Workout_Logger",
            }}
          />
          <WorkCard
            props={{
              image: Weather,
              title: "Weather Application",
              demo: "https://weather-app.up.railway.app/",
              code: "https://github.com/CodeJude/weather-app",
            }}
          />
          <WorkCard
            props={{
              image: LeadTracker,
              title: "Chrome Extension",
              demo: "https://github.com/CodeJude/Lead-Tracker-Extension",
              code: "https://github.com/CodeJude/Lead-Tracker-Extension",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
