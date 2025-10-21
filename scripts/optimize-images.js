#!/usr/bin/env node

/**
 * 이미지 최적화 스크립트
 * PNG/JPG 이미지를 WebP로 변환하고 크기를 최적화합니다.
 *
 * 사용법: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public', 'images', 'projects');
const QUALITY = 80; // WebP 품질 (1-100)
const MAX_WIDTH = 1200; // 최대 너비

async function optimizeImage(inputPath, outputPath) {
  const ext = path.extname(outputPath).toLowerCase();

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // 너비가 MAX_WIDTH보다 크면 리사이즈
    if (metadata.width > MAX_WIDTH) {
      image.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    // WebP로 변환
    const webpOutputPath = outputPath.replace(/\.(png|jpe?g)$/i, '.webp');
    await image
      .webp({ quality: QUALITY })
      .toFile(webpOutputPath);

    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(webpOutputPath).size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(webpOutputPath)}`);
    console.log(`   ${(inputSize / 1024).toFixed(1)}KB → ${(outputSize / 1024).toFixed(1)}KB (${savings}% 감소)`);

    return { inputPath, outputPath: webpOutputPath, inputSize, outputSize, savings };
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
    return null;
  }
}

async function processDirectory(dir) {
  const results = [];

  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      // 재귀적으로 하위 디렉토리 처리
      const subResults = await processDirectory(fullPath);
      results.push(...subResults);
    } else if (/\.(png|jpe?g)$/i.test(file.name)) {
      // 이미지 파일 처리
      const result = await optimizeImage(fullPath, fullPath);
      if (result) results.push(result);
    }
  }

  return results;
}

async function main() {
  console.log('🖼️  이미지 최적화 시작...\n');
  console.log(`📁 대상 폴더: ${PUBLIC_DIR}\n`);

  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error(`❌ 폴더를 찾을 수 없습니다: ${PUBLIC_DIR}`);
    process.exit(1);
  }

  const results = await processDirectory(PUBLIC_DIR);

  if (results.length === 0) {
    console.log('\n⚠️  최적화할 이미지가 없습니다.');
    return;
  }

  // 통계
  const totalInputSize = results.reduce((sum, r) => sum + r.inputSize, 0);
  const totalOutputSize = results.reduce((sum, r) => sum + r.outputSize, 0);
  const totalSavings = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);

  console.log('\n📊 최적화 완료!');
  console.log(`   총 ${results.length}개 파일 처리`);
  console.log(`   ${(totalInputSize / 1024 / 1024).toFixed(2)}MB → ${(totalOutputSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   전체 ${totalSavings}% 용량 감소 🎉\n`);
}

main().catch(console.error);
