import FAQ from "./FAQ";
import Hero from "./Hero";
import "@devnomic/marquee/dist/index.css";
import Marquee from "./Marquee";
import { collaborators } from "@/constants";

function Home() {
  return (
    <>
      <Hero />
      <h2 className="text-4xl font-semibold text-center mt-8 mb-4">Collaborators</h2>
      <Marquee fade={true}>
        {collaborators.map((collaborator) => (
          <img src={collaborator.image} className="h-64 w-64 rounded-sm"></img>
        ))}
      </Marquee>
      <FAQ />
    </>
  );
}

export default Home;
