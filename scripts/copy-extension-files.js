import fs from 'fs-extra';
import path from 'path';

const rootDir = path.resolve();
const buildDir = path.join(rootDir, 'build');

const filesToCopy = [
  { name: '_locales', src: rootDir },
  { name: 'manifest.json', src: rootDir },
  { name: 'content', src: path.join(rootDir, 'src') },
  { name: 'helpers', src: path.join(rootDir, 'src') },
  { name: 'icons', src: path.join(rootDir, 'src') },
  { name: 'background', src: path.join(rootDir, 'src') }
];

async function copyExtensionFiles() {
  console.log('--- Copying Chrome extension files ---');

  for (const file of filesToCopy) {
    const sourcePath = path.join(file.src, file.name);
    const destPath = path.join(buildDir, file.name);

    try {
      await fs.copy(sourcePath, destPath);
      console.log(`Copied: ${file.name}`);
    } catch (err) {
      console.error(`Failed to copy ${file.name}:`, err);
      process.exit(1);
    }
  }

  console.log('Files copied successfully.');
}

copyExtensionFiles();
