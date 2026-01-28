"use client";

import { useRef, useState } from "react";

export default function LocationMapSection() {
  const mapRef = useRef(null);

  const [guests, setGuests] = useState("2 Persons");
  const [date, setDate] = useState(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate(),
    ).padStart(2, "0")}`;
  });
  const [time, setTime] = useState("07:00 pm");

  return (
    <section className="relative w-full">
      <div className="grid w-full grid-cols-1 lg:grid-cols-[1.3fr_1fr] min-h-[520px]">
        {/* LEFT: FORM (BIGGER) */}
        <div className="relative flex items-center justify-center px-6 py-16 ">
          <div
            className="
                w-full max-w-3xl
                rounded-2xl
                border border-[#2a77aa]/25
                bg-white/55
                backdrop-blur-xl
                
                px-8 py-12
                sm:px-10 sm:py-14
                "
          >
            {/* Title */}
            <div className="mb-12 text-center">
              <p className="text-sm tracking-[0.45em] uppercase text-[#2a77aa]/70">
                Visit Us
              </p>
              <h3 className="mt-4 text-3xl font-light tracking-wide text-[#2a77aa]">
                Find & Contact
              </h3>
            </div>

            {/* FORM */}
            <form className="space-y-7">
              {/* Guests */}
              <div>
                <label className="mb-2 block text-[13px] tracking-[0.3em] uppercase text-[#2a77aa]/70">
                  Guests
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="
                    w-full
                    border border-[#2a77aa]/30
                    px-5 py-[14px]
                    text-[15px]
                    text-[#2a77aa]
                    outline-none
                    focus:border-[#2a77aa]
                    focus:ring-1 focus:ring-[#2a77aa]/30
                  "
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i} className="text-black">
                      {i + 1} Person{i ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="mb-2 block text-[13px] tracking-[0.3em] uppercase text-[#2a77aa]/70">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="
                    w-full
                    border border-[#2a77aa]/30
                    px-4 py-[14px]
                    text-[15px]
                    text-[#2a77aa]
                    outline-none
                    focus:border-[#2a77aa]
                    focus:ring-1 focus:ring-[#2a77aa]/30
                  "
                />
              </div>

              {/* Time */}
              <div>
                <label className="mb-2 block text-[13px] tracking-[0.3em] uppercase text-[#2a77aa]/70">
                  Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="
                    w-full
                    border border-[#2a77aa]/30
                    px-4 py-[14px]
                    text-[15px]
                    text-[#2a77aa]
                    outline-none
                    focus:border-[#2a77aa]
                    focus:ring-1 focus:ring-[#2a77aa]/30
                  "
                >
                  {[
                    "10:00 am",
                    "11:00 am",
                    "12:00 pm",
                    "01:00 pm",
                    "06:00 pm",
                    "07:00 pm",
                    "08:00 pm",
                    "09:00 pm",
                  ].map((t) => (
                    <option key={t} className="text-black">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  border border-[#2a77aa]/30
                  px-4 py-[14px]
                  text-[15px]
                  text-[#2a77aa]
                  outline-none
                  focus:border-[#2a77aa]
                  focus:ring-1 focus:ring-[#2a77aa]/30
                "
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  border border-[#2a77aa]/30
                  px-4 py-[14px]
                  text-[15px]
                  text-[#2a77aa]
                  outline-none
                  focus:border-[#2a77aa]
                  focus:ring-1 focus:ring-[#2a77aa]/30
                "
              />

              {/* Message */}
              <textarea
                rows={4}
                placeholder="Message"
                className="
                  w-full
                  resize-none
                  border border-[#2a77aa]/30
                  px-4 py-[14px]
                  text-[15px]
                  text-[#2a77aa]
                  outline-none
                  focus:border-[#2a77aa]
                  focus:ring-1 focus:ring-[#2a77aa]/30
                "
              />

              {/* Button */}
              <button
                type="submit"
                className="
                    group relative w-full overflow-hidden rounded-2xl
                    border border-[#2a77aa]/40
                    px-6 py-4
                    text-sm tracking-[0.35em] uppercase
                    text-[#2a77aa]
                    bg-white/40
                    backdrop-blur-lg

                    transition-all duration-500
                    hover:text-white
                "
              >
                <span className="relative z-10">Send Request</span>

                {/* hover fill */}
                <span
                  className="
                    absolute inset-0
                    bg-[#2a77aa]
                    translate-y-full
                    transition-transform duration-500
                    group-hover:translate-y-0
                    "
                />
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT: MAP (SMALLER) */}
        <div
          ref={mapRef}
          className="relative overflow-hidden min-h-[300px] lg:min-h-[420px]"
        >
          <iframe
            title="Google Map"
            className="absolute inset-0 h-full w-full grayscale-[0.25] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.587831887619!2d90.40445027602397!3d23.797687286958027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70f44cdd127%3A0x5c029bdb13dc7805!2sCapita%20House%2011%2C%2003%20Rd%20No%2027%2C%20Dhaka%201213!5e0!3m2!1sen!2sbd!4v1769403484507!5m2!1sen!2sbd"
          />
        </div>
      </div>
    </section>
  );
}
