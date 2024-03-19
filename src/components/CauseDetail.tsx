import { ArrowDown, ArrowUp } from "lucide-react";
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { useState } from "react";

interface CauseDetailProps {
  title: string;
  description: string;
  image: string;
}

function CauseDetail({ description, image }: CauseDetailProps) {
  const [remainingVotes, setRemainingVotes] = useState<number>(4);
  const [votes, setVotes] = useState<number>(0);
  return (
    <>
      <div className="mx-auto w-full max-w-sm py-4">
        <DrawerHeader>
          <img src={image} className="h-3/4 mx-auto mb-0"></img>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="mx-4">
            <p>Your cause doesn't have a video idea.</p>
            <Button variant={"secondary"}>Send your idea</Button>
        </div>
        <DrawerFooter>
          <p>
            Remaining votes: <span className="font-bold">{remainingVotes}</span>
          </p>
          <div className="flex gap-2 justify-between w-full">
            <div className="flex items-center border border-black rounded-sm w-4/12">
              <p className="w-7/12 text-center border-r border-black my-2">
                {votes}
              </p>
              <div className="flex flex-col mx-auto ">
                <span>
                  <ArrowUp
                    className="h-4 w-4 hover:cursor-pointer"
                    onClick={() => {
                      if (remainingVotes < 1) return;
                      setRemainingVotes(remainingVotes - 1);
                      setVotes(votes + 1);
                    }}
                  />
                </span>
                <span>
                  <ArrowDown
                    className="h-4 w-4 hover:cursor-pointer"
                    onClick={() => {
                      if (votes <= 0) return;
                      setRemainingVotes(remainingVotes + 1);
                      setVotes(votes - 1);
                    }}
                  />
                </span>
              </div>
            </div>
            {votes > 0 ? (
              <DrawerClose>
                <Button>I choose this community cause</Button>
              </DrawerClose>
            ) : (
              <Button disabled>I choose this community cause</Button>
            )}
          </div>
        </DrawerFooter>
      </div>
    </>
  );
}

export default CauseDetail;
