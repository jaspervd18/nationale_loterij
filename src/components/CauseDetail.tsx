import { ArrowDown, ArrowUp } from "lucide-react";
import { DrawerDescription, DrawerFooter, DrawerHeader } from "./ui/drawer";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface CauseDetailProps {
  title: string;
  description: string;
  image: string;
}

function CauseDetail({ title, description, image }: CauseDetailProps) {
  const navigate = useNavigate();

  const [remainingPoints, setRemainingPoints] = useState<number>(56);
  const [points, setPoints] = useState<number>(0);
  return (
    <>
      <div className="mx-auto w-full max-w-sm py-4">
        <DrawerHeader>
          <img src={image} className="h-3/4 mx-auto mb-0"></img>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <p>
            Remaining votes:{" "}
            <span className="font-bold">{remainingPoints}</span>
          </p>
          <div className="flex gap-2 justify-between w-full">
            <div className="flex items-center border border-black rounded-sm w-4/12">
              <p className="w-7/12 text-center border-r border-black my-2">
                {points}
              </p>
              <div className="flex flex-col mx-auto ">
                <span>
                  <ArrowUp
                    className="h-4 w-4 hover:cursor-pointer"
                    onClick={() => {
                      if (remainingPoints < 5) return;
                      setRemainingPoints(remainingPoints - 5);
                      setPoints(points + 5);
                    }}
                  />
                </span>
                <span>
                  <ArrowDown
                    className="h-4 w-4 hover:cursor-pointer"
                    onClick={() => {
                      if (points <= 0) return;
                      setRemainingPoints(remainingPoints + 5);
                      setPoints(points - 5);
                    }}
                  />
                </span>
              </div>
            </div>

            {points > 0 ? (
              <Button onClick={() => navigate("/ranking")}>
                I choose this community cause
              </Button>
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
