import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Homepage from "./Components/Homepage";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import "./Style/index.scss"
function Router(){
    return (
        <BrowserRouter>
        <Navbar />
        <Switch> 
        
            <Route className="nav" exact path ="/"> {<Homepage />}</Route>
            <Route className="nav" path ="/login"> {<Login />}</Route>
            <Route className="nav" path ="/register"> {<Register />}</Route>
        </Switch>
        <Footer />
        </BrowserRouter>

    ) 
}

export default Router;