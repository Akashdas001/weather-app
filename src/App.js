import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://www.htmlhints.com/article/how-to-create-toggle-switch/93">
          {/* Download Source Code */}
        </a>{" "}
         Developed by{" "}
        <a target="_blank" href="https://github.com/Akashdas001">
         AKASH DAS
        </a>{" "}
        | Linked In{" "}
        <a target="_blank" href="https://www.linkedin.com/in/akash-das-907a1a340/">
          Akash Das
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
