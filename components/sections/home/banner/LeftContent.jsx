

export default function LeftContent ()  {
  return (
      <div className="order-2 lg:order-1 w-full lg:w-1/2 max-w-2xl xl:max-w-3xl mt-8 lg:mt-0 lg:pr-8 xl:pr-16 2xl:pl-50 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <p className="text-xs tracking-[0.4em] uppercase text-[#0a95eb] mb-2 sm:mb-3 hero-blue-text">
                  Bluedoor
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-widest uppercase text-[#0f172a] leading-tight">
                  Cafe & <br className="hidden sm:block" /> Bistro
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 my-4 sm:my-6">
                  <div className="h-px w-10 sm:w-12 md:w-14 bg-[#0a95eb]/60" />
                  <div className="h-px w-8 sm:w-10 bg-[#0f172a]/35" />
                </div>
                <p className="text-xs sm:text-sm md:text-base tracking-[0.3em] uppercase text-[#0a95eb]/80 font-light mb-3 sm:mb-4 hero-blue-text">
                  Crafted with passion
                </p>

                {/* Minimalist Opening Hours */}
                <div className="backdrop-blur-xl bg-white/75 border border-[#0a95eb]/25 rounded-lg sm:rounded-xl p-3 sm:p-4 inline-block shadow-lg hero-blue-border">
                  <div className="flex items-center gap-2 mb-1 sm:mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#0a95eb] hero-animate-pulse" />
                    <span className="text-xs font-semibold text-[#0a95eb] uppercase tracking-[0.25em] hero-blue-text">
                      Open Today
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm text-[#0f172a]">
                    <div className="flex items-center gap-2">
                      <span className="opacity-70">Mon–Thu:</span>
                      <span className="font-medium text-[#0a95eb] hero-blue-text">8AM – 10PM</span>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="opacity-70">Fri–Sun:</span>
                      <span className="font-medium text-[#0a95eb] hero-blue-text">8AM – 11PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}
