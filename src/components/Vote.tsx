import { causes, videoIdeas } from "@/constants";
import { Button } from "./ui/button";
import { Drawer, DrawerContent } from "./ui/drawer";
import { useState } from "react";
import Marquee from "./Marquee";
import CauseDetail from "./CauseDetail";
import SearchBar from "./SearchBar";
import CauseCard from "./CauseCard";
import { Card } from "./ui/card";

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
        <h1 className="text-4xl font-semibold">
          You choose, we'll make it happen
        </h1>
        <p className="mt-8 w-8/12">
          At the National Lottery, we believe in empowering our players to make
          a difference in their communities. That's why we've made it easier
          than ever to support the causes closest to your heart. When you select
          a cause, your funding will go directly to that organization, helping
          them to continue their important work. But that's not all - we've also
          introduced an exciting new feature that allows you to suggest a video
          idea linked to your chosen cause. Imagine seeing your passion for your
          cause come to life in a real video! Not only will you be making a
          tangible impact in your community, but you'll also have the
          opportunity to showcase your creativity and inspire others to get
          involved. So, what are you waiting for? Join us in making a difference
          and bring your video idea to life!
        </p>
        <div className="flex flex-col gap-2 mt-8">
          {videoIdeas.map((videoIdea) => (
            <Card className="flex items-center p-4">
              <div className="w-2/12 text-base">{videoIdea.cause}</div>
              <div className="w-8/12 text-lg font-semibold">
                {videoIdea.title}{" "}
                <span className="text-base font-light">
                  with {videoIdea.collaborators}
                </span>
              </div>
              <Button className="w-2/12 px-16 ">Vote</Button>
            </Card>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center mt-4 mb-16">
          <p>Have an idea?</p>
          <Button variant={"link"} className="p-0 ml-2">
            Request a video
          </Button>
        </div>
        <Marquee fade={true}>
          {causes.map((cause) => (
            <img src={cause.image} className="h-16 rounded-sm ml-2"></img>
          ))}
        </Marquee>
        <h2 className="text-2xl font-semibold mb-4 mt-16">
          Don't see what you're looking for?
        </h2>
        <p className="w-8/12">
          If you're eager to vote for a cause but they don't have a video idea
          that catches your eye, don't worry! You can still support them by
          donating money and requesting a video idea. And, if you want to
          explore other participating causes, you can do that too! Just browse
          through the list of causes and find one that speaks to your heart.
          Remember, every little bit helps and your donation will make a
          difference. So go ahead, vote for a cause and help make a positive
          impact on the world!
        </p>
        <SearchBar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {causes.slice(0, 3).map((cause, index) => (
            <CauseCard cause={cause} index={index} setCause={setCause} />
          ))}
        </div>
        <div className="text-center mb-8">
          <Button className="mx-auto mt-4" variant={"outline"}>
            Show more causes
          </Button>
        </div>
        <DrawerContent>
          <CauseDetail {...cause} />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Vote;
