import React from 'react';
import {NavLink} from "react-router-dom";

const NotFound = () => {

    const Navigation = () => (
        <nav className="navigation">
            <h1 className="nav-h">Zaplanuj </h1>
            <ul className="nav-ul">
                <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} exact to="/main">Zaplanuj posiłki</NavLink></li>
                <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/dlaczego/">Dlaczego warto?</NavLink></li>
                <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/o mnie">O mnie</NavLink></li>
                <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/kontakt">Kontakt</NavLink></li>
            </ul>
        </nav>
    );

    return (
        <>
            <Navigation/>
            <p>Ni ma takiej strony >;-[]</p>
            <a href="/">Wracam na glowna!</a>
        </>
    )
};

export default NotFound;