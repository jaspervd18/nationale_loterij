import {
  BadgeAlert,
  BadgeCent,
  BadgeCheck,
  BadgeIndianRupee,
  BadgePlus,
} from "lucide-react";
import { goals } from "@/constants";

function Achievements() {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-semibold mb-8">
        My personal contributions
      </h1>
      <div className="space-y-4">
        {goals.map((goal) => (
          <div className="flex flex-col justify-start">
            <div className="text-lg font-semibold">{goal.title}</div>
            <div className="text-sm font-light">{goal.description}</div>
            <div className="w-full md:w-3/4 bg-gray-300 rounded-full h-2 my-2">
              <div
                className="bg-primary rounded-full h-2"
                style={{ width: `${goal.progress * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-8 justify-start mt-4 mb-8">
        <div className="relative w-12 h-12 md:w-16 md:h-16 bg-primary rounded-3xl transform rotate-45 hover:scale-105 transition duration-200 ease-in-out">
          <div className="absolute inset-0 flex justify-center items-center">
            <BadgeCent className="text-white transform -rotate-45" size={48} />
          </div>
        </div>
        <div className="relative w-12 h-12 md:w-16 md:h-16 bg-primary rounded-3xl transform rotate-45 hover:scale-105 transition duration-200 ease-in-out">
          <div className="absolute inset-0 flex justify-center items-center">
            <BadgeCheck className="text-white transform -rotate-45" size={48} />
          </div>
        </div>
        <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gray-500 rounded-3xl transform rotate-45 hover:scale-105 transition duration-200 ease-in-out">
          <div className="absolute inset-0 flex justify-center items-center">
            <BadgeAlert className="text-white transform -rotate-45" size={48} />
          </div>
        </div>
        <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gray-500 rounded-3xl transform rotate-45 hover:scale-105 transition duration-200 ease-in-out">
          <div className="absolute inset-0 flex justify-center items-center">
            <BadgeIndianRupee
              className="text-white transform -rotate-45"
              size={48}
            />
          </div>
        </div>
        <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gray-500 rounded-3xl transform rotate-45 hover:scale-105 transition duration-200 ease-in-out">
          <div className="absolute inset-0 flex justify-center items-center">
            <BadgePlus className="text-white transform -rotate-45" size={48} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievements;
