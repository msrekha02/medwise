import { ExternalLink } from "lucide-react";

export default function PriceComparison({ variant }) {
  if (!variant) return null;

  const janPrice = variant.pricing?.janAushadhi?.price;
  const brands = variant.pricing?.brands || [];

  const maxSave = Math.max(...brands.map((b) => b.price - janPrice));
  if (!janPrice) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-[#2c5c5c]/10 p-8">
        <h3 className="text-xl font-semibold text-[#1e3a3a] mb-3">
          Brand Price Comparison
        </h3>

        <p className="text-sm text-[#2c5c5c]/80">
          Jan Aushadhi price is currently not available for this medicine.
        </p>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#2c5c5c]/10 p-8">
      {/* Section Header */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#1e3a3a]">
          Brand Price Comparison
        </h3>

        <p className="text-sm text-[#2c5c5c]/70 mt-1">
          Jan Aushadhi Price
          <span className="font-semibold text-[#1e3a3a] ml-2">₹{janPrice}</span>
        </p>
      </div>

      {/* Brand Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {brands.map((brand, i) => {
          const save = brand.price - janPrice;
          const isBest = save === maxSave;

          return (
            <div
              key={i}
              className={`
                relative
                bg-[#e6f2f2]
                rounded-xl
                p-6
                border
                transition
                flex flex-col justify-between

                ${
                  isBest
                    ? "border-[#2c5c5c] shadow-sm"
                    : "border-[#2c5c5c]/15 hover:border-[#2c5c5c]/40"
                }
              `}
            >
              {/* Best Value Badge */}
              {isBest && (
                <span
                  className="
                  absolute
                  top-3
                  right-3
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-[#2c5c5c]
                  text-white
                  font-medium
                "
                >
                  Best Saving
                </span>
              )}

              {/* Brand Name */}
              <h4 className="text-lg font-semibold text-[#1e3a3a] mb-4">
                {brand.name}
              </h4>

              {/* Price Section */}
              <div className="mb-6">
                <p className="text-sm text-[#2c5c5c]/70">Brand Price</p>

                <p className="text-2xl font-bold text-[#1e3a3a]">
                  ₹{brand.price}
                </p>

                <p className="text-sm text-[#2c5c5c] font-medium mt-1">
                  Save ₹{save}
                </p>

                {/* Price comparison line */}
                <div className="mt-3 h-1 bg-white rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#2c5c5c]"
                    style={{
                      width: `${Math.min((save / brand.price) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Buy Button */}
              <a
                href={`https://pharmeasy.in/search/all?name=${brand.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
    flex items-center justify-center gap-2
    px-4 py-3
    rounded-lg
    bg-[#2c5c5c]
    text-white
    text-sm
    font-medium
    hover:bg-[#1e3a3a]
    transition
  "
              >
                Buy medicine
                <ExternalLink size={14} strokeWidth={2} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
