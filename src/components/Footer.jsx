export function Footer() {
  return (
    <footer className="bg-[#111] text-white/45 px-[5%] py-6 flex items-center justify-between flex-wrap gap-3 text-xs">
      <span className="font-serif text-white text-[1.05rem]">
        IROHS<span className="text-[#5b8dee]">.</span>lab
      </span>
      <span className="text-center">Intelligent Robust &amp; Honest Systems Lab · IIT Bombay</span>
      <a
        href="https://github.com/irohs-lab"
        target="_blank"
        rel="noreferrer"
        className="text-white/40 hover:text-white transition-colors"
      >
        GitHub →
      </a>
    </footer>
  );
}
