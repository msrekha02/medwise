import React, { useState, useMemo, useEffect } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchFilters from "../components/search/SearchFilters";
import MedicineCard from "../components/search/MedicineCard";
import medicinesData from "../data/medicines.json";

export default function Search() {
  const [query, setQuery] = useState("");

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const username = user.username || user.name || user.email || "guest";

  const historyKey = `medwise-history-${username}`;

  // const user = JSON.parse(localStorage.getItem("user")) || {
  //   username: "guest",
  // };

  // const historyKey = `medwise-history-${user.username}`;

  const [filters, setFilters] = useState({
    category: "all",
    form: "all",
    prescription: "all",
  });

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem(historyKey);
    return saved ? JSON.parse(saved) : [];
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const saveSearch = (term) => {
    if (!term || term.length < 2) return;

    const updated = [term, ...history.filter((h) => h !== term)].slice(0, 5);

    setHistory(updated);

    localStorage.setItem(historyKey, JSON.stringify(updated));
  };

  const handleSearch = () => {
    saveSearch(query);
  };

  const removeHistory = (index) => {
    const updated = history.filter((_, i) => i !== index);

    setHistory(updated);

    localStorage.setItem(historyKey, JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.setItem(historyKey, JSON.stringify([]));
  };

  const suggestions = useMemo(() => {
    if (!query || query.length < 2) return [];

    return medicinesData
      .filter((med) =>
        med.genericName.toLowerCase().includes(query.toLowerCase()),
      )
      .slice(0, 5);
  }, [query]);

  const highlightQuery = (text) => {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");

    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-[#e6f2f2] font-semibold">
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  const filteredMedicines = useMemo(() => {
    const q = query.toLowerCase();

    const filtered = medicinesData.filter((med) => {
      const matchesQuery =
        !q ||
        med.genericName?.toLowerCase().includes(q) ||
        med.slug?.toLowerCase().includes(q) ||
        med.category?.toLowerCase().includes(q) ||
        med.tags?.some((tag) => tag.toLowerCase().includes(q)) ||
        med.indications?.some((i) => i.toLowerCase().includes(q)) ||
        med.sideEffects?.some((s) => s.toLowerCase().includes(q));

      const matchesCategory =
        filters.category === "all" || med.category === filters.category;

      const matchesForm =
        filters.form === "all" ||
        med.variants?.some((v) => v.form === filters.form);

      const matchesPrescription =
        filters.prescription === "all" ||
        med.prescriptionRequired?.toString() === filters.prescription;

      return (
        matchesQuery && matchesCategory && matchesForm && matchesPrescription
      );
    });

    if (!query) return filtered.slice(0, 8);

    return filtered;
  }, [query, filters]);

  useEffect(() => {
    const reloadHistory = () => {
      const saved = localStorage.getItem(historyKey);
      setHistory(saved ? JSON.parse(saved) : []);
    };

    // listen when medicine card updates history
    window.addEventListener("history-updated", reloadHistory);

    // reload when user changes
    reloadHistory();

    return () => {
      window.removeEventListener("history-updated", reloadHistory);
    };
  }, [historyKey]);

  return (
    <div className="min-h-screen bg-[#f8fbfb]">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
          history={history}
          removeHistory={removeHistory}
          clearHistory={clearHistory}
          suggestions={suggestions}
        />

        <div className="mb-6 mt-6">
          <SearchFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClear={() =>
              setFilters({ category: "all", form: "all", prescription: "all" })
            }
          />
        </div>

        {filteredMedicines.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMedicines.map((med, index) => (
              <MedicineCard
                key={index}
                medicine={med}
                highlightQuery={highlightQuery}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-lg font-semibold text-[#1e3a3a] mb-2">
              No medicines found
            </h3>

            <p className="text-sm text-[#2c5c5c]/70">
              Try searching by generic name, symptom, or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
