//It imports React and the FAQ component from "./FAQ," as well as the stylesheet located in "styles.css."
import React from "react";
//import components
import FAQ from "./FAQ";
import "./styles.css";

function App() {
  // Inside the App function component, it defines the component's structure.
  return (
    // The return statement defines the JSX structure for the application. It starts with a top-level div as the root element.
    <div>
      {/* Inside this div, there's an h1 element with the text "Project 2: FAQ/Accordion," which likely serves as the title of your application. */}
      <h1>Project 2: FAQ/Accordion</h1>
      {/* Below the title, there's a div with the class "container." This is often used to group elements together for styling purposes. */}
      <div className="container">
      {/* Inside the "container" div, there's another div with the class "blue-box." */}
        <div className="blue-box">
        {/* Within the "blue-box," there's an h2 element with the text "Songs." */}
          <h2>Songs</h2>
          {/* Inside the "blue-box," there's another div with the class "white-box," and within this "white-box," the FAQ component is rendered. */}
          <div className="white-box">
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
