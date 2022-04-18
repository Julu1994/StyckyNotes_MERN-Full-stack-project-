import React, {useContext} from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Context from "../ReactContext /Context";
const Axios = require('axios').default;

// import { Navbar, Nav, Container } from "react-bootstrap";
function Navbarr (){

    const {client, User} = useContext(Context);

    async function logout(){
        await Axios.get("http://localhost:4000/auth/logout");
        await User();

    }

    return (
        <div className="Navbar">
        
            <Link to="/">
            <h1>Sticky Notes</h1>
            </Link>
            { !client ? (
                <>
                <Link to="/login">
            <h3>Login</h3>
            </Link>
            <Link to="/register">
            <h3>Register</h3>
            </Link>

                </>

            ): (<button  className = "logoutBtn" onClick={logout} >Log Out</button>)}

        </div>
    )
};

export default Navbarr;