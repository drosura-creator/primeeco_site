import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // <— add
import logoUrl from "/primeeco-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "block md:inline-block px-4 py-3 md:px-3 md:py-2 rounded-md md:rounded-xl text-base md:text-lg font-semibold transition",
      isActive
        ? "text-green-700 md:text-white md:bg-green-600"
        : scrolled
          ? "text-slate-800 hover:bg-slate-100"
          : "text-white md:text-white/90 hover:bg-white/10"
    ].join(" ");

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-colors duration-300 border-b",
        scrolled ? "bg-white/90 backdrop-blur shadow border-gray-200" : "bg-slate-700/90 border-transparent"
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto px-3 md:px-4 h-14 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={logoUrl}
            alt="PrimeEco"
            className={`transition-all duration-300 ${scrolled ? "h-7 md:h-9" : "h-7 md:h-12"} w-auto`}
          />
          <span
            className={`font-bold tracking-wide transition-all duration-300 ${
              scrolled ? "text-slate-900 text-lg md:text-2xl" : "text-white text-lg md:text-3xl"
            }`}
          >
            PrimeEco
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/10 active:scale-95 text-white"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur border-t shadow-sm">
          <div className="max-w-6xl mx-auto py-2">
            <NavLink to="/" className={navLinkClass} end onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/projects" className={navLinkClass} onClick={() => setOpen(false)}>Projects</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
