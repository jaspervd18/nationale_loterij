import FAQ from "./FAQ";
import "@devnomic/marquee/dist/index.css";
import Marquee from "./Marquee";
import { collaborators } from "@/constants";
import Steps from "./Steps";
import { Separator } from "./ui/separator";

function Home() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center mt-8 mb-4">Whatch some of our crazy videos</h1>
      <div className="flex flex-row gap-4 justify-center">
        <img src="https://picsum.photos/200/300" className="h-48 w-72 rounded-sm"></img>
        <img src="https://picsum.photos/200/300" className="h-48 w-72 rounded-sm"></img>
        <img src="https://picsum.photos/200/300" className="h-48 w-72 rounded-sm"></img>
        <img src="https://picsum.photos/200/300" className="h-48 w-72 rounded-sm"></img>
      </div>
      <Separator className="my-16" />
      <Steps />
      <Separator className="my-16"/>
      <h2 className="text-4xl font-semibold text-center mb-4">Collaborators</h2>
      <Marquee fade={true}>
        {collaborators.map((collaborator) => (
          <img src={collaborator.image} className="h-64 w-64 rounded-sm"></img>
        ))}
      </Marquee>
      <Separator className="my-16" />
      <FAQ />
    </>
  );
}

export default Home;
