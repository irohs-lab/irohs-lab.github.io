import { TEAM } from "../../constants";

const labAuthorWords = TEAM.map((m) => m.name.toLowerCase().split(" "));
function isLabAuthor(name) {
  const lower = name.toLowerCase();
  return labAuthorWords.some((words) => words.every((w) => lower.includes(w)));
}

export function PubCard({ pub, compact = false }) {
  return (
    <a
      href={pub.url}
      target="_blank"
      rel="noreferrer"
      className={`flex items-start bg-white dark:bg-dark-surface border border-lab-border dark:border-dark-border hover:border-lab-blue hover:shadow-card-hover transition-all ${
        compact ? "gap-3 rounded-[8px] px-3.5 py-2.5" : "gap-4 rounded-[10px] p-4"
      }`}
    >
      {compact && (
        <span className="text-[0.68rem] font-bold text-lab-blue shrink-0 mt-0.5 tracking-wide">
          {pub.year}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <div className={compact
          ? "text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug"
          : "text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug mb-1"
        }>
          {pub.title}
        </div>
        {!compact && pub.authors?.length > 0 && (
          <div className="text-xs text-[#777] dark:text-[#888] mt-1 leading-relaxed">
            {pub.authors.map((author, idx) => (
              <span key={idx}>
                <span className={isLabAuthor(author) ? "text-lab-blue font-semibold" : ""}>
                  {author}
                </span>
                {idx < pub.authors.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}
        {pub.venue && (
          <div className={`text-[#999] dark:text-[#666] ${compact ? "text-[0.68rem] mt-0.5 truncate" : "text-xs mt-1"}`}>
            <em>{pub.venue}</em>
          </div>
        )}
      </div>
      <span className={`text-[#ccc] dark:text-[#555] shrink-0 ${compact ? "text-xs mt-0.5" : "text-sm pt-0.5"}`}>↗</span>
    </a>
  );
}
