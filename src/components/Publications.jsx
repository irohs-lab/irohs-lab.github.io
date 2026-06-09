import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";
import { PUBLICATIONS } from "../constants";

export function Publications() {
  return (
    <section id="publications" className="py-16 px-[5%] bg-lab-bg">
      <Reveal>
        <SectionLabel text="Recent work" />
        <SectionTitle>Selected Publications</SectionTitle>
      </Reveal>
      <div className="flex flex-col gap-2">
        {PUBLICATIONS.map((p, i) => (
          <Reveal key={i} delay={i * 35}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 items-start bg-white border border-lab-border rounded-[10px] p-4 hover:border-lab-blue hover:shadow-[0_3px_14px_rgba(37,99,196,0.09)] transition-all"
            >
              <span className="text-[0.68rem] font-bold text-lab-blue min-w-[36px] mt-0.5 shrink-0 tracking-wide">
                {p.year}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-900 leading-snug mb-1">{p.title}</div>
                {p.venue && <div className="text-xs text-[#999]"><em>{p.venue}</em></div>}
              </div>
              <span className="text-[#ccc] text-sm shrink-0 pt-0.5">↗</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
