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
      <h2 className="text-2xl font-bold mt-8">Frequently asked questions</h2>

      <Accordion type="single" collapsible>
        {faq.map((item, index) => {
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
}

export default FAQ;
