import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";
import publications from "../data/publications.json";
import { TEAM } from "../constants";

const labAuthorWords = TEAM.map((m) => m.name.toLowerCase().split(" "));

function isLabAuthor(authorName) {
  const lower = authorName.toLowerCase();
  return labAuthorWords.some((words) => words.every((w) => lower.includes(w)));
}

export function Publications() {
  const publicationsByYear = publications.reduce((acc, pub) => {
    const year = pub.year || "Unknown";

    if (!acc[year]) {
      acc[year] = [];
    }

    acc[year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="publications" className="py-16 px-[5%] bg-lab-bg">
      <Reveal>
        <SectionLabel text="Recent work" />
        <SectionTitle>Publications</SectionTitle>
      </Reveal>

      <div className="flex flex-col gap-10">
        {years.map((year) => (
          <div key={year}>
            <h3 className="font-serif text-gray-900 text-2xl mb-4 tracking-tight">
              {year}
            </h3>

            <div className="flex flex-col gap-2">
              {publicationsByYear[year].map((p, i) => (
                <Reveal key={`${year}-${i}`} delay={i * 35}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex gap-4 items-start bg-white border border-lab-border rounded-[10px] p-4 hover:border-lab-blue hover:shadow-[0_3px_14px_rgba(37,99,196,0.09)] transition-all"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-900 leading-snug mb-1">
                        {p.title}
                      </div>

                      {p.authors && p.authors.length > 0 && (
                        <div className="text-xs text-[#777] mt-1 leading-relaxed">
                          {p.authors.map((author, idx) => (
                            <span key={idx}>
                              <span className={isLabAuthor(author) ? "text-lab-blue font-semibold" : ""}>
                                {author}
                              </span>
                              {idx < p.authors.length - 1 && ", "}
                            </span>
                          ))}
                        </div>
                      )}

                      {p.venue && (
                        <div className="text-xs text-[#999] mt-1">
                          <em>{p.venue}</em>
                        </div>
                      )}
                    </div>

                    <span className="text-[#ccc] text-sm shrink-0 pt-0.5">
                      ↗
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}