"use client";

import { useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ReserveTableModal({ isOpen, table, onClose, onConfirm }) {
  const ref = useRef(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: table?.seats ?? 2,
    notes: "",
  });

  useEffect(() => {
    if (!isOpen) return;
    setForm((p) => ({ ...p, guests: table?.seats ?? 2 }));
  }, [isOpen, table]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (ref.current && !ref.current.contains(e.target)) onClose?.();
      }}
    >
      <div
        ref={ref}
        className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden border border-[#2677a7]/15"
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-[#2677a7] to-[#3aacc5]" />

        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition"
          aria-label="Close"
        >
          <FaTimes className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-7">
          <h3 className="text-2xl font-extrabold text-[#2677a7]">
            Reserve {table ? `Table ${table.label}` : "a Table"}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Seats: <span className="font-semibold">{table?.seats ?? "-"}</span>
          </p>

          <form
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              onConfirm?.({ ...form, tableId: table?.id, tableLabel: table?.label });
            }}
          >
            <Field label="Name" required>
              <input
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-4 focus:ring-[#2677a7]/15 focus:border-[#2677a7]"
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                required
              />
            </Field>

            <Field label="Phone" required>
              <input
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-4 focus:ring-[#2677a7]/15 focus:border-[#2677a7]"
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                required
              />
            </Field>

            <Field label="Date" required>
              <input
                type="date"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-4 focus:ring-[#2677a7]/15 focus:border-[#2677a7]"
                value={form.date}
                onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                required
              />
            </Field>

            <Field label="Time" required>
              <input
                type="time"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-4 focus:ring-[#2677a7]/15 focus:border-[#2677a7]"
                value={form.time}
                onChange={(e) => setForm((p) => ({ ...p, time: e.target.value }))}
                required
              />
            </Field>

            <Field label="Guests" required>
              <select
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-4 focus:ring-[#2677a7]/15 focus:border-[#2677a7]"
                value={form.guests}
                onChange={(e) => setForm((p) => ({ ...p, guests: Number(e.target.value) }))}
                required
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1} Guest{i ? "s" : ""}
                  </option>
                ))}
              </select>
            </Field>

            <div className="sm:col-span-2">
              <Field label="Notes (optional)">
                <textarea
                  rows={3}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-4 focus:ring-[#2677a7]/15 focus:border-[#2677a7] resize-none"
                  value={form.notes}
                  onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                />
              </Field>
            </div>

            <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-xl border border-[#2677a7]/25 px-5 py-3 font-semibold text-[#2677a7] hover:bg-[#2677a7]/5 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-[#2677a7] to-[#3aacc5] px-5 py-3 font-semibold text-white hover:opacity-95 transition shadow-lg shadow-[#2677a7]/20"
              >
                Confirm Reservation
              </button>
            </div>

            <p className="sm:col-span-2 text-xs text-gray-500 text-center mt-2">
              * This is a demo UI. Connect to your API/database to save reservations.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-gray-700">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </span>
      {children}
    </label>
  );
}
