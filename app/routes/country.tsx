import type { Route } from "./+types/country";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const countryName = params.countryName;

  const res = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  );
  const data = await res.json();
  return data;
}
export function meta({ data }: { data: any }) {
  const countryName = data?.[0]?.name?.common || 'Country';
  return [
    { title: `${countryName} | WorldExplorer` },
    { name: "description", content: `Learn about ${countryName}'s details including population, capital, region and more.` }
  ];
}

export default function Country({ loaderData }: Route.ComponentProps) {
  const country = {
    name: loaderData[0]?.name?.common || "N/A",
    officialName: loaderData[0]?.name?.official || "N/A",
    region: loaderData[0]?.region || "N/A",
    subregion: loaderData[0]?.subregion || "N/A",
    capital: loaderData[0]?.capital || "N/A",
    population: loaderData[0]?.population || "N/A",
    flagUrl: loaderData[0]?.flags?.png || "",
  };
  if (!loaderData) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-gradient-to-r from-black/90 via-zinc-900/80 to-black/90 backdrop-blur-lg border border-white/5 shadow-lg shadow-black/20 rounded-xl p-6 text-center">
          <h2 className="text-2xl text-indigo-400">Loading country details...</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="bg-gradient-to-r from-black/90 via-zinc-900/80 to-black/90 backdrop-blur-lg border border-white/5 shadow-lg shadow-black/20 rounded-xl p-8 hover:shadow-2xl transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              {country.name}
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <InfoRow label="Official Name" value={country.officialName} />
              <InfoRow label="Capital" value={country.capital} />
              <InfoRow label="Region" value={country.region} />
              <InfoRow label="Subregion" value={country.subregion} />
              <InfoRow 
                label="Population" 
                value={country.population.toLocaleString()} 
              />
            </div>
          </div>

          {country.flagUrl && (
            <div className="flex justify-center items-center">
              <img
                src={country.flagUrl}
                alt={`Flag of ${country.name}`}
                className="w-full max-w-md rounded-lg border border-white/10 shadow-xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper component for consistent info rows
function InfoRow({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-black/40 p-4 rounded-lg border border-white/5 hover:border-indigo-500/20 transition-colors">
      <span className="text-indigo-400 font-semibold">{label}:</span>{" "}
      <span className="text-white">{value}</span>
    </div>
  );
}
