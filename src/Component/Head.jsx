import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import ExtraCompo from "./ExtraCompo";

const Head = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/extracomponent" element={<ExtraCompo />} />
      </Routes>
    </>
  );
};
export default Head;
