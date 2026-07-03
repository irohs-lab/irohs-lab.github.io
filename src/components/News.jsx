import { useState, useRef } from "react";
import { Reveal } from "./ui/Reveal";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";
import { useNews } from "../hooks/useNews";

const TAG_COLORS = {
  Paper: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Award: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Event: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  Media: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  News:  "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};

function formatDate(dateStr) {
  const [year, month] = dateStr.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

export function NewsScroller() {
  const { news, loading } = useNews();
  const scrollRef = useRef(null);

  if (loading || news.length === 0) return null;

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 296, behavior: "smooth" });
  };

  return (
    <div className="py-10 bg-lab-bg dark:bg-dark-mid">
      <div className="px-[5%] mb-5 flex items-center justify-between">
        <span className="text-[0.68rem] font-bold tracking-[0.14em] uppercase text-lab-blue">
          Latest News
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="w-8 h-8 rounded-full border border-lab-border dark:border-dark-border bg-white dark:bg-dark-surface flex items-center justify-center text-[#555] dark:text-[#aaa] hover:border-lab-blue hover:text-lab-blue transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="w-8 h-8 rounded-full border border-lab-border dark:border-dark-border bg-white dark:bg-dark-surface flex items-center justify-center text-[#555] dark:text-[#aaa] hover:border-lab-blue hover:text-lab-blue transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="overflow-x-auto scrollbar-none" style={{ scrollbarWidth: "none" }}>
        <div className="flex gap-4 px-[5%] pb-1">
          {news.map((item, i) => (
            <div
              key={i}
              className="w-[280px] shrink-0 bg-white dark:bg-dark-surface border border-lab-border dark:border-dark-border rounded-[10px] p-4 flex flex-col gap-2.5 hover:border-lab-blue hover:shadow-card-hover transition-all"
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-[0.58rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                    TAG_COLORS[item.tag] ?? TAG_COLORS.News
                  }`}
                >
                  {item.tag}
                </span>
                <span className="text-[0.65rem] text-lab-muted dark:text-[#999] shrink-0">
                  {formatDate(item.date)}
                </span>
              </div>

              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-gray-800 dark:text-gray-300 leading-relaxed line-clamp-3 hover:text-lab-blue transition-colors"
                >
                  {item.body}
                </a>
              ) : (
                <p className="text-xs text-gray-800 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {item.body}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function News() {
  const { news, loading, error } = useNews();
  const [active, setActive] = useState("All");

  const allTags = ["All", ...Array.from(new Set(news.map((n) => n.tag)))];
  const filtered = active === "All" ? news : news.filter((n) => n.tag === active);

  return (
    <section className="px-[5%] py-14 bg-white dark:bg-dark-bg min-h-[60vh]">
      <div className="max-w-[760px] mx-auto">
        <Reveal>
          <SectionLabel text="Latest Updates" />
          <SectionTitle>Recent News</SectionTitle>
          <p className="text-sm text-lab-muted dark:text-[#999] leading-loose mb-8 max-w-[560px]">
            Papers, events, and highlights from the IRoHS Lab.
          </p>
        </Reveal>

        {loading && (
          <div className="flex items-center gap-2 text-sm text-lab-muted dark:text-[#999] py-10">
            <span className="w-4 h-4 border-2 border-lab-blue border-t-transparent rounded-full animate-spin inline-block" />
            Loading news…
          </div>
        )}

        {error && (
          <p className="text-sm text-red-500 py-10">Could not load news: {error}</p>
        )}

        {!loading && !error && (
          <>
            {/* Filter pills */}
            <Reveal>
              <div className="flex gap-2 flex-wrap mb-10">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setActive(tag)}
                    className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
                      active === tag
                        ? "bg-lab-blue text-white border-lab-blue"
                        : "bg-white dark:bg-dark-surface text-[#555] dark:text-[#aaa] border-lab-border dark:border-dark-border hover:border-lab-blue hover:text-lab-blue"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Timeline */}
            <ol className="relative border-l border-lab-border dark:border-dark-border ml-3">
              {filtered.map((item, i) => (
                <Reveal key={i} delay={i * 40}>
                  <li className="mb-8 pl-6 relative">
                    <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-dark-bg border-2 border-lab-blue" />

                    <time className="block text-[0.68rem] font-semibold text-lab-muted dark:text-[#999] tracking-wide uppercase mb-1.5">
                      {formatDate(item.date)}
                    </time>

                    <div className="bg-white dark:bg-dark-surface border border-lab-border dark:border-dark-border rounded-[10px] px-4 py-3.5 hover:border-lab-blue hover:shadow-card-hover transition-all group">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <span className={`text-[0.64rem] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shrink-0 ${TAG_COLORS[item.tag] ?? TAG_COLORS.News}`}>
                          {item.tag}
                        </span>
                        {item.url && (
                          <span className="text-[#ccc] dark:text-[#555] text-xs group-hover:text-lab-blue transition-colors shrink-0">↗</span>
                        )}
                      </div>

                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer" className="block">
                          <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed group-hover:text-lab-blue transition-colors">
                            {item.body}
                          </p>
                        </a>
                      ) : (
                        <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">{item.body}</p>
                      )}
                    </div>
                  </li>
                </Reveal>
              ))}

              {filtered.length === 0 && (
                <li className="pl-6 text-sm text-lab-muted dark:text-[#999] py-6">No items in this category.</li>
              )}
            </ol>
          </>
        )}
      </div>
    </section>
  );
}
