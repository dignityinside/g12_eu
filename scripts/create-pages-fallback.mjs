import { copyFile } from 'node:fs/promises';

const distIndex = new URL('../dist/index.html', import.meta.url);
const distFallback = new URL('../dist/404.html', import.meta.url);

await copyFile(distIndex, distFallback);
