import React from "react";
import CallToAction from "./callToAction";

import SubmitForm from "./submitForm";

import {HashRouter, Switch,Route,NavLink} from "react-router-dom";

const Navigation = ()=>(
    <nav className="navigation" >
        <h1 className="nav-h">Zaplanuj </h1>
        <ul className="nav-ul">
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} exact to="/" >Zaplanuj posiłki</NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/dlaczego/">Dlaczego warto?</NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/o mnie">O mnie</NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/kontakt">Kontakt</NavLink></li>
        </ul>
    </nav>
);



const App = () => {
  return (
    <>
        <HashRouter>
            <Navigation />
            <div>
                <Switch>
                    <Route />
                </Switch>
            </div>
        </HashRouter>

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
