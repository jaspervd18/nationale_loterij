import { Button } from "./ui/button";
import { krasloten } from "@/assets";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import {  useNavigate } from "react-router-dom";
import FAQ from "./FAQ";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <div className="flex gap-4 flex-row items-stretch">
        <img src={krasloten} alt="krasloten" className="w-9/12 rounded-sm"/>
        <Card className="w-full flex flex-col justify-between">
          <CardHeader className="text-center">
            <CardTitle>Remaining points</CardTitle>
          </CardHeader>
          <CardContent className="text-9xl font-bold text-center">
            56<span className="text-lg font-light ml-0">pts.</span>
          </CardContent>
          <CardFooter>
              <Button className="w-full text-2xl py-8" onClick={() => navigate("/vote")}>Choose your cause</Button>
          </CardFooter>
        </Card>
      </div>
      
      {/* <div className={cn(is18 ? "hidden" : "block", "flex flex-col sm:flex-row md:gap-4")}>
        <p className="text-6xl md:text-9xl font-bold">18+</p>
        <div className="flex flex-col justify-between my-4">
            <p className="text-lg text-left my-auto">
              To participate in the National Lottery, you must be at least 18 years
              old and provide consent. By entering the lottery, you confirm that you
              meet the age requirement and agree to the terms and conditions.
            </p>
            <Button className="mt-4 w-full md:w-fit" 
              onClick={() => {
                setIs18(true); 
                console.log(is18);
              }
            }>I understand</Button>
        </div>
      </div>
      <p className="text-center mt-8 text-lg">
        The National Lottery website is dedicated to providing an exciting and
        rewarding experience for its users. At the heart of this website is
        the opportunity to not only win big prizes but also make a positive
        impact on society. By purchasing a ticket, you have the chance to vote
        for a good cause that will receive a portion of the ticket sales.
      </p>
      <p className="text-center mt-8 text-lg">
        Our platform allows you to choose from a wide range of charitable
        organizations, each working towards a different cause. Whether it's
        supporting education, healthcare, environmental conservation, or
        social justice, there's a cause that aligns with your values and
        interests.
      </p>
      <p className="text-center mt-8 text-lg">
        We believe in transparency and accountability, which is why we provide
        regular updates on the impact your contributions have made. Through
        our website, you can track the progress of the supported causes, learn
        Home the projects they undertake, and see the positive change they
        bring Home.
      </p>
      <p className="text-center mt-8 text-lg">
        In addition to the satisfaction of knowing that you are making a
        difference, participating in the National Lottery also offers the
        chance to win incredible prizes. With each ticket purchase, you enter
        into a draw where you could potentially win life-changing sums of
        money. Imagine the possibilities that open up when you combine the
        thrill of winning with the joy of supporting a cause close to your
        heart.
      </p> */}

      <FAQ />
    </>
  );
}

export default Home;

