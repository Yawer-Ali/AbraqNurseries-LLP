import fs from 'node:fs';

const folders = [
  { name: 'APRIL', id: '1iJC4BzSi67QjAQ6pdFYZtb-Cn9WBGKad' },
  { name: 'Edited', id: '1uflWT4j8ckO2fPYwGKprw4j7HgvOTh4Z' },
  { name: 'June 2 Photos', id: '1LQBEDm8xji9_P8uVTIE50FQZL9n3suhi' },
  { name: 'MARCH', id: '1Ke4SlRzr7G6wRgWdf_RGuwVzzjvQc8ut' }
];

async function inspectFolder(f) {
  try {
    const url = `https://drive.google.com/drive/folders/${f.id}`;
    console.log(`Fetching folder: ${f.name} (${f.id})...`);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });
    const html = await res.text();
    
    // Extract file names / items
    const scripts = html.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
    const strings = new Set();
    
    for (const s of scripts) {
      if (s.includes(f.id) || s.includes('_DRIVE_ivd') || s.includes('driveweb')) {
        const matches = s.match(/"([^"\\]{3,80})"/g) || [];
        for (const m of matches) {
          const clean = m.slice(1, -1);
          if (!clean.startsWith('http') && !clean.startsWith('//') && !clean.includes('{') && !clean.includes('}') && !clean.includes('function') && !clean.includes('var ') && !clean.includes('return') && !clean.includes('AIza')) {
            strings.add(clean);
          }
        }
      }
    }

    return {
      folderName: f.name,
      folderId: f.id,
      items: Array.from(strings)
    };
  } catch (e) {
    console.error(`Error in ${f.name}:`, e.message);
    return { folderName: f.name, folderId: f.id, error: e.message };
  }
}

async function main() {
  const results = [];
  for (const f of folders) {
    const r = await inspectFolder(f);
    results.push(r);
  }
  fs.writeFileSync('scripts/drive_subfolders.json', JSON.stringify(results, null, 2));
  console.log('Saved all subfolder data to scripts/drive_subfolders.json');
}

main();
