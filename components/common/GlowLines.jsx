export default function GlowLines() {
  return (
    <>
      {/* left line */}
      <div className="pointer-events-none absolute inset-y-0 left-[18%] sm:left-[25%] lg:left-[30%] w-px opacity-50 lg:opacity-100">
        <span className="absolute inset-0 bg-[#2677a7]/20" />
        <span className="glow-beam absolute left-1/2 -translate-x-1/2 h-28 w-[2px] bg-gradient-to-b from-transparent via-[#2677a7] to-transparent" />
      </div>

      {/* right line */}
      <div className="pointer-events-none absolute inset-y-0 left-[78%] sm:left-[70%] lg:left-[65%] w-px opacity-50 lg:opacity-100">
        <span className="absolute inset-0 bg-[#2677a7]/20" />
        <span className="glow-beam glow-delay absolute left-1/2 -translate-x-1/2 h-28 w-[2px] bg-gradient-to-b from-transparent via-[#2677a7] to-transparent" />
      </div>

      {/* ✅ plain CSS (works everywhere) */}
      <style>{`
        .glow-beam{
          top: -120px;             /* start above the section */
          animation: glowTravel 4.6s linear infinite;
          filter: drop-shadow(0 0 10px rgba(38,119,167,.55));
          opacity: .9;
        }
        .glow-delay{
          animation-delay: 2s;
        }
        @keyframes glowTravel{
          0%   { top: -120px; opacity: 0; }
          12%  { opacity: 1; }
          88%  { opacity: 1; }
          100% { top: calc(100% + 120px); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce){
          .glow-beam{ animation: none !important; opacity: .6; top: 12%; }
        }
      `}</style>
    </>
  );
}