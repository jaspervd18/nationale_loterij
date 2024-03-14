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
import { HeartIcon } from "lucide-react";

type Cause = {
  title: string;
  description: string;
  image: string;
};

function Vote() {

  const [cause, setCause] = useState<Cause | null>(null);

  return (
    <>
      <Drawer>
        <DrawerContent>
            <div className="mx-auto w-full max-w-sm py-4">
              <DrawerHeader className="gap-4">
                <img src={cause?.image}></img>
                <DrawerDescription>
                  {cause?.description}
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>
                  <Button className="w-full">I choose this community cause</Button>
                </DrawerClose>
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
