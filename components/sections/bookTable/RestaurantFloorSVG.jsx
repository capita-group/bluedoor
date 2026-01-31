"use client";

import React from "react";

export default function RestaurantFloorSVG({
  tables = [],
  reservedTableIds,
  selectedTableId,
  onSelectTable,
}) {
  const isReserved = (id) => reservedTableIds?.has(id);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#2677a7]/20 bg-white shadow-sm">
      <svg
        viewBox="0 0 1200 720"
        className="h-auto w-full"
        role="img"
        aria-label="Restaurant seating layout"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ===== Base canvas ===== */}
        <rect x="0" y="0" width="1200" height="720" fill="#f8fbff" />

        {/* ===== Main dining area outline ===== */}
        <rect
          x="40"
          y="40"
          width="1120"
          height="640"
          rx="18"
          fill="white"
          stroke="rgba(38,119,167,0.25)"
          strokeWidth="3"
        />

        {/* ===== Top row: Counter zone (left) + Kitchen (right) ===== */}
        {/* Counter zone box */}
        <rect
          x="120"
          y="60"
          width="420"
          height="200"
          rx="16"
          fill="#eef6ff"
          stroke="rgba(38,119,167,0.25)"
          strokeWidth="2"
        />
        <text
          x="320"
          y="95"
          textAnchor="middle"
          fontSize="16"
          fill="#2677a7"
          opacity="0.85"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="800"
          letterSpacing="2"
        >
          LOUNGE
        </text>

        {/* Stools (right side like your sketch) */}
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={i}
            cx={520}
            cy={125 + i * 22}
            r="10"
            fill="#ffffff"
            stroke="rgba(38,119,167,0.25)"
            strokeWidth="2"
          />
        ))}

        {/* Gate under counter zone */}
        <g>
          <rect
            x="290"
            y="235"
            width="80"
            height="28"
            rx="10"
            fill="#fff7ed"
            stroke="rgba(234,88,12,0.35)"
            strokeWidth="2"
          />
          <text
            x="330"
            y="255"
            textAnchor="middle"
            fontSize="12"
            fill="#ea580c"
            opacity="0.9"
            fontFamily="ui-sans-serif, system-ui"
            fontWeight="700"
          >
            Gate
          </text>
        </g>

        {/* Kitchen box (top-right like sketch) */}
        <rect
          x="610"
          y="60"
          width="530"
          height="170"
          rx="16"
          fill="#f1f5f9"
          stroke="rgba(38,119,167,0.2)"
          strokeWidth="2"
        />
        <text
          x="875"
          y="150"
          textAnchor="middle"
          fontSize="28"
          fill="#2677a7"
          opacity="0.6"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="800"
        >
          Kitchen
        </text>

        {/* ===== Grass (bottom strip) ===== */}
        <rect
          x="60"
          y="640"
          width="1080"
          height="30"
          rx="12"
          fill="#ecfdf5"
          stroke="rgba(16,185,129,0.25)"
          strokeWidth="2"
        />
        <text
          x="600"
          y="662"
          textAnchor="middle"
          fontSize="14"
          fill="rgba(16,185,129,0.85)"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="700"
        >
          Grass
        </text>

        {/* ===== Grass (right vertical) ===== */}
        <rect
          x="1120"
          y="260"
          width="20"
          height="380"
          rx="10"
          fill="#ecfdf5"
          stroke="rgba(16,185,129,0.25)"
          strokeWidth="2"
        />
        <text
          x="1146"
          y="460"
          transform="rotate(90 1146 460)"
          textAnchor="middle"
          fontSize="13"
          fill="rgba(16,185,129,0.85)"
          fontFamily="ui-sans-serif, system-ui"
          fontWeight="700"
        >
          Grass
        </text>

        {/* ===== Right side Gate (as your sketch) ===== */}
        <g>
          <rect
            x="1060"
            y="370"
            width="80"
            height="55"
            rx="12"
            fill="#fff7ed"
            stroke="rgba(234,88,12,0.35)"
            strokeWidth="2"
          />
          <text
            x="1100"
            y="404"
            textAnchor="middle"
            fontSize="13"
            fill="#ea580c"
            opacity="0.95"
            fontFamily="ui-sans-serif, system-ui"
            fontWeight="800"
          >
            Gate
          </text>
        </g>

        {/* ===== Trees ===== */}
        <Tree x={980} y={470} label="Tree" />
        <Tree x={980} y={300} label="Tree" />

        {/* ===== TABLES (clickable) ===== */}
        <g>
          {tables.map((t) => {
            const reserved = isReserved(t.id);
            const selected = selectedTableId === t.id;

            const fill = reserved
              ? "rgba(239,68,68,0.12)"
              : selected
                ? "rgba(38,119,167,0.18)"
                : "rgba(38,119,167,0.08)";

            const stroke = reserved
              ? "rgba(239,68,68,0.6)"
              : selected
                ? "rgba(38,119,167,0.95)"
                : "rgba(38,119,167,0.35)";

            const cursor = reserved ? "not-allowed" : "pointer";

            return (
              <g
                key={t.id}
                transform={
                  t.rotation
                    ? `rotate(${t.rotation} ${t.x + t.w / 2} ${t.y + t.h / 2})`
                    : undefined
                }
                onClick={() => {
                  if (!reserved) onSelectTable?.(t);
                }}
                style={{ cursor }}
                role="button"
                aria-label={`Table ${t.label}, ${t.seats} seats, ${
                  reserved ? "reserved" : "available"
                }`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (!reserved) onSelectTable?.(t);
                  }
                }}
              >
                {t.shape === "round" ? (
                  <circle
                    cx={t.x + t.w / 2}
                    cy={t.y + t.h / 2}
                    r={Math.min(t.w, t.h) / 2}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={selected ? 5 : 3}
                  />
                ) : (
                  <rect
                    x={t.x}
                    y={t.y}
                    width={t.w}
                    height={t.h}
                    rx="16"
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={selected ? 5 : 3}
                  />
                )}

                {/* Chairs */}
                <ChairsForTable table={t} />

                {/* Label */}
                <text
                  x={t.x + t.w / 2}
                  y={t.y + t.h / 2 + 6}
                  textAnchor="middle"
                  fontSize="18"
                  fill={reserved ? "#ef4444" : "#2677a7"}
                  fontFamily="ui-sans-serif, system-ui"
                  fontWeight="900"
                >
                  {t.label}
                </text>

                <text
                  x={t.x + t.w / 2}
                  y={t.y + t.h / 2 + 30}
                  textAnchor="middle"
                  fontSize="12"
                  fill={reserved ? "#ef4444" : "#2677a7"}
                  opacity="0.7"
                  fontFamily="ui-sans-serif, system-ui"
                  fontWeight="700"
                >
                  {t.seats} seats
                </text>
              </g>
            );
          })}
        </g>

        {/* ===== Legend ===== */}
        <g transform="translate(70, 300)">
          <rect
            x="0"
            y="0"
            width="220"
            height="98"
            rx="16"
            fill="white"
            stroke="rgba(38,119,167,0.2)"
          />
          <LegendRow y={28} color="rgba(38,119,167,0.08)" label="Available" />
          <LegendRow y={56} color="rgba(38,119,167,0.18)" label="Selected" />
          <LegendRow y={84} color="rgba(239,68,68,0.12)" label="Reserved" red />
        </g>
      </svg>
    </div>
  );
}

