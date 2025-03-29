import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// JSONファイルの読み込み方法を変更
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileData = JSON.parse(await fs.readFile(path.join(__dirname, './source.json'), 'utf8'));

const ensureDirectoryExists = async (filePath) => {
  const dirname = path.dirname(filePath);
  try {
    await fs.mkdir(dirname, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

const fileCreate = async (fileName, content) => {
  try {
    await ensureDirectoryExists(fileName);
    await fs.writeFile(fileName, content);
    console.log(`${fileName} created 👍👍👍`);
  } catch (err) {
    console.error(err);
  }
}

const main = async () => {
  for (const file of fileData) {
    await fileCreate("dist/"+file.name, file.content);
  }
};

main().catch(console.error);