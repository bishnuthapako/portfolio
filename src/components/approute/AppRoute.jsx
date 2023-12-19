import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "../../page/home/Home";
import About from "../../page/about/About";
import Project from "../../page/project/Project";
import Skills from "../../page/skills/Skills";
import Contact from "../../page/contact/Contact";

const AppRoute = () => {
    
  return (
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoute
