import React from 'react';
import OurSolutions from './OurSolutions';

const steps = [
  {
    id: 1,
    title: 'Book Your Shipment',
    description: 'Quick online booking with instant quotes and real-time pricing for all your logistics.',
    // Inline SVG matching a hand holding a box/shipment
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 Carlsbad 11.25h4.5M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Best Pricing',
    description: 'Real-time monitoring throughout transit with detailed updates and milestone notifications.',
    // Inline SVG matching a document search / best price quotation look
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Manage Payment',
    description: 'Flexible payment options including Pay Later terms and automated invoicing systems.',
    // Inline SVG matching automated secure invoicing/box delivery processing
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5c.621 0 1.125.504 1.125 1.125v12.75c0 .621-.504 1.125-1.125 1.125H3.75M3.75 4.5v13.5M21 7.5H3M12 12h3.75m-3.75 3h.008v.008H12V15z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Shipment Delivered',
    description: 'Quick online booking with instant quotes and real-time pricing for all your logistics.',
    // Inline SVG matching a global security checkmark delivery symbol
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )
  }
];

export default function HomeComp() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      {/* Container matching your page theme exactly */}
      <div className="max-w-7xl mx-auto bg-[#F5F9F4] p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3 tracking-wide">
            How It Works
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed font-normal">
            From booking to payment—manage your shipment with ease and tech-driven precision.
          </p>
        </div>

        {/* 4-Column Card Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              // Translucent white cards with soft borders to exactly mimic the UI reference picture
              className="bg-white/80 backdrop-blur-sm border border-gray-300/50 rounded-2xl p-6 flex flex-col items-start hover:shadow-md transition-shadow duration-300"
            >
              {/* Brand Accent Teal Gradient Icon Container */}
              <div className="p-3 bg-gradient-to-br from-[#0F766E] to-[#0D9488] rounded-xl mb-4 shadow-md shadow-teal-900/10 flex items-center justify-center">
                {step.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-gray-800 text-lg font-bold tracking-wide mb-2">
                {step.title}
              </h3>

              {/* Card Description */}
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

          <OurSolutions/>
      </div>
      
    </section>
  );
}