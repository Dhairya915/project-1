import React from "react"
import Home from "./Components/Home"
import AboutUs from "./Components/AboutUs"
import AcademicCulture from "./Components/AcademicCulture"
import schoolCulture from "./Components/schoolCulture"
import coCurricular from "./Components/coCurricular"
import ContactUs from "./Components/ContactUs"
import Gallery from "./Components/Gallery"
import Admission from "./Components/Admission"
import { Route, Routes } from "react-router-dom"


function App() {


  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/academic-culture" element={<AcademicCulture />} />
        <Route path="/school-culture" element={<schoolCulture />} />
        <Route path="/co-curricular" element={<coCurricular />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admissions" element={<Admission/>} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
