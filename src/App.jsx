import React from "react"
import Home from "./Components/Home"
import AboutUs from "./Components/AboutUs"
import AcademicCulture from "./Components/AcademicCulture"
import SchoolCulture from "./Components/schoolCulture"
import ContactUs from "./Components/ContactUs"
import CoCurricular from "./Components/coCurricular"
import Gallery from "./Components/Gallery"
import MainLayout from "./Components/MainLayout"
import Admission from "./Components/Admission"
import HomeLayout from "./Components/HomeLayout"
import { Route, Routes } from "react-router-dom"


function App() {


  return (
    <>


      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/academic-culture" element={<AcademicCulture />} />
        <Route path="/school-culture" element={<schoolCulture />} />
        <Route path="/co-curricular" element={<coCurricular />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admissions" element={<Admission/>} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes> */}

      <Routes>
        {/* Simple Home */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* All other pages use MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/academic-culture" element={<AcademicCulture />} />
          <Route path="/school-culture" element={<SchoolCulture />} />
          <Route path="/co-curricular" element={<CoCurricular />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
