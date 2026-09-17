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

  return (
    <section className="py-6 bg-forest-900 border-y border-forest-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        background: "linear-gradient(90deg, transparent, rgba(232,150,31,0.15), transparent)",
      }} />
      <div className="container-wide relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5 text-honey-300 animate-float-slow" />
            <span className="text-cream-200/60 text-sm font-500 uppercase tracking-wide">
              Live Climate · Kashmir Orchard Zones
            </span>
          </div>
          <div className="flex items-center gap-6 text-cream-100 transition-all duration-300" style={{ opacity: transitioning ? 0.3 : 1 }}>
            <span className="text-honey-200 font-600 font-display text-lg capitalize">
              {city}
            </span>
            <div className="flex items-center gap-1.5">
              <Thermometer className="w-4 h-4 text-apple-300" />
              <span className="text-sm font-500">{data.temp}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Cloud className="w-4 h-4 text-forest-200" />
              <span className="text-sm font-500">{data.condition}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-honey-300" />
              <span className="text-sm font-500">{data.humidity}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wind className="w-4 h-4 text-cream-200/60" />
              <span className="text-sm font-500">{data.wind}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveClimateTicker;
