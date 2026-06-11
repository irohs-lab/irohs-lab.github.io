const fs = require("fs");
const bibtexParse = require("bibtex-parse-js");

const bib = fs.readFileSync("2164.bib", "utf8");

const entries = bibtexParse.toJSON(bib);

const publications = entries.map((entry) => ({
  id: entry.citationKey,
  title: entry.entryTags.title,
  authors: entry.entryTags.author
    ?.split(/\s+and\s+/)
    .map((a) => a.trim()) || [],
  year: Number(entry.entryTags.year),
  venue:
    entry.entryTags.journal ||
    entry.entryTags.booktitle ||
    "",
  url: entry.entryTags.url || "",
  doi: entry.entryTags.doi || ""
}));

fs.writeFileSync(
  "publications.json",
  JSON.stringify(publications, null, 2)
);

