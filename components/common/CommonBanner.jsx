import Link from "next/link";

export default function CommonBanner({ title = "About Us", about = "About" }) {
  return (
    <section className="relative w-full overflow-hidden pt-20 sm:pt-28 lg:pt-36">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f6fbff] to-white" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
        <div className="text-center">
          {/* Title */}
          <h1
            className="
              mx-auto
              max-w-[22ch] sm:max-w-[26ch] lg:max-w-[30ch]
              text-[28px] leading-[1.15]
              sm:text-5xl sm:leading-[1.1]
              md:text-6xl
              font-normal text-[#0b2a4a]
              break-words
            "
            style={{
              fontFamily: "var(--font-mrs-saint)",
              wordSpacing: "0.25em",
            }}
          >
            {title}
          </h1>

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[12px] sm:text-sm"
          >
            <Link
              href="/"
              className="text-[#2677a7] underline-offset-4 hover:underline hover:text-[#1f5f87] transition"
            >
              Home
            </Link>

            <span className="text-[#2677a7] select-none">{">"}</span>

            <span className="text-[#0b2a4a] font-medium break-words">
              {about}
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
}