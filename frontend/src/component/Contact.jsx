import React from 'react'
import {FaEnvelope,FaWhatsapp, FaInternetExplorer, FaPhoneAlt, FaClock} from "react-icons/fa"
import Map from './Map'
import Form from './Form'

const Contact = () => {
  return (
    // Changed hard padding p-6 to max constraints matching your main App.js grid layout
    <div className='w-full max-w-9xl mx-auto p-4 md:p-6'>
        
        {/* CHANGED: Removed h-[400px], flex-row -> flex-col lg:flex-row to prevent content crushing on tablets */}
        <div className='flex flex-col lg:flex-row gap-6 justify-center items-stretch mb-10'>
            
            {/* CHANGED: Removed fixed h-[350px] and w-[650px] -> Used flex-1 so it takes its fair share of space without shrinking */}
            <div className='flex-1 bg-[#F5F9F4] p-6 rounded-sm shadow-sm flex flex-col justify-between'>
                
                <div className='mb-2'>
                    <h2 className='text-3xl md:text-4xl font-semibold text-gray-900'>Contact Us</h2>
                </div>
                
                <div className='mb-4'>
                    <h3 className='text-xl md:text-2xl font-bold text-[#0F766E]'>Head Office</h3>
                </div>
                
                {/* CHANGED: Fixed the h-[5px] layout bug which was overlapping your text fields below */}
                <div className=' py-3 px-4 rounded-sm border border-gray-100 mb-4 -ml-5'>
                    <h2 className='text-md md:text-lg font-medium text-gray-800'>
                      Welcome to Delisha International Trading FZCO
                    </h2>
                </div>
                
                <div className='text-[#626262] space-y-2.5 text-sm md:text-base'>
                    <div>
                      <p className='leading-relaxed font-medium text-gray-700 mb-2'>
                        A 111, Delisha International, Logix technova, Block A, Sector 132 Noida, Uttar Pradesh – 201301 India
                      </p>
                    </div>
                    <div className='flex items-center gap-3'><FaEnvelope className='text-[#0F766E] text-lg shrink-0'/><p> info@digroup.in</p></div>
                    <div className='flex items-center gap-3'><FaInternetExplorer className='text-[#0F766E] text-lg shrink-0'/><p> sales@digroup.in</p></div>
                    <div className='flex items-center gap-3'><FaPhoneAlt className='text-[#0F766E] text-lg shrink-0'/><p> +91 9999309839</p></div>
                    <div className='flex items-center gap-3'><FaWhatsapp className='text-[#0F766E] text-lg shrink-0'/><p> +91 9355029621</p></div>
                    <div className='flex items-center gap-3'><FaClock className='text-[#0F766E] text-lg shrink-0'/><p>Monday – Friday: 8:30am – 5pm</p></div>
                    <div className='flex items-center gap-3'><FaClock className='text-[#0F766E] text-lg shrink-0'/><p>Saturday: 9am – 2pm</p></div>
                </div>
            </div>

            {/* CHANGED: w-1/3 -> w-full lg:w-[450px] or flex-1, set min-h to keep map box clean */}
            <div className='w-full lg:w-1/2 min-h-[400px] lg:min-h-full bg-black rounded-sm overflow-hidden shadow-sm'>
                <Map/>
            </div>
            
        </div>

        <div className='mt-6'>
            <Form/>
        </div>
    </div>
  )
}

export default Contact