/* 빌드웹스 전환 섹션 — <bw-statement></bw-statement>
   검은 화면 위 파란 빛 + 문장 하나. Shadow DOM 안에서만 동작합니다.
   배경 영상으로 바꾸려면 CFG.videoSrc 에 mp4 주소를 넣으세요(빛 효과는 자동으로 꺼집니다). */
(function () {
  if (customElements.get('bw-statement')) return;

  const CFG = {
    lead: '고객이 보는 건 회사 소개가 아니라 선택할 이유입니다.',   // 위쪽 작은 문장
    lines: [   // 큰 제목. accent: true = 파란 글자
      { text: '디자인 전에,', accent: false },
      { text: '고객이 누구인지', accent: true },
      { text: '어떤 고민이 있는지', accent: true },
      { text: '왜 우리여야 하는지', accent: true },
      { text: '부터 정리합니다.', accent: false }
    ],
    videoSrc: '',        // 예: 'https://.../bg.mp4'
    posterSrc: '',       // 영상 로딩 전 이미지(선택)
    speed: 1,            // 빛 움직임 속도
    colors: { bg: '#050507', text: '#F4F5F7', sub: '#B8BCC6', accentText: '#6F8DFF', light: ['#3560FF', '#6F8DFF', '#1B2F9E'] }
  };

  function merge(a, b) {
    if (!b) return a;
    const o = Array.isArray(a) ? a.slice() : Object.assign({}, a);
    for (const k in b) o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) ? merge(a[k], b[k]) : b[k];
    return o;
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const rgb = (h) => { const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; };

  const css = (c) => `
:host{display:block;position:relative;background:${c.bg};color:${c.text};font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all}
*{box-sizing:border-box}
.sec{position:relative;height:100svh;min-height:600px;max-height:1100px;overflow:hidden;display:flex;align-items:center;justify-content:center;isolation:isolate}
canvas,video{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;z-index:0}
.veil{position:absolute;inset:0;z-index:1;pointer-events:none;background:radial-gradient(72% 62% at 50% 50%,rgba(5,5,7,.72),rgba(5,5,7,0) 100%),linear-gradient(${c.bg},rgba(5,5,7,0) 18%,rgba(5,5,7,0) 82%,${c.bg})}
.tx{position:relative;z-index:2;margin:0;padding:0 24px;text-align:center;display:flex;flex-direction:column;align-items:center}
.ld{display:flex;align-items:center;gap:14px;margin:0 0 clamp(28px,3vw,48px);font-size:clamp(16px,1.3vw,21px);font-weight:500;letter-spacing:-.02em;color:${c.sub}}
.ld::before,.ld::after{content:'';width:28px;height:1px;background:#3a3d45}
.tt{margin:0;font-size:clamp(34px,4.4vw,72px);font-weight:700;line-height:1.18;letter-spacing:-.045em;color:${c.text}}
.tt span{display:block}
.tt .ac{color:${c.accentText}}
.ld,.tt span{opacity:0;transform:translateY(22px);filter:blur(8px);transition:opacity 1.1s ease,transform 1.1s cubic-bezier(.2,.7,.2,1),filter 1.1s ease}
.in .ld,.in .tt span{opacity:1;transform:none;filter:none}
.still .ld,.still .tt span{transition:none;opacity:1;transform:none;filter:none}
@media (max-width:860px){
  .sec{height:88svh;min-height:520px}
  .tx{padding:0 20px}
  .ld{font-size:15px;line-height:1.6;text-wrap:balance;margin-bottom:24px}
  .ld::before,.ld::after{display:none}
  .tt{font-size:clamp(28px,8.2vw,44px)}
}
`;

  class BWStatement extends HTMLElement {
    static get observedAttributes() { return ['still']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = this.cfg = merge(CFG, window.BW_STATEMENT_CONFIG);
      this.mq = ({ matches: false, addEventListener() {} });
      const root = this.attachShadow({ mode: 'open' });
      const bg = c.videoSrc
        ? `<video src="${esc(c.videoSrc)}"${c.posterSrc ? ` poster="${esc(c.posterSrc)}"` : ''} autoplay muted loop playsinline aria-hidden="true"></video>`
        : '<canvas aria-hidden="true"></canvas>';
      root.innerHTML = `<style>${css(c.colors)}</style>
<div class="wrap"><section class="sec" aria-labelledby="bw-st-title">
  ${bg}<i class="veil"></i>
  <div class="tx">${c.lead ? `<p class="ld">${esc(c.lead)}</p>` : ''}<h2 class="tt" id="bw-st-title" aria-label="${esc(c.lines.map((l) => l.text).join(' '))}"><span aria-hidden="true">${c.lines.map((l, i) => `<span class="${l.accent ? 'ac' : ''}" style="transition-delay:${0.35 + i * 0.22}s">${esc(l.text)}</span>`).join('')}</span></h2></div>
</section></div>`;
      this.wrap = root.querySelector('.wrap');
      const sec = root.querySelector('.sec');
      this.applyStill();
      new IntersectionObserver((es) => es.forEach((e) => {
        this.visible = e.isIntersecting;
        if (e.intersectionRatio > 0.35 || (e.rootBounds && e.intersectionRect.height > e.rootBounds.height * 0.35)) this.wrap.classList.add('in');
      }), { threshold: [0, 0.1, 0.2, 0.35, 0.5] }).observe(sec);

      const cv = root.querySelector('canvas');
      if (cv) this.initLight(cv, c);
    }
    get still() { return this.getAttribute('still') === 'true' || this.mq.matches; }
    applyStill() { this.wrap && this.wrap.classList.toggle('still', this.still); this.draw && this.draw(); }
    attributeChangedCallback() { this.applyStill(); }

    initLight(cv, c) {
      const ctx = cv.getContext('2d', { alpha: false });
      const cols = c.colors.light.map(rgb);
      let W = 0, H = 0, dpr = 1, t = 0, last = performance.now();
      const ribbons = [
        { col: 0, y: 0.38, amp: 0.20, freq: 1.6, width: 0.30, sp: 0.00011, ph: 0.0, twist: 2.4, lines: 46 },
        { col: 1, y: 0.62, amp: 0.16, freq: 2.1, width: 0.20, sp: -0.00008, ph: 2.1, twist: 3.1, lines: 34 },
        { col: 2, y: 0.50, amp: 0.26, freq: 1.1, width: 0.42, sp: 0.00006, ph: 4.0, twist: 1.6, lines: 40 }
      ];
      const size = () => {
        dpr = 0.5; // 절반 해상도로 그린 뒤 화면에 맞춰 늘림(빛 효과라 차이 거의 없음)
        W = cv.clientWidth; H = cv.clientHeight;
        cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
        this.draw();
      };
      this.draw = () => {
        if (!W) return;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = c.colors.bg; ctx.fillRect(0, 0, W, H);
        ctx.globalCompositeOperation = 'lighter';
        const D = Math.hypot(W, H), mob = W < 860;
        ctx.save();
        ctx.translate(W / 2, H / 2); ctx.rotate(-0.36); ctx.translate(-D / 2, -D / 2);
        const steps = 28;
        ribbons.forEach((r) => {
          const [R, G, B] = cols[r.col % cols.length];
          const ph = r.ph + t * r.sp;
          const L = Math.round(r.lines * (mob ? 0.45 : 0.5));
          for (let i = 0; i <= L; i++) {
            const u = i / L;
            const sheen = Math.pow(Math.abs(Math.cos(u * Math.PI * 1.2 + ph * 0.7)), 10);
            const a = 0.025 + 0.32 * sheen;
            ctx.strokeStyle = `rgba(${R},${G},${B},${a.toFixed(3)})`;
            ctx.lineWidth = 1.2 + sheen * 2.8;
            ctx.beginPath();
            for (let s = 0; s <= steps; s++) {
              const x = (s / steps) * D;
              const k = x / D;
              const env = Math.sin(k * Math.PI);
              const y = D * (r.y
                + r.amp * Math.sin(k * r.freq * Math.PI * 2 + ph) * 0.5
                + (u - 0.5) * r.width * env * Math.cos(k * r.twist * Math.PI + ph * 1.3));
              s ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
            }
            ctx.stroke();
          }
        });
        ctx.restore();
      };
      new ResizeObserver(size).observe(cv);
      const tick = (now) => {
        requestAnimationFrame(tick);
        const dt = Math.min(64, now - last);
        if (dt < 40) return; last = now;
        if (!this.visible || document.hidden || this.still) return;
        t += dt * (this.cfg.speed || 1) * 10;
        this.draw();
      };
      requestAnimationFrame(tick);
    }
  }
  customElements.define('bw-statement', BWStatement);
})();
