import React from "react";
import Childs from "./Childs";


const Parents = () => {
 
    const sum = () => {
        alert(10+10);
    }
    return(
        <>
      <Childs Add={sum} />
        </>
    )
}
export default Parents;