import FAQ from "./FAQ";
import "@devnomic/marquee/dist/index.css";
import Steps from "./Steps";
import { Separator } from "./ui/separator";
import Collaborators from "./Collaborators";
import Videos from "./Videos";

function Home() {
  return (
    <>
      <Videos />
      <Separator className="my-8 md:my-16" />
      <Steps />
      <Separator className="my-8 md:my-16" />
      <Collaborators />
      <Separator className="my-8 md:my-16" />
      <FAQ />
    </>
  );
}

export default Home;
