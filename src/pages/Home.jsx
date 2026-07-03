import { Link } from "react-router-dom";
import { Reveal } from "../components/ui/Reveal";
import { PubCard } from "../components/ui/PubCard";
import { RESEARCH } from "../constants";
import publications from "../data/publications.json";
import { usePageTitle } from "../hooks/usePageTitle";
import { NewsScroller } from "../components/News";

const pubById = Object.fromEntries(publications.map((p) => [p.id, p]));

export default function Home() {
  usePageTitle(null);
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden flex items-center justify-center text-center px-[5%] pt-16 pb-12 sm:pt-14 sm:pb-10">
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        <div
          className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37,99,196,0.07) 0%, transparent 65%)",
            top: "10%", left: "50%", transform: "translateX(-50%)",
          }}
        />
        <div className="relative z-10 w-full max-w-[680px]">
          <div className="inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.14em] uppercase text-lab-blue bg-lab-blue-light dark:bg-dark-blue-tint px-3 py-1 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-lab-blue inline-block" />
            IIT Bombay
          </div>
          <h1
            className="font-serif tracking-tight text-[#0d0d0d] dark:text-white mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.06, letterSpacing: "-0.025em" }}
          >
            Intelligent, <em className="text-lab-blue">Robust</em> &amp; Honest Systems
          </h1>
          <p className="text-sm text-lab-muted dark:text-[#999] leading-loose max-w-[480px] mx-auto mb-7">
            Building machine learning systems that everyone can trust.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link
              to="/publications"
              className="px-5 py-2 bg-lab-blue text-white rounded-full font-semibold text-sm hover:bg-[#1a4fa0] hover:-translate-y-px transition-all"
            >
              Publications →
            </Link>
            <Link
              to="/team"
              className="px-5 py-2 bg-transparent text-gray-900 dark:text-gray-100 rounded-full font-medium text-sm border border-lab-border dark:border-dark-border hover:border-lab-blue hover:text-lab-blue transition-all"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      <NewsScroller />

      {/* ── ABOUT ── */}
      <section className="px-[5%] py-14 bg-white dark:bg-dark-mid">
        <div className="max-w-[860px] mx-auto">
          <Reveal>
            <span className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-lab-blue bg-lab-blue-light dark:bg-dark-blue-tint px-3 py-1 rounded-full inline-block mb-3">
              About the Lab
            </span>
            <h2
              className="font-serif text-gray-900 dark:text-gray-100 mb-6"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.1 }}
            >
              Research Overview
            </h2>
            <p className="text-sm text-lab-muted dark:text-[#999] leading-loose mb-10 max-w-[720px]">
              Our lab's work aims to build reliable machine learning systems that everyone can trust. We believe that
              equitable and reliable access to these systems is integral to cultivating broad-based societal trust in a
              technology as transformative as machine learning. At the Intelligent Robust and Honest Systems (IRoHS) Lab,
              we are interested in the following research questions:
            </p>
          </Reveal>

          <div className="flex flex-col gap-10">
            {RESEARCH.map((r, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="grid grid-cols-1 tablet:grid-cols-[1fr_320px] gap-6 tablet:gap-10">
                  {/* Left: question */}
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 bg-lab-blue-light dark:bg-dark-blue-tint rounded-[8px] flex items-center justify-center text-sm text-lab-blue font-bold shrink-0 mt-0.5">
                        {r.icon}
                      </div>
                      <h3 className="font-serif text-[1.05rem] text-gray-900 dark:text-gray-100 leading-snug">{r.title}</h3>
                    </div>
                    <p className="text-sm text-lab-muted dark:text-[#999] leading-loose pl-11">{r.desc}</p>
                  </div>

                  {/* Right: publications */}
                  <div className="flex flex-col gap-2">
                    {r.pubRefs.map((id) => {
                      const pub = pubById[id];
                      return pub ? <PubCard key={id} pub={pub} compact /> : null;
                    })}
                  </div>
                </div>
                {i < RESEARCH.length - 1 && (
                  <div className="border-b border-lab-border dark:border-dark-border mt-10" />
                )}
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 pt-8 border-t border-lab-border dark:border-dark-border flex gap-4 flex-wrap text-xs text-[#999] items-center">
              <span>Supported by</span>
              <strong className="text-[#444] dark:text-[#bbb]">SBI Foundation</strong>
              <span>·</span>
              <strong className="text-[#444] dark:text-[#bbb]">C-MInDS, IIT Bombay</strong>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
