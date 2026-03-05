import { useNavigate } from "react-router-dom";

export default function AlternativeMedicines({ alternatives = [] }) {

  const navigate = useNavigate();

  if (!alternatives.length) return null;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#2c5c5c]/10">

      {/* Section Header */}
      <div className="mb-8">

        <h3 className="text-xl font-semibold text-[#1e3a3a]">
          Therapeutic Alternatives
        </h3>

        <p className="text-sm text-[#2c5c5c]/70 mt-1">
          Other medicines that provide a similar therapeutic effect
        </p>

      </div>


      {/* Alternatives Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {alternatives.map((alt, i) => (

          <div
            key={i}
            onClick={() => navigate(`/medicine/${alt.slug}`)}
            className="
              cursor-pointer
              bg-[#e6f2f2]
              rounded-xl
              p-5
              border border-[#2c5c5c]/15
              hover:border-[#2c5c5c]/40
              hover:shadow-sm
              transition
              flex flex-col justify-between
            "
          >

            {/* Medicine Name */}
            <h4 className="text-lg font-semibold text-[#1e3a3a] mb-2">
              {alt.slug}
            </h4>

            {/* Explanation */}
            <p className="text-sm text-[#2c5c5c]/80 leading-relaxed">
              {alt.note}
            </p>

            {/* Action */}
            <span className="
              mt-4
              text-sm
              font-medium
              text-[#2c5c5c]
              group-hover:text-[#1e3a3a]
            ">
              View Medicine →
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}