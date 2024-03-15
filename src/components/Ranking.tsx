import Countdown from "./Countdown";
import PlayerRanking from "./PlayerRanking";
import Achievements from "./Achievements";

function Ranking() {
  const targetDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    0
  );

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center">Monthly ranking</h1>
        <p className="text-center mt-8 text-lg">
          Increase your chances at winning some of our amazing prizes by
          participating in our community causes and earning points. The more
          points you earn, the higher you'll rank on our monthly leaderboard.
          Good luck!
        </p>
      </div>
      <div className="flex gap-2 my-16">
        <div className="shadow-lg rounded-sm w-1/2">
          <PlayerRanking />
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <div>
            <Countdown targetDate={targetDate} />
          </div>
          <div className="">
            <Achievements />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ranking;
