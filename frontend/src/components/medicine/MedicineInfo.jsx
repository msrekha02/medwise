export default function MedicineInfo({ medicine }) {

  if (!medicine) return null;

  const infoSections = [
    {
      title: "Uses",
      data: medicine.indications,
    },
    {
      title: "Side Effects",
      data: medicine.sideEffects,
    },
    {
      title: "Precautions",
      data: medicine.precautions,
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#2c5c5c]/10 shadow-sm p-8">

      {/* Header */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-[#1e3a3a]">
          Medical Information
        </h3>

        <p className="text-sm text-[#2c5c5c]/70 mt-1">
          Key information about the usage, safety and precautions of this medicine
        </p>
      </div>


      {/* Info Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {infoSections.map((section, i) => {

          if (!section.data || !section.data.length) return null;

          return (

            <div
              key={i}
              className="
                bg-[#e6f2f2]
                rounded-xl
                p-6
                border border-[#2c5c5c]/15
              "
            >

              {/* Section Title */}
              <h4 className="text-lg font-semibold text-[#1e3a3a] mb-4">
                {section.title}
              </h4>

              {/* List */}
              <ul className="space-y-2 text-sm text-[#1e3a3a]/90">

                {section.data.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2"
                  >

                    {/* bullet */}
                    <span className="
                      mt-[6px]
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-[#2c5c5c]
                    "></span>

                    <span>{item}</span>

                  </li>
                ))}

              </ul>

            </div>

          );
        })}

      </div>

    </div>
  );
}