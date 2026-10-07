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
    items: [
      { text: '처음 질문지를 받았을 때 이렇게까지 물어보나 싶었는데, 그 답변이 그대로 첫 화면 문장이 됐습니다. 우리 사무소가 왜 다른지 이제야 한 줄로 설명할 수 있게 됐어요.', name: '정*호 대표', biz: '법률사무소', plan: '홈페이지 신규 제작', featured: true },
      { text: '진료 시간과 예약 버튼 위치까지 하나하나 이유를 설명해 주셔서 믿고 맡길 수 있었습니다.', name: '한*진 원장', biz: '치과', plan: '홈페이지 수정 제작' },
      { text: '시안 세 개의 방향이 정말 달라서 고르기가 오히려 쉬웠어요. 수정 요청도 그날 바로 반영해 주셨습니다.', name: '이*수 대표', biz: '기업 컨설팅', plan: '홈페이지 신규 제작' },
      { text: '사진만 많던 예전 홈페이지와 달리, 우리가 무엇을 잘하는지가 문장으로 보입니다.', name: '박*연 실장', biz: '건축 · 인테리어', plan: '홈페이지 수정 제작' },
      { text: '오픈 후에 설명회 일정 바꾸는 법을 몰라 연락드렸는데, 화면을 보면서 바로 알려주셨어요. 간단한 건 직접 고쳐 주시기도 하고요.', name: '최*아 원장', biz: '교육 · 학원', plan: '홈페이지 신규 제작' },
      { text: '예약 문의가 카카오톡으로 바로 들어오게 연결해 주셔서 응대가 훨씬 편해졌습니다.', name: '김*림 대표', biz: '숙박', plan: '홈페이지 수정 제작' }
    ],
    ctaCard: { title: '다음 이야기의\n주인공이 되어 주세요', desc: '업종과 원하는 구성을 남겨 주시면\n맞는 상품과 일정을 안내해 드립니다.', label: '무료 견적 받기', href: '#contact' },
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
.sec{max-width:1440px;margin:0 auto;padding:clamp(110px,11vw,180px) clamp(24px,6.5vw,112px) clamp(110px,11vw,180px)}
.hd{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);align-items:end}
.kick{grid-column:1/-1;justify-self:start;display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 22px 0 18px;border-radius:999px;border:1px solid ${c.line};background:#fff;font-size:clamp(16px,1.25vw,19px);font-weight:600;margin-bottom:clamp(28px,3vw,44px)}
.kick::before{content:'';width:8px;height:8px;border-radius:50%;background:${c.accent};box-shadow:0 0 0 5px rgba(53,96,255,.14)}
h2{grid-column:1/8;font-size:clamp(36px,4.4vw,72px);font-weight:700;line-height:1.16;letter-spacing:-.045em}
.rt{grid-column:8/13;display:flex;flex-direction:column;align-items:flex-start;gap:16px;padding-bottom:.5em}
.rt p{font-size:clamp(15px,1.1vw,17px);line-height:1.75;color:${c.gray}}
.note{font-size:13px;font-weight:600;color:#2848d6;background:#e3e8ff;padding:6px 12px;border-radius:999px}
.grid{margin-top:clamp(56px,6vw,88px);display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(14px,1.4vw,20px);align-items:stretch}
.cd{position:relative;display:flex;flex-direction:column;gap:28px;padding:clamp(28px,2.6vw,40px);border-radius:22px;background:${c.card};box-shadow:0 0 0 1px ${c.line};opacity:0;transform:translateY(18px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1),box-shadow .3s}
.cd:hover{box-shadow:0 0 0 1px #c9cdd6,0 24px 48px -28px rgba(11,12,16,.25)}
.in .cd{opacity:1;transform:none}
.cd .q{font-size:clamp(16px,1.15vw,18px);line-height:1.75;color:#2a2e36;text-wrap:pretty}
.cd .q::before{content:'“';display:block;font-size:56px;line-height:.6;height:26px;font-weight:700;color:${c.accent};margin-bottom:14px}
.who{margin-top:auto;display:flex;align-items:center;gap:14px;padding-top:22px;border-top:1px solid ${c.line}}
.av{flex:none;width:44px;height:44px;border-radius:50%;background:#e3e8ff;color:#2848d6;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700}
.who b{display:block;font-size:16px;font-weight:700}
.who span{font-size:13px;color:${c.gray}}
.who i{margin-left:auto;font-style:normal;font-size:12px;font-weight:600;color:${c.gray};padding:6px 10px;border-radius:999px;background:${c.bg};white-space:nowrap}
.cd.ft{grid-column:span 2;background:${c.dark};color:#F4F5F7;box-shadow:none;justify-content:space-between}
.cd.ft .q{font-size:clamp(22px,2vw,32px);line-height:1.55;font-weight:600;letter-spacing:-.025em;color:#F4F5F7;max-width:880px}
.cd.ft .q::before{font-size:80px;height:38px;color:#6F8DFF}
.cd.ft .who{border-color:#24262c}
.cd.ft .av{background:#3560FF;color:#fff}
.cd.ft .who span{color:#9AA0AA}
.cd.ft .who i{background:#17181d;color:#c4c8d0}
.cd.ct{grid-column:span 2;background:${c.accent};color:#fff;box-shadow:none;flex-direction:row;align-items:flex-end;justify-content:space-between;gap:24px}
.cd.ct h3{font-size:clamp(26px,2.4vw,38px);font-weight:700;line-height:1.25;letter-spacing:-.035em}
.cd.ct p{margin-top:14px;font-size:16px;line-height:1.7;color:#dfe6ff}
.cd.ct a{flex:none;display:inline-flex;align-items:center;gap:10px;height:56px;padding:0 26px;border-radius:999px;background:#fff;color:${c.ink};text-decoration:none;font-size:16px;font-weight:700;transition:transform .2s}
.cd.ct a:hover{transform:translateX(3px);color:${c.ink}}
@media (max-width:1000px){.grid{grid-template-columns:1fr 1fr}.cd.ft{grid-column:1/-1}.cd.ct{grid-column:auto;flex-direction:column;align-items:flex-start}.cd.ct a{width:100%;justify-content:center}}
@media (max-width:860px){.hd{display:block}.rt{margin-top:22px}.rt p br{display:none}}
@media (max-width:640px){.sec{padding:96px 20px}h2{font-size:clamp(30px,8.4vw,44px)}.grid{grid-template-columns:1fr}.cd.ct{flex-direction:column;align-items:flex-start}.cd.ct a{width:100%;justify-content:center}.who i{display:none}}
.still .cd{opacity:1;transform:none;transition:none}
`;
  class BWReviews extends HTMLElement {
    static get observedAttributes() { return ['still']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = merge(CFG, window.BW_REVIEWS_CONFIG);
      if (c.id && !this.id) { this.id = c.id; this.style.scrollMarginTop = '84px'; }
      const root = this.attachShadow({ mode: 'open' });
      const card = (r, i) => `<li class="cd${r.featured ? ' ft' : ''}" style="transition-delay:${(i % 3) * 0.08}s"><p class="q">${esc(r.text)}</p><div class="who"><span class="av" aria-hidden="true">${esc([...r.name][0] || '')}</span><div><b>${esc(r.name)}</b><span>${esc(r.biz)}</span></div><i>${esc(r.plan)}</i></div></li>`;
      const cc = c.ctaCard;
      root.innerHTML = `<style>${css(c.colors)}</style><div class="wrap"><section class="sec" aria-labelledby="bw-rv-title">
  <div class="hd"><p class="kick">${esc(c.kicker)}</p><h2 id="bw-rv-title">${br(c.title)}</h2>
    <div class="rt"><p>${br(c.desc)}</p>${c.sampleNote ? `<span class="note">${esc(c.sampleNote)}</span>` : ''}</div></div>
  <ul class="grid">${c.items.map(card).join('')}<li class="cd ct"><div><h3>${br(cc.title)}</h3><p>${br(cc.desc)}</p></div><a href="${esc(cc.href)}">${esc(cc.label)} →</a></li></ul>
</section></div>`;
      const wrap = root.querySelector('.wrap'), grid = root.querySelector('.grid');
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.applyStill = () => wrap.classList.toggle('still', mq.matches || this.getAttribute('still') === 'true');
      this.applyStill();
      new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { grid.classList.add('in'); o.disconnect(); } }, { threshold: 0.12 }).observe(grid);
    }
    attributeChangedCallback() { this.applyStill && this.applyStill(); }
  }
  customElements.define('bw-reviews', BWReviews);
})();
