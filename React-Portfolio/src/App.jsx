import React from "react";
import "./index.css";
import "./App.css";
import AboutMe from "./components/AboutMe.jsx";
import Header from "./components/Header.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <>
      <Header />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
