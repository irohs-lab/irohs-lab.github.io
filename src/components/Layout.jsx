import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useBreakpoint } from "../hooks/useBreakpoint";

const NAV = [
  { label: "Research",     path: "/" },
  { label: "Publications", path: "/publications" },
  { label: "Team",         path: "/team" },
  { label: "Code",         path: "/code" },
];

export function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isMobile } = useBreakpoint();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);
  useEffect(() => { setMenuOpen(false); window.scrollTo(0, 0); }, [location.pathname]);

  const active = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname === path;

  return (
    <div className="font-sans bg-lab-bg text-gray-900 overflow-x-hidden min-h-screen flex flex-col">
      <header className={`fixed top-0 inset-x-0 z-[300] transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-lab-bg/95 backdrop-blur-md border-b border-lab-border"
          : "border-b border-transparent"
      }`}>
        <div className="flex items-center justify-between px-[5%] h-[60px]">
          <Link
            to="/"
            className="font-serif text-xl text-gray-900"
          >
            IROHS<span className="text-lab-blue">.</span>lab
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-7">
            {NAV.map(l => (
              <Link
                key={l.path}
                to={l.path}
                className={`text-sm font-medium transition-colors ${
                  active(l.path) ? "text-lab-blue" : "text-[#555] hover:text-lab-blue"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="flex sm:hidden flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="w-[22px] h-0.5 bg-gray-900 rounded-sm block transition-transform duration-300"
              style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span className="w-[22px] h-0.5 bg-gray-900 rounded-sm block transition-opacity duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="w-[22px] h-0.5 bg-gray-900 rounded-sm block transition-transform duration-300"
              style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="sm:hidden px-[5%] pb-5 pt-2 border-t border-lab-border flex flex-col">
            {NAV.map(l => (
              <div key={l.path} className="border-b border-lab-border">
                <Link
                  to={l.path}
                  className="block w-full text-base font-medium text-gray-700 py-3"
                >
                  {l.label}
                </Link>
              </div>
            ))}
          </nav>
        )}
      </header>

      <main className="pt-[60px] flex-1">{children}</main>

      <footer className="bg-[#0d0d0d] text-white/40 px-[5%] pt-12 pb-7">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-10 sm:gap-16 mb-10">

          {/* Brand + tagline */}
          <div className="max-w-[280px] mx-auto sm:mx-0 text-center sm:text-left">
            <div className="font-serif text-white text-[1.3rem] mb-3 tracking-tight">
              IROHS<span className="text-[#5b8dee]">.</span>lab
            </div>
            <p className="text-xs leading-loose text-white/35 mb-4">
              Building machine learning systems that everyone can trust.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a href="https://github.com/irohs-lab" target="_blank" rel="noreferrer"
                className="text-xs text-white/35 hover:text-white transition-colors border border-white/10 rounded-full px-3 py-1 hover:border-white/30">
                GitHub
              </a>
              <a href="https://www.iitb.ac.in" target="_blank" rel="noreferrer"
                className="text-xs text-white/35 hover:text-white transition-colors border border-white/10 rounded-full px-3 py-1 hover:border-white/30">
                IIT Bombay
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <div className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/30 mb-4">Contact</div>
            <div className="flex flex-col gap-2 text-xs text-white/40 leading-relaxed items-center sm:items-start">
              <span>C-MInDS, IIT Mumbai</span>
              <a href="mailto:arjunp@iitb.ac.in"
                className="text-[#6b9fff] hover:text-white transition-colors mt-1">
                arjunp@iitb.ac.in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.07] pt-6 flex items-center justify-center sm:justify-between flex-wrap gap-3">
          <span className="text-[0.68rem] text-white/20">
            © {new Date().getFullYear()} IRoHS Lab · IIT Bombay
          </span>
          <span className="text-[0.68rem] text-white/20">
            Supported by SBI Foundation &amp; C-MInDS
          </span>
        </div>
      </footer>
    </div>
  );
}
