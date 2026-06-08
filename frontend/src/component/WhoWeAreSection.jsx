import React, { useEffect, useRef, useState } from 'react';

// You can drop this directly inside your existing file's return statement
const WhoWeAreSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Keeps performance light by triggering only once
        }
      },
      { threshold: 0.15 } // Triggers when 15% of the section is visible on screen
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full flex justify-center items-center pt-10 bg-white">
      <div 
        /* ANIMATION CHANGES: 
           - Added transition-all duration-1000 ease-out to seamlessly handle transitions
           - Scales up smoothly from scale-95 to scale-100 and opacity-0 to opacity-100 on load
        */
        className={`relative w-11/12 md:w-4/5 h-[420px] md:h-[380px] flex items-center justify-center text-center px-6 bg-cover bg-center rounded-sm shadow-md overflow-hidden transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          backgroundImage:
            "url('https://www.kovintrade.cz/wp-content/uploads/2022/10/kovintrade-ocel-tyc-kruhova-16x9-no-vignetting.jpg')",
        }}
      >
        {/* ANIMATION CHANGES: Dark overlay fades in gradually alongside the background */}
        <div className={`absolute inset-0 bg-black/55 z-0 transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}></div>

        {/* TEXT CONTENT CONTAINER */}
        {/* ANIMATION CHANGES: 
            - Added transition-all duration-1000 delay-300 to let the text glide up beautifully after the background opens.
            - Uses translate-y-8 shifting smoothly up to translate-y-0.
        */}
        <div className={`max-w-3xl text-blue-200 relative z-10 transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4 text-white">
            Who We Are
          </h2>
          {/* Changed text-sm to text-xs on small viewports so the paragraph doesn't clip out of the fixed h-[380px] box on mobile phones */}
          <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed text-blue-100">
            Delisha International combines global logistics expertise with strong regional knowledge to deliver reliable freight forwarding and supply chain solutions worldwide. With a customer-focused approach and an experienced team, we provide seamless transportation, warehousing, customs support, and end-to-end logistics services designed to simplify complex supply chains. Our commitment to innovation, operational efficiency, and transparent communication allows us to support businesses across international markets while ensuring secure handling, timely deliveries, and customized logistics solutions tailored to meet evolving business needs.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhoWeAreSection