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
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "./ui/drawer";
import { useState } from "react";
import { ArrowDown, ArrowUp, HeartIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import Marquee from "./Marquee";
import CauseDetail from "./CauseDetail";

type Cause = {
  title: string;
  description: string;
  image: string;
};

function Vote() {
  const [cause, setCause] = useState<Cause>(causes[0]);

  return (
    <>
      <Drawer>
        <DrawerContent>
          <CauseDetail {...cause} />
        </DrawerContent>
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center">Choose your cause</h1>
          <p className="text-center mt-8">
            At the National Lottery, we believe in empowering our players to
            make a difference in their communities. That's why we've made it
            easier than ever to support the causes closest to your heart. When
            you select a cause, your funding will go directly to that
            organization, helping them to continue their important work. But
            that's not all - we've also introduced an exciting new feature that
            allows you to suggest a video idea linked to your chosen cause.
            Imagine seeing your passion for your cause come to life in a real
            video! Not only will you be making a tangible impact in your
            community, but you'll also have the opportunity to showcase your
            creativity and inspire others to get involved. So, what are you
            waiting for? Join us in making a difference and bring your video
            idea to life!
          </p>
        </div>
        <Marquee fade={true}>
          {causes.map((cause) => (
            <img src={cause.image} className="h-16 rounded-sm ml-2"></img>
          ))}
        </Marquee>
        <div className="flex flex-row gap-2 mt-16 items-end">
          <Input
            className="px-4 w-1/4 bg-white h-12"
            placeholder="Search for a cause..."
          />
          <Badge className="h-fit py-2 hover:cursor-pointer">Charity</Badge>
          <Badge className="h-fit py-2 hover:cursor-pointer">Education</Badge>
          <Badge
            className="h-fit py-2 hover:cursor-pointer"
            variant={"outline"}
          >
            Healthcare
          </Badge>
          <Badge
            className="h-fit py-2 hover:cursor-pointer"
            variant={"outline"}
          >
            KMO
          </Badge>
          <Badge
            className="h-fit py-2 hover:cursor-pointer"
            variant={"outline"}
          >
            Sport
          </Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 mt-4">
          {causes.map((cause, index) => (
            <Card
              className="shadow-md flex flex-col justify-between"
              key={index}
            >
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
                <DrawerTrigger asChild>
                  <Button
                    className="px-16 py-4 sm:w-fit w-full"
                    onClick={() => setCause(cause)}
                  >
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
