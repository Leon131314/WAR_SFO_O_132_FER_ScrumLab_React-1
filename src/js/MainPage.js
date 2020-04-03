// import React from "react";
import React, {Component} from 'react';
import {HashRouter, Switch,Route,NavLink} from "react-router-dom";
import Name from "./Name";
import NewRecipe from "./NewRecipe";



const MainPageNav = ()=>(
    <nav className="navigation-main" >
        <ul className="mainNav-ul">
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} exact to="/" >Pulpit<i className="fas fa-chevron-right"></i></NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/dlaczego/">Przepisy</NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/o mnie">Plany</NavLink></li>
        </ul>
    </nav>
);


// const TopPanel =() =>(
class TopPanel extends Component {
///////imię/////////
        state = {
            name: null,
        };

        componentDidMount() {
            const name = JSON.parse(localStorage.getItem('name'));
            console.log(name);
            this.setState({
                name: name,
            });
        }
///////imię/////////

            render(){
                return (
                    <div className="topPanel">
                        <h1 className="nav-h">Zaplanuj </h1>
                        <h1 className="rightSide">  {this.state.name} <i className="fas fa-user-circle icon-2x"></i></h1>
                    </div>
                )
            }
            ;
}

const MainPage = () => {
    return (
        <div className="mainPage">
            <TopPanel/>
            <div className="mainPage-content">
                <HashRouter>
                    <MainPageNav />

                    <div>
                        <div className="mainPage-background"> {/*Leszek tego do tego diva mozesz dodac tlo do glownego widoku ==TK==*/}
                            <div className="name-container"> {/*Dodatkowy div zeby mozna bylo wycentrowac wszystkie elementy ==TK==*/}
                                <Name/>
                                {/*<NewRecipe/>/!*TEST *!/*/}
                            </div>
                        </div>
                        <Switch>
                            <Route />
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        </div>
    )
};

export default MainPage;