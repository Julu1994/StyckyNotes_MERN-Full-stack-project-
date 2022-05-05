import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Homepage from "./Components/Homepage";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import "./Style/index.scss";
function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
