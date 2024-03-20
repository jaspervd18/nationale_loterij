import Countdown from "./Countdown";
import Achievements from "./Achievements";
import VideoRanking from "./VideoRanking";
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
          Join our community and vote for your favorite causes to help make a
          difference! By voting, you'll have the chance to be featured in a cool
          video at the end of the month and even be invited to participate in
          our video shoots. So come and be a part of something meaningful and
          impactful, and take the first step towards making a positive change in
          the world!
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
