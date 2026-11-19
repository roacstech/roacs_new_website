const sharp = require('sharp');
const path = require('path');

const brandsDir = path.join(__dirname, 'public', 'images', 'brands');

async function makeOriginalTransparent() {
  // Cazanoo with pure white removed, keeping original colors
  {
    const { data, info } = await sharp(path.join(brandsDir, 'cazanoo-logo.jpg'))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i+1], b = data[i+2];
      if (r > 240 && g > 240 && b > 240) {
        data[i + 3] = 0;
      }
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim()
      .png()
      .toFile(path.join(brandsDir, 'cazanoo-original-transparent.png'));
  }

  // Yazi with pure white removed, keeping original blue ticket & red text
  {
    const { data, info } = await sharp(path.join(brandsDir, 'yazi-travels-logo.png'))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i+1], b = data[i+2];
      if (r > 240 && g > 240 && b > 240) {
        data[i + 3] = 0;
      }
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim()
      .png()
      .toFile(path.join(brandsDir, 'yazi-original-transparent.png'));
  }
}

makeOriginalTransparent();
