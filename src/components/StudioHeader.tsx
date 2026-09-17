
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  Sun,
  Moon,
  Menu,
  X,
  Phone,
  Calculator,
  Sprout,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StudioHeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenBooking: () => void;
}

export const StudioHeader: React.FC<StudioHeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenBooking,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = useLocation().pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const links = [
    { label: "Orchards", href: "/" },
    { label: "Varieties & M9", href: "/varieties" },
    { label: "Turnkey Services", href: "/services" },
    { label: "Field Results", href: "/projects" },
    { label: "Our Story", href: "/about" },
    { label: "Agronomy Hub", href: "/knowledge" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-premium",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/60 py-3 shadow-soft"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        {!scrolled && (
          <div className="hidden xl:block ds-container mb-2">
            <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground pb-2.5 border-b border-border/40">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-primary font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  2025/2026 M9-T337 Plant Allocations Live
                </span>
                <span className="text-border/80">|</span>
                <span>Chadoora Soil Chemistry Lab Operational</span>
              </div>
              <div className="flex items-center gap-4">
                <span>
                  Direct Helpline:{" "}
                  <strong className="text-foreground font-semibold">0194-796-1490</strong>
                </span>
                <span className="text-border/80">|</span>
                <span className="text-copper-500 font-semibold">MIDH 50% Subsidy Certified</span>
              </div>
            </div>
          </div>
        )}

        <div className="ds-container flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-soft transition-transform duration-300 group-hover:scale-105">
              <Sprout className="w-[18px] h-[18px] transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  ABRAQ
                </span>
                <span className="font-serif italic text-xs text-copper-500 font-normal">
                  Nurseries
                </span>
              </div>
              <span className="text-[9px] tracking-[0.2em] uppercase font-medium text-muted-foreground">
                Kashmir · Haute Agronomie
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5 p-1 rounded-2xl bg-secondary/60 backdrop-blur-xl border border-border/50">
            {links.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "relative px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-300",
                    isActive
                      ? "ds-nav-link-active"
                      : "ds-nav-link"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 rounded-xl border border-border bg-card/80 hover:bg-secondary text-foreground flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-copper-400 transition-transform duration-500 hover:rotate-90" />
              ) : (
                <Moon className="w-4 h-4 text-alpine-700 transition-transform duration-500 hover:-rotate-12" />
              )}
            </button>

            <Link
              to="/services/book-orchard"
              className="hidden sm:inline-flex ds-btn-primary ds-btn-sm ds-shimmer"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Orchard Wizard</span>
            </Link>

            <button
              onClick={onOpenBooking}
              className="hidden md:inline-flex ds-btn-outline ds-btn-sm"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>Book Survey</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-xl border border-border bg-card flex items-center justify-center text-foreground transition-all duration-300"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="lg:hidden fixed inset-x-0 top-[var(--header-height,72px)] bottom-0 z-50 bg-background/98 backdrop-blur-2xl border-t border-border overflow-y-auto animate-slide-down">
              <div className="ds-container py-8">
                <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Navigation
                  </span>
                  <span className="text-[11px] font-semibold text-primary">
                    Srinagar · Shopian · Pulwama
                  </span>
                </div>

                <nav className="flex flex-col gap-1">
                  {links.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300",
                          isActive
                            ? "bg-accent text-primary font-semibold"
                            : "text-foreground hover:bg-secondary",
                          `stagger-${Math.min(i + 1, 6)}`
                        )}
                        style={{ animation: `fadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.04}s both` }}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />
                      </Link>
                    );
                  })}
                </nav>

                <div className="pt-6 border-t border-border flex flex-col gap-3 mt-6">
                  <Link
                    to="/services/book-orchard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="ds-btn-primary w-full ds-shimmer"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Launch Turnkey Orchard Wizard</span>
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="ds-btn-outline w-full"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>Book Free On-Site Survey</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default StudioHeader;
