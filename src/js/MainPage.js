
import React, {Component} from 'react';
import {HashRouter, Switch,Route,NavLink} from "react-router-dom";
import Name from "./Name";
import NewRecipe from "./NewRecipe";
import Pulpit from "./Pulpit";


const MainPageNav = ()=>(
    <nav className="navigation-main" >
        <ul className="mainNav-ul">
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} exact to="/main/pulpit">Pulpit<i className="fas fa-chevron-right"></i></NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/main/dlaczego/">Przepisy</NavLink></li>
            <li><NavLink className="nav" activeStyle={{fontColor: "#E58A20"}} to="/o mnie">Plany</NavLink></li> {/*//SPACJA W LINKU(!)*/}
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

class MainPage extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="mainPage">
                <TopPanel/>
                <div className="mainPage-content">
                        <MainPageNav/>
                        <div>
                            <div className="mainPage-background">
                                <div className="name-container">
                                    {
                                        {
                                            "/main/pulpit": <Pulpit/>,
                                            "/main": <Name/>
                                        }[this.props.location.pathname]
                                    }
                                    {/*<NewRecipe/>/!*TEST *!/*/}
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
};

export default MainPage;