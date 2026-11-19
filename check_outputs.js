const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function checkOutputs() {
  const brands = [
    'cazanoo-transparent.png',
    'bec-transparent.png',
    'aandb-transparent.png',
    'ambit-transparent.png',
    'yazi-transparent.png',
    'abir-transparent.png'
  ];

  for (const b of brands) {
    const meta = await sharp(path.join(__dirname, 'public', 'images', 'brands', b)).metadata();
    console.log(`${b}: ${meta.width}x${meta.height}, channels: ${meta.channels}, format: ${meta.format}`);
  }
}

checkOutputs();
