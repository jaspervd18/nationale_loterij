import { BadgeCent } from "lucide-react";
import Countdown from "./Countdown";
import PlayerRanking from "./PlayerRanking";
import { Card, CardContent, CardTitle } from "./ui/card";

function Ranking() {

    const targetDate = new Date( new Date().getFullYear(), new Date().getMonth() + 1, 0);

    return (
        <>
            <div>
                <h1 className="text-4xl font-bold text-center">Monthly ranking</h1>
                <p className="text-center mt-8 text-lg">
                    Increase your chances at winning some of our amazing prizes by participating in our community causes 
                    and earning points. The more points you earn, the higher you'll rank on our monthly leaderboard. 
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
                        <Card>
                            <CardTitle className="text-center my-6">Achievements</CardTitle>
                            <CardContent>
                                <div className="flex flex-row gap-2 justify-around">
                                    <div className="relative w-16 h-16 bg-primary rounded-3xl transform rotate-45">
                                        <div className="absolute inset-0 flex justify-center items-center">
                                            <BadgeCent className="text-white transform -rotate-45" size={48} />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ranking;