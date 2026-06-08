import React from 'react';

export default function ContactMap() {
  return (
    /* 
      CHANGES MADE:
      1. Changed 'h-full' to 'h-[300px] sm:h-[400px] lg:h-full' -> This gives it a healthy, fixed 300px height on smartphones, 400px on tablets, and lets it stretch to 100% height ('lg:h-full') only on desktop screens.
      2. Removed 'rounded-lg' -> The parent div in your Contact page already manages the card rounding, so removing it here avoids awkward double-border clipping!
    */
    <div className="w-full h-[300px] sm:h-[400px] lg:h-full min-h-[350px] overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        title="Google Map Location"
        src="https://maps.google.com/maps?q=Logix%20Technova,%20Plot%20A-4,%20Sector%20132,%20Noida,%20Uttar%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed" 
        className="w-full h-full border-0 block"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}