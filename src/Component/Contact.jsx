import React from "react";
import {useNavigate} from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate()

    const gotohomepage = () => {
        navigate('/extracomponent');
    }

    return(
        <>
            <h1> Hello Contact Page </h1>
            <button onClick={gotohomepage}>Go To Extra Page</button>
        </>
    )
}
export default Contact;