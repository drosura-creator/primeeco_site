import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "/primeeco-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const linkBase =
    "block md:inline-block px-4 py-3 md:px-3 md:py-2 rounded-md md:rounded-xl text-base md:text-lg font-semibold transition";

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      linkBase,
      isActive
        ? "text-green-700 md:text-white md:bg-green-600"
        : (scrolled || open)
          ? "text-slate-800 hover:bg-slate-100"
          : "text-white md:text-white/90 hover:bg-white/10",
    ].join(" ");

  const lightBg = scrolled || open;

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-colors duration-300 border-b",
        lightBg ? "bg-white/90 backdrop-blur shadow border-gray-200"
                : "bg-slate-700/90 border-transparent",
      ].join(" ")}
    >
      {/* Compact on phones, taller on desktop */}
      <div className="max-w-6xl mx-auto px-3 md:px-4 h-14 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoUrl} alt="PrimeEco" className="h-7 md:h-12 w-auto" />
          <span
            className={[
              "font-bold tracking-wide",
              lightBg ? "text-slate-900" : "text-white",
              "text-lg md:text-3xl",
            ].join(" ")}
          >
            PrimeEco
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Primary">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={[
            "md:hidden p-2 rounded-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2",
            lightBg ? "text-slate-900 hover:bg-black/5" : "text-white hover:bg-white/10",
          ].join(" ")}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown (animated height) */}
      <div
        id="mobile-nav"
        className={[
          "md:hidden overflow-hidden transition-[max-height] duration-300",
          open ? "max-height-open max-h-96" : "max-h-0",
          "bg-white/95 backdrop-blur border-t shadow-sm",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto py-2">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
}
