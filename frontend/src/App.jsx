import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/Contact";
import AboutUs from "./component/AboutUs";
import HomeFooter from "./component/HomeFooter";
import Services from "./component/Services";

const App = () => {
  return (
    <>
      <div className="font w-full overflow-x-hidden min-h-screen flex flex-col justify-between">
        <BrowserRouter>
          <Navbar />
          
          
          <div className="mt-4 w-full flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </div>
          
          <HomeFooter/>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;