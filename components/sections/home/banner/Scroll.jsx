
export default function Scroll() {
  return (
    <>
      {/* SCROLL INDICATOR - Responsive positioning */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 sm:bottom-6 md:hidden xl:block">
        <div className="hero-animate-bounce text-center">
          <div className="h-6 sm:h-8 w-px bg-[#0a95eb]/60 mx-auto" />
          <p className="mt-1 sm:mt-2 text-xs tracking-widest uppercase text-[#0a95eb]/70 hero-blue-text">
            Explore
          </p>
        </div>
      </div>
    </>
  );
}