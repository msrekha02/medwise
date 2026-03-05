import { ExternalLink } from "lucide-react";

export default function MedicineHeader({ medicine }) {

  if (!medicine) return null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2c5c5c]/10">

      <div className="flex items-start justify-between">

        {/* Left Content */}
        <div>

          <h1 className="text-3xl font-bold text-[#1e3a3a] mb-2">
            {medicine.genericName}
          </h1>

          <span className="
            text-xs
            px-3
            py-1
            rounded-full
            bg-[#e6f2f2]
            text-[#2c5c5c]
            font-medium
          ">
            {medicine.category}
          </span>

          <p className="text-[#1e3a3a]/80 mt-4 max-w-xl leading-relaxed">
            {medicine.description}
          </p>

        </div>


        {/* Buy Button */}
        <a
          href={`https://pharmeasy.in/search/all?name=${medicine.genericName}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            px-5 py-3
            rounded-xl
            bg-[#2c5c5c]
            text-white
            text-sm
            font-medium
            hover:bg-[#1e3a3a]
            transition
          "
        >
          Buy Generic
          <ExternalLink size={16} />
        </a>

      </div>

    </div>
  );
}