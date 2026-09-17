import fs from 'node:fs';

const folderUrl = 'https://drive.google.com/drive/folders/1DFn7pKkkC1PiiX8yxHSiyhvuL6DwmrYd';

async function checkDrive() {
  try {
    const res = await fetch(folderUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    });

    const html = await res.text();
    console.log('Status:', res.status);
    console.log('Length:', html.length);

    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    console.log('Title:', titleMatch ? titleMatch[1] : 'Unknown');

    // Look for data array or initial data in Google Drive HTML
    // Google Drive embeds initial data inside window['_DRIVE_ivd'] or script tags
    const names = [];
    const nameRegex = /\["([^"]+\.(?:jpg|jpeg|png|mp4|mov|pdf|docx?|xlsx?|txt|webp))"/gi;
    let match;
    while ((match = nameRegex.exec(html)) !== null) {
      if (!names.includes(match[1])) {
        names.push(match[1]);
      }
    }
    console.log('Found file names:', names);

    // Also look for potential folder names or other items
    fs.writeFileSync('scripts/drive_page.html', html);
    console.log('Saved drive_page.html for inspection');
  } catch (e) {
    console.error('Error fetching drive:', e);
  }
}

checkDrive();
