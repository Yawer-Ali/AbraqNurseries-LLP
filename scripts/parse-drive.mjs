import fs from 'node:fs';

const html = fs.readFileSync('scripts/drive_page.html', 'utf-8');

// Find all script tags or window['_DRIVE_...'] or WIZ_global_data
const scripts = html.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];

console.log(`Found ${scripts.length} script tags`);

const foundStrings = new Set();

for (const s of scripts) {
  // Check if script contains folder items or JSON
  if (s.includes('ABRAQ') || s.includes('1DFn7pKkkC1PiiX8yxHSiyhvuL6DwmrYd') || s.includes('_DRIVE_ivd')) {
    // Look for string literals that look like folder/file names or paths
    const strMatches = s.match(/"([^"\\]{3,100})"/g) || [];
    for (const m of strMatches) {
      const clean = m.slice(1, -1);
      if (!clean.startsWith('http') && !clean.startsWith('//') && !clean.includes('{') && !clean.includes('}') && !clean.includes('function')) {
        foundStrings.add(clean);
      }
    }
  }
}

// Write found items to a file
fs.writeFileSync('scripts/drive_strings.json', JSON.stringify(Array.from(foundStrings), null, 2));
console.log(`Saved ${foundStrings.size} potential strings to scripts/drive_strings.json`);
