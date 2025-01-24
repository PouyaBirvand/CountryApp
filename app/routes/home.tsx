import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "WorldExplorer - Discover Countries" },
    { name: "description", content: "Explore countries around the world with real-time data, including populations, capitals, and regions." }
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-gradient-to-r from-black/90 via-zinc-900/80 to-black/90 border border-white/5 shadow-lg shadow-black/20 rounded-xl p-8 hover:shadow-2xl duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="space-y-2">
                <span className="block text-3xl text-indigo-400">Explore Countries with</span>
                <span className="block text-5xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                  Real-Time Data
                </span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed">
                Discover details about every country around the world - from capitals to regions!
              </p>

              <div className="flex gap-6">
                <Link
                  to="/countries"
                  className="px-6 py-3 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 
                    rounded-lg transition-all hover:scale-105 border border-indigo-500/20
                    flex items-center gap-2 group"
                >
                  Explore Now
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="px-6 py-3 bg-black/40 hover:bg-black/60 text-gray-300 
                    rounded-lg transition-all hover:scale-105 border border-white/5
                    hover:border-indigo-500/20"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="overflow-hidden rounded-xl border border-white/10">
                <img
                  src="https://image.winudf.com/v2/image/Ymx1ZWNhcC5pbWFnZXouYmVhdXRpZnVsX2NvdW50cmllc193YWxscGFwZXJzX3NjcmVlbl8wXzlpMW14OWl1/screen-0.webp?fakeurl=1&type=.webp"
                  alt="World Explorer"
                  className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}