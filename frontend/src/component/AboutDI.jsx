import React from 'react';

const AboutDI = () => {
  return (
    <section className="bg-[#f8fafc] text-[#334155] antialiased py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Two-column grid system matching the image proportion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Text Column: Takes up 7 out of 12 columns on large screens */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* General Information Block */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4 tracking-tight">
                General Information
              </h2>
              <p className="text-base leading-relaxed text-[#475569] text-justify">
                Delisha International, based in India and serving businesses worldwide, is strategically positioned to provide reliable freight forwarding and logistics solutions across global markets. Our international network, combined with strong regional expertise, enables us to address diverse shipping requirements while maintaining high service standards. We believe our team is the driving force behind our success, fostering innovation, collaboration, and continuous growth. Through comprehensive end-to-end logistics services, we simplify supply chain operations and help businesses navigate complex international trade environments efficiently. With a customer-centric approach, we tailor our services to individual business needs, ensuring transparent communication, secure cargo handling, and timely deliveries across every shipment.

              </p>
            </div>

            {/* Vision Block */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4 tracking-tight">
                Vision of Delisha International
              </h2>
              <p className="text-base leading-relaxed text-[#475569] text-justify">
                Our vision is to become a trusted global logistics and freight forwarding partner known for reliability, innovation, and customer-focused services. By adopting advanced technologies, sustainable logistics practices, and efficient supply chain solutions, we aim to set new standards in the industry while delivering seamless transportation experiences that support the growth and success of businesses worldwide.
              </p>
            </div>
            
          </div>

          {/* Right Image Column: Takes up 5 out of 12 columns on large screens */}
          <div className="lg:col-span-5 w-full mt-12">
            <div className="overflow-hidden rounded-sm shadow-sm border border-slate-100">
              {/* Replace URL below with your actual local asset image or production source URL */}
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" 
                alt="Cargo container ship traveling through harbor terminal" 
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default AboutDI;