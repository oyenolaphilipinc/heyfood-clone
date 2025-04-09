const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgFiles = [
  {
    input: 'public/app-store-badge.svg',
    output: 'public/app-store-badge.png',
    width: 135,
    height: 40
  },
  {
    input: 'public/google-play-badge.svg',
    output: 'public/google-play-badge.png',
    width: 135,
    height: 40
  },
  {
    input: 'public/qr-code.svg',
    output: 'public/qr-code.png',
    width: 80,
    height: 80
  }
];

async function convertSvgToPng() {
  for (const file of svgFiles) {
    const svg = fs.readFileSync(file.input);
    await sharp(svg)
      .resize(file.width, file.height)
      .png()
      .toFile(file.output);
    console.log(`Converted ${file.input} to ${file.output}`);
  }
}

convertSvgToPng().catch(console.error); 