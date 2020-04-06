import React from  "react";

import Autor from "./autor";
import Gallery from "./Gallery";
import Stopka from "./Stopka";
import CallToAction from "./CallToAction";
import AboutApp from "./AboutApp";
import SubmitForm from "./submitForm";
import MainPage from "./MainPage";




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
        {/*<HashRouter>*/}{/*Cala ta sekcja z HashRouterem jest do usuniecia ==TK==*/}
        {/*    <div>*/}
        {/*        <Switch>*/}
        {/*            <Route exact path="/main" component={MainPage} /> /!*Wydaje mi sie ze tutaj bedzie trzeba wsadzic component={MainPage} i dodac jeszcze kilka Route zeby podpiac wszytkie linki ==TK==*!/*/}
        {/*            <Route path="/"/>*/}
        {/*            /!*<Route component={NotFound}/>*!/*/}
        {/*        </Switch>*/}
        {/*    </div>*/}
        {/*</HashRouter>*/}
        <Navigation />
        <Gallery/>
        <CallToAction/>
        <Autor/>
        <AboutApp/>
        <SubmitForm/>
        <Stopka/>

        {/*<AddRecipe/> tutaj to dodalem tylko po to zeby zobaczyc jak wyglada*/}
        {/*<AddSchedule/>*/} {/*tutaj to dodalem tylko po to zeby zobaczyc jak wyglada*/}
        <MainPage/>

       

    </>
  );
};

export default App;