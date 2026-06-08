import React, { useEffect, useRef, useState } from 'react';

const visions = [
  {
    id: 1,
    title: 'Our Vision',
    imgUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    content: "To become the top choice in global logistics, known for innovation, excellence, and a client-first mindset. We aim to lead the industry by adopting new technologies and promoting sustainable logistics practices."
  },
  {
    id: 2,
    title: 'Our Mission',
    imgUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000",
    content: "To be a customer-centric project logistics expert, setting the standard in our industry with a flexible and adaptive approach."
  },
  {
    id: 3, // Fixed duplicate ID
    title: 'Core Values',
    imgUrl: "https://wallup.net/wp-content/uploads/2016/10/13/174274-tilt_shift-dock-cargo-container_ship.jpg",
    content: "We are committed to maintaining integrity, transparency, and high ethical standards while delivering reliable and innovative solutions that exceed customer expectations. Through strong collaboration, sustainable practices, and customer-focused services, we aim to build long-term partnerships and create shared success with our clients and business partners."
  }
];

// Extracted Row Component so each card triggers its own scroll animation independently
function VisionRow({ vision, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Alternates row layouts: even indices face normal, odd indices reverse!
  const isReversed = index % 2 !== 0;

  return (
    <div 
      ref={rowRef}
      className={`max-w-6xl w-full flex flex-col items-stretch justify-center gap-6 md:gap-0 my-12 md:my-6
        ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      
      {/* Left/Alternating Side: Image Block */}
      <div className="w-full md:w-1/2 flex items-stretch">
        <div 
          className={`w-full h-64 md:h-[340px] shadow-lg rounded-xl overflow-hidden group transition-all duration-1000 ease-out 
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (isReversed ? 'translate-x-16' : '-translate-x-16')}`}
        >
          <img 
            src={vision.imgUrl} 
            alt={vision.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right/Alternating Side: Colored Text Card */}
      <div className={`w-full md:w-1/2 flex items-center z-10 ${isReversed ? 'md:-mr-1' : 'md:-ml-1'}`}>
        <div 
          className={`w-full border-4 border-[#F8FAFC] bg-[#00a3c4] text-white p-8 md:p-10 shadow-xl flex flex-col justify-center min-h-[220px] md:min-h-[280px] transition-all duration-1000 ease-out
            ${isReversed ? 'md:rounded-r-xl md:rounded-l-none' : 'md:rounded-l-xl md:rounded-r-none'}
            ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-12 ' + (isReversed ? '-translate-x-12' : 'translate-x-12')}`}
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase mb-4">
            {vision.title}
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-cyan-50 font-normal opacity-95">
            {vision.content}
          </p>
        </div>
      </div>

    </div>
  );
}

export default function OurVision() {
  return (
    <section className="bg-slate-50 py-16 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full flex flex-col items-center gap-8">
        {visions.map((vision, index) => (
          <VisionRow key={vision.id} vision={vision} index={index} />
        ))}
      </div>
    </section>
  );
}