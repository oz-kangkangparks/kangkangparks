# 포트폴리오 이미지 폴더

이 폴더에 포트폴리오 프로젝트 이미지를 추가하세요.

## 이미지 추가 방법

각 프로젝트별로 원하는 만큼 이미지를 추가할 수 있습니다.

### 1. 비온후 (bionhu)
- `bionhu-1.jpg`
- `bionhu-2.jpg`
- `bionhu-3.jpg`
- `bionhu-4.jpg` (추가 가능)
- `bionhu-5.jpg` (추가 가능)
- ... (원하는 만큼)

### 2. 재고관리 (inventory)
- `inventory-1.jpg`
- `inventory-2.jpg`
- `inventory-3.jpg`
- ... (원하는 만큼)

### 3. MoaPDF (moapdf)
- `moapdf-1.jpg`
- `moapdf-2.jpg`
- `moapdf-3.jpg`
- ... (원하는 만큼)

### 4. 모아노벨 (moanovel)
- `moanovel-1.jpg`
- `moanovel-2.jpg`
- `moanovel-3.jpg`
- ... (원하는 만큼)

> **💡 참고**: 이미지 개수는 제한이 없습니다. 원하는 만큼 추가하세요!

## 이미지 사용 방법

1. 이 폴더에 이미지 파일을 복사합니다
2. 파일명은 위의 명명 규칙을 따라주세요
3. 지원 형식: JPG, PNG, WebP
4. 권장 크기: 1920x1080 (16:9 비율)

## 코드에 이미지 경로 추가하기

이미지 파일을 추가한 후, `src/routes/PortfolioDetail.tsx` 파일에서 해당 프로젝트의 `images` 배열에 경로를 추가하세요:

```tsx
// 예시: 비온후 프로젝트에 이미지 5개 추가
images: [
  '/images/bionhu-1.jpg',
  '/images/bionhu-2.jpg',
  '/images/bionhu-3.jpg',
  '/images/bionhu-4.jpg',  // 추가
  '/images/bionhu-5.jpg',  // 추가
],
```

## 실제 이미지 표시하기

플레이스홀더 대신 실제 이미지를 표시하려면 `src/routes/PortfolioDetail.tsx` 파일의 약 210번째 줄 근처에서:

```tsx
{/* 실제 이미지가 있을 경우 - 이 부분의 주석을 해제하세요 */}
<img src={image} alt={`${portfolio.title} ${index + 1}`} className="w-full h-full object-cover" />
```

그리고 플레이스홀더 부분을 주석 처리하세요:

```tsx
{/* 이미지 플레이스홀더 - 이 부분을 주석 처리하세요 */}
{/* 
<div className={`absolute inset-0 bg-gradient-to-br ${portfolio.gradient} opacity-20`} />
<div className="absolute inset-0 flex items-center justify-center">
  ...
</div>
*/}
```