function Tree({ x, y, label }) {
  return (
    <g>
      <circle cx={x} cy={y} r="18" fill="#d1fae5" />
      <circle cx={x - 12} cy={y + 6} r="13" fill="#bbf7d0" />
      <circle cx={x + 12} cy={y + 8} r="12" fill="#a7f3d0" />
      <text
        x={x + 40}
        y={y + 6}
        fontSize="14"
        fill="rgba(38,119,167,0.65)"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight="700"
      >
        {label}
      </text>
    </g>
  );
}

function LegendRow({ y, color, label, red = false }) {
  return (
    <g>
      <rect
        x="16"
        y={y - 14}
        width="18"
        height="18"
        rx="5"
        fill={color}
        stroke={red ? "rgba(239,68,68,0.6)" : "rgba(38,119,167,0.35)"}
        strokeWidth="2"
      />
      <text
        x="44"
        y={y}
        fontSize="14"
        fill={red ? "#ef4444" : "#2677a7"}
        opacity="0.85"
        fontFamily="ui-sans-serif, system-ui"
        fontWeight={700}
      >
        {label}
      </text>
    </g>
  );
}

function ChairsForTable({ table }) {
  const cx = table.x + table.w / 2;
  const cy = table.y + table.h / 2;

  const count = Math.min(Math.max(table.seats, 2), 10);
  const baseR = Math.min(table.w, table.h) / 2;
  const r = Math.max(baseR + 18, 34);

  const dots = Array.from({ length: count }).map((_, i) => {
    const a = (Math.PI * 2 * i) / count;
    return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
  });

  return (
    <g opacity="0.95">
      {dots.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="7"
          fill="white"
          stroke="rgba(38,119,167,0.28)"
          strokeWidth="2"
        />
      ))}
    </g>
  );
}
