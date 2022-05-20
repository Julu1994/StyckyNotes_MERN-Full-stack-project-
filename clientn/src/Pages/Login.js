import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Main.scss";
import Context from "../ReactContext/Context";
const Axios = require("axios").default;

export default function Login() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const { User } = useContext(Context);

    const navigate = useNavigate();

    async function serverLogin(event) {
        event.preventDefault();
        const userAuth = {
            email: userEmail,
            password: userPassword,
        };
        await Axios.post("http://localhost:4000/auth/login", userAuth);
        await User();
        navigate("/");
    }

    return (
        <div className="auth">
            <h2 className="Heading">Login</h2>
            <form onSubmit={serverLogin}>
                <div className="inputLevel">
                    <input
                        type="email"
                        value={userEmail}
                        onChange={(event) => setUserEmail(event.target.value)}
                    />
                    <span> </span>

                    <label htmlFor="regEmail">Email</label>
                </div>

                <div className="inputLevel">
                    <input
                        type="password"
                        value={userPassword}
                        onChange={(event) =>
                            setUserPassword(event.target.value)
                        }
                    />
                    <span> </span>
                    <label htmlFor="regPassword">Password</label>
                </div>

                <div className="log">
                    <button type="submit" className="logBtn">
                        LOGIN
                    </button>
                </div>
                <p>
                    Don't have an account ?{" "}
                    <Link to="/register" style={{ color: "#7B68EE" }}>
                        Create a new account
                    </Link>
                </p>
            </form>
        </div>
    );
}
