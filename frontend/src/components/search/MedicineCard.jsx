import React from "react";
import { useNavigate } from "react-router-dom";

export default function MedicineCard({ medicine, highlightQuery }) {
  const navigate = useNavigate();

  const firstVariant = medicine.variants?.[0];

  const handleClick = () => {
    // const user =
    //   JSON.parse(localStorage.getItem("user")) || { username: "guest" };

    // const historyKey = `medwise-history-${user.username}`;

    const user = JSON.parse(localStorage.getItem("user")) || {};

    const username = user.username || user.name || user.email || "guest";

    const historyKey = `medwise-history-${username}`;
    const history = JSON.parse(localStorage.getItem(historyKey)) || [];

    const updated = [
      medicine.genericName,
      ...history.filter((h) => h !== medicine.genericName),
    ].slice(0, 5);

    localStorage.setItem(historyKey, JSON.stringify(updated));

    window.dispatchEvent(new Event("history-updated"));

    navigate(`/medicine/${medicine.slug}`);
  };

  return (
    <div
      onClick={handleClick}
      className="
        group
        bg-white
        rounded-2xl
        border border-[#2c5c5c]/15
        p-6
        cursor-pointer
        transition
        hover:border-[#2c5c5c]/40
        hover:shadow-lg
      "
    >
      {/* Top Section */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-[#e6f2f2] text-[#2c5c5c] font-medium">
            {medicine.category}
          </span>

          {medicine.prescriptionRequired && (
            <span className="text-xs px-3 py-1 rounded-full bg-[#2c5c5c]/10 text-[#1e3a3a] font-medium">
              Rx
            </span>
          )}
        </div>

        <span className="text-sm text-[#2c5c5c]/70">{firstVariant?.form}</span>
      </div>

      {/* Medicine Name */}
      <h3 className="text-lg font-semibold text-[#1e3a3a]">
        {highlightQuery
          ? highlightQuery(medicine.genericName)
          : medicine.genericName}
      </h3>

      {/* Strength */}
      <p className="text-sm text-[#2c5c5c]/70 mt-1">
        Strength: {firstVariant?.strength}
      </p>

      {/* Used For */}
      <p className="text-sm text-[#1e3a3a]/80 mt-4 line-clamp-2">
        <span className="font-medium">Used For:</span>{" "}
        {medicine.indications?.map((i, idx) => (
          <span key={idx}>
            {highlightQuery ? highlightQuery(i) : i}

            {idx < medicine.indications.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>

      {/* Bottom */}
      <div className="mt-5 flex justify-end">
        <span className="text-sm text-[#2c5c5c] opacity-0 group-hover:opacity-100 transition">
          View Details →
        </span>
      </div>
    </div>
  );
}
