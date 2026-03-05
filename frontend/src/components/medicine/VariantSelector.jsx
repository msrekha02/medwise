export default function VariantSelector({ variants = [], selected, setSelected }) {

  if (!variants.length) return null;

  return (
    <div>

      <h3 className="text-sm font-semibold text-[#2c5c5c] mb-3 ">
        Available Strength
      </h3>

      <div className="flex gap-3">

        {variants.map((variant, index) => {

          const active = selected?.strength === variant.strength;

          return (
            <button
              key={index}
              onClick={() => setSelected(variant)}
              className={`
                px-4 py-2
                rounded-lg
                text-sm
                border
                transition

                ${active
                  ? "bg-[#2c5c5c] text-white border-[#2c5c5c]"
                  : "bg-white text-[#1e3a3a] border-[#2c5c5c]/30 hover:border-[#2c5c5c]"
                }
              `}
            >
              {variant.strength}
            </button>
          );
        })}

      </div>

    </div>
  );
}