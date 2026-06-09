export function Hero({ scrollTo }) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[40vh] flex items-center justify-center text-center px-[5%] pt-[100px] pb-[60px] sm:pt-[80px]"
    >
      {/* Grid background */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37,99,196,0.07) 0%, transparent 65%)",
          top: "10%", left: "50%", transform: "translateX(-50%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[720px]">
        {/* IIT Bombay badge */}
        <div className="inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.14em] uppercase text-lab-blue bg-lab-blue-light px-3 py-1 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-lab-blue inline-block" />
          IIT Bombay
        </div>

        <h1
          className="font-serif tracking-tight text-[#0d0d0d] mb-5"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.2rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}
        >
          Intelligent, <em className="text-lab-blue">Robust</em> &amp; Honest Systems
        </h1>

        <p className="text-sm sm:text-[1.05rem] text-lab-muted leading-loose max-w-[560px] mx-auto mb-8">
          We build machine learning systems that everyone can trust. Equitable and reliable access to AI is integral to cultivating broad-based societal trust in a technology as transformative as machine learning.
        </p>

        <div className="flex gap-3 flex-wrap justify-center mb-12">
          <button
            onClick={() => scrollTo("research")}
            className="px-6 py-2.5 bg-lab-blue text-white rounded-full border-none cursor-pointer font-semibold text-sm hover:bg-[#1a4fa0] hover:-translate-y-px transition-all"
          >
            Our Research →
          </button>
          <button
            onClick={() => scrollTo("publications")}
            className="px-6 py-2.5 bg-transparent text-gray-900 rounded-full cursor-pointer font-medium text-sm border border-lab-border hover:border-lab-blue hover:text-lab-blue transition-all"
          >
            Publications
          </button>
        </div>

        <div className="flex gap-4 flex-wrap text-xs text-[#999] items-center pt-6 border-t border-lab-border justify-center">
          <span>Supported by</span>
          <strong className="text-[#444]">SBI Foundation</strong>
          <span>·</span>
          <strong className="text-[#444]">C-MInDS, IIT Bombay</strong>
        </div>
      </div>
    </section>
  );
}
