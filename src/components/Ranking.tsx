import Countdown from "./Countdown";
import Achievements from "./Achievements";
import VideoRanking from "./VideoRanking";
import { Card, CardTitle } from "./ui/card";
import { goals } from "@/constants";
import { Separator } from "./ui/separator";

function Ranking() {
  const targetDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  );

  return (
    <>
      <div>
        <h1 className="text-4xl font-semibold">Monthly ranking</h1>
        <p className="mt-8 w-8/12">
          Increase your chances at winning some of our amazing prizes by
          participating in our community causes and earning points. The more
          points you earn, the higher you'll rank on our monthly leaderboard.
          Good luck!
        </p>
      </div>
      <div className="flex gap-4 mt-8">
        <div className="shadow-lg rounded-sm w-8/12">
          <VideoRanking />
        </div>
        <div className="w-4/12">
            <Countdown targetDate={targetDate} />
        </div>
      </div>
      <Separator className="my-16" />
      <Achievements />
    </>
  );
}

export default Ranking;
