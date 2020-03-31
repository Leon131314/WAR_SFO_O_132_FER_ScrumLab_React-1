import React from "react";
import {HashRouter, Switch,Route,NavLink} from "react-router-dom";



const MainPageNav = ()=>(
    <nav className="navigation-main" >
        <ul className="mainNav-ul">
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} exact to="/" >Pulpit</NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/dlaczego/">Przepisy</NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/o mnie">Plany</NavLink></li>
        </ul>
    </nav>
);


const TopPanel =() =>(
<div className="topPanel">
    <h1 className="nav-h">Zaplanuj </h1>
    <h1 className="rightSide">Imie + logo </h1>
</div>
);

const MainPage = () => {
    return (
        <div className="mainPage">
            <TopPanel/>
            <HashRouter>
                <MainPageNav />
                <div>
                    <Switch>
                        <Route />
                    </Switch>
                </div>
            </HashRouter>

        </div>
    )
};



export default MainPage;

