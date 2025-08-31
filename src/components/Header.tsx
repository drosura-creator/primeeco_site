import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logoUrl from "/primeeco-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

 const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-4 py-2 rounded-xl text-lg font-semibold transition ${
    isActive
      ? "bg-green-600 text-white"
      : scrolled
      ? "text-slate-800 hover:bg-slate-100"
      : "text-white hover:bg-white/10"
  }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow border-b border-gray-200" : "bg-slate-700/90"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-20" : "h-28"
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="PrimeEco"
            className={`transition-all duration-300 ${scrolled ? "h-16 w-16" : "h-24 w-24"}`}
          />
          <span
            className={`font-bold tracking-wide transition-all duration-300 ${
              scrolled ? "text-slate-800 text-2xl" : "text-white text-3xl"
            }`}
          >
            PrimeEco
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
