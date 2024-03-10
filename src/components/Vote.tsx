import { causes } from "@/constants";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
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

function Vote() {
  return (
    <>
      <Drawer>
        <div>
          <h1 className="text-4xl font-bold text-center">Choose your cause</h1>
          <p className="text-center mt-8 text-lg">
            The National Lottery supports various community causes. You can vote
            for your favorite cause to receive extra funding.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
          {causes.map((cause, index) => (
            <Card className="shadow-md" key={index}>
              <CardHeader>
                <CardTitle>{cause.title}</CardTitle>
                <CardDescription>{cause.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex justify-end align-bottom">
                <DrawerTrigger asChild>
                  <Button variant="outline" className="px-16 py-4">
                    Vote
                  </Button>
                </DrawerTrigger>
              </CardFooter>
            </Card>
          ))}
        </div>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Congratulations</DrawerTitle>
              <DrawerDescription>
                You've succesfully voted for you community cause.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">I understand</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Vote;
