import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";
import { Tag } from "./ui/Tag";
import { RESEARCH } from "../constants";

export function Research() {
  return (
    <section id="research" className="py-16 px-[5%] bg-white">
      <Reveal>
        <SectionLabel text="What we study" />
        <SectionTitle>Research Areas</SectionTitle>
      </Reveal>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-3.5">
        {RESEARCH.map((r, i) => (
          <Reveal key={i} delay={i * 70}>
            <div className="p-7 bg-white border border-lab-border rounded-[12px] hover:bg-[#fafaf8] transition-colors h-full">
              <div className="w-10 h-10 bg-lab-blue-light rounded-[10px] flex items-center justify-center mb-4 text-lg text-lab-blue font-bold">
                {r.icon}
              </div>
              <h3 className="font-serif text-[1.05rem] text-gray-900 mb-2.5">{r.title}</h3>
              <p className="text-sm text-lab-muted leading-7 mb-4">{r.desc}</p>
              <div className="flex gap-1.5 flex-wrap">
                {r.refs.map(ref => <Tag key={ref} text={ref} />)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
