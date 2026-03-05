import { useParams } from "react-router-dom";
import { useState } from "react";
import medicinesData from "../data/medicines.json";
import ScrollReveal from "../components/ui/ScrollReveal";

import MedicineHeader from "../components/medicine/MedicineHeader";
import VariantSelector from "../components/medicine/VariantSelector";
import PriceComparison from "../components/medicine/PriceComparison";
import AlternativeMedicines from "../components/medicine/AlternativeMedicines";
import MedicineInfo from "../components/medicine/MedicineInfo";
import SaveHighlight from "../components/medicine/SaveHighlight";
import MedicalDisclaimer from "../components/medicine/MedicalDisclaimer"

export default function MedicineDetail() {
  const { slug } = useParams();

  const medicine = medicinesData.find((med) => med.slug === slug);

  if (!medicine) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Medicine not found
      </div>
    );
  }

  const [selectedVariant, setSelectedVariant] = useState(
    medicine.variants?.[0],
  );

  const janPrice = selectedVariant?.pricing?.janAushadhi?.price || 0;

  const brands = selectedVariant?.pricing?.brands || [];

  const maxSaving =
    brands.length > 0 ? Math.max(...brands.map((b) => b.price - janPrice)) : 0;

  return (
    <div className="bg-[#e6f2f2] min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <ScrollReveal>
          <MedicineHeader medicine={medicine} />
        </ScrollReveal>
        {/* <ScrollReveal>
          <MedicalDisclaimer />
        </ScrollReveal> */}

        <ScrollReveal>
          <VariantSelector
            variants={medicine.variants}
            selected={selectedVariant}
            setSelected={setSelectedVariant}
          />
        </ScrollReveal>

        <ScrollReveal>
          <SaveHighlight amount={maxSaving} />
        </ScrollReveal>

        <ScrollReveal>
          <PriceComparison variant={selectedVariant} />
        </ScrollReveal>

        <ScrollReveal>
          <AlternativeMedicines alternatives={medicine.alternatives} />
        </ScrollReveal>

        <ScrollReveal>
          <MedicineInfo medicine={medicine} />
        </ScrollReveal>
        <ScrollReveal>
          <MedicalDisclaimer />
        </ScrollReveal>
      </div>
    </div>
  );
}
