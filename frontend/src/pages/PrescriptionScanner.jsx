import React, { useState } from "react";
import medicinesData from "../data/medicines.json";
import MedicineCard from "../components/search/MedicineCard";
import { UploadCloud } from "lucide-react";

export default function PrescriptionScanner() {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [text, setText] = useState("");
  const [detected, setDetected] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {

    const selected = e.target.files[0];

    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));

  };

  const handleScan = async () => {

    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch("http://localhost:5000/api/prescription/scan", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    const extracted = data.text;

    setText(extracted);

    const found = medicinesData.filter((med) =>
      extracted.toLowerCase().includes(med.genericName.toLowerCase())
    );

    setDetected(found);

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fbfb] pt-28 pb-20 px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* TITLE */}

        <h1 className="text-4xl font-semibold text-[#1e3a3a] mb-4">
          Scan Prescription
        </h1>

        <p className="text-[#2c5c5c]/70 mb-12">
          Upload your prescription and MedWise will detect medicines automatically.
        </p>


        {/* UPLOAD AREA */}

        <div className="bg-white border border-[#2c5c5c]/20 rounded-3xl p-10 shadow-sm hover:shadow-md transition">

          <label
            className="
            flex flex-col items-center justify-center
            border-2 border-dashed border-[#2c5c5c]/30
            rounded-2xl
            p-12
            cursor-pointer
            hover:border-[#2c5c5c]
            hover:bg-[#e6f2f2]/40
            transition
            "
          >

            {preview ? (
              <img
                src={preview}
                alt="preview"
                className="w-56 rounded-xl shadow-sm"
              />
            ) : (
              <>
                <UploadCloud size={42} className="text-[#2c5c5c] mb-3"/>
                <span className="text-[#1e3a3a] font-medium">
                  Click to upload prescription
                </span>
                <span className="text-sm text-[#2c5c5c]/60 mt-1">
                  JPG, PNG supported
                </span>
              </>
            )}

            <input
              type="file"
              onChange={handleFile}
              className="hidden"
            />

          </label>


          {/* SCAN BUTTON */}

          <button
            onClick={handleScan}
            className="
            mt-8
            px-8 py-3
            bg-[#2c5c5c]
            text-white
            rounded-xl
            font-medium
            hover:bg-[#1e3a3a]
            hover:scale-[1.02]
            transition
            "
          >
            {loading ? "Scanning..." : "Scan Prescription"}
          </button>

        </div>


        {/* OCR RESULT */}

        {text && (

          <div className="mt-16 text-left">

            <h2 className="text-xl font-semibold text-[#1e3a3a] mb-4">
              Extracted Text
            </h2>

            <div className="
              bg-white
              border border-[#2c5c5c]/20
              rounded-2xl
              p-6
              shadow-sm
              max-h-60
              overflow-y-auto
            ">

              <pre className="text-sm text-[#2c5c5c]/80 whitespace-pre-wrap">
                {text}
              </pre>

            </div>

          </div>

        )}


        {/* DETECTED MEDICINES */}

        {detected.length > 0 && (

          <div className="mt-16 text-left">

            <h2 className="text-xl font-semibold text-[#1e3a3a] mb-6">
              Detected Medicines
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {detected.map((med) => (
                <MedicineCard
                  key={med.slug}
                  medicine={med}
                />
              ))}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}