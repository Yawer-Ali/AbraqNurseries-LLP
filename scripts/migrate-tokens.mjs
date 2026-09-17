import fs from "fs";
import path from "path";

const replacements = [
  ["border-zinc-200 dark:border-zinc-800", "border-border"],
  ["border-zinc-200 dark:border-zinc-700", "border-border"],
  ["border-zinc-300 dark:border-zinc-700", "border-border"],
  ["bg-white dark:bg-zinc-900", "bg-card"],
  ["bg-zinc-50 dark:bg-black", "bg-muted/30 dark:bg-background"],
  ["text-zinc-900 dark:text-zinc-100", "text-foreground"],
  ["text-zinc-900 dark:text-zinc-50", "text-foreground"],
  ["text-zinc-900 dark:text-white", "text-foreground"],
  ["text-zinc-600 dark:text-zinc-400", "text-muted-foreground"],
  ["text-zinc-500 dark:text-zinc-400", "text-muted-foreground"],
  ["text-zinc-700 dark:text-zinc-300", "text-foreground/80"],
  ["text-zinc-800 dark:text-zinc-200", "text-foreground/90"],
  ["bg-zinc-100 dark:bg-zinc-800", "bg-secondary"],
  ["bg-zinc-50 dark:bg-zinc-800", "bg-secondary/80"],
  ["bg-zinc-50/50 dark:bg-zinc-800/30", "bg-secondary/50"],
  ["bg-zinc-200 dark:bg-zinc-800", "bg-muted"],
  ["accent-emerald-600 dark:accent-emerald-500", "accent-primary"],
  ["text-emerald-600 accent-emerald-600", "text-primary accent-primary"],
  [
    "bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300",
    "ds-badge text-primary",
  ],
  ["bg-emerald-700 dark:bg-emerald-500 text-white dark:text-zinc-950", "bg-primary text-primary-foreground"],
  [
    "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 ring-2 ring-emerald-500",
    "ds-choice-active",
  ],
  [
    "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 font-bold",
    "ds-choice-active font-bold",
  ],
  [
    "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-800/30 hover:border-emerald-400 text-zinc-800 dark:text-zinc-200",
    "ds-choice",
  ],
  ["text-emerald-700 dark:text-emerald-400", "text-primary"],
  ["bg-emerald-950/60", "bg-accent/80 dark:bg-accent/40"],
  ["border-zinc-800", "border-border"],
  ["bg-zinc-800/80", "bg-secondary/90"],
  ["bg-zinc-800/60", "bg-secondary/80"],
  ["bg-zinc-950", "bg-background"],
  ["hover:bg-emerald-950/50 text-emerald-300", "hover:bg-accent/50 text-accent-foreground"],
  [
    "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4",
    "ds-badge mb-4",
  ],
  ["bg-zinc-950 text-white", "ds-immersive text-white"],
  ["bg-zinc-900/95", "bg-alpine-900/95"],
  ["bg-zinc-900/90", "bg-alpine-900/90"],
  ["bg-zinc-900/50", "bg-alpine-900/50"],
  ["bg-zinc-900", "bg-alpine-900"],
  ["border-zinc-800", "border-white/10"],
  ["border-zinc-700", "border-white/10"],
  ["text-emerald-400", "text-primary"],
  ["text-emerald-300", "text-primary/90"],
  ["bg-emerald-500", "bg-primary"],
  ["bg-emerald-950/80", "bg-primary/15"],
  ["hover:bg-emerald-600", "hover:bg-primary hover:brightness-110"],
  ["bg-emerald-600", "bg-primary"],
  ["from-emerald-500", "from-primary"],
  ["via-emerald-400", "via-alpine-400"],
  ["shadow-emerald-400/80", "shadow-primary/40"],
  ["shadow-emerald-950/50", "shadow-alpine-950/40"],
  ["pointer-events-none absolute top-16 left-1/3 w-[700px] h-[700px] bg-accent/80 dark:bg-primary/5 rounded-full blur-[160px] -z-10 animate-pulse-soft", "ds-page-ambient top-16 left-1/3 w-[700px] h-[700px]"],
  ["pointer-events-none absolute top-12 left-1/3 w-[800px] h-[500px] bg-accent/80 dark:bg-primary/5 rounded-full blur-[170px] -z-10 animate-pulse-soft", "ds-page-ambient top-12 left-1/3 w-[800px] h-[500px]"],
];

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, files);
    else if (/\.tsx$/.test(name)) files.push(p);
  }
  return files;
}

let count = 0;
for (const file of walk("src")) {
  let s = fs.readFileSync(file, "utf8");
  const orig = s;
  for (const [from, to] of replacements) {
    s = s.split(from).join(to);
  }
  if (s !== orig) {
    fs.writeFileSync(file, s);
    count++;
  }
}
console.log(`Updated ${count} files`);
