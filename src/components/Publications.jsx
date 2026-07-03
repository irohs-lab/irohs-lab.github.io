import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";
import { PubCard } from "./ui/PubCard";
import publications from "../data/publications.json";

export function Publications() {
  const publicationsByYear = publications.reduce((acc, pub) => {
    const year = pub.year || "Unknown";
    if (!acc[year]) acc[year] = [];
    acc[year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="publications" className="py-16 px-[5%] bg-lab-bg dark:bg-dark-bg">
      <Reveal>
        <SectionLabel text="Recent work" />
        <SectionTitle>Publications</SectionTitle>
      </Reveal>

      <div className="flex flex-col gap-10">
        {years.map((year) => (
          <div key={year}>
            <h3 className="font-serif text-gray-900 dark:text-gray-100 text-2xl mb-4 tracking-tight">
              {year}
            </h3>
            <div className="flex flex-col gap-2">
              {publicationsByYear[year].map((p, i) => (
                <Reveal key={p.id ?? i} delay={i * 35}>
                  <PubCard pub={p} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
