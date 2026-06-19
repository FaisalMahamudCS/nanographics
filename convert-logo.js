const sharp = require('sharp');
const path = require('path');

async function convert() {
  const inputFile = path.join(__dirname, 'Nano Graphic Logo.ai');
  const outputPng = path.join(__dirname, 'public', 'nano-graphic-logo.png');

  try {
    // Try converting as PDF (AI files are PDF-based)
    await sharp(inputFile, { density: 300 })
      .png()
      .toFile(outputPng);
    console.log('Successfully converted to PNG:', outputPng);
  } catch (err) {
    console.error('Sharp conversion failed:', err.message);
    
    // Fallback: try treating as raw image
    try {
      await sharp(inputFile)
        .png()
        .toFile(outputPng);
      console.log('Fallback conversion succeeded:', outputPng);
    } catch (err2) {
      console.error('Fallback also failed:', err2.message);
      console.log('\nThe .ai file cannot be auto-converted. Please:');
      console.log('1. Open the .ai file in Adobe Illustrator or Inkscape');
      console.log('2. Export as PNG or SVG');
      console.log('3. Save to public/nano-graphic-logo.png or public/nano-graphic-logo.svg');
    }
  }
}

convert();
