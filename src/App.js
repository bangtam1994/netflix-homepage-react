import React from "react";
import "./App.css";
import Section from "./components/Section";
import logo from "./images/netflix-logo.svg";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo netflix" className="logo"></img>

      <Section />
    </div>
  );
}

export default App;
