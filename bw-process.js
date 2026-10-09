/* 빌드웹스 여섯 번째 섹션 — 제작 과정 <bw-process></bw-process>
   Shadow DOM 안에서만 동작합니다. 문구는 CFG(또는 window.BW_PROCESS_CONFIG)에서 수정합니다. */
(function () {
  if (customElements.get('bw-process')) return;
  const CFG = {
    id: 'process',
    kicker: '제작 과정',
    title: '문의부터 오픈까지,\n{n}단계로 진행합니다.',   // {n} = 단계 수(숫자 효과)
    desc: '단계별로 필요한 내용을 안내드립니다.',
    numFont: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap',   // 숫자 글꼴
    steps: [
      { name: '무료 견적 문의', desc: '업종과 원하는 구성을 문의 폼에 남깁니다.' },
      { name: '상담 · 견적', desc: '범위와 일정을 정하고 최종 가격을 안내합니다.' },
      { name: '강점 도출 질문지 제출', desc: '질문지와 첨부 자료를 바탕으로 제작에 필요한 정보와 이미지를 한 번에 정리합니다.', tag: '가장 중요한 단계' },
      { name: '디자인 시안 3개 전달', desc: '질문지 답변을 참고하여 문의로 이어지는 홈페이지 구조 시안 3가지를 전달드립니다.' },
      { name: '카피 기획', desc: '업체의 차별점을 고객이 선택할 이유로 느끼게 만드는 카피를 작성합니다.' },
      { name: '아임웹 제작', desc: 'PC, 모바일, 태블릿 반응형 홈페이지를 제작합니다.' },
      { name: '검수 · 수정', desc: '오류와 오타를 확인하고 제한 없이 고칩니다.' },
      { name: '오픈 · 운영 안내', desc: '검색 등록을 마치고 관리 방법을 안내합니다.' }
    ],
    note: '질문지 답변이 성실하지 않으면 의뢰를 받지 않습니다.\n효과적인 홈페이지를 만들기 위해서는\n사업과 고객을 충분히 이해하는 과정이 꼭 필요합니다.',   // \n = 줄바꿈
    colors: { bg: '#050507', text: '#F4F5F7', gray: '#9AA0AA', accent: '#3560FF', accentText: '#6F8DFF' }
  };
  function merge(a, b) { if (!b) return a; const o = Array.isArray(a) ? a.slice() : Object.assign({}, a); for (const k in b) o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) ? merge(a[k], b[k]) : b[k]; return o; }
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const br = (s) => esc(s).replace(/\n/g, '<br>');
  const css = (c) => `
:host{display:block;background:${c.bg};color:${c.text};font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all}
*{box-sizing:border-box}
p,h2,h3,ol{margin:0;padding:0;list-style:none}
.sec{max-width:1440px;margin:0 auto;padding:clamp(48px,5vw,88px) clamp(24px,6.5vw,112px) clamp(48px,5vw,88px)}
.hd{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);align-items:end}
.kick{grid-column:1/-1;justify-self:start;display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 22px 0 18px;border-radius:999px;border:1px solid #2a2d35;background:#0c0d11;font-size:clamp(16px,1.25vw,19px);font-weight:600;margin-bottom:clamp(28px,3vw,44px)}
.kick::before{content:'';width:8px;height:8px;border-radius:50%;background:${c.accent};box-shadow:0 0 0 5px rgba(53,96,255,.18)}
h2{grid-column:1/8;font-size:clamp(36px,4.4vw,72px);font-weight:700;line-height:1.16;letter-spacing:-.045em}
.rt{grid-column:8/13;padding-bottom:.5em;font-size:clamp(15px,1.1vw,17px);line-height:1.75;color:${c.gray}}
h2 .n{display:inline-block;font-family:'Instrument Serif',Georgia,serif;font-style:italic;font-weight:400;font-size:1.7em;line-height:.8;letter-spacing:0;color:${c.accentText};margin:0 .06em 0 -.02em;vertical-align:-.06em;opacity:0;transform:translateY(.25em) rotate(-10deg) scale(.85);filter:blur(10px);transition:opacity 1.1s ease,transform 1.3s cubic-bezier(.2,.8,.2,1),filter 1.1s ease;text-shadow:0 0 40px rgba(53,96,255,.45)}
.on h2 .n{opacity:1;transform:none;filter:none}
.st{margin-top:clamp(64px,7vw,110px);display:grid;grid-template-columns:repeat(4,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);row-gap:clamp(44px,4vw,64px)}
.st li{position:relative;padding-top:clamp(28px,2.4vw,36px);display:flex;flex-direction:column;gap:12px}
.st li::before{content:'';position:absolute;left:0;right:0;top:0;height:1px;background:#24262c}
.st li::after{content:'';position:absolute;left:0;right:0;top:0;height:1px;background:${c.accent};transform-origin:0 50%;transform:scaleX(0);transition:transform .9s cubic-bezier(.2,.7,.2,1)}
.in li::after{transform:scaleX(1)}
.no{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;font-variant-numeric:tabular-nums;background:#14161b;color:${c.text};box-shadow:inset 0 0 0 1px #2a2d35;margin-bottom:10px;transition:background .3s,box-shadow .3s}
.st li:hover .no,.st li.key .no{background:${c.accent};box-shadow:none;color:#fff}
.st h3{font-size:clamp(20px,1.7vw,26px);font-weight:700;letter-spacing:-.03em;line-height:1.3}
.st p{font-size:15px;line-height:1.7;color:${c.gray};max-width:300px}
.tg{position:absolute;right:0;top:calc(clamp(28px,2.4vw,36px) + 10px);font-size:12px;font-weight:600;color:${c.accentText};padding:6px 10px;border-radius:999px;background:rgba(53,96,255,.14)}
.st li{opacity:0;transform:translateY(14px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.7,.2,1)}
.in li{opacity:1;transform:none}
.nt{margin-top:clamp(56px,6vw,88px);display:flex;gap:18px;align-items:flex-start;padding:28px 32px;border-radius:20px;background:#0c0d11;box-shadow:inset 0 0 0 1px #1f2127;font-size:clamp(15px,1.15vw,18px);line-height:1.7;color:#c4c8d0}
.nt b{flex:none;font-size:14px;font-weight:700;color:${c.accentText};padding-top:2px}
@media (max-width:1000px){.st{grid-template-columns:1fr 1fr}}
@media (max-width:860px){.hd{display:block}.rt{margin-top:22px}.rt br{display:none}}
@media (max-width:560px){.sec{padding:48px 20px 40px}h2{font-size:clamp(30px,8.4vw,44px)}.st{grid-template-columns:1fr;row-gap:36px}.nt{flex-direction:column;gap:8px;padding:24px 20px;font-size:14px}.nt br{display:none}}
.still h2 .n{transition:none;opacity:1;transform:none;filter:none}
.still li{opacity:1!important;transform:none!important;transition:none!important}.still li::after{transform:scaleX(1);transition:none}
`;
  class BWProcess extends HTMLElement {
    static get observedAttributes() { return ['still']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = merge(CFG, window.BW_PROCESS_CONFIG);
      if (c.id && !this.id) { this.id = c.id; this.style.scrollMarginTop = '84px'; }
      const N = c.steps.length;
      if (c.numFont && !document.querySelector(`link[href="${c.numFont}"]`)) { const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = c.numFont; document.head.appendChild(l); }
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${css(c.colors)}</style><div class="wrap"><section class="sec" aria-labelledby="bw-pc-title">
  <div class="hd"><p class="kick">${esc(c.kicker)}</p><h2 id="bw-pc-title" aria-label="${esc(c.title.replace('{n}', N).replace(/\n/g, ' '))}"><span aria-hidden="true">${br(c.title).replace('{n}', `<span class="n">${N}</span>`)}</span></h2><p class="rt">${br(c.desc)}</p></div>
  <ol class="st">${c.steps.map((s, i) => `<li class="${s.tag ? 'key' : ''}" style="transition-delay:${i * 0.09}s"><span class="no">${String(i + 1).padStart(2, '0')}</span>${s.tag ? `<span class="tg">${esc(s.tag)}</span>` : ''}<h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p></li>`).join('')}</ol>
  ${c.note ? `<p class="nt"><b>미리 알려드립니다</b><span>${esc(c.note).replace(/\n/g, ' <br>')}</span></p>` : ''}
</section></div>`;
      const wrap = root.querySelector('.wrap'), st = root.querySelector('.st');
      const mq = ({ matches: false, addEventListener() {} });
      this.applyStill = () => wrap.classList.toggle('still', mq.matches || this.getAttribute('still') === 'true');
      this.applyStill();
      new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { st.classList.add('in'); o.disconnect(); } }, { threshold: 0.15 }).observe(st);
      const hd = root.querySelector('.hd');
      new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { hd.classList.add('on'); o.disconnect(); } }, { threshold: 0.5 }).observe(hd);
    }
    attributeChangedCallback() { this.applyStill && this.applyStill(); }
  }
  customElements.define('bw-process', BWProcess);
})();
