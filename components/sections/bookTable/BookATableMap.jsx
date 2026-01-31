"use client";

import { useMemo, useState } from "react";
import RestaurantFloorSVG from "./RestaurantFloorSVG";
import ReserveTableModal from "./ReserveTableModal";

export default function BookATableMap() {
  // Positions for viewBox 1200x720 matching your hand sketch
const tables = useMemo(
  () => [
    // Top-left inside lounge / counter zone
    { id: "tl1", label: "T1", seats: 4, x: 210, y: 95, w: 100, h: 100, shape: "round" },

    // Center big round table: R2 (now same size)
    { id: "r2", label: "R2", seats: 6, x: 585, y: 290, w: 120, h: 120, shape: "round" },

    // Top-right round table: R1
    { id: "r1", label: "R1", seats: 4, x: 980, y: 260, w: 120, h: 120, shape: "round" },

    // Left-mid small round → same size now
    { id: "r3", label: "R3", seats: 4, x: 360, y: 420, w: 120, h: 120, shape: "round" },

    // Bottom-center rectangle (kept unchanged)
    { id: "t2", label: "T2", seats: 8, x: 600, y: 540, w: 260, h: 120, shape: "rect" },

    // Bottom-right round table
    { id: "r4", label: "R4", seats: 4, x: 965, y: 545, w: 120, h: 120, shape: "round" },
  ],
  []
);


  // Demo reserved
  const [reserved, setReserved] = useState(() => new Set(["r1"]));
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelect = (table) => {
    setSelected(table);
    setModalOpen(true);
  };

  const handleConfirm = (payload) => {
    // ✅ connect your API here later
    setReserved((prev) => new Set([...prev, payload.tableId]));
    setModalOpen(false);
    setSelected(null);
    console.log("Reservation:", payload);
  };

  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <p className="text-xs tracking-[0.35em] text-[#2677a7]/70">RESERVATION</p>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2677a7] tracking-wide">
            Book a Table
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#2677a7]/70 max-w-2xl mx-auto">
            Click an available table to reserve it. Reserved tables are locked.
          </p>
        </div>

        <div className="mt-10">
          <RestaurantFloorSVG
            tables={tables}
            reservedTableIds={reserved}
            selectedTableId={selected?.id ?? null}
            onSelectTable={handleSelect}
          />
        </div>
      </div>

      <ReserveTableModal
        isOpen={modalOpen}
        table={selected}
        onClose={() => {
          setModalOpen(false);
          setSelected(null);
        }}
        onConfirm={handleConfirm}
      />
    </section>
  );
}
