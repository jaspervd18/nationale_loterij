import { causes } from "@/constants";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { useState } from "react";
import { ArrowDown, ArrowUp, HeartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

type Cause = {
  title: string;
  description: string;
  image: string;
};

function Vote() {
  const navigate = useNavigate();

  const [cause, setCause] = useState<Cause | null>(null);
  const [remainingPoints, setRemainingPoints] = useState<number>(56);
  const [points, setPoints] = useState<number>(0);

  return (
    <>
      <Drawer>
        <DrawerContent>
            <div className="mx-auto w-full max-w-sm py-4">
              <DrawerHeader>
                <img src={cause?.image} className="h-3/4 mx-auto mb-0"></img>
                <DrawerDescription>
                  {cause?.description}
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <p>Remaining points: <span className="font-bold">{remainingPoints}</span></p>
                <div className="flex gap-2 justify-between w-full">
                  <div className="flex items-center border border-black rounded-sm w-4/12">
                    <p className="w-7/12 text-center border-r border-black my-2">{points}</p>
                    <div className="flex flex-col mx-auto ">
                      <span>
                        <ArrowUp 
                          className="h-4 w-4 hover:cursor-pointer" 
                          onClick={() => {
                            if (remainingPoints < 5) return;
                            setRemainingPoints(remainingPoints - 5); 
                            setPoints(points + 5)
                          }}
                        />
                      </span>
                      <span>
                        <ArrowDown 
                          className="h-4 w-4 hover:cursor-pointer" 
                          onClick={() => {
                            if (points <= 0) return;
                            setRemainingPoints(remainingPoints + 5); 
                            setPoints(points - 5)}}
                          />
                      </span>
                    </div>
                  </div>
                  
                    {points > 0 ? 
                        <Button  onClick={() => navigate("/ranking")}>I choose this community cause</Button>
                     :
                      <Button disabled>I choose this community cause</Button> 
                    }
                </div>
              </DrawerFooter>
            </div>
          </DrawerContent>
          <div>
            <h1 className="text-4xl font-bold text-center">Choose your cause</h1>
            <p className="text-center mt-8 text-lg">
              The National Lottery supports various community causes. You can vote
              for your favorite cause to receive extra funding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
            {causes.map((cause, index) => (
              <Card className="shadow-md flex flex-col justify-between" key={index}>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>{cause.title}</span>
                    <span className="flex items-center text-xs font-light">{cause.likes}<HeartIcon className="h-4 w-4 ml-1 hover:cursor-pointer"/></span>
                  </CardTitle>
                  <CardDescription>{cause.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end">
                  <DrawerTrigger asChild>
                    <Button className="px-16 py-4 sm:w-fit w-full" onClick={() => setCause(cause)}>
                      Vote
                    </Button>
                  </DrawerTrigger>
                </CardFooter>
              </Card>
            ))}
          </div>
      </Drawer>
    </>
  );
}

export default Vote;
