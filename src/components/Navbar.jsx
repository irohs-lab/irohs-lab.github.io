import { useState, useEffect } from "react";
import { useBreakpoint } from "../hooks/useBreakpoint";

const NAV = ["Research", "Publications", "Team", "Collaborators", "Code", "Contact"];

export function Navbar({ scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isMobile } = useBreakpoint();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { if (!isMobile) setMenuOpen(false); }, [isMobile]);

  const handle = (id) => { setMenuOpen(false); scrollTo(id); };

  return (
    <header className={`fixed top-0 inset-x-0 z-[300] transition-all duration-300 ${
      scrolled || menuOpen
        ? "bg-lab-bg/95 backdrop-blur-md border-b border-lab-border"
        : "border-b border-transparent"
    }`}>
      <div className="flex items-center justify-between px-[5%] h-[60px]">
        <button
          onClick={() => scrollTo("hero")}
          className="font-serif text-xl text-gray-900 bg-transparent border-none cursor-pointer p-0"
        >
          IROHS<span className="text-lab-blue">.</span>lab
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-7">
          {NAV.slice(0, -1).map(l => (
            <button
              key={l}
              onClick={() => handle(l)}
              className="text-sm font-medium text-[#555] hover:text-lab-blue transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => handle("contact")}
            className="text-[0.82rem] font-semibold text-lab-blue border border-lab-blue rounded-full px-4 py-1.5 hover:bg-lab-blue hover:text-white transition-all bg-transparent cursor-pointer"
          >
            Contact
          </button>
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
            <div key={l} className="border-b border-lab-border">
              <button
                onClick={() => handle(l)}
                className="w-full text-base font-medium text-gray-700 text-left py-3 bg-transparent border-none cursor-pointer"
              >
                {l}
              </button>
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
