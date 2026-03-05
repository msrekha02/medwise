import React from "react";

export default function SearchFilters({ filters, onFilterChange, onClear }) {
  const hasFilters =
    filters.category !== "all" ||
    filters.form !== "all" ||
    filters.prescription !== "all";

  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* CATEGORY */}
      <select
        value={filters.category}
        onChange={(e) => onFilterChange("category", e.target.value)}
        className="
          px-4 py-2
          rounded-lg
          bg-[#e6f2f2]
          text-[#1e3a3a]
          text-sm
          border border-[#2c5c5c]/40
          focus:outline-none
          focus:ring-2 focus:ring-[#2c5c5c]/10
          transition
        "
      >
        <option value="all">All Categories</option>
        <option value="NSAID">NSAID</option>
        <option value="Antibiotic">Antibiotic</option>
        <option value="Antihistamine">Antihistamine</option>
        <option value="Vitamin">Vitamin</option>
        <option value="Antidiabetic">Antidiabetic</option>
      </select>

      {/* FORM */}
      <select
        value={filters.form}
        onChange={(e) => onFilterChange("form", e.target.value)}
        className="
          px-4 py-2
          rounded-lg
          bg-[#e6f2f2]
          text-[#1e3a3a]
          text-sm
          border border-[#2c5c5c]/40
          focus:outline-none
          focus:ring-2 focus:ring-[#2c5c5c]/10
          transition
        "
      >
        <option value="all">All Forms</option>
        <option value="Tablet">Tablet</option>
        <option value="Injection">Injection</option>
        <option value="Inhaler">Inhaler</option>
        <option value="Topical Gel">Topical Gel</option>
      </select>

      {/* PRESCRIPTION */}
      <select
        value={filters.prescription}
        onChange={(e) => onFilterChange("prescription", e.target.value)}
        className="
          px-4 py-2
          rounded-lg
          bg-[#e6f2f2]
          text-[#1e3a3a]
          text-sm
          border border-[#2c5c5c]/40
          focus:outline-none
          focus:ring-2 focus:ring-[#2c5c5c]/10
          transition
        "
      >
        <option value="all">All</option>
        <option value="true">Prescription Required</option>
        <option value="false">No Prescription</option>
      </select>

      {/* CLEAR BUTTON */}
      {hasFilters && (
        <button
          onClick={onClear}
          className="
            px-6 py-3
            rounded-xl
            bg-[#2c5c5c]
            text-white
            text-sm
            font-medium
            hover:bg-[#1e3a3a]
            transition
          "
        >
          Clear
        </button>
      )}
    </div>
  );
}
