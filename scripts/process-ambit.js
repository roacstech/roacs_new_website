const fs = require('fs');
const sharp = require('sharp');

fs.copyFileSync(
  'C:/Users/roacs/.gemini/antigravity/brain/e8e5a65f-f18c-42ca-858f-41b0a159b948/.user_uploaded/media_1795172420460_5c5eb856.jpg',
  'public/images/projects/ambit-banner.jpg'
);

async function process() {
  const hero = await sharp('public/images/projects/ambit.jpg')
    .resize({ width: 1600 })
    .toBuffer();

  const banner = await sharp('public/images/projects/ambit-banner.jpg')
    .resize({ width: 1600 })
    .toBuffer();

  const heroMeta = await sharp(hero).metadata();
  const bannerMeta = await sharp(banner).metadata();
  const totalHeight = heroMeta.height + bannerMeta.height;

  await sharp({
    create: {
      width: 1600,
      height: totalHeight,
      channels: 4,
      background: { r: 16, g: 29, b: 53, alpha: 1 }
    }
  })
  .composite([
    { input: hero, top: 0, left: 0 },
    { input: banner, top: heroMeta.height, left: 0 }
  ])
  .jpeg({ quality: 90 })
  .toFile('public/images/projects/ambit-long-scroll.jpg');

  console.log('Created ambit-long-scroll.jpg, height:', totalHeight);
}

process().catch(console.error);
