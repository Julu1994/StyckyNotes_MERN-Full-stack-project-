import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import "./Style/index.scss";
import { ContextObject } from "./ReactContext /Context";
import Axios from "axios";

Axios.defaults.withCredentials = true;

// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <ContextObject>
        <div className="mainDiv">
            <Router />
        </div>
    </ContextObject>,

    document.getElementById("root")
);
