import React from "react";
import { useNavigate } from "react-router-dom";


const ExtraCompo = () => {

    const navigate = useNavigate();

    const gotohomepage = () => {
        navigate('/')
    }

    return(
        <>
            <h1> Hello ExtraCompo Page </h1>
            <button onClick={gotohomepage}>Go To Home Page</button>
        </>
    )
}
export default ExtraCompo;