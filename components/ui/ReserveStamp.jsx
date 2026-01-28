"use client";

export default function ReserveStamp({
  size = 340,
  text = "RESERVE YOUR TABLE",
  tilt = 65,
  spinSeconds = 19,
}) {
  const accent = "#0a95eb";

  return (
    // OUTER → static tilt
    <div
      className="relative"
      style={{
        width: size,
        height: size,
        transform: `rotate(${tilt}deg)`,
      }}
    >
      {/* INNER → infinite spin */}
      <div
        style={{
          width: "100%",
          height: "100%",
          animation: `reserveSpin ${spinSeconds}s linear infinite`,
        }}
      >
        {/* GLASS DISC */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(145deg, rgba(10,149,235,0.10), rgba(255,255,255,0.02))",
            border: "1.5px solid #fff",
            boxShadow: `
              0 18px 50px rgba(0,0,0,0.25),
              inset 0 0 0 1px rgba(255,255,255,0.25)
            `,
            backdropFilter: "blur(7px)",
            WebkitBackdropFilter: "blur(7px)",
          }}
        />

        <svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          style={{ display: "block", position: "relative" }}
        >
          {/* TEXT PATH */}
          <defs>
            <path
              id="circleTextPath"
              d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
            />
          </defs>

          {/* CIRCULAR TEXT */}
          <text
            fill={accent}
            fontSize="12"
            letterSpacing="1"
            wordSpacing="16"
            fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
            fontWeight="600"
            opacity="0.95"
          >
            <textPath
              href="#circleTextPath"
              startOffset="52%"
              textAnchor="middle"
            >
              {text} • {text} •
            </textPath>
          </text>

          {/* CENTER MARK */}
          <g
            transform="translate(100 100)"
            fill="none"
            stroke="#15b4ed"
            strokeWidth="1.4"
            opacity="0.95"
          >
            {/* Top rhombus */}
            <rect
              x="-10"
              y="-26"
              width="20"
              height="20"
              rx="3"
              transform="rotate(45 0 -16)"
            />

            {/* Middle rhombus (overlaps top & bottom) */}
            <rect
              x="-10"
              y="-10"
              width="20"
              height="20"
              rx="3"
              transform="rotate(45 0 0)"
            />

            {/* Bottom rhombus */}
            <rect
              x="-10"
              y="6"
              width="20"
              height="20"
              rx="3"
              transform="rotate(45 0 16)"
            />
          </g>
        </svg>
      </div>

      {/* KEYFRAMES */}
      <style jsx>{`
        @keyframes reserveSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
