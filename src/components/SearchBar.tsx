import { XIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

function SearchBar() {
  return (
    <>
      <div className="flex flex-row gap-2 mt-8 items-end">
        <Input
          className="px-4 w-1/4 bg-white h-12"
          placeholder="Search for a cause..."
        />
        <Badge className="h-fit py-2 hover:cursor-pointer">Charity<XIcon className="h-4 w-4 ml-2"/></Badge>
        <Badge className="h-fit py-2 hover:cursor-pointer">Education<XIcon className="h-4 w-4 ml-2"/></Badge>
        <Badge className="h-fit py-2 hover:cursor-pointer" variant={"outline"}>
          Healthcare
        </Badge>
        <Badge className="h-fit py-2 hover:cursor-pointer" variant={"outline"}>
          KMO
        </Badge>
        <Badge className="h-fit py-2 hover:cursor-pointer" variant={"outline"}>
          Sport
        </Badge>
      </div>
    </>
  );
}

export default SearchBar;
