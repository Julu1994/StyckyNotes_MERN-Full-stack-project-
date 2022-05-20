import React from "react";
import Routerr from "./Router";
import "./Styles/index.scss";
import { ContextObject } from "./ReactContext/Context";
import Axios from "axios";

Axios.defaults.withCredentials = true;

function App() {
    return (
        <ContextObject>
            <div className="mainDiv">
                <Routerr />
            </div>
        </ContextObject>
    );
}

export default App;
