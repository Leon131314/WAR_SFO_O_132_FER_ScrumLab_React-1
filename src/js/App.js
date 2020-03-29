import React from "react";
import CallToAction from "./callToAction";
import Autor from "./autor";


const App = () => {
  return (
    <>
      <header>
        <img src="https://coderslab.pl/img/coderslab-logo.png" className="logoImage" alt="logo"/>
      </header>
      <section className="intro">
        <p>
          Scrum Lab React
        </p>
      </section>
        <CallToAction/>
        <Autor/>
    </>
  );
};

export default App;
