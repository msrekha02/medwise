import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ScrollReveal from "../components/ui/ScrollReveal";

import MedicineHeader from "../components/medicine/MedicineHeader";
import VariantSelector from "../components/medicine/VariantSelector";
import PriceComparison from "../components/medicine/PriceComparison";
import AlternativeMedicines from "../components/medicine/AlternativeMedicines";
import MedicineInfo from "../components/medicine/MedicineInfo";
import SaveHighlight from "../components/medicine/SaveHighlight";
import MedicalDisclaimer from "../components/medicine/MedicalDisclaimer";

export default function MedicineDetail() {

  const { slug } = useParams();

  const [medicine, setMedicine] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {

    fetch(`http://localhost:5000/api/medicines`)
      .then(res => res.json())
      .then(data => {

        const found = data.find(med => med.slug === slug);

        setMedicine(found);

        if (found) {
          setSelectedVariant(found.variants?.[0]);
        }

      });

  }, [slug]);

  if (!medicine) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading medicine...
      </div>
    );
  }

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