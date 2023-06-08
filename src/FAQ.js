import React from "react";
//import Accordion component
import Accordion from "./Accordion.js";
import "./styles.css";

const loremIpsumText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.`;
//initialize array that contains objects
//representing FAQ items
//title property represents the question
//content property represents the answer
function FAQ() {
//   const faqData = [
//     { title: "Is this a good product?", content: loremIpsumText },
//     { title: "How much does it cost?", content: loremIpsumText },
//     { title: "Where can I get it?", content: loremIpsumText }
//   ];

  return (
    <div>
      <Accordion title="Is this a good product?" content={loremIpsumText} />
      <Accordion title="How much does it cost?" content={loremIpsumText} />
      <Accordion title="When can I get it?" content={loremIpsumText} />
    </div>
  );
}

export default FAQ;
