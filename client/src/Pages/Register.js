import React, { useState, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Context from '../ReactContext /Context';
const Axios = require('axios').default;



export default function Register() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] =useState("");
    const [userConfirm, setUserConfirm] = useState("");

    const {User} = useContext(Context);
    const history = useHistory();

    async function serverRegister(event){
        event.preventDefault();
        const userInfo = {
            email: userEmail,
            password: userPassword,
            confirm: userConfirm
        }
        await Axios.post("http://localhost:4000/auth", userInfo);
        await User();
        history.push("/");



    }



    return (
    <div className = "auth">
    <h2 className="Heading">Create a new Account</h2>
    <form onSubmit={serverRegister}>

    <div className="inputLevel">

    
    <input 
        type="email"
        value={userEmail}
        onChange = {(event) => setUserEmail(event.target.value)}

        />
        <label htmlFor="regEmail">Email</label>
        </div>

        <div className="inputLevel"> 
    
    <input 
        type="password"
        value={userPassword}
        onChange = {(event) => setUserPassword(event.target.value)}

        />
        <label htmlFor="regPassword">Password</label>
        </div>

        <div className="inputLevel">

    
    <input 
        type="password"
        value={userConfirm}
        onChange = {(event) => setUserConfirm(event.target.value)}

        />
        <label htmlFor="confirmation">Confirm Password</label>
        </div>

        <button className="regBtn" type="submit">SIGN UP</button>
        <p>Already have an account ? <Link className="link"  to="/login" style={{ color: "#7B68EE" }}>Login here</Link></p>

    </form>
    </div>
    )
}
