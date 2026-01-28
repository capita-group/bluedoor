"use client";

import Image from "next/image";
import { useRef } from "react";

export default function LocationSection() {
  const mapRef = useRef(null);

  const handleViewMap = () => {
    mapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="relative w-full bg-[#394047] mt-40">
      <div className="grid w-full grid-cols-1 lg:grid-cols-2 min-h-[300px]">

        {/* LEFT: MAP */}
        <div
          ref={mapRef}
          className="relative overflow-hidden "
        >
          {/* Google Map iframe */}
          <iframe
            title="Google Map"
            className="absolute inset-0 h-full w-full contrast-[1.2]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.587831887619!2d90.40445027602397!3d23.797687286958027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70f44cdd127%3A0x5c029bdb13dc7805!2sCapita%20House%2011%2C%2003%20Rd%20No%2027%2C%20Dhaka%201213!5e0!3m2!1sen!2sbd!4v1769403484507!5m2!1sen!2sbd"
          />

      
        </div>

        {/* RIGHT: INFO PANEL */}
        <div className="relative flex items-center justify-center px-6 py-3 lg:px-16">
          {/* Subtle top highlight */}
          <div className="relative w-full max-w-md text-center">
            {/* Arched Image */}
            <div className="mx-auto w-[280px] sm:w-[330px] md:w-[360px]">
  <div className="relative aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-2xl shadow-2xl">
    <Image
      src="/img/door.png"
      alt="Restaurant"
      fill
      className="object-contain"
      priority
    />
    <div className="absolute inset-0" />
  </div>
</div>


            {/* Address Info */}
            <div className="mt-10 space-y-3 text-[15px] leading-relaxed text-white/75">
              <p>71 Madison Ave, New York, NY 10016</p>
              <p>T. 123-45-6789, 123-45-7899</p>
              <p>M. reservations@example.com</p>
            </div>

            {/* Button */}
            <div className="mt-10">
              <button
                onClick={handleViewMap}
                className="inline-flex items-center justify-center border border-[#caa36a]/70 px-14 py-4 text-xs font-semibold tracking-[0.25em] text-white hover:bg-[#caa36a] hover:text-[#04101d] transition"
              >
                VIEW MAP
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TOP BUTTON */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 border border-[#caa36a]/80 bg-[#04101d]/70 px-4 py-3 text-xs tracking-[0.25em] text-white backdrop-blur hover:bg-[#caa36a] hover:text-[#04101d] transition"
      >
        TOP
      </button>
    </section>
  );
}
