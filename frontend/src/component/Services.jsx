import React, { useEffect, useRef, useState } from 'react';

const services = [
  { 
    id: 1, 
    title: 'Air Freight Forwarding',
    imageUrl: 'https://thedflgroup.com/wp-content/uploads/elementor/thumbs/Air-Freight-Forwarding-Process-Steps-Benefits-and-Cost-Explained-rga3eap26ro2fgwkk22tqcaet4awrqzsge29fes8o0.webp',
    content: 'Air freight is one of the fastest and most reliable transportation solutions for businesses moving cargo across international markets. Its speed, security, and global accessibility make it the preferred choice for time-sensitive shipments, urgent deliveries, high-value products, and perishable goods that require quick transit and careful handling. Compared to traditional shipping methods, air freight significantly reduces transit times and helps businesses maintain supply chain efficiency while meeting tight deadlines.' 
  },
  { 
    id: 2, 
    title: 'Surface Transport Service', 
    imageUrl: 'https://thedflgroup.com/wp-content/uploads/2025/11/roadt.jpg',
    content: 'Surface transport is a reliable and cost-effective solution for businesses requiring efficient cargo movement across domestic and regional markets. Its flexibility, accessibility, and extensive network coverage make it an ideal choice for regular shipments, bulk transportation, and last-mile deliveries. Compared to other transportation methods, surface transport offers greater route flexibility and dependable door-to-door services, helping businesses optimize supply chain operations while maintaining cost efficiency and delivery reliability.' 
  },
  { 
    id: 3, 
    title: 'Ocean Freight Forwarding', 
    imageUrl: 'https://thedflgroup.com/wp-content/uploads/2025/11/1223a0afb3f158754cbb2097d5d84e7417ff96fe.jpg',
    content: "Ocean freight is one of the most economical transportation solutions for moving large volumes of cargo across international markets. It is particularly suitable for bulky, heavy, or non-urgent shipments that require cost-efficient transportation over long distances. With flexible shipping options such as Full Container Load (FCL) and Less than Container Load (LCL), ocean freight enables businesses to optimize shipping costs while ensuring reliable cargo movement. Through strong global shipping networks and efficient logistics coordination, ocean freight supports smooth international trade operations and dependable supply chain management." 
  },
  { 
    id: 4, 
    title: 'Custom Clearance', 
    imageUrl: 'https://thedflgroup.com/wp-content/uploads/elementor/thumbs/custom-rga3eap3x1jqvdk1lb1fvnv31k1ejgczqzmmcwm008.jpg',
    content: 'Customs clearance and documentation play a critical role in ensuring smooth international trade operations. Efficient handling of shipping documents, regulatory requirements, and customs procedures helps businesses minimize delays and maintain seamless cargo movement across borders. At Delisha International, we simplify the documentation process with expert support, fast processing, and reliable customs solutions. Our experienced team manages import and export formalities efficiently, enabling businesses to focus on operations while ensuring compliance, faster clearances, and hassle-free global shipping.' 
  },
  { 
    id: 5, 
    title: 'Warehouse Services', 
    imageUrl: 'https://thedflgroup.com/wp-content/uploads/2025/11/warehousing-services-1536x1152.jpg',
    content: "Smart warehousing solutions are essential for improving inventory management, optimizing storage capacity, and ensuring smooth supply chain operations. Efficient warehousing services provide businesses with secure storage, better inventory visibility, and faster order processing to support growing logistics demands. At Delisha International, we offer modern warehousing solutions designed to enhance operational efficiency through organized inventory control, secure handling, and real-time tracking. Our strategically managed facilities help businesses reduce logistics costs, improve order fulfillment, and maintain reliable product movement across supply chains."
  },
];

// Reusable animated row component to handle individual scroll intersection triggers
function ServiceRow({ service, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it triggers, we stop tracking it to keep performance light
          observer.unobserve(entry.target); 
        }
      },
      {
        threshold: 0.15, // Triggers when 15% of the card is visible on screen
        rootMargin: '0px 0px -50px 0px' // Slightly delays entry for a smooth offset reveal
      }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Alternates layouts: Odd index elements flip the image to the right side
  const isReversed = index % 2 !== 0;

  return (
    <div 
      ref={rowRef}
      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 py-10 md:py-7 border-b border-gray-200/60 last:border-0 transition-all duration-1000 ease-out
        ${isReversed ? 'md:flex-row-reverse' : ''}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {/* 1. IMAGE FRAME SIDE */}
      <div 
        className={`w-full md:w-1/2 aspect-[14/9] rounded-2xl overflow-hidden shadow-lg bg-gray-100 group transition-transform duration-1000 ease-out
          ${isVisible ? 'translate-x-0' : isReversed ? 'translate-x-16' : '-translate-x-16'}`}
      >
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* 2. TEXT CONTENT SIDE */}
      <div 
        className={`w-full md:w-1/2 flex flex-col justify-center transition-transform duration-1000 ease-out
          ${isVisible ? 'translate-x-0' : isReversed ? '-translate-x-16' : 'translate-x-16'}`}
      >
        
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 tracking-wide">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
          {service.content}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="w-full bg-white py-7 px-4 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto bg-[#F5F9F4] p-6 sm:p-12 md:p-16 rounded-3xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 tracking-wide">
            Our Services
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We provide comprehensive freight forwarding solutions, offering reliable transportation services to support efficient, secure, and seamless global logistics operations.
          </p>
        </div>

        {/* Clean, Stacked Animated Layout Container */}
        <div className="flex flex-col gap-4">
          {services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}