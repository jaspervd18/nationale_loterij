import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "@/assets";
import { Separator } from "./ui/separator";
import Hamburger from "hamburger-react";
import { cn } from "@/lib/utils";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-slate-50 py-8 px-4 md:px-32 shadow-2xl">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <img src={logo} alt="Nationale loterij logo" className="h-12 w-64" />
          </Link>
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div
          className={cn(isOpen? "block":"hidden", "w-full md:flex md:items-center md:w-auto")}
        >
          <div className="text md:text-base md:flex-grow">
            <Link
              to="/about"
              className="block mt-4 md:inline-block md:mt-0 mx-8 text-center hover:scale-105"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/vote"
              className="block mt-4 md:inline-block md:mt-0 mx-8 text-center hover:scale-105"
              onClick={toggleMenu}
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
