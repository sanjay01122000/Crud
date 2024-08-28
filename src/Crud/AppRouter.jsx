import React from "react";
import Apps from "./Apps";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBtn from "./AddBtn";
import Edit from "./Edit";


const AppRouter = () => {

    return(
     <>
     <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Apps />} />
        <Route path="/create" element={ <AddBtn />} />
        <Route path="/update/:id" element={ <Edit />} />
         </Routes>
        </BrowserRouter>
     </>
    )
}
export default AppRouter;