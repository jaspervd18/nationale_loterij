import { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "@/assets";
import { Separator } from "./ui/separator";
import Hamburger from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-slate-50 py-8 px-4 md:px-32">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} alt="Nationale loterij logo" className="h-12 w-64" />
        </div>
        <div className="md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full block md:flex md:items-center md:w-auto`}
        >
          <div className="text-md md:flex-grow">
            <Link
              to="/about"
              className="block mt-4 md:inline-block md:mt-0 mx-8 text-center"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/vote"
              className="block mt-4 md:inline-block md:mt-0 mx-8 text-center"
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
