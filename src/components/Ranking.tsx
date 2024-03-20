import Countdown from "./Countdown";
import Achievements from "./Achievements";
import VideoRanking from "./VideoRanking";
import { Card, CardTitle } from "./ui/card";
import { goals } from "@/constants";

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
      <div className="flex gap-4 mt-8 mb-4">
        <div className="shadow-lg rounded-sm w-8/12">
          <VideoRanking />
        </div>
        <div className="flex flex-col gap-4 w-4/12">
          <div>
            <Countdown targetDate={targetDate} />
          </div>
          <div className="">
            <Achievements />
          </div>
        </div>
      </div>
      <Card className="p-4 space-y-4 shadow-md w-1/2">
        <CardTitle className="text-center my-4">Achievements</CardTitle>
        {goals.map((goal) => (
          <div className="flex flex-col justify-start">
            <div className="text-lg font-semibold">{goal.title}</div>
            <div className="text-sm font-light">{goal.description}</div>
            <div className="w-full bg-gray-300 rounded-full h-2 my-2">
              <div
                className="bg-primary rounded-full h-2"
                style={{ width: `${goal.progress * 100}%` }}
              />
            </div>
          </div>
        ))}
      </Card>
    </>
  );
}

export default Ranking;
