export default function SaveHighlight({ amount }) {

  if (!amount || amount <= 0) return null;

  return (
    <div className="relative bg-[#2c5c5c] text-white rounded-2xl px-8 py-5 shadow-sm border border-[#2c5c5c]/20 overflow-hidden">

      {/* Decorative Accent */}
      <div className="absolute right-0 top-0 h-full w-24 bg-[#1e3a3a]/30 blur-2xl"></div>

      {/* Content */}
      <div className="relative flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-wide text-[#e6f2f2]/80 mb-1">
            Maximum Savings
          </p>

          <h3 className="text-2xl font-bold">
            ₹{amount}
          </h3>

          <p className="text-sm text-[#e6f2f2]/80 mt-1">
            Compared to leading brands
          </p>

        </div>

  

      </div>

    </div>
  );
}