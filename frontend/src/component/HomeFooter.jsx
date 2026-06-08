import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaSearchLocation,
  FaYoutube,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const HomeFooter = () => {
  return (
    <>
      <div className="px-4 py-2">
        {/* CHANGED: Removed fixed h-[390px] -> h-auto. Changed flex-row -> flex-col lg:flex-row */}
        <div className="h-auto bg-white flex flex-col lg:flex-row p-6 lg:p-3 gap-8 lg:gap-0">
          <div className="w-full lg:w-1/3 p-3">


            <div className="relative mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 lg:font-semibold">
                Quick <span className="text-[#0F766E]">Points</span>
              </h1>
              <div className="mt-2 h-1 w-23 rounded-full bg-[#0F766E]" />
            </div>

            {/* CHANGED: Removed fixed h-[298px] -> h-auto, added py-4 for content breathing room */}
            <div className="bg-[#0F877D] h-auto rounded-xl text-white mt-[20px] lg:mt-[30px] flex flex-col py-4 gap-3">
              <div className="flex-1 flex items-center px-4">
                Global freight forwarding solutions across air, sea, and land
                transportation.
              </div>
              <div className="flex-1 flex items-center px-4">
                Fast, secure, and dependable cargo pickup and delivery services.
              </div>
              <div className="flex-1 flex items-center px-4">
                Comprehensive logistics support for industrial and commercial
                businesses.
              </div>
              <div className="flex-1 flex items-center px-4">
                Efficient cargo handling, consolidation, and supply chain
                coordination.
              </div>
              <div className="flex-1 flex items-center px-4">
                Streamlined customs clearance and documentation assistance.
              </div>
              <div className="flex-1 flex items-center px-4">
                Customized logistics and freight management solutions for
                businesses worldwide.
              </div>
            </div>
          </div>

          {/* CHANGED: w-1/3 -> w-full lg:w-1/3 */}
          <div className="py-3 w-full lg:w-1/3 flex flex-col items-center justify-center">
            <div>
              <img src={logo} alt="" className="h-[100px] lg:h-[130px]" />
            </div>
            <div className="text-center text-[#1B5E20] mt-6 px-2 lg:px-4">
              <p>
                We specialize in international freight forwarding and logistics
                services, delivering reliable transportation solutions,
                competitive pricing, and efficient supply chain management to
                support businesses across global markets.
              </p>
            </div>
            {/* CHANGED: Reduced text-[40px] down to manageable text-3xl for mobile layout, scaled up on desktop */}
            <div className="flex gap-4 text-3xl lg:text-[40px] mt-6 lg:mt-10">
              <FaFacebook className="hover:text-black transition-colors cursor-pointer" />
              <FaInstagram className="hover:text-black transition-colors cursor-pointer" />
              <FaLinkedin className="hover:text-black transition-colors cursor-pointer" />
              <FaYoutube className="hover:text-black transition-colors cursor-pointer" />
            </div>
          </div>

          <div className="w-full lg:w-1/3 p-3">


            <div className="relative mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 lg:font-semibold">
                Contact <span className="text-[#0F766E]">Us</span>
              </h1>
              <div className="mt-2 h-1 w-31 rounded-full bg-[#0F766E]" />
            </div>


            <div className="mt-4 lg:mt-18">
              <div className="flex mt-4">
                {/* CHANGED: Added shrink-0 to prevent the map marker from getting squished by long address text */}
                <FaMapMarkerAlt className="text-xl text-[#0F877D] shrink-0 mt-1" />
                <p className="text-[#707887] ml-2">
                  A 111, Logix technova, Block A, Sector 132 Noida, Uttar
                  Pradesh – 201301 India
                </p>
              </div>

              <div className="flex mt-4 items-center">
                <FaWhatsapp className="text-xl text-[#0F877D] shrink-0" />
                <p className="text-[#707887] ml-2">+91 9355029621</p>
              </div>

              <div className="flex mt-4 items-center">
                <FaPhoneAlt className="text-xl text-[#0F877D] shrink-0" />
                <p className="text-[#707887] ml-2">+91 9999309839</p>
              </div>

              <div className="flex mt-4 items-center">
                <FaEnvelope className="text-xl text-[#0F877D] shrink-0" />
                <p className="text-[#707887] ml-2">sales@digroup.in</p>
              </div>

              <div className="flex mt-4 items-center">
                <FaEnvelope className="text-xl text-[#0F877D] shrink-0" />
                <p className="text-[#707887] ml-2">info@digroup.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHANGED: Added vertical padding py-3 to ensure text doesn't touch the dark background borders */}
      <div className="px-4 py-2 text-center">
        <h3 className="bg-black text-white py-3 px-2 text-xs sm:text-sm">
          © 2026 Delisha International. All Rights Reserved. | Powered by
          Delisha International
        </h3>
      </div>
    </>
  );
};

export default HomeFooter;
