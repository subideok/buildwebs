/* 빌드웹스 다섯 번째 섹션 — 고객후기 <bw-reviews></bw-reviews>
   ※ 아래 후기는 배치 확인용 예시 문구입니다. 공개 전 실제 고객 후기로 반드시 교체하세요.
   Shadow DOM 안에서만 동작합니다. 문구는 CFG(또는 window.BW_REVIEWS_CONFIG)에서 수정합니다. */
(function () {
  if (customElements.get('bw-reviews')) return;
  const CFG = {
    id: 'reviews',
    kicker: '고객후기',
    title: '먼저 맡겨 본\n대표님들의 이야기',
    desc: '처음 질문지부터 오픈 후 관리까지,\n함께한 과정을 그대로 전합니다.',
    sampleNote: '',   // 실제 후기로 바꾼 뒤 '' 로 비우세요
    // 후기 추가: 아래 줄을 복사해 붙여 넣으세요. 이미지 후기는 img에 주소를 넣으면 됩니다(카톡 캡처 등, text는 생략 가능).
    // { text: '후기 내용', img: 'https://.../kakao.png', name: '홍*동 대표', biz: '업종', plan: '홈페이지 신규 제작' },
    items: [
      { text: '처음 질문지를 받았을 때 이렇게까지 물어보나 싶었는데, 그 답변이 그대로 첫 화면 문장이 됐습니다. 우리 사무소가 왜 다른지 이제야 한 줄로 설명할 수 있게 됐어요.', name: '정*호 대표', biz: '법률사무소', plan: '홈페이지 신규 제작', featured: true },
      { text: '진료 시간과 예약 버튼 위치까지 하나하나 이유를 설명해 주셔서 믿고 맡길 수 있었습니다.', name: '한*진 원장', biz: '치과', plan: '홈페이지 수정 제작' },
      { text: '시안 세 개의 방향이 정말 달라서 고르기가 오히려 쉬웠어요. 수정 요청도 그날 바로 반영해 주셨습니다.', name: '이*수 대표', biz: '기업 컨설팅', plan: '홈페이지 신규 제작' },
      { text: '사진만 많던 예전 홈페이지와 달리, 우리가 무엇을 잘하는지가 문장으로 보입니다.', name: '박*연 실장', biz: '건축 · 인테리어', plan: '홈페이지 수정 제작' },
      { text: '오픈 후에 설명회 일정 바꾸는 법을 몰라 연락드렸는데, 화면을 보면서 바로 알려주셨어요. 간단한 건 직접 고쳐 주시기도 하고요.', name: '최*아 원장', biz: '교육 · 학원', plan: '홈페이지 신규 제작' },
      { text: '예약 문의가 카카오톡으로 바로 들어오게 연결해 주셔서 응대가 훨씬 편해졌습니다.', name: '김*림 대표', biz: '숙박', plan: '홈페이지 수정 제작' }
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
.cd{position:relative;flex:0 0 clamp(300px,30vw,440px);min-height:clamp(340px,28vw,420px);scroll-snap-align:start;display:flex;flex-direction:column;gap:28px;padding:clamp(28px,2.6vw,40px);border-radius:22px;background:${c.card};box-shadow:0 0 0 1px ${c.line};opacity:0;transform:translateX(40px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1),box-shadow .3s}
.cd:hover{box-shadow:0 0 0 1px #c9cdd6,0 24px 48px -28px rgba(11,12,16,.25)}
.in .cd{opacity:1;transform:none}
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
.cd .sh{position:relative;display:block;width:100%;aspect-ratio:4/5;border:0;padding:0;border-radius:14px;overflow:hidden;background:#eceef2;cursor:zoom-in}
.cd .sh img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;pointer-events:none}
.cd .sh::after{content:'';position:absolute;left:0;right:0;bottom:0;height:30%;background:linear-gradient(transparent,rgba(11,12,16,.35))}
.cd .sh span{position:absolute;right:12px;bottom:12px;z-index:1;font-size:12px;font-weight:600;color:#fff;padding:6px 10px;border-radius:999px;background:rgba(11,12,16,.55)}
.cd.im{gap:20px}
.cd.im .q{font-size:15px}
.cd.im .q::before{display:none}
.lb{position:fixed;inset:0;z-index:1000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(5,5,7,.86);opacity:0;pointer-events:none;transition:opacity .25s}
.lb.open{opacity:1;pointer-events:auto}
.lb img{max-width:min(520px,100%);max-height:100%;border-radius:12px;display:block;object-fit:contain}
.lb button{position:absolute;top:16px;right:16px;width:48px;height:48px;border-radius:50%;border:0;background:rgba(255,255,255,.12);color:#fff;font-size:22px;cursor:pointer}
.cd .q{font-size:clamp(16px,1.15vw,18px);line-height:1.75;color:#2a2e36;text-wrap:pretty}
.cd .q::before{content:'“';display:block;font-size:56px;line-height:.6;height:26px;font-weight:700;color:${c.accent};margin-bottom:14px}
.who{margin-top:auto;display:flex;align-items:center;gap:14px;padding-top:22px;border-top:1px solid ${c.line}}
.av{flex:none;width:44px;height:44px;border-radius:50%;background:#e3e8ff;color:#2848d6;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700}
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
.still .cd{opacity:1;transform:none;transition:none}
`;
  class BWReviews extends HTMLElement {
    static get observedAttributes() { return ['still']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = merge(CFG, window.BW_REVIEWS_CONFIG);
      if (c.id && !this.id) { this.id = c.id; this.style.scrollMarginTop = '84px'; }
      const root = this.attachShadow({ mode: 'open' });
      const card = (r, i) => `<li class="cd${r.featured ? ' ft' : ''}${r.img ? ' im' : ''}" style="transition-delay:${Math.min(i, 4) * 0.08}s">${r.img ? `<button type="button" class="sh" data-src="${esc(r.img)}" aria-label="${esc(r.name)} 후기 이미지 크게 보기"><img src="${esc(r.img)}" alt="${esc(r.name)} 후기 이미지" loading="lazy"><span>크게 보기</span></button>` : ''}${r.text ? `<p class="q">${esc(r.text)}</p>` : ''}<div class="who"><span class="av" aria-hidden="true">${esc([...r.name][0] || '')}</span><div><b>${esc(r.name)}</b><span>${esc(r.biz)}</span></div><i>${esc(r.plan)}</i></div></li>`;
      root.innerHTML = `<style>${css(c.colors)}</style><div class="wrap"><section class="sec" aria-labelledby="bw-rv-title">
  <div class="hd"><p class="kick">${esc(c.kicker)}</p><h2 id="bw-rv-title">${br(c.title)}</h2>
    <div class="rt"><p>${br(c.desc)}</p>${c.sampleNote ? `<span class="note">${esc(c.sampleNote)}</span>` : ''}</div></div>
  <div class="rail"><ul class="grid" aria-label="고객 후기 목록">${c.items.map(card).join('')}</ul></div>
  <div class="ctl"><span class="ix"><b>01</b> / ${String(c.items.length).padStart(2, '0')}</span><span class="bar"><i></i></span>
    <div class="nb"><button type="button" class="pv" aria-label="이전 후기"><svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button><button type="button" class="nx" aria-label="다음 후기"><svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div></div>
</section><div class="lb" role="dialog" aria-modal="true" aria-label="후기 이미지"><img alt=""><button type="button" aria-label="닫기">×</button></div></div>`;
      const wrap = root.querySelector('.wrap'), grid = root.querySelector('.grid');
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
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
      const go = (i) => { const cd = cards[Math.max(0, Math.min(cards.length - 1, i))]; grid.scrollTo({ left: cd.offsetLeft - parseFloat(getComputedStyle(grid).paddingLeft), behavior: 'smooth' }); };
      pv.addEventListener('click', () => go(curIdx() - 1));
      nx.addEventListener('click', () => go(curIdx() + 1));
      grid.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();
      let dx = null, sl = 0, moved = false;
      grid.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; dx = e.clientX; sl = grid.scrollLeft; moved = false; grid.classList.add('drag'); });
      window.addEventListener('pointermove', (e) => { if (dx === null) return; const d = e.clientX - dx; if (Math.abs(d) > 4) moved = true; grid.scrollLeft = sl - d; });
      window.addEventListener('pointerup', () => { if (dx === null) return; dx = null; grid.classList.remove('drag'); go(curIdx()); });
      grid.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
      grid.addEventListener('dragstart', (e) => e.preventDefault());
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
