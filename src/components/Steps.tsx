import { Button } from "./ui/button";
import { krasloten } from "@/assets";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { videoIdeas } from "@/constants";
import { cn } from "@/lib/utils";
import { useState } from "react";

function Steps() {
  const navigate = useNavigate();

  const [remaingingVotes, setRemainingVotes] = useState(4);

  return (
    <>
      <h1 className="text-4xl font-semibold mb-4">How does it work?</h1>
      <div className="flex flex-row gap-4">
        <div>
          <h2 className="font-semibold text-xl text-black mb-4">
            <span className="inline border-b-4 border-primary pb-1">
              Step 1.
            </span>{" "}
            Buy a lottery ticket
          </h2>
          <div className="shadow-md rounded-md">
            <img src={krasloten} alt="krasloten" className="rounded-md" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl text-black mb-4">
            <span className="inline border-b-4 border-primary pb-1">
              Step 2.
            </span>{" "}
            Enter your code
          </h2>
          <Card className="flex flex-col justify-between shadow-md">
            <CardHeader className="text-center">
              <CardTitle>Remaining votes</CardTitle>
            </CardHeader>
            <CardContent className="text-9xl font-bold text-center">
              {remaingingVotes}
            </CardContent>
            <CardFooter className="flex flex-col">
              <Input
                type="text"
                placeholder="Enter your code eg. 1234-5678-9012-3456"
                className="mb-2 h-12"
              />
              <Button
                className="w-full py-4"
                onClick={() => setRemainingVotes(remaingingVotes + 1)}
              >
                I am 18 or older and have read the terms and conditions
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="w-full mt-8">
        <h2 className="font-semibold text-xl text-black mb-4">
          <span className="inline border-b-4 border-primary pb-1">Step 3.</span>{" "}
          Vote for your cause
        </h2>
        <Card className="shadow-md px-4 py-4 pb-0">
          <CardContent className="flex gap-4">
            <div className="flex flex-col gap-4 w-5/12 justify-between">
              <p>
                Choose a cause that you'd like to support. The more votes a
                cause gets, the more likely we will make a crazy video about it.
                Even if your cause doesn't win, we'll still donate to it. At the
                end of the month, we'll announce the winning cause and the video
                idea that we'll bring to life.
              </p>
              <Button
                className="w-full py-6 px-8 text-2xl"
                onClick={() => navigate("/vote")}
              >
                Vote now
              </Button>
            </div>
            <div className="shadow-md rounded-sm w-full">
              <div className="flex justify-between px-24 font-semibold py-3 rounded-t-sm border-b border-primary bg-primary text-white">
                <p>Rank</p>
                <p>Video</p>
                <p>Votes</p>
              </div>
              <div className="flex flex-col">
                {videoIdeas
                  .slice(0, 3)
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
                <div className="bg-whit flex justify-between py-1 px-24 hover:scale-105 transition duration-300 ease-in-out">
                  <p className="text-center">...</p>
                  <p className="text-center">...</p>
                  <p className="text-center">...</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default Steps;
