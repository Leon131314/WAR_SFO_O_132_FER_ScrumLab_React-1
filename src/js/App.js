import React from "react";
import Autor from "./autor";
import Gallery from "./Gallery";
import Stopka from "./Stopka";
import CallToAction from "./CallToAction";
import AboutApp from "./AboutApp";
import SubmitForm from "./submitForm";
// import MainPage from "./MainPage"; //spojrz na komentarz w lini 37
import {HashRouter, Switch,Route,NavLink} from "react-router-dom";

const Navigation = ()=>(
    <nav className="navigation" >
        <h1 className="nav-h">Zaplanuj </h1>
        <ul className="nav-ul">
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} exact to="/main" >Zaplanuj posiłki</NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/dlaczego/">Dlaczego warto?</NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/o mnie">O mnie</NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/kontakt">Kontakt</NavLink></li>
        </ul>
    </nav>
);

const App = () => {
  return (
    <>
        <Navigation />
        <Gallery/>
        <CallToAction/>
        <Autor/>
        <AboutApp/>
        <SubmitForm/>
        <Stopka/>
        {/*<MainPage/>*/} {/*Na MainPage mozna przejsc klikajac w "Zaplanuj Posilki" na landing page, nie wrzucajmy tu spowrotem tego komponentu*/}
       

    </>
  );
};

export default App;