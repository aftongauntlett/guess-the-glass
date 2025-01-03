"use client";

import { useEffect, useState } from "react";

const WineDropdown = () => {
  const [wines, setWines] = useState<{ id: number; name: string }[]>([]);
  const [selectedWine, setSelectedWine] = useState<string | null>(null);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await fetch("/api/wines");
        const data = await response.json();
        setWines(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching wines:", error);
      }
    };

    fetchWines();
  }, []);

  return (
    <div>
      <select
        id="wine-select"
        onChange={(e) => setSelectedWine(e.target.value)}
        value={selectedWine || ""}
        className="w-full bg-gray-50 border border-gray-300 text-gray-800 rounded-lg p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value="" disabled>
          -- Select a wine --
        </option>
        {wines.map((wine) => (
          <option key={wine.id} value={wine.name}>
            {wine.name}
          </option>
        ))}
      </select>
      {selectedWine && (
        <p className="mt-4 text-indigo-600 font-medium">
          You selected: {selectedWine}
        </p>
      )}
    </div>
  );
};

export default WineDropdown;
