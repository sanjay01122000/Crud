import React from "react";

import { useNavigate } from "react-router-dom";



const Error = () => {

    const navigate = useNavigate();

    const GoToHomepage = () => {
        navigate('/');
    }

    return(
        <>
        <h1>Error Page</h1>
        <button onClick={() => GoToHomepage()}> Go To Home Page</button>
        </>
    ) 
}
export default Error;