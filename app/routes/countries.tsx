import { Link, useSearchParams } from "react-router";
import type { Route } from "./+types/countries";
import { useState } from "react";
interface Country {
  name: {
    common: string;
  };
  region: string;
  population: number;
  flags: {
    png: string;
  };
}
export function meta() {
  return [
    { title: "Countries List | WorldExplorer" },
    { name: "description", content: "Browse and search through all countries, filter by region, and discover detailed information about each nation." }
  ];
}

// import useSWR from "swr"; -cancel-
export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all")
  const data: [] = await res.json();
  return data
}

export default function Countries({ loaderData = [] }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearch = searchParams.get('search') || '';
  const currentRegion = searchParams.get('region') || '';

  const handleSearchChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    setSearchParams(params);
  };

  const handleRegionChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('region', value);
    } else {
      params.delete('region');
    }
    setSearchParams(params);
  };

  const FilteredCountries = loaderData.filter((country: Country) => {
    const matchesRegion = !currentRegion ||
      country.region.toLowerCase().includes(currentRegion.toLowerCase());
    const matchesSearch = !currentSearch ||
      country.name.common.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text mb-8">
        Explore Countries
      </h1>

      <div className="bg-gradient-to-r from-black/90 via-zinc-900/80 to-black/90 backdrop-blur-lg border border-white/5 shadow-lg shadow-black/20 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search countries..."
              className="w-full bg-black/40 px-4 py-3 rounded-lg border border-indigo-500/20 focus:border-indigo-500/50 outline-none text-white placeholder-indigo-400/50 transition-all"
              value={currentSearch}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>

          <select
            onChange={(e) => handleRegionChange(e.target.value)}
            value={currentRegion}
            className="bg-black/40 px-4 py-3 rounded-lg border border-indigo-500/20 focus:border-indigo-500/50 outline-none text-white transition-all cursor-pointer"
          >
            <option value="">All Regions</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </div>

      {FilteredCountries.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          No countries match your filters
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FilteredCountries.map((country: Country, key: number) => (
            <Link
              to={`/countries/${country.name.common}`}
              key={key}
              className="group bg-gradient-to-r from-black/90 via-zinc-900/80 to-black/90 backdrop-blur-lg border border-white/5 hover:border-indigo-500/20 shadow-lg shadow-black/20 rounded-xl p-4 transition-all hover:scale-[1.02]"
            >
              <img
                src={country.flags.png}
                alt={`Flag of ${country.name.common}`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                {country.name.common}
              </h2>
              <div className="mt-2 text-gray-400">
                <span className="inline-block mr-4">
                  🌍 {country.region}
                </span>
                <span>
                  👥 {country.population.toLocaleString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}