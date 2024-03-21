import { faq } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

function FAQ() {
  return (
    <>
      <h2 className="md:text-4xl text-2xl font-semibold mb-4">
        Frequently asked questions
      </h2>
      <Accordion type="single" collapsible>
        {faq.map((item, index) => {
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="md:w-8/12">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}

export default FAQ;
