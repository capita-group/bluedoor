// components/BookTableBar.jsx
"use client";

import { useMemo, useState } from "react";

export default function BookTableBar() {
  const peopleOptions = useMemo(
    () => Array.from({ length: 12 }, (_, i) => `${i + 1} Person${i ? "s" : ""}`),
    []
  );

  const timeOptions = useMemo(
    () => ["10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "01:00 pm", "01:30 pm", "02:00 pm", "06:00 pm", "07:00 pm", "08:00 pm"],
    []
  );

  const [people, setPeople] = useState(peopleOptions[0]);
  const [date, setDate] = useState(() => {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mm}-${dd}`;
  });
  const [time, setTime] = useState(timeOptions[2]);

  const brand = "#2677a7";

  const onSubmit = (e) => {
    e.preventDefault();
    // hook this to your booking flow / OpenTable / API
    console.log({ people, date, time });
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
            <div className="absolute inset-0">
        <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/video/hero.mp4"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-[#0b1c2d]/50 backdrop-blur-[2px]" />
        </div>


      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 sm:py-20">
        <div className="flex flex-col items-center">
          {/* Title */}
          <h2 className="text-center text-sm sm:text-2xl tracking-[0.55em] text-white/90 uppercase">
            Book a Table
          </h2>

          {/* Form row */}
          <form
            onSubmit={onSubmit}
            className="mt-10 w-full max-w-5xl"
            aria-label="Book a table"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-10 items-end">
              {/* People */}
              <Field label="Guests">
                <select
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full bg-transparent text-white/90 outline-none appearance-none pr-8"
                >
                  {peopleOptions.map((p) => (
                    <option key={p} value={p} className="text-black">
                      {p}
                    </option>
                  ))}
                </select>

                <Chevron />
              </Field>

              {/* Date */}
              <Field label="Date">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-transparent text-white/90 outline-none pr-8"
                  style={{ colorScheme: "dark" }}
                />
                <Chevron />
              </Field>

              {/* Time */}
              <Field label="Time">
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-transparent text-white/90 outline-none appearance-none pr-8"
                >
                  {timeOptions.map((t) => (
                    <option key={t} value={t} className="text-black">
                      {t}
                    </option>
                  ))}
                </select>

                <Chevron />
              </Field>

              {/* Button */}
              <div className="sm:col-span-3 lg:col-span-1">
                <button
                  type="submit"
                  className="w-full rounded-none border px-4 py-3 text-xs tracking-[0.25em] uppercase text-white transition bg-white/10"
               
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* underline across */}
            <div className="mt-6 hidden sm:block h-px w-full bg-white/20" />

         
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <div className="relative">
      <p className="mb-2 text-[11px] tracking-[0.28em] text-white/60 uppercase">
        {label}
      </p>

      <div className="relative border-b border-white/25 pb-2">
        {children}
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white/65">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 10l5 5 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
