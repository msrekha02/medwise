import React, { useState } from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({
  query,
  setQuery,
  onSearch,
  history = [],
  removeHistory,
  clearHistory,
  suggestions = [],
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search medicine, symptoms, side effects..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 200)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearch();
          }}
          className="flex-1 px-6 py-3 rounded-xl bg-[#e6f2f2] border border-[#2c5c5c]/40"
        />

        <button
          onClick={onSearch}
          className="px-4 py-3 rounded-xl bg-[#2c5c5c] text-white hover:bg-[#1e3a3a]"
        >
          <Search size={18} />
        </button>
      </div>

      {focused && (suggestions.length > 0 || history.length > 0) &&(
        <div
          className="absolute w-full mt-2 bg-white border rounded-lg shadow-sm z-10"
          onMouseDown={(e) => e.preventDefault()}
        >
          {suggestions.length > 0 && (
            <div className="p-3 border-b">
              <p className="text-xs text-[#2c5c5c]/60 mb-2">Suggestions</p>

              {suggestions.map((s, i) => (
                <div
                  key={i}
                  className="cursor-pointer py-1 text-sm hover:text-[#2c5c5c]"
                  onClick={() => {
                    setQuery(s.genericName);
                    onSearch();
                  }}
                >
                  {s.genericName}
                </div>
              ))}
            </div>
          )}

          {history.length > 0 && (
            <div className="p-3">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-[#2c5c5c]/60">Recent Searches</p>

                <button
                  onClick={clearHistory}
                  className="text-xs text-[#2c5c5c] hover:text-[#1e3a3a]"
                >
                  Clear
                </button>
              </div>

              {history.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-1">
                  <span
                    onClick={() => {
                      setQuery(item);
                      onSearch();
                    }}
                    className="cursor-pointer text-sm"
                  >
                    {item}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeHistory(i);
                    }}
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
