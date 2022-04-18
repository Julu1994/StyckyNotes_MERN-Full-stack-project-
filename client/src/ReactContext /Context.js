// import { Axios } from 'axios';
import React, {createContext, useState, useEffect } from 'react'; 
const Axios = require('axios').default;


const Context = createContext();

function ContextObject(props) {
    const [client, setClient] = useState(undefined);

    async function User() {
        const response = await Axios.get("http://localhost:4000/auth/loogedIn");
        setClient(response.data)
    }
    useEffect(() => {
        User()
    }, []);
    return ( 
    <Context.Provider value={{client, User}}>


    {props.children}


    </Context.Provider>);
}

export default Context;
export {ContextObject};