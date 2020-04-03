import React from 'react';
import {HashRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import App from "./App";
import MainPage from "./MainPage";
import NotFound from "./NotFound"; // TO BE DONE ==TK==

const RoutingForApp = () => {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/main" component={MainPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    )
};

export default RoutingForApp;