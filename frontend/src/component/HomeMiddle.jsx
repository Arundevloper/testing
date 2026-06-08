import React, { useState, useEffect } from 'react';

const SLIDES_DATA = [
  {
    id: 1,
    title: 'Welcome to Delisha International',
    image: 'https://wallpaperaccess.com/full/6301900.jpg',
    paragraphs: [
      `Delisha International is a leading freight forwarding and logistics company based in India, delivering seamless global shipping solutions for businesses across industries. We specialize in providing reliable, efficient, and cost-effective logistics services designed to meet the growing demands of international trade and supply chain management.`,
      `Our focus is on offering competitive pricing, transparent operations, and customized freight solutions that simplify global transportation. Backed by an experienced team and a strong international network, we ensure smooth cargo movement through air, sea, and land transportation channels.`
    ]
  },
  {
    id: 2,
    title: 'Sustainable Global Logistics Solutions',
    image: 'https://thedflgroup.com/wp-content/uploads/2025/11/1223a0afb3f158754cbb2097d5d84e7417ff96fe.jpg',
    paragraphs: [
      `At Delisha International, we believe responsible logistics goes beyond transportation. We emphasize sustainable operational practices by optimizing routes, improving resource efficiency, and adopting environmentally conscious logistics solutions that reduce operational waste and support greener supply chains.`,
      `Our logistics infrastructure is built for speed and efficiency, enabling timely pickups, streamlined documentation, and well-coordinated delivery processes to ensure shipments arrive safely and on schedule. We maintain strict compliance with international shipping regulations.`
    ]
  },
  {
    id: 3,
    title: 'Your Trusted Supply Chain Partner',
    image: 'https://thedflgroup.com/wp-content/uploads/2025/11/warehousing-services-1536x1152.jpg',
    paragraphs: [
      `From small business consignments to large-scale industrial shipments, Delisha International handles a wide range of cargo requirements with professionalism and precision. Regardless of shipment size or destination, we are committed to providing dependable service.`,
      `We focus on transparent communication and customer-focused logistics solutions—making us a trusted partner for businesses expanding into global markets. Our secure warehousing and intelligent routing give your business an unfair advantage.`
    ]
  }
];

export default function HomeMiddle() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle effect
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000); 

    return () => clearInterval(timer);
  }, [currentIndex]); // Adding currentIndex resets the timer cleanly when a user manually clicks an arrow

  // Navigation Logic
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? SLIDES_DATA.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % SLIDES_DATA.length
    );
  };

  return (
    <div className="relative min-h-[650px] md:min-h-[550px] overflow-hidden flex items-center justify-center px-6 sm:px-16 md:px-[100px] py-16 group/slider">
      
      {/* LOOP THROUGH SLIDES */}
      {SLIDES_DATA.map((slide, index) => {
        const isActive = index === currentIndex;
        
        return (
          <div
            key={slide.id}
            className="absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-1000 ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 10 : 0,
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            {/* Background Blur Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center blur-sm scale-105 transition-transform duration-[6000ms] ease-linear"
              style={{ 
                backgroundImage: `url('${slide.image}')`,
                transform: isActive ? 'scale(1.05)' : 'scale(1.15)'
              }}
            />
            
            {/* Global backdrop layer */}
            <div className="absolute inset-0 bg-black/45 z-10" />

            {/* Inner Content Frame */}
            <div className="relative z-20 w-full max-w-5xl text-center md:text-justify px-4">
              <h2 className="text-3xl md:text-4xl text-[#0F766E] font-semibold  px-6 py-2 rounded-xl inline-block shadow-lg uppercase tracking-wide text-center mb-6 mx-auto md:block md:w-fit drop-shadow-md">
                {slide.title}
              </h2>

              <div className="space-y-4 text-sm md:text-base text-gray-100 leading-relaxed drop-shadow-md">
                {slide.paragraphs.map((para, pIndex) => (
                  <p key={pIndex}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* LEFT NAVIGATION ARROW */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#0F766E] hover:scale-110 md:opacity-0 md:group-hover/slider:opacity-100 focus:outline-none"
        aria-label="Previous Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* RIGHT NAVIGATION ARROW */}
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#0F766E] hover:scale-110 md:opacity-0 md:group-hover/slider:opacity-100 focus:outline-none"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* BOTTOM DOTS INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
        {SLIDES_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-8 bg-[#0F766E]' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      

    </div>
  );
}