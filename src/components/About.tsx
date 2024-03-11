import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

function About() {

  const [is18, setIs18] = useState(false);

  useEffect(() => {
    console.log(is18);
  }, [is18]);

  return (
    <>
      <div>
        <div className={cn(is18 ? "hidden" : "block", "flex flex-col sm:flex-row md:gap-4")}>
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
          about the projects they undertake, and see the positive change they
          bring about.
        </p>
        <p className="text-center mt-8 text-lg">
          In addition to the satisfaction of knowing that you are making a
          difference, participating in the National Lottery also offers the
          chance to win incredible prizes. With each ticket purchase, you enter
          into a draw where you could potentially win life-changing sums of
          money. Imagine the possibilities that open up when you combine the
          thrill of winning with the joy of supporting a cause close to your
          heart.
        </p>
        
      </div>
    </>
  );
}

export default About;

// How does buying a lottery ticket help community causes?
// A: A portion of the proceeds from every ticket sold goes towards supporting community causes that are chosen by players. By playing the lottery, you can make a positive impact on your community and support causes that matter to you.

// Is gambling a safe and responsible activity?
// A: Gambling can be a fun and entertaining activity, but it's important to approach it in a responsible way. We encourage all players to set limits on their spending, to know when to stop, and to seek help if they feel that gambling is becoming a problem.

// How do you ensure the integrity and fairness of the lottery?
// A: We use state-of-the-art technology and rigorous security measures to ensure that all lottery games are fair and unbiased. Our games are regularly audited by independent third-party organizations to ensure that the results are truly random and that players have an equal chance of winning.

// Can anyone participate in community causes, or do you have to be a winner?
// A: Anyone who buys a lottery ticket can participate in choosing community causes to support. You don't have to be a winner to make a difference in your community - every ticket sold helps to support important causes.

// How can I find out which community causes are being supported?
// A: We regularly update our website and social media channels with information about the community causes that are being supported. You can also check your local news sources to find out about the impact that lottery proceeds are having in your community.
