import "./App.css";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-16">Nationale Loterij</h1>
      <Card className="w-[480px] shadow-md">
        <CardHeader>
          <CardTitle>Make a Wish</CardTitle>
          <CardDescription>
            The Make-A-Wish Foundation is a 501 non-profit organization founded
            in the United States that creates life-changing wishes for children
            with a critical illness who have reached the age of 2½ and are
            younger than 18 at the time of referral.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Vote</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;
