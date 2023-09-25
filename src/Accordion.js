//It imports React and the useState hook from React, as well as the stylesheet located in "styles.css."
import React, { useState } from "react";
import "./styles.css";

//takes 2 props title and content
function Accordion({ title, content }) {
  //Inside the Accordion function component, it initializes a state variable isOpen using the useState hook and sets its initial value to false. This state variable will track whether the accordion is open or closed.
  const [isOpen, setIsOpen] = useState(false);

  //The return statement defines the JSX structure for the accordion. It has a div with the class "accordion" as the outer container.
  return (
    <div className="accordion">
      {/* Inside the "accordion" div, there is a "accordion__header" div containing the title and a button. */}
      <div className="accordion__header">
        <div className="accordion__title">{title}</div>
        <button
          //class name of button is
          //conditionally modified based on the
          // value of the isOpen state variable
          // The button's class name is conditionally modified based on the value of the isOpen state variable. If isOpen is true, it adds the class "open," which likely indicates that the accordion is open.
          className={`accordion__button ${isOpen ? "open" : ""}`}
          // The button's onClick handler toggles the isOpen state when clicked. If it was closed, it becomes open, and vice versa.
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "-" : "+"}
        </button>
        {/* if isOpen is true */}
        {/* the content section is rendered */}
      </div>
      {/* Below the header, there's a conditional rendering of the content. If isOpen is true, the content is displayed inside a "accordion__content" div. */}
      {isOpen && (
        <div className="accordion__content">
          <div className="question">{content}</div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
