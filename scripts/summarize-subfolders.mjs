import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('scripts/drive_subfolders.json', 'utf-8'));

for (const folder of data) {
  console.log(`\n================== FOLDER: ${folder.folderName} ==================`);
  const relevantItems = folder.items.filter(item => {
    return (
      item.match(/\.(jpg|jpeg|png|mp4|mov|webm|pdf|docx?|zip)/i) ||
      item.startsWith('DSC') ||
      item.startsWith('DJI') ||
      item.includes('Gala') ||
      item.includes('King') ||
      item.includes('Fuji') ||
      item.includes('Golden') ||
      item.includes('Jeromine') ||
      item.includes('Photo') ||
      item.includes('Video') ||
      item.length > 5 && !item.includes('null') && !item.includes(',') && !item.includes('/') && !item.includes(';')
    );
  });
  console.log(relevantItems.slice(0, 30));
}
