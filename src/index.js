import React from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
// import App from "./js/App";
import RoutingForApp from "./js/RoutingForApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<RoutingForApp/>, document.getElementById("root"));
serviceWorker.unregister();
