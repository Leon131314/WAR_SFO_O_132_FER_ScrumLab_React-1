
import React, {Component} from 'react';
import {HashRouter, Switch,Route,NavLink} from "react-router-dom";
import Name from "./Name";
import Recipes from "./Recipes";
import Pulpit from "./Pulpit";
import WeekView from "./WeekView";

const MainPageNav = ()=>(
    <nav className="navigation-main" >
        <ul className="mainNav-ul">
            <li><NavLink className="navArrow" activeClassName="activeArrow" activeStyle={{fontColor: "#E58A20"}} exact to="/main/pulpit">Pulpit<i activeClassName="fas fa-chevron-right"></i></NavLink></li>
            <li><NavLink className="navArrow" activeClassName="activeArrow" activeStyle={{fontColor: "#E58A20"}} to="/main/przepisy/">Przepisy</NavLink></li>
            <li><NavLink className="navArrow" activeClassName="activeArrow" activeStyle={{fontColor: "#E58A20"}} to="/main/plany">Plany</NavLink></li>
        </ul>
    </nav>
);


// const TopPanel =() =>(
class TopPanel extends Component {
///////imię/////////
    constructor(props) {
        super(props);
        this.state = {
            name: [],
        };
    }
        componentDidMount() {
            // const name = JSON.parse(localStorage.getItem('name'));
            // console.log(name);
            // this.setState({
            //     name: name,
            // });
            fetch('http://localhost:3000/user', {
                method: 'GET'
            }).then (resp => {
                return resp.json();
            }).then(nam => {
                    this.setState({ name: nam });
                    console.log(nam)
            }).catch(err => {
                console.log('eRroR!', err)
            });
        }

///////imię/////////

            render(){
                console.log(this.state.name)
                return (
                    <div className="topPanel">
                        <h1 className="nav-h">Zaplanuj </h1>
                        <h1 className="rightSide">{this.state.name.name}<i className="fas fa-user-circle icon-2x"></i></h1>
                    </div>
                )};
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
                                            "/main/przepisy/": <Recipes/>,
                                            "/main": <Name/>
                                        }[this.props.location.pathname]
                                    }
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
};

export default MainPage;