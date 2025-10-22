import fs from 'fs-extra';
import path from 'path';
import archiver from 'archiver';

const rootDir = path.resolve();
const buildDir = path.join(rootDir, 'build');
const zipFileName = 'discord-mesdel.zip';

async function zipBuildFolder() {
  console.log(`--- Creating ZIP archive (${zipFileName}) ---`);

  const output = fs.createWriteStream(path.join(rootDir, zipFileName));
  const archive = archiver('zip', { zlib: { level: 9 } });

  archive.pipe(output);

  // 🔥 Burada ikinci parametreyi false yaparak klasörün içeriğini direkt zip’e ekliyoruz
  archive.directory(buildDir, false);

  return new Promise((resolve, reject) => {
    archive.on('warning', (err) => {
      if (err.code !== 'ENOENT') console.warn('ZIP Warning:', err);
    });

    archive.on('error', (err) => reject(err));
    output.on('close', resolve);

    archive.finalize();
  })
    .then(() => console.log(`✅ ZIP archive created successfully: ${zipFileName}`))
    .catch((err) => {
      console.error('❌ ZIP creation failed:', err);
      process.exit(1);
    });
}

zipBuildFolder();
