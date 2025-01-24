export function meta() {
  return [
    { title: "About WorldExplorer" },
    { name: "description", content: "Learn about WorldExplorer's mission to provide comprehensive information about countries worldwide." }
  ];
}
export default function About() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="bg-gradient-to-r from-black/90 via-zinc-900/80 to-black/90 backdrop-blur-lg border border-white/5 shadow-lg shadow-black/20 rounded-xl p-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text mb-8">
          About WorldExplorer
        </h1>

        <div className="space-y-8">
          <section className="bg-black/40 p-6 rounded-lg border border-white/5 hover:border-indigo-500/20 transition-all">
            <h2 className="text-2xl text-indigo-400 mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              WorldExplorer is your gateway to discovering the world's diverse nations and cultures. We provide comprehensive information about countries across the globe, making geographical exploration accessible to everyone.
            </p>
          </section>

          <section className="bg-black/40 p-6 rounded-lg border border-white/5 hover:border-indigo-500/20 transition-all">
            <h2 className="text-2xl text-indigo-400 mb-4">Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <span className="text-indigo-400">✦</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-black/40 p-6 rounded-lg border border-white/5 hover:border-indigo-500/20 transition-all">
            <h2 className="text-2xl text-indigo-400 mb-4">Data Source</h2>
            <p className="text-gray-300 leading-relaxed">
              Powered by the REST Countries API, we ensure accurate and up-to-date information about every nation. Our data includes details about populations, regions, capitals, and more.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

const features = [
  "Detailed country information",
  "Real-time data updates",
  "Interactive search functionality",
  "Regional filtering",
  "High-resolution flag images",
  "Population statistics",
  "Geographical insights",
  "User-friendly interface"
];