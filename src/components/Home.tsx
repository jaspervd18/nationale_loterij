import { Button } from "./ui/button";
import { krasloten } from "@/assets";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import {  useNavigate } from "react-router-dom";
import FAQ from "./FAQ";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Input } from "./ui/input";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <Drawer>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm pb-4 pt-2">
            <DrawerHeader>
              <DrawerTitle className="font-semibold text-2xl text-center mb-2">
                Enter a code
              </DrawerTitle>
              <DrawerDescription>
                Can't find your code? Don't forget to look at the back of your lottery ticket.
              </DrawerDescription>
            </DrawerHeader>
            <Input className="px-4" placeholder="0123-456-789"></Input>
            <DrawerFooter>
              <DrawerClose>
                <Button className="py-4 text-lg w-full">Redeem code</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
        <div className="flex gap-4 flex-row items-stretch">
          <img src={krasloten} alt="krasloten" className="w-9/12 rounded-sm"/>
          <Card className="w-full flex flex-col justify-between">
            <CardHeader className="text-center">
              <CardTitle>Remaining points</CardTitle>
            </CardHeader>
            <CardContent className="text-9xl font-bold text-center">
              56<span className="text-lg font-light ml-0">pts.</span>
            </CardContent>
            <CardFooter className="flex flex-col">
              <DrawerTrigger asChild>
                <p className="text-gray-400 underline underline-offset-2 mb-2 text-sm hover:cursor-pointer">Need more points? Enter a code here.</p>
              </DrawerTrigger>
              <Button className="w-full text-2xl py-8" onClick={() => navigate("/vote")}>Choose your cause</Button>
            </CardFooter>
          </Card>
        </div>
        
        <FAQ />
      </Drawer>
    </>
  );
}

export default Home;

