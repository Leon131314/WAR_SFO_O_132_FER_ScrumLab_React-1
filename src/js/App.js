import React from "react";
import CallToAction from "./callToAction";
import SubmitForm from "./submitForm";

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
        <SubmitForm/>
    </>
  );
};

export default App;
