import { HeartIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DrawerTrigger } from "./ui/drawer";
import { Button } from "./ui/button";

function CauseCard({
  cause,
  index,
  setCause,
}: {
  cause: any;
  index: number;
  setCause: any;
}) {
  return (
    <>
      <Card className="shadow-md flex flex-col justify-between" key={index}>
        <CardHeader>
          <CardTitle className="flex justify-between">
            <span>{cause.title}</span>
            <span className="flex items-center text-xs font-light">
              {cause.likes}
              <HeartIcon className="h-4 w-4 ml-1 hover:cursor-pointer" />
            </span>
          </CardTitle>
          <CardDescription>{cause.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <DrawerTrigger>
            <Button
              className="px-8 py-4 sm:w-fit w-full"
              onClick={() => setCause(cause)}
            >
              Donate
            </Button>
          </DrawerTrigger>
        </CardFooter>
      </Card>
    </>
  );
}

export default CauseCard;
