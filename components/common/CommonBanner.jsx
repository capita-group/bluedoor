import Link from "next/link";

export default function CommonBanner({ title = "About Us", about = "About" }) {
  return (
    <section className="relative w-full overflow-hidden pt-24 sm:pt-32 lg:pt-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f6fbff] to-white" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-14 sm:py-18 lg:py-20">
        <div className="text-center">
          {/* Title */}
          <h1
            className="
              text-[34px] leading-[1.15]
              sm:text-5xl sm:leading-[1.1]
              md:text-6xl
              font-normal text-[#0b2a4a]
              break-words
            "
            style={{
              fontFamily: "var(--font-mrs-saint)",
              wordSpacing: "0.35em",
            }}
          >
            {title}
          </h1>

          {/* Breadcrumb */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[13px] sm:text-sm">
            <Link
              href="/"
              className="text-[#2677a7] hover:underline hover:text-[#1f5f87] transition"
            >
              Home
            </Link>
            <span className="text-[#2677a7]">{">"}</span>
            <span className="text-[#0b2a4a] font-medium">{about}</span>
          </div>
        </div>
      </div>
    </section>
  );
}