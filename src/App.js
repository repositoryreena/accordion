import React from "react";
//import components
import FAQ from "./FAQ";
import "./styles.css";

function App() {
  return (
    <div>
      <h1>Project 2: FAQ/Accordion</h1>
      <div className="container">
        <div className="blue-box">
          <h2>Frequently Asked Questions</h2>
          <div className="white-box">
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
