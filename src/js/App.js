import React from "react";

import Autor from "./autor";
import Gallery from "./Gallery";
import Stopka from "./Stopka";
import AddRecipe from "./AddRecipe";
import AddSchedule from "./AddSchedule";
import CallToAction from "./CallToAction";
import AboutApp from "./AboutApp";
import SubmitForm from "./submitForm";
import MainPage from "./MainPage";
import WeekView from "./WeekView";


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
                    <Route /> {/*Wydaje mi sie ze tutaj bedzie trzeba wsadzic component={MainPage} i dodac jeszcze kilka Route zeby podpiac wszytkie linki ==TK==*/}
                </Switch>
            </div>
        </HashRouter>

        <header>
        <img src="https://coderslab.pl/img/coderslab-logo.png" className="logoImage" alt="logo"/>
      </header>
      <section className="intro">
          <Gallery/>
      </section>

        <CallToAction/>
        <Autor/>
        <AboutApp/>
        <SubmitForm/>
        <Stopka/>
        {/*<AddRecipe/> tutaj to dodalem tylko po to zeby zobaczyc jak wyglada*/}
        {/*<AddSchedule/>*/} {/*tutaj to dodalem tylko po to zeby zobaczyc jak wyglada*/}
        <MainPage/>
        <WeekView/>
    </>
  );
};

export default App;