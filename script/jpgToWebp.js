const sharp = require('sharp');
const fs = require('fs');
const path = require('path')

const targetNaUUsDir = path.join(__dirname, './../src/assets/optimization/na_u_us');
const folderNaUUsPath = path.join(__dirname, './../src/assets/na_u_us');
const naUUsfileNames = fs.readdirSync(folderNaUUsPath);

const targetWsDir = path.join(__dirname, './../src/assets/optimization/ws');
const folderWsPath = path.join(__dirname, './../src/assets/ws');
const wSfileNames = fs.readdirSync(folderWsPath);

const naUUsfiles = naUUsfileNames.map((fileName) => {
  return {
    fileName,
    buffer: fs.readFileSync(`${folderNaUUsPath}/${fileName}`)
  }
})

naUUsfiles.forEach((file) => {
  sharp(file.buffer).webp({ quality: 100 }).toFile(`${targetNaUUsDir}/${file.fileName.split('.')[0]}.webp`)
})

const wSfiles = wSfileNames.map((fileName) => {
  return {
    fileName,
    buffer: fs.readFileSync(`${folderWsPath}/${fileName}`)
  }
})

wSfiles.forEach((file) => {
  sharp(file.buffer).webp({ quality: 100 }).toFile(`${targetWsDir}/${file.fileName.split('.')[0]}.webp`)
})
