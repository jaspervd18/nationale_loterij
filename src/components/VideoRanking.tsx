import { videoIdeas } from "@/constants";
import { cn } from "@/lib/utils";

function VideoRanking() {
  return (
    <>
      <div className="flex justify-around font-semibold py-3 rounded-t-sm border-b border-primary bg-primary text-white">
        <p>Rank</p>
        <p>Title</p>
        <p>Votes</p>
      </div>
      <div className="flex flex-col">
        {videoIdeas
          .sort((u1, u2) => u2.votes - u1.votes)
          .map((user, index) => (
            <div
              key={index}
              className={cn(
                index % 2 == 0 ? "bg-gray-50" : "bg-white",
                "flex justify-between py-2 px-24 hover:scale-105 transition duration-300 ease-in-out"
              )}
            >
              <p className="text-center font-bold">{index + 1}</p>
              <p className="text-center">{user.title}</p>
              <p className="text-center">{user.votes}</p>
            </div>
          ))}
        <div className="bg-gray-50 flex justify-between py-1 px-24 hover:scale-105 transition duration-300 ease-in-out rounded-b-sm">
          <p className="text-center">...</p>
          <p className="text-center">...</p>
          <p className="text-center">...</p>
        </div>
      </div>
    </>
  );
}

export default VideoRanking;
