import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { company } from "../data/company";
import { AbraqLogo } from "./brand/AbraqLogo";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Varieties", path: "/varieties" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Gallery", path: "/gallery" },
  { label: "Knowledge", path: "/knowledge" },
  { label: "Contact", path: "/contact" },
];

export function Logo({ tagline = false }: { tagline?: boolean }) {
  return <AbraqLogo variant="reverse" tagline={tagline} />;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* Reading progress */}
        <div
          className="absolute top-0 left-0 h-[2px] origin-left z-10"
          style={{ transform: `scaleX(${progress})`, width: "100%", background: "linear-gradient(90deg, var(--season), #dcc085)" }}
          aria-hidden="true"
        />
        <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? "pt-3 px-3 md:px-6" : "pt-0 px-0"}`}>
          <nav
            className={`pointer-events-auto mx-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              scrolled
                ? "max-w-[1320px] rounded-full bg-forest-950/80 backdrop-blur-xl border border-honey-400/15 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] px-4 md:px-6 py-2.5"
                : "max-w-[1320px] px-5 sm:px-8 lg:px-12 py-6"
            }`}
          >
            <Link to="/" aria-label="Abraq Nurseries — home">
              <Logo />
            </Link>

            <ul className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `relative block px-3.5 py-2 text-[13px] font-600 tracking-wide transition-colors duration-300 group ${
                        isActive ? "text-honey-200" : "text-cream-100/75 hover:text-cream-50"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <span
                          className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-1 w-1 rounded-full bg-honey-400 transition-all duration-500 ${
                            isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-60 group-hover:scale-100"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <Link
                  to="/services/book-orchard"
                  className="btn-lux btn-gold !py-3 !px-5 !text-[11px]"
                >
                  Book Orchard
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <button
                className="xl:hidden relative w-11 h-11 rounded-full border border-cream-50/25 flex items-center justify-center text-cream-50 hover:border-honey-300 transition-colors"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                <span className="sr-only">Toggle menu</span>
                <span className="relative block w-5 h-3">
                  <span className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
                  <span className={`absolute left-0 h-px bg-current transition-all duration-500 ${open ? "top-1.5 w-full -rotate-45" : "top-3 w-3/5"}`} />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Full-screen mobile / tablet menu */}
      <div
        className={`xl:hidden fixed inset-0 z-40 bg-pine-gradient text-cream-50 transition-[clip-path] duration-[900ms] ease-[cubic-bezier(0.83,0,0.17,1)] ${
          open ? "[clip-path:circle(150%_at_calc(100%-3rem)_3rem)]" : "[clip-path:circle(0%_at_calc(100%-3rem)_3rem)] pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="h-full overflow-y-auto container-wide pt-28 pb-10 flex flex-col">
          <span className="eyebrow !text-honey-300">Menu</span>
          <ul className="mt-8 flex-1">
            {navLinks.map((link, i) => (
              <li
                key={link.path}
                className="border-b border-cream-50/10 overflow-hidden"
              >
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  tabIndex={open ? 0 : -1}
                  className={({ isActive }) =>
                    `flex items-baseline justify-between py-3.5 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    } ${isActive ? "text-honey-200" : "text-cream-50 hover:text-honey-200"}`
                  }
                  style={{ transitionDelay: open ? `${180 + i * 50}ms` : "0ms" }}
                >
                  <span className="font-display text-4xl sm:text-5xl font-500">{link.label}</span>
                  <span className="numeral italic text-sm text-cream-50/55">0{i + 1}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={`mt-10 space-y-5 transition-all duration-700 ${open ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"}`}>
            <Link to="/services/book-orchard" tabIndex={open ? 0 : -1} className="btn-lux btn-gold w-full">
              Book an Orchard Consultation <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-sm text-cream-100/70">
              <a href={`tel:${company.phone}`} tabIndex={open ? 0 : -1} className="flex items-center gap-2 hover:text-honey-200">
                <Phone className="w-4 h-4 text-honey-400" /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`} tabIndex={open ? 0 : -1} className="flex items-center gap-2 hover:text-honey-200">
                <Mail className="w-4 h-4 text-honey-400" /> {company.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
