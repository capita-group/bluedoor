import Link from "next/link";

export default function CommonBanner({ title = "About Us", about = "About" }) {
  return (
    <section className="relative w-full overflow-hidden pt-40">
      {/* White Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f6fbff] to-white" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20 sm:py-24">
        <div className="text-center">
          {/* Title with custom font */}
          <h1
            className="text-3xl sm:text-4xl md:text-6xl font-normal text-[#0b2a4a]"
            style={{
              fontFamily: "var(--font-mrs-saint)",
              wordSpacing: "0.5em", 
            }}
          >
            {title}
          </h1>
          {/* Breadcrumb */}
          <p className="mt-6 text-sm tracking-wide text-[#2677a7]">
            <Link
              href="/"
              className="hover:underline hover:text-[#1f5f87] transition"
            >
              Home
            </Link>
            <span className="mx-2">{">"}</span>
            <span className="text-[#0b2a4a] font-medium">{about}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
