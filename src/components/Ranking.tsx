import { ranking } from "@/constants";
import { cn } from "@/lib/utils";
import Countdown from "./Countdown";

function Ranking() {

    const targetDate = new Date('March 30, 2024 23:59:59');

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
                <div className="flex justify-around font-semibold py-3 rounded-t-sm border-b border-primary bg-primary text-white">
                    <p>Rank</p>
                    <p>Username</p>
                    <p>Score</p>
                </div>
                <div className="flex flex-col">
                    {ranking.sort((u1, u2) => u2.amount - u1.amount).map((user, index) => (
                        <div key={index} className={cn(index % 2 == 0 && "bg-gray-100","flex justify-between py-2 px-24")}>
                            <p className="text-center font-bold">{index + 1}</p>
                            <p className="text-center">{user.name}</p>
                            <p className="text-center">{user.amount}</p>
                        </div>
                    ))}
                    <div className="bg-gray-100 flex justify-between py-1 px-24">
                        <p className="text-center">...</p>
                        <p className="text-center">...</p>
                        <p className="text-center">...</p>
                    </div>
                </div>
                </div>
                <div className="w-1/2">
                    <Countdown targetDate={targetDate} />
                </div>
            </div>
            
        </>
    )
}

export default Ranking;