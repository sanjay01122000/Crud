import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crud from "./Crud";
import CreateBtn from "./CreateBtn";
import UpdateBtn from "./UpdataBtn";


const AppRoutes = () => {

    return(
        <>
       <BrowserRouter>
        <Routes>
        <Route path='/' element={ <Crud /> } />
        <Route path='/create' element={ <CreateBtn /> } />
        <Route path='/updatebtn/:id' element={ <UpdateBtn /> } />
        </Routes>
       </BrowserRouter>
        </>
    )
}
export default AppRoutes;