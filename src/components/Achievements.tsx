import {
  BadgeAlert,
  BadgeCheck,
  BadgeIndianRupee,
  BadgePlus,
} from "lucide-react";
import { Card, CardContent, CardTitle } from "./ui/card";

function Achievements() {
  return (
    <Card className="shadow-md">
      <CardTitle className="text-center my-6">Achievements</CardTitle>
      <CardContent>
        <div className="flex flex-row gap-2 justify-around">
          <div className="relative w-16 h-16 bg-primary rounded-3xl transform rotate-45 hover:scale-105 transition duration-200 ease-in-out">
            <div className="absolute inset-0 flex justify-center items-center">
              <BadgeCheck
                className="text-white transform -rotate-45"
                size={48}
              />
            </div>
          </div>
          <div className="relative w-16 h-16 bg-primary rounded-3xl transform rotate-45 hover:scale-105 transition duration-200 ease-in-out">
            <div className="absolute inset-0 flex justify-center items-center">
              <BadgeAlert
                className="text-white transform -rotate-45"
                size={48}
              />
            </div>
          </div>
          <div className="relative w-16 h-16 bg-primary rounded-3xl transform rotate-45 hover:scale-105 transition duration-200 ease-in-out">
            <div className="absolute inset-0 flex justify-center items-center">
              <BadgeIndianRupee
                className="text-white transform -rotate-45"
                size={48}
              />
            </div>
          </div>
          <div className="relative w-16 h-16 bg-primary rounded-3xl transform rotate-45 hover:scale-105 transition duration-200 ease-in-out">
            <div className="absolute inset-0 flex justify-center items-center">
              <BadgePlus
                className="text-white transform -rotate-45"
                size={48}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Achievements;
