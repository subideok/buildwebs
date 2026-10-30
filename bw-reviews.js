/* 빌드웹스 다섯 번째 섹션 — 고객후기 <bw-reviews></bw-reviews>
   Shadow DOM 안에서만 동작합니다. 문구는 CFG(또는 window.BW_REVIEWS_CONFIG)에서 수정합니다. */
(function () {
  const BW_SELF_BASE = (document.currentScript && document.currentScript.src) ? new URL('./', document.currentScript.src).href : document.baseURI;
  if (customElements.get('bw-reviews')) return;
  const CFG = {
    id: 'reviews',
    assetBase: 'assets/',
    kicker: '고객후기',
    title: '먼저 맡겨 본\n대표님들의 이야기',
    desc: '처음 질문지부터 오픈 후 관리까지,\n함께한 과정을 그대로 전합니다.',
    sampleNote: '',   // 실제 후기로 바꾼 뒤 '' 로 비우세요
    // 후기 추가: 아래 줄을 복사해 붙여 넣으세요. 이미지 후기는 img에 주소를 넣으면 됩니다(카톡 캡처 등, text는 생략 가능).
    // text의 **강조** 부분에는 형광펜 효과가 들어갑니다.
    // { text: '후기 내용', img: 'https://.../kakao.png', name: '홍*동 대표', biz: '업종', plan: '홈페이지 신규 제작' },
    items: [
      { img: 'review-iamsugaring.jpg', text: '요즘은 홈페이지 보고 **아카데미 수강 연락이 많이 늘어서** 왜 진작 안 만들었나 싶어요', name: '아이엠슈가링 사장님', biz: '왁싱 · 뷰티 아카데미', plan: '홈페이지 신규 제작' },
      { img: 'review-yeppeojida.png', text: '홈페이지 제작을 고민하시는 분들께 **자신 있게 추천하고 싶어요!!**', name: '예뻐지다 원장님', biz: '뷰티 · 피부', plan: '홈페이지 신규 제작' },
      { img: 'review-gmflexible.jpg', text: '작업물 결과가 **기대보다 훨씬 이상**입니다!', name: '광명후렉시블 대표님', biz: '제조 · 산업 설비', plan: '홈페이지 리뉴얼' }
    ],
    colors: { bg: '#F4F5F7', ink: '#0B0C10', gray: '#5B616C', line: '#E2E4E9', card: '#FFFFFF', accent: '#3560FF', dark: '#0B0C10' }
  };
  function merge(a, b) { if (!b) return a; const o = Array.isArray(a) ? a.slice() : Object.assign({}, a); for (const k in b) o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) ? merge(a[k], b[k]) : b[k]; return o; }
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const br = (s) => esc(s).replace(/\n/g, '<br>');
  const css = (c) => `
:host{display:block;background:${c.bg};color:${c.ink};font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all}
*{box-sizing:border-box}
p,h2,h3,ul{margin:0;padding:0;list-style:none}
a{color:inherit}
.sec{max-width:1440px;margin:0 auto;padding:clamp(64px,7vw,120px) clamp(24px,6.5vw,112px) clamp(80px,9vw,150px)}
.hd{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);align-items:end}
.kick{grid-column:1/-1;justify-self:start;display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 22px 0 18px;border-radius:999px;border:1px solid ${c.line};background:#fff;font-size:clamp(16px,1.25vw,19px);font-weight:600;margin-bottom:clamp(28px,3vw,44px)}
.kick::before{content:'';width:8px;height:8px;border-radius:50%;background:${c.accent};box-shadow:0 0 0 5px rgba(53,96,255,.14)}
h2{grid-column:1/8;font-size:clamp(36px,4.4vw,72px);font-weight:700;line-height:1.16;letter-spacing:-.045em}
.rt{grid-column:8/13;display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding-bottom:.5em}
.rt p{font-size:clamp(15px,1.1vw,17px);line-height:1.75;color:${c.gray}}
.note{font-size:13px;font-weight:600;color:#2848d6;background:#e3e8ff;padding:6px 12px;border-radius:999px}
.rail{--pad:clamp(24px,6.5vw,112px);margin:clamp(56px,6vw,88px) calc(var(--pad) * -1) 0}
.grid{display:flex;gap:clamp(14px,1.4vw,20px);overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding:0 var(--pad);padding:6px var(--pad) 10px;scrollbar-width:none;-webkit-overflow-scrolling:touch;cursor:grab}
.grid::-webkit-scrollbar{display:none}
.grid.drag{cursor:grabbing;scroll-snap-type:none;user-select:none}
.cd{position:relative;min-width:0;flex:0 0 clamp(300px,30vw,440px);min-height:clamp(340px,28vw,420px);scroll-snap-align:start;display:flex;flex-direction:column;gap:28px;padding:clamp(28px,2.6vw,40px);border-radius:22px;background:${c.card};box-shadow:0 0 0 1px ${c.line};opacity:0;translate:0 70px;rotate:var(--r,0deg);transform:perspective(900px) rotateX(var(--tx,0deg)) rotateY(var(--ty,0deg));transition:opacity .9s ease var(--d,0s),translate 1.1s cubic-bezier(.16,.84,.24,1) var(--d,0s),rotate 1.3s cubic-bezier(.16,.84,.24,1) var(--d,0s),transform .5s cubic-bezier(.2,.7,.2,1),box-shadow .4s}
.cd:hover{box-shadow:0 0 0 1px #c9cdd6,0 40px 70px -36px rgba(11,12,16,.35)}
.in .cd{opacity:1;translate:0 0;rotate:0deg}
.cd.tilt{transition:opacity .9s ease var(--d,0s),translate 1.1s cubic-bezier(.16,.84,.24,1) var(--d,0s),rotate 1.3s cubic-bezier(.16,.84,.24,1) var(--d,0s),transform .12s linear,box-shadow .4s}
.ctl{display:flex;align-items:center;gap:20px;margin-top:clamp(28px,3vw,44px)}
.bar{flex:1;height:2px;border-radius:2px;background:${c.line};overflow:hidden}
.bar i{display:block;height:100%;width:0;background:${c.ink};border-radius:2px;transition:width .2s}
.ix{font-size:14px;font-weight:600;font-variant-numeric:tabular-nums;color:${c.gray};min-width:52px}
.ix b{color:${c.ink}}
.nb{display:flex;gap:10px}
.nb button{width:52px;height:52px;border-radius:50%;border:1px solid #cfd2d9;background:#fff;color:${c.ink};cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s,border-color .2s,opacity .2s}
.nb button:hover{border-color:${c.ink}}
.nb button:disabled{opacity:.35;cursor:default}
.nb button:focus-visible{outline:2px solid ${c.accent};outline-offset:3px}
.cd .sh{position:relative;display:flex;align-items:center;justify-content:center;width:100%;aspect-ratio:1/1;border:0;padding:clamp(14px,1.4vw,22px);border-radius:16px;overflow:hidden;background:#B6C7DA;cursor:zoom-in}
.cd .sh img{max-width:100%;max-height:100%;object-fit:contain;display:block;pointer-events:none;border-radius:10px;box-shadow:0 18px 36px -20px rgba(11,12,16,.45);opacity:0;scale:.9;filter:blur(6px);transition:opacity .8s ease calc(var(--d,0s) + .35s),scale 1s cubic-bezier(.2,.8,.2,1.1) calc(var(--d,0s) + .35s),filter .8s ease calc(var(--d,0s) + .35s),transform .6s cubic-bezier(.2,.7,.2,1)}
.in .cd .sh img{opacity:1;scale:1;filter:none}
.cd:hover .sh img{transform:scale(1.03)}
.cd .sh::after{content:'';position:absolute;inset:0;background:linear-gradient(115deg,transparent 35%,rgba(255,255,255,.45) 50%,transparent 65%);translate:-120% 0;pointer-events:none}
.in .cd .sh::after{animation:bwShine 1.4s ease calc(var(--d,0s) + 1s) 1 both}
@keyframes bwShine{to{translate:120% 0}}
.cd .q mark{color:inherit;font-weight:700;background:linear-gradient(rgba(53,96,255,.22),rgba(53,96,255,.22)) no-repeat 0 88%/0% 42%;transition:background-size 1s cubic-bezier(.6,0,.2,1) calc(var(--d,0s) + 1.1s);padding:0 2px}
.in .cd .q mark{background-size:100% 42%}
.cd .sh span{position:absolute;right:12px;bottom:12px;z-index:1;font-size:12px;font-weight:600;color:#fff;padding:6px 10px;border-radius:999px;background:rgba(11,12,16,.55)}
.cd.im{gap:22px}
.cd.im .q{font-size:clamp(17px,1.3vw,20px);line-height:1.6;font-weight:600;letter-spacing:-.02em;color:${c.ink}}
.cd.im .q::before{font-size:48px;height:22px;margin-bottom:12px}
@media (min-width:1024px){.cnt3 .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));overflow:visible;cursor:default}.cnt3 .cd{min-width:0}.cnt3 .ctl{display:none}}
.lb{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(5,5,7,.86);opacity:0;pointer-events:none;transition:opacity .25s}
.lb.open{opacity:1;pointer-events:auto}
.lb img{max-width:min(560px,100%);max-height:100%;border-radius:12px;display:block;object-fit:contain;scale:.92;translate:0 20px;transition:scale .45s cubic-bezier(.2,.8,.2,1.1),translate .45s cubic-bezier(.2,.8,.2,1)}
.lb.open img{scale:1;translate:0 0}
.lb button{position:absolute;top:16px;right:16px;width:48px;height:48px;border-radius:50%;border:0;background:rgba(255,255,255,.12);color:#fff;font-size:22px;cursor:pointer}
.cd .q{font-size:clamp(16px,1.15vw,18px);line-height:1.75;color:#2a2e36;text-wrap:pretty}
.cd .q::before{content:'“';display:block;font-size:56px;line-height:.6;height:26px;font-weight:700;color:${c.accent};margin-bottom:14px}
.who{margin-top:auto;display:flex;align-items:center;gap:14px;padding-top:22px;border-top:1px solid ${c.line}}
.av{flex:none;width:44px;height:44px;border-radius:50%;background:#e3e8ff;color:#2848d6;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700}
.who>div{min-width:0}
.who b{display:block;font-size:16px;font-weight:700}
.who span{font-size:13px;color:${c.gray}}
.who i{margin-left:auto;font-style:normal;font-size:12px;font-weight:600;color:${c.gray};padding:6px 10px;border-radius:999px;background:${c.bg};white-space:nowrap}
.cd.ft{flex-basis:clamp(320px,46vw,680px);background:${c.dark};color:#F4F5F7;box-shadow:none;justify-content:space-between}
.cd.ft .q{font-size:clamp(22px,2vw,32px);line-height:1.55;font-weight:600;letter-spacing:-.025em;color:#F4F5F7;max-width:880px}
.cd.ft .q::before{font-size:80px;height:38px;color:#6F8DFF}
.cd.ft .who{border-color:#24262c}
.cd.ft .av{background:#3560FF;color:#fff}
.cd.ft .who span{color:#9AA0AA}
.cd.ft .who i{background:#17181d;color:#c4c8d0}
@media (max-width:860px){.hd{display:block}.rt{margin-top:22px}}
@media (max-width:640px){.sec{padding:64px 20px 80px}h2{font-size:clamp(30px,8.4vw,44px)}.rail{--pad:20px}.cd,.cd.ft{flex-basis:84vw;min-height:0}.cd.ft .q{font-size:21px}.who i{display:none}.nb button{width:44px;height:44px}}
.still .cd{opacity:1;translate:0 0;rotate:0deg;transition:none}
.still .cd .sh img{opacity:1;scale:1;filter:none;transition:none}
.still .cd .sh::after{animation:none}
.still .cd .q mark{background-size:100% 42%;transition:none}
`;
  class BWReviews extends HTMLElement {
    static get observedAttributes() { return ['still']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = merge(CFG, window.BW_REVIEWS_CONFIG);
      if (c.id && !this.id) { this.id = c.id; this.style.scrollMarginTop = '84px'; }
      const root = this.attachShadow({ mode: 'open' });
      const A = (s) => /^(https?:|\/|data:)/.test(s) ? s : new URL(c.assetBase + s, (window.BW_ASSET_BASE || BW_SELF_BASE)).href;
      const card = (r, i) => `<li class="cd${r.featured ? ' ft' : ''}${r.img ? ' im' : ''}" style="--d:${Math.min(i, 4) * 0.14}s;--r:${[-2.4, 1.8, -1.2, 2.2][i % 4]}deg">${r.img ? `<button type="button" class="sh" data-src="${esc(A(r.img))}" aria-label="${esc(r.name)} 후기 이미지 크게 보기"><img src="${esc(A(r.img))}" alt="${esc(r.name)} 후기 이미지" loading="lazy"><span>크게 보기</span></button>` : ''}${r.text ? `<p class="q">${esc(r.text).replace(/\*\*(.+?)\*\*/g, '<mark>$1</mark>')}</p>` : ''}<div class="who"><div><b>${esc(r.name)}</b><span>${esc(r.biz)}</span></div><i>${esc(r.plan)}</i></div></li>`;
      root.innerHTML = `<style>${css(c.colors)}</style><div class="wrap${c.items.length <= 3 ? ' cnt3' : ''}"><section class="sec" aria-labelledby="bw-rv-title">
  <div class="hd"><p class="kick">${esc(c.kicker)}</p><h2 id="bw-rv-title">${br(c.title)}</h2>
    <div class="rt"><p>${br(c.desc)}</p>${c.sampleNote ? `<span class="note">${esc(c.sampleNote)}</span>` : ''}</div></div>
  <div class="rail"><ul class="grid" aria-label="고객 후기 목록">${c.items.map(card).join('')}</ul></div>
  <div class="ctl"><span class="ix"><b>01</b> / ${String(c.items.length).padStart(2, '0')}</span><span class="bar"><i></i></span>
    <div class="nb"><button type="button" class="pv" aria-label="이전 후기"><svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button><button type="button" class="nx" aria-label="다음 후기"><svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div></div>
</section><div class="lb" role="dialog" aria-modal="true" aria-label="후기 이미지"><img alt=""><button type="button" aria-label="닫기">×</button></div></div>`;
      const wrap = root.querySelector('.wrap'), grid = root.querySelector('.grid');
      const mq = ({ matches: false, addEventListener() {} });
      this.applyStill = () => wrap.classList.toggle('still', mq.matches || this.getAttribute('still') === 'true');
      this.applyStill();
      new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { grid.classList.add('in'); o.disconnect(); } }, { threshold: 0.12 }).observe(grid);
      const cards = [...grid.children], bar = root.querySelector('.bar i'), ix = root.querySelector('.ix b'), pv = root.querySelector('.pv'), nx = root.querySelector('.nx');
      const curIdx = () => { let best = 0, bd = 1e9; const gl = grid.getBoundingClientRect().left + parseFloat(getComputedStyle(grid).paddingLeft); cards.forEach((cd, i) => { const d = Math.abs(cd.getBoundingClientRect().left - gl); if (d < bd) { bd = d; best = i; } }); return best; };
      const update = () => {
        const max = grid.scrollWidth - grid.clientWidth, r = max > 0 ? grid.scrollLeft / max : 1;
        bar.style.width = (Math.max(1 / cards.length, r) * 100).toFixed(1) + '%';
        const i = r > 0.995 ? cards.length - 1 : curIdx();
        ix.textContent = String(i + 1).padStart(2, '0');
        pv.disabled = grid.scrollLeft < 4; nx.disabled = grid.scrollLeft > max - 4;
      };
      const go = (i) => { const cd = cards[Math.max(0, Math.min(cards.length - 1, i))]; const gl = grid.getBoundingClientRect().left + parseFloat(getComputedStyle(grid).paddingLeft); grid.scrollTo({ left: Math.max(0, grid.scrollLeft + cd.getBoundingClientRect().left - gl), behavior: 'smooth' }); };
      const pos = () => { const max = grid.scrollWidth - grid.clientWidth, o = cards[0].offsetLeft; return cards.map((cd) => Math.min(max, Math.max(0, cd.offsetLeft - o))); };
      const step = (d) => { const p = pos(), s = grid.scrollLeft; let t;
        if (d < 0) { t = 0; p.forEach((v) => { if (v < s - 8) t = v; }); }
        else { t = p.find((v) => v > s + 8); if (t === undefined) t = p[p.length - 1]; }
        grid.style.scrollSnapType = 'none'; grid.scrollTo({ left: t, behavior: 'smooth' });
        clearTimeout(step.tm); step.tm = setTimeout(() => { grid.style.scrollSnapType = ''; }, 700); };
      pv.addEventListener('click', () => step(-1));
      nx.addEventListener('click', () => step(1));
      grid.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
      let dx = null, sl = 0, moved = false;
      grid.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; dx = e.clientX; sl = grid.scrollLeft; moved = false; grid.classList.add('drag'); });
      window.addEventListener('pointermove', (e) => { if (dx === null) return; const d = e.clientX - dx; if (Math.abs(d) > 4) moved = true; grid.scrollLeft = sl - d; });
      window.addEventListener('pointerup', () => { if (dx === null) return; dx = null; grid.classList.remove('drag'); go(curIdx()); });
      grid.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
      grid.addEventListener('dragstart', (e) => e.preventDefault());
      if (matchMedia('(hover:hover) and (pointer:fine)').matches) cards.forEach((cd) => {
        cd.addEventListener('pointermove', (e) => { const b = cd.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5; cd.classList.add('tilt'); cd.style.setProperty('--ty', (x * 7).toFixed(2) + 'deg'); cd.style.setProperty('--tx', (-y * 7).toFixed(2) + 'deg'); });
        cd.addEventListener('pointerleave', () => { cd.classList.remove('tilt'); cd.style.setProperty('--tx', '0deg'); cd.style.setProperty('--ty', '0deg'); });
      });
      const lb = root.querySelector('.lb'), lbi = lb.querySelector('img');
      const close = () => lb.classList.remove('open');
      grid.addEventListener('click', (e) => { const b = e.target.closest('.sh'); if (!b || moved) return; lbi.src = b.dataset.src; lb.classList.add('open'); lb.querySelector('button').focus(); });
      lb.addEventListener('click', (e) => { if (e.target !== lbi) close(); });
      window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    }
    attributeChangedCallback() { this.applyStill && this.applyStill(); }
  }
  customElements.define('bw-reviews', BWReviews);
})();
