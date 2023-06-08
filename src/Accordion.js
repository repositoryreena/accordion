import React, { useState } from "react";
import "./styles.css";

//takes 2 props title and content
function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion__header">
        <div className="accordion__title">{title}</div>
        <button
          //class name of button is
          //conditionally modified based on the
          // value of the isOpen state variable
          className={`accordion__button ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "-" : "+"}
        </button>
        {/* if isOpen is true */}
        {/* the content section is rendered */}
      </div>

      {isOpen && (
        <div className="accordion__content">
          <div className="question">{content}</div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
