import { ranking } from "@/constants";
import { cn } from "@/lib/utils";

function PlayerRanking() {
  return (
    <>
      <div className="flex justify-around font-semibold py-3 rounded-t-sm border-b border-primary bg-primary text-white">
        <p>Rank</p>
        <p>Username</p>
        <p>Score</p>
      </div>
      <div className="flex flex-col">
        {ranking
          .sort((u1, u2) => u2.amount - u1.amount)
          .map((user, index) => (
            <div
              key={index}
              className={cn(
                index % 2 == 0 ? "bg-gray-50" : "bg-white",
                "flex justify-between py-2 px-24"
              )}
            >
              <p className="text-center font-bold">{index + 1}</p>
              <p className="text-center">{user.name}</p>
              <p className="text-center">{user.amount}</p>
            </div>
          ))}
        <div className="bg-gray-50 flex justify-between py-1 px-24">
          <p className="text-center">...</p>
          <p className="text-center">...</p>
          <p className="text-center">...</p>
        </div>
      </div>
    </>
  );
}

export default PlayerRanking;
