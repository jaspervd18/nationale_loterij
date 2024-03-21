import { XIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

function SearchBar() {
  return (
    <>
      <div className="flex max-md:flex-col md:flex-row gap-2 mt-8 md:items-end">
        <Input
          className="px-4 md:w-1/4 bg-white h-12"
          placeholder="Search for a cause..."
        />
        <div className="flex flex-row gap-2">
          <Badge className="h-fit py-2 hover:cursor-pointer">
            Science
            <XIcon className="h-4 w-4 ml-2" />
          </Badge>
          <Badge className="h-fit py-2 hover:cursor-pointer">
            Solidarity
            <XIcon className="h-4 w-4 ml-2" />
          </Badge>
          <Badge
            className="h-fit py-2 hover:cursor-pointer"
            variant={"outline"}
          >
            Health
          </Badge>
          <Badge
            className="h-fit py-2 hover:cursor-pointer"
            variant={"outline"}
          >
            Sport
          </Badge>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
