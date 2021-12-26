// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagesLoc = path.resolve(__dirname, 'src/public/images/heros');
const outputLoc = path.resolve(__dirname, 'src/public/images/heros/sharp');

if (!fs.existsSync(outputLoc)) fs.mkdirSync(outputLoc);

const dirents = fs.readdirSync(imagesLoc, { withFileTypes: true });
const filesNames = dirents.filter((dirent) => dirent.isFile()).map((dirent) => dirent.name);

filesNames.forEach((img) => {
  sharp(`${imagesLoc}/${img}`).resize(920).toFile(path.resolve(__dirname, `${outputLoc}/${img.split('.').slice(0, -1)[0]}-large.jpg`));
  sharp(`${imagesLoc}/${img}`).resize(640).toFile(path.resolve(__dirname, `${outputLoc}/${img.split('.').slice(0, -1)[0]}-medium.jpg`));
  sharp(`${imagesLoc}/${img}`).resize(360).toFile(path.resolve(__dirname, `${outputLoc}/${img.split('.').slice(0, -1)[0]}-small.jpg`));
});
