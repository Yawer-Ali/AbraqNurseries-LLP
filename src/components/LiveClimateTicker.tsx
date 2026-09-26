import { useEffect, useState } from "react";
import { Cloud, Droplets, Thermometer, Wind } from "lucide-react";

const weatherData = {
  srinagar: { temp: "18°C", condition: "Partly Cloudy", humidity: "62%", wind: "8 km/h" },
  shopian: { temp: "16°C", condition: "Clear", humidity: "55%", wind: "6 km/h" },
  baramulla: { temp: "19°C", condition: "Sunny", humidity: "58%", wind: "10 km/h" },
  anantnag: { temp: "20°C", condition: "Clear", humidity: "50%", wind: "7 km/h" },
};

type City = keyof typeof weatherData;

export function LiveClimateTicker() {
  const [city, setCity] = useState<City>("srinagar");
  const [transitioning, setTransitioning] = useState(false);
  const cities = Object.keys(weatherData) as City[];

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCity((prev) => {
          const idx = cities.indexOf(prev);
          return cities[(idx + 1) % cities.length];
        });
        setTransitioning(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const data = weatherData[city];

  const readings = [
    { icon: Thermometer, label: "Temp", value: data.temp },
    { icon: Cloud, label: "Sky", value: data.condition },
    { icon: Droplets, label: "Humidity", value: data.humidity },
    { icon: Wind, label: "Wind", value: data.wind },
  ];

  return (
    <section className="relative bg-forest-950 text-cream-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_120px_at_20%_50%,rgba(201,168,106,0.12),transparent)]" />
      <div className="container-wide relative">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="flex items-center gap-4 py-5 lg:pr-10 lg:border-r border-cream-50/10">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-forest-300 animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-forest-300" />
            </span>
            <span className="text-cream-200/60 text-[10px] font-700 uppercase tracking-[0.3em]">
              Live Climate · Kashmir Orchard Zones
            </span>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 border-t lg:border-t-0 border-cream-50/10">
            <div className="col-span-2 sm:col-span-1 flex items-center gap-2 py-4 sm:py-5 sm:px-6">
              {cities.map((c) => (
                <span
                  key={c}
                  className={`h-1 rounded-full transition-all duration-700 ${c === city ? "w-6 bg-honey-400" : "w-1.5 bg-cream-50/20"}`}
                />
              ))}
              <span
                className="ml-3 font-display italic text-2xl text-honey-200 capitalize transition-all duration-300"
                style={{ opacity: transitioning ? 0 : 1, transform: transitioning ? "translateY(6px)" : "none" }}
              >
                {city}
              </span>
            </div>
            {readings.map((r) => (
              <div key={r.label} className="flex items-center gap-3 py-4 sm:py-5 sm:px-6 sm:border-l border-cream-50/10">
                <r.icon className="w-4 h-4 text-honey-400/80 shrink-0" strokeWidth={1.6} />
                <div
                  className="transition-all duration-300"
                  style={{ opacity: transitioning ? 0.2 : 1, transform: transitioning ? "translateY(4px)" : "none" }}
                >
                  <div className="text-[9px] uppercase tracking-[0.25em] text-cream-200/60">{r.label}</div>
                  <div className="text-sm font-600 text-cream-50">{r.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveClimateTicker;
