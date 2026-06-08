import React from 'react';

const solutionsData = {
  international: [
    {
      id: 'intl-1',
      title: 'Ocean: FCL',
      // SVG Line Art representation of a container ship
      icon: (
        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 17h20M3 14h18M5 11h3v3H5v-3zm4 0h3v3H9v-3zm4 0h3v3h-3v-3zm4 0h3v3h-3v-3zM6 17l1 4h10l1-4" />
        </svg>
      )
    },
    {
      id: 'intl-2',
      title: 'Ocean: LCL',
      icon: (
        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 17h20M3 14h18M7 11h2v3H7v-3zm4 0h2v3h-2v-3zm4 0h2v3h-2v-3zM6 17l1 4h10l1-4" />
        </svg>
      )
    },
    {
      id: 'intl-3',
      title: 'International Air',
      // SVG Line Art representation of a globe with a plane
      icon: (
        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10zM19 15l-3-1.5V11l3 1.5z" />
        </svg>
      )
    },
    {
      id: 'intl-4',
      title: 'Customs',
      // SVG Line Art representation of an official/officer with custom cargo
      icon: (
        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.5 6.5h9M5 9h14M6 9v9a2 2 0 002 2h8a2 2 0 002-2V9" />
        </svg>
      )
    }
  ],
  domestic: [
    {
      id: 'dom-1',
      title: 'DI Courier',
      // SVG Line Art representation of a delivery truck
      icon: (
        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.75 18.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 5.25h12.75v10.5H2.25zM15 8.25h4.5l3.75 4.5v3H15z" />
        </svg>
      )
    },
    {
      id: 'dom-2',
      title: 'Trailer',
      // SVG Line Art representation of a freight cargo train engine
      icon: (
        <svg className="w-10 h-10 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16h16M5 16v2m4-2v2m4-2v2m4-2v2M3 10h11v6H3zm11 2h5v4h-5zM7 7h3v3H7zm11 11a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
      )
    }
  ]
};

export default function OurSolutions() {
  return (
    <section className=" text-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6 tracking-tight">
          Our Solutions
        </h2>
        
        {/* Intro Paragraph */}
        <p className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed mb-16 px-2">
          The Delisha International drives your business forward by tackling three key global trade challenges — 
          bridging knowledge gaps, simplifying complex supply chains, and ensuring cash flow for 
          cargo release. Our proprietary Global Trade Platform and personalized service streamline 
          your shipments, cutting both cost and time.
        </p>

        {/* Categories Architecture Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* INTERNATIONAL CATEGORY CONTAINER (Left Side: 8 Columns wide on Large viewports) */}
          <div className="lg:col-span-8 flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8 tracking-wide">
              International
            </h3>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {solutionsData.international.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-between shadow-sm min-h-[170px] transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  {/* Circle Border Wrap around icon */}
                  <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center bg-gray-50 mb-4">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-900 text-center tracking-wide">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DOMESTIC CATEGORY CONTAINER (Right Side: 4 Columns wide on Large viewports) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8 tracking-wide">
              Domestic
            </h3>
            
            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {solutionsData.domestic.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-between shadow-sm min-h-[170px] transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  {/* Circle Border Wrap around icon */}
                  <div className="w-20 h-20 rounded-full border border-gray-300 flex items-center justify-center bg-gray-50 mb-4">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-gray-900 text-center tracking-wide">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}