// components/MenuSection.jsx
"use client";

import Image from "next/image";

export default function MenuSection() {
  return (
    <>
      {/* ======================= MAIN COURSES ======================= */}
      <section className="relative w-full overflow-hidden py-20 lg:py-28">
        {/* vertical glow lines */}
        <div className="pointer-events-none absolute inset-y-0 left-[30%] hidden w-px lg:block">
          <span className="absolute inset-0 bg-[#2677a7]/20" />
          <span className="absolute left-1/2 top-0 h-28 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2677a7] to-transparent animate-glow-travel" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-[65%] hidden w-px lg:block">
          <span className="absolute inset-0 bg-[#2677a7]/20" />
          <span className="absolute left-1/2 top-0 h-28 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2677a7] to-transparent animate-glow-travel delay-2000" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
            {/* LEFT IMAGE */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[0_260px_0_0] shadow-[0_30px_60px_rgba(0,0,0,0.22)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/img/plate.jpg"
                    alt="Main Course"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* RIGHT MENU */}
            <div className="relative">
              <div className="mb-10 flex items-center justify-center lg:justify-start gap-4">
                <span className="text-[#2677a7]/70">◇</span>
                <h3 className="text-sm uppercase tracking-[0.45em] text-[#2677a7]">
                  Main Courses
                </h3>
                <span className="text-[#2677a7]/70">◇</span>
              </div>

              <div className="mx-auto max-w-[520px] lg:mx-0">
                <ul className="space-y-10">
                  {[
                    {
                      t: "Herbed Lamb Steaks",
                      p: "$89",
                      d: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
                    },
                    {
                      t: "Tartare de Boeuf",
                      p: "$90",
                      d: "Hand cut 100% beef steak tartar with french baguette",
                    },
                    {
                      t: "Classic Cesar Salad",
                      p: "$60",
                      d: "Cold iceberg salad with avocado and fresh aromatic herbs",
                    },
                    { t: "Dumplings", p: "$76", d: "Homemade beef soup with dumplings" },
                    {
                      t: "Foie Gras",
                      p: "$63",
                      d: "Foie gras terrine served with homemade toasted brioche",
                    },
                  ].map((it) => (
                    <li key={it.t}>
                      <div className="flex items-start justify-between gap-6">
                        <h4 className="text-sm font-medium uppercase tracking-[0.18em] text-[#2677a7]">
                          {it.t}
                        </h4>
                        <span className="text-sm text-[#2677a7]/85">{it.p}</span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[#2677a7]/70">
                        {it.d}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= DESSERTS ======================= */}
      <section className="relative w-full overflow-hidden py-20 lg:py-28">
        {/* vertical glow lines */}
        <div className="pointer-events-none absolute inset-y-0 left-[30%] hidden w-px lg:block">
          <span className="absolute inset-0 bg-[#2677a7]/20" />
          <span className="absolute left-1/2 top-0 h-28 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2677a7] to-transparent animate-glow-travel" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-[65%] hidden w-px lg:block">
          <span className="absolute inset-0 bg-[#2677a7]/20" />
          <span className="absolute left-1/2 top-0 h-28 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2677a7] to-transparent animate-glow-travel delay-2000" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
            {/* LEFT MENU */}
            <div className="relative max-w-xl">
              <div className="mb-10 flex items-center gap-4">
                <span className="text-[#2677a7]/70">◇</span>
                <h3 className="text-sm uppercase tracking-[0.45em] text-[#2677a7]">
                  Desserts
                </h3>
                <span className="text-[#2677a7]/70">◇</span>
              </div>

              <ul className="space-y-10">
                {[
                  {
                    t: "Chocolate Divine",
                    p: "$36",
                    d: "Chocolate brownie, Venetian chocolate ice cream, chocolate syrup, bananas & whipped cream",
                  },
                  {
                    t: "Apple Caramel Crumble",
                    p: "$41",
                    d: "Warm apple & cinnamon bark compote over French vanilla ice cream",
                  },
                  {
                    t: "Blueberry Shortcake",
                    p: "$33",
                    d: "Cheesecake bites and wild blueberry compote over French vanilla ice cream",
                  },
                  {
                    t: "Carrot Cake",
                    p: "$35",
                    d: "Covered in butter cream icing and topped with walnuts",
                  },
                  {
                    t: "Hummingbird Cake",
                    p: "$45",
                    d: "Toasted coconut, pineapple and banana combine for a delicious cake flavour",
                  },
                ].map((it) => (
                  <li key={it.t}>
                    <div className="flex items-start justify-between gap-6">
                      <h4 className="text-sm font-medium uppercase tracking-[0.18em] text-[#2677a7]">
                        {it.t}
                      </h4>
                      <span className="text-sm text-[#2677a7]/85">{it.p}</span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[#2677a7]/70">
                      {it.d}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT IMAGES */}
            <div className="relative">
              {/* top circular image */}
              <div className="relative mx-auto h-[360px] w-[360px] overflow-hidden rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.22)] sm:h-[420px] sm:w-[420px]">
                <Image
                  src="/img/plate.jpg"
                  alt="Dessert"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* bottom wide image */}
              <div className="relative mx-auto mt-10 h-[220px] w-full max-w-[520px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.22)] sm:h-[260px]">
                <Image
                  src="/img/plate.jpg"
                  alt="Dessert platter"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= DRINKS ======================= */}
      <section className="relative w-full overflow-hidden py-20 lg:py-28">
        {/* vertical glow lines */}
        <div className="pointer-events-none absolute inset-y-0 left-[30%] hidden w-px lg:block">
          <span className="absolute inset-0 bg-[#2677a7]/20" />
          <span className="absolute left-1/2 top-0 h-28 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2677a7] to-transparent animate-glow-travel" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-[65%] hidden w-px lg:block">
          <span className="absolute inset-0 bg-[#2677a7]/20" />
          <span className="absolute left-1/2 top-0 h-28 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2677a7] to-transparent animate-glow-travel delay-2000" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16">
            {/* LEFT IMAGE */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[0_260px_0_0] shadow-[0_30px_60px_rgba(0,0,0,0.22)]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/img/plate.jpg"
                    alt="Drink"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* RIGHT MENU */}
            <div className="relative">
              <div className="mb-10 flex items-center justify-center lg:justify-start gap-4">
                <span className="text-[#2677a7]/70">◇</span>
                <h3 className="text-sm uppercase tracking-[0.45em] text-[#2677a7]">
                  Drinks
                </h3>
                <span className="text-[#2677a7]/70">◇</span>
              </div>

              <div className="mx-auto max-w-[520px] lg:mx-0">
                <ul className="space-y-10">
                  {[
                    {
                      t: "Breakbeet",
                      p: "$32",
                      d: "Russian standard platinum vodka, raspberry & beetroot cordial, lemon, spicy ginger beer",
                    },
                    {
                      t: "Japanese Fizz",
                      p: "$26",
                      d: "Lemongrass infused russian standard platinum vodka, lime, jasmin green tea & matcha soda",
                    },
                    {
                      t: "Sgroppino",
                      p: "$37",
                      d: "Italicus rosolio di bergamotto, lemon sorbet, prosecco carpe noctem",
                    },
                    {
                      t: "Mango Dusk",
                      p: "$37",
                      d: "Lemongrass infused russian standard platinum vodka, lime, jasmin green tea & matcha soda",
                    },
                    {
                      t: "Bloody Orange",
                      p: "$37",
                      d: "Russian standard platinum vodka, raspberry & beetroot cordial, lemon, spicy ginger beer",
                    },
                    {
                      t: "Pineapple Sunrise",
                      p: "$35",
                      d: "Lemongrass infused russian standard platinum vodka, lime, jasmin green tea & matcha soda",
                    },
                  ].map((it) => (
                    <li key={it.t}>
                      <div className="flex items-start justify-between gap-6">
                        <h4 className="text-sm font-medium uppercase tracking-[0.18em] text-[#2677a7]">
                          {it.t}
                        </h4>
                        <span className="text-sm text-[#2677a7]/85">{it.p}</span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[#2677a7]/70">
                        {it.d}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#2677a7]/10 to-transparent" />
      </section>
    </>
  );
}
