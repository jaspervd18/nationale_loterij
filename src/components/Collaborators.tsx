import { collaborators } from "@/constants";
import Marquee from "./Marquee";

function Collaborators() {
  return (
    <>
      <h2 className="md:text-4xl text-2xl font-semibold mb-4">Collaborators</h2>
      <Marquee fade={true}>
        {collaborators.map((collaborator) => (
          <img src={collaborator.image} className="h-64 w-64 rounded-sm"></img>
        ))}
      </Marquee>
    </>
  );
}

export default Collaborators;
