const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brandsDir = path.join(__dirname, 'public', 'images', 'brands');

async function processAll() {
  // 1. BEC LOGO: 500x500 with black corners outside circle
  {
    console.log('Processing BEC...');
    const { data, info } = await sharp(path.join(brandsDir, 'bec-logo.jpg'))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const cx = info.width / 2;
    const cy = info.height / 2;
    const radius = info.width * 0.485;

    for (let y = 0; y < info.height; y++) {
      for (let x = 0; x < info.width; x++) {
        const idx = (y * info.width + x) * 4;
        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
        // If outside circle or black corner (r < 30, g < 30, b < 30)
        if (dist > radius || (dist > radius - 10 && data[idx] < 40 && data[idx+1] < 40 && data[idx+2] < 40)) {
          data[idx + 3] = 0; // Transparent
        }
      }
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim()
      .png()
      .toFile(path.join(brandsDir, 'bec-transparent.png'));
    console.log('Saved bec-transparent.png');
  }

  // 2. CAZANOO: white background removal + make dark text crisp white for navy background
  {
    console.log('Processing Cazanoo...');
    const { data, info } = await sharp(path.join(brandsDir, 'cazanoo-logo.jpg'))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i+1], b = data[i+2];
      // If white background (r > 230, g > 230, b > 230)
      if (r > 235 && g > 235 && b > 235) {
        data[i + 3] = 0;
      } else if (r > 210 && g > 210 && b > 210) {
        data[i + 3] = Math.max(0, 255 - (r - 210) * 10);
      } else {
        // If it's the dark text "Cazanoo" (r,g,b all low) or dark roof portion:
        // Notice orange roof has high red (r > 180) and low blue (b < 100).
        const isOrange = r > 160 && g > 50 && b < 100;
        if (!isOrange) {
          // It's the dark text! For dark navy background, turn dark text to clean white #FFFFFF!
          data[i] = 255;
          data[i+1] = 255;
          data[i+2] = 255;
        }
      }
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim()
      .png()
      .toFile(path.join(brandsDir, 'cazanoo-transparent.png'));
    console.log('Saved cazanoo-transparent.png');
  }

  // 3. A&B IMPORT EXPORT: black text -> white text, transparent background
  {
    console.log('Processing A&B...');
    const { data, info } = await sharp(path.join(brandsDir, 'aandb-logo.png'))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const a = data[i+3];
      const r = data[i], g = data[i+1], b = data[i+2];
      // If white background:
      if (r > 230 && g > 230 && b > 230) {
        data[i + 3] = 0;
      } else if (a > 20) {
        // Convert dark pixels to white for navy background
        data[i] = 255;
        data[i+1] = 255;
        data[i+2] = 255;
      }
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim()
      .png()
      .toFile(path.join(brandsDir, 'aandb-transparent.png'));
    console.log('Saved aandb-transparent.png');
  }

  // 4. AMBIT TRIANGLE SAFETY:
  {
    console.log('Processing Ambit...');
    const { data, info } = await sharp(path.join(brandsDir, 'ambit-logo.png'))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i+1], b = data[i+2];
      // White background removal
      if (r > 230 && g > 230 && b > 230) {
        data[i + 3] = 0;
      } else if (r > 200 && g < 80 && b < 80) {
        // Red flame & "Triangle Safety" red text -> keep red!
      } else if (r > 150 && g > 150 && b > 150) {
        // Grey bar -> make transparent or subtle
        data[i + 3] = 0;
      } else {
        // Blue text "Ambit" -> make crisp white so it pops on dark navy!
        data[i] = 255;
        data[i+1] = 255;
        data[i+2] = 255;
      }
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim()
      .png()
      .toFile(path.join(brandsDir, 'ambit-transparent.png'));
    console.log('Saved ambit-transparent.png');
  }

  // 5. YAZI TRAVELS:
  {
    console.log('Processing Yazi Travels...');
    const { data, info } = await sharp(path.join(brandsDir, 'yazi-travels-logo.png'))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i+1], b = data[i+2];
      // White background removal
      if (r > 225 && g > 225 && b > 225) {
        data[i + 3] = 0;
      } else if (b > 120 && r < 80) {
        // Blue ticket icon & airplane -> brighten to sky-blue or white so visible on navy
        data[i] = 255;
        data[i+1] = 255;
        data[i+2] = 255;
      }
      // Red "YAZI TRAVELS" and red swoosh stay red!
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim()
      .png()
      .toFile(path.join(brandsDir, 'yazi-transparent.png'));
    console.log('Saved yazi-transparent.png');
  }

  // 6. ABIR AYURVEDA: circular mandala
  {
    console.log('Processing Abir...');
    const { data, info } = await sharp(path.join(brandsDir, 'abir-logo.jpg'))
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i], g = data[i+1], b = data[i+2];
      // Off-white / light grey background removal
      if (r > 230 && g > 230 && b > 230) {
        data[i + 3] = 0;
      } else if (r > 215 && g > 215 && b > 215) {
        data[i + 3] = Math.max(0, 255 - (r - 215) * 15);
      }
    }

    await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
      .trim()
      .png()
      .toFile(path.join(brandsDir, 'abir-transparent.png'));
    console.log('Saved abir-transparent.png');
  }
}

processAll();
