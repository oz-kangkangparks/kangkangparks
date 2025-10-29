export function makeParticles(count: number, radius: number) {
  const arr = new Array(count).fill(0).map(() => {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const speed = 0.2 + Math.random() * 0.6;
    const size = Math.random() * 1.6 + 0.4;
    const hue = 190 + Math.random() * 140;
    return { r, theta, speed, size, hue };
  });
  return arr;
}
export function drawGradient(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const g = ctx.createLinearGradient(0, 0, w, h);
  const a = 0.35 + Math.sin(t * 0.25) * 0.15;
  g.addColorStop(0, `rgba(120, 20, 120, ${0.2 + a})`);
  g.addColorStop(1, `rgba(0, 180, 220, ${0.18 + a * 0.8})`);
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
}
export function drawGradientBlack(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const r = Math.max(w, h) * 0.75;
  const g = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, r);
  const a = 0.15 + Math.sin(t * 0.2) * 0.05;
  g.addColorStop(0, `rgba(0,0,0,${0.25 + a})`);
  g.addColorStop(1, `rgba(0,0,0,${0.65 + a})`);
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
}
export function drawBlob(ctx: CanvasRenderingContext2D, cx: number, cy: number, baseR: number, rot: number, opt: any) {
  const { hue, sat, light, alpha, wobbleAmp, wobbleFreq } = opt;
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(rot); ctx.beginPath();
  const steps = 160;
  for (let i = 0; i <= steps; i++) {
    const th = (i / steps) * Math.PI * 2;
    const wobble = Math.sin(th * wobbleFreq + rot * 1.6) * baseR * wobbleAmp;
    const r = baseR + wobble;
    const x = Math.cos(th) * r;
    const y = Math.sin(th) * r * 0.92;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = `hsla(${hue} ${sat * 100}% ${light * 100}% / ${alpha})`;
  ctx.shadowColor = `hsla(${hue} 90% 60% / 0.35)`; ctx.shadowBlur = baseR * 0.35; ctx.fill();
  ctx.restore();
}
export function drawParticles(ctx: CanvasRenderingContext2D, pts: any[], cx: number, cy: number, t: number, globalSpeed: number) {
  ctx.save(); ctx.globalCompositeOperation = 'lighter';
  for (const p of pts) {
    const ang = p.theta + t * (p.speed * globalSpeed);
    const rr = 80 + p.r * 60;
    const x = cx + Math.cos(ang) * rr;
    const y = cy + Math.sin(ang * 0.96) * rr * 0.92;
    const alpha = 0.12 + 0.08 * Math.sin(ang * 2.0 + t * 0.5);
    ctx.fillStyle = `hsla(${p.hue} 80% 65% / ${alpha})`;
    ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}
export function drawBlobMono(ctx: CanvasRenderingContext2D, cx: number, cy: number, baseR: number, rot: number) {
  ctx.save(); ctx.translate(cx, cy); ctx.rotate(rot); ctx.beginPath();
  const steps = 140;
  for (let i = 0; i <= steps; i++) {
    const th = (i / steps) * Math.PI * 2;
    const wobble = Math.sin(th * 3.0 + rot * 1.3) * baseR * 0.12;
    const r = baseR + wobble;
    const x = Math.cos(th) * r;
    const y = Math.sin(th) * r * 0.92;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = Math.max(1, baseR * 0.02);
  ctx.shadowColor = 'rgba(255,255,255,0.06)'; ctx.shadowBlur = baseR * 0.25; ctx.stroke();
  ctx.restore();
}
export function drawParticlesMono(ctx: CanvasRenderingContext2D, pts: any[], cx: number, cy: number, t: number, globalSpeed: number) {
  ctx.save(); ctx.globalCompositeOperation = 'screen';
  for (const p of pts) {
    const ang = p.theta + t * (p.speed * globalSpeed);
    const rr = 80 + p.r * 60;
    const x = cx + Math.cos(ang) * rr;
    const y = cy + Math.sin(ang * 0.96) * rr * 0.92;
    const alpha = 0.06 + 0.06 * Math.sin(ang * 1.6 + t * 0.4);
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.beginPath(); ctx.arc(x, y, p.size * 0.9, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}
export function drawScanlines(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const y = ((t * 40) % (h + 80)) - 80;
  const g = ctx.createLinearGradient(0, y, 0, y + 80);
  g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.5, 'rgba(255,255,255,0.06)'); g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, y, w, 80);
}