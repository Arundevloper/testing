import React from "react";
import { FaGlobeAmericas, FaTruckMoving, FaLeaf } from "react-icons/fa";
import OurVision from "./OurVision";
import AboutDI from "./AboutDI";
import WhoWeAreSection from "./WhoWeAreSection";

const AboutUs = () => {
  return   <>
    <WhoWeAreSection/>
      <AboutDI/>
      <OurVision/>
      <div className="h-auto py-16 md:py-20  bg-[#F7F7F7]">
      <div className="max-w-7xl  mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <h1 className="text-3xl md:text-4xl -mt-5 ml-4 font-bold text-gray-900 text-center md:text-left mb-8">
          Why Choose Us
        </h1>
        
        {/* Cards Container: Changed flex-row to flex-col lg:flex-row so it is completely responsive on mobile! */}
        <div className="flex flex-col lg:flex-row gap-6 p-2">
          
          {/* CARD 1: Trusted Freight Forwarding */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center border border-gray-100">
            {/* Added a clean, centered icon wrapper */}
            <div className="text-red-600 text-4xl mb-4 flex justify-center items-center">
              <FaGlobeAmericas />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Trusted Freight Forwarding Experts
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              With extensive experience in the freight forwarding and logistics industry, Delisha International delivers dependable and professional solutions for businesses involved in global trade. We have built our reputation through reliability, transparency, and a strong commitment to customer satisfaction across international markets.
            </p>
          </div>

          {/* CARD 2: Competitive Pricing & Delivery */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center border border-gray-100">
            {/* FIXED: Removed the buggy absolute position span tags and swapped the emoji */}
            <div className="text-red-600 text-4xl mb-4 flex justify-center items-center">
              <FaTruckMoving />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Competitive Pricing and Timely Delivery
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              At Delisha International, we provide cost-effective logistics solutions while ensuring fast and hassle-free shipment management. We value your time and trust, and we are committed to delivering efficient services with transparency, reliability, and consistent communication throughout every stage of transportation.
            </p>
          </div>

          {/* CARD 3: Efficient & Sustainable Logistics */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center border border-gray-100">
            {/* Added matching icon style for sustainability */}
            <div className="text-red-600 text-4xl mb-4 flex justify-center items-center">
              <FaLeaf />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Efficient Operations & Sustainable Logistics
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              At Delisha International, we ensure smooth cargo movement through optimized transportation networks and responsible logistics practices. Our operations are designed to improve efficiency, reduce delays, and support sustainable supply chain solutions that contribute toward a smarter and more environmentally conscious future.
            </p>
          </div>

        </div>
      </div>
    </div>
    </>
};

export default AboutUs;
