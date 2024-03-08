import { Link } from "react-router-dom";
import { logo } from "@/assets";
import { Separator } from "./ui/separator";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-slate-50 py-8 px-32">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} alt="Nationale loterij logo" className="h-12 w-64" />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-md lg:flex-grow">
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold mx-8 text-center transition-all duration-100 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/vote"
              className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold mx-8 text-center transition-all duration-100 ease-in-out"
            >
              Vote
            </Link>
          </div>
        </div>
      </nav>
      <Separator />
    </>
  );
}

export default Navbar;
