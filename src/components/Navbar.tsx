import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

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

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? "bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-500 ${
              solid ? "bg-forest-600" : "bg-white/15 backdrop-blur-sm"
            }`}
          >
            <Leaf className="w-5 h-5 text-cream-50 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-400" strokeWidth={2.2} />
          </span>
          <span
            className={`font-display text-xl font-600 tracking-tight transition-colors duration-500 ${
              solid ? "text-forest-800" : "text-cream-50"
            }`}
          >
            Abraq Nurseries
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-500 transition-colors duration-300 relative group ${
                    isActive
                      ? solid
                        ? "text-forest-600"
                        : "text-honey-200"
                      : solid
                        ? "text-charcoal-700 hover:text-forest-600"
                        : "text-cream-100 hover:text-white"
                  }`
                }
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest-500 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/services/book-orchard"
          className={`hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-600 transition-all duration-300 ${
            solid
              ? "bg-forest-600 text-cream-50 hover:bg-forest-700"
              : "bg-cream-50 text-forest-800 hover:bg-white"
          }`}
        >
          Book Orchard
        </Link>

        <button
          className={`lg:hidden p-2 -mr-2 transition-colors ${solid ? "text-forest-800" : "text-cream-50"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-cream-50 border-t border-cream-200 animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
          <ul className="container-wide py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block py-3 font-500 transition-colors ${isActive ? "text-forest-600" : "text-charcoal-700 hover:text-forest-600"}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/services/book-orchard"
                className="block mt-2 py-3 text-center bg-forest-600 text-cream-50 rounded-full font-600"
              >
                Book Orchard
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
