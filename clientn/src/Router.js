import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbarr from "./Components/Navbar";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import Homepage from "./Components/Homepage";
import Login from "./Pages/Login";
import "./Styles/index.scss";
function Routerr() {
    return (
        <BrowserRouter>
            <Navbarr />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Routerr;
