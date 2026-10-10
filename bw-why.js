/* 빌드웹스 네 번째 섹션 — 고르는 이유 + 기본 포함 사항 <bw-why></bw-why>
   Shadow DOM 안에서만 동작합니다. 문구는 아래 CFG(또는 window.BW_WHY_CONFIG)에서 수정합니다. */
(function () {
  if (customElements.get('bw-why')) return;
  const CFG = {
    id: 'why',
    kicker: '빌드웹스만의 혜택',
    title: '맡길 때는 안심되게\n받는 것은 확실하게.',
    showWorries: false,   // true로 바꾸면 '걱정 6가지' 카드가 다시 보입니다
    items: [
      { worry: '실력이 걱정된다면', title: '대표가 직접 기획합니다', desc: '6년간 마케팅·기획·카피를 해온 대표가\n질문지부터 오픈까지 직접 맡습니다.' },
      { worry: '가격이 걱정된다면', title: '필요한 만큼만 고릅니다', desc: '네 가지 상품 중 규모에 맞는 것을 고르면\n과한 견적 없이 시작할 수 있습니다.' },
      { worry: '추가 비용이 걱정된다면', title: '견적서 금액이 끝입니다', desc: '계약한 범위 안에서는 수정과 작업에\n추가 비용을 받지 않습니다.' },
      { worry: '일정이 걱정된다면', title: '시작 전에 일정을 정합니다', desc: '단계별 마감일을 먼저 약속하고,\n진행 상황을 그때그때 공유합니다.' },
      { worry: '결과물이 걱정된다면', title: '마음에 들 때까지 고칩니다', desc: '시안 세 개 중에서 고르고,\n제작 범위 안에서는 횟수 제한 없이 수정합니다.' },
      { worry: '오픈 이후가 걱정된다면', title: '끝까지 연락이 닿습니다', desc: '간단한 수정은 비용 없이 바로 처리하고,\n막히는 부분은 화면을 보며 안내합니다.' }
    ],
    askTitle: '어떤 점이 걱정되세요?',   // 모바일 걱정 선택 제목
    incKicker: '기본 혜택',
    incUnit: '가지',
    incTitle: '추가 요금 없이\n처음부터 포함됩니다',
    incAddon: 'STANDARD 상품부터\nAI 검색 대응 {n}가지가 더해집니다',   // {n} = 추가 항목 수
    incDesc: '홈페이지만 넘기고 끝내지 않습니다.\n제작부터 오픈 이후의 작은 수정까지,\n필요한 순간 계속 함께합니다.',
    cta: { label: '무료 견적 받기', href: '#contact' },
    extras: [
      { name: '기획 · 제작', desc: '강점을 찾는 일부터\n화면 완성까지 직접 맡습니다.', items: [
        ['강점 도출 질문지 · 인터뷰', '고객과 경쟁사를 분석해, 업체가 선택 받을 이유부터 찾습니다.'],
        ['제작 범위 내 무제한 수정', '정해진 제작 범위 안에서는 횟수를 세지 않고 충분히 다듬습니다.'],
        ['모바일 반응형', '휴대폰·태블릿·PC 어디서 봐도 글자와 버튼이 편하게 보이도록 맞춥니다.'],
        ['이미지 준비', '보내주신 사진과 영상을 바탕으로 제작하고, 필요한 이미지는 AI를 활용해 보완해드립니다.'],
        ['홈페이지 제작 시안 3개', '서로 다른 3가지 홈페이지 구조와 디자인 방향을 비교한 뒤 최종 방향을 결정합니다.'] ] },
      { name: '검색 분석', desc: '찾는 사람에게 보이도록\n오픈 전에 등록을 마칩니다.', items: [
        ['네이버 · 구글 사이트 등록', '네이버와 구글이 사이트를 찾고 수집할 수 있도록 기본 등록을 마칩니다.'],
        ['페이지별 제목·설명 설정', '검색엔진이 각 페이지의 내용을 더 잘 이해할 수 있도록 제목과 설명을 페이지별로 설정합니다.'],
        ['이미지 경량화', '화질은 최대한 유지하면서 용량을 줄여 페이지가 빠르게 열리도록 합니다.'],
        ['방문 통계 확인', '홈페이지에 몇 명이 들어오는지, 어디서 방문했는지 확인할 수 있게 설정합니다.'] ] },
      { name: '상담 연결', desc: '보고 바로 연락할 수 있게\n문의 통로를 모두 엽니다.', items: [
        ['전화 걸기 버튼', '모바일에서 한 번에 전화가 연결됩니다'],
        ['카카오톡 채널 · 네이버 톡톡 연결', '고객이 익숙한 메신저로 바로 상담을 시작할 수 있게 연결합니다.'],
        ['문의 폼 · 접수 알림', '꼭 필요한 정보만 받고, 새 문의가 들어오면 바로 확인할 수 있게 설정합니다.'],
        ['지도 · 오시는 길', '카카오맵, 구글맵으로 업체의 위치를 노출시킵니다.'] ] },
      { name: '운영 · 브랜드', desc: '오픈 후에도\n대표님이 직접 관리합니다.', items: [
        ['운영 가이드 제공', '사진·문구·가격·팝업처럼 자주 바꾸는 내용을 직접 수정할 수 있도록 사용법을 안내해드립니다.'],
        ['팝업 관리 + 오픈 팝업 1종 제작', '오픈·행사·공지에 바로 쓸 수 있는 팝업 1종을 제작하고, 직접 바꾸는 법까지 안내합니다.'],
        ['보안 연결 · 파비콘 · 공유 이미지', '보안 연결(SSL)부터 브라우저 아이콘, 링크 공유 이미지까지 브랜드 기본 세팅을 마칩니다.'],
        ['상업용 라이선스 이미지 · 글꼴', '상업적 사용이 가능한 이미지와 글꼴만 사용해 저작권 위험을 줄입니다.'] ] },
      { name: 'AI 검색 대응', addon: true, tag: 'STANDARD 상품부터 추가', desc: 'ChatGPT · 제미나이 · 네이버 AI가\n우리 회사를 찾고 인용하기 쉽게 준비합니다.', items: [
        ['AI용 회사 소개서 작성', 'AI가 회사의 서비스와 강점을 이해하기 쉽도록 핵심 정보를 정리합니다.'],
        ['구조화 데이터 · FAQ 코드 삽입', '회사 정보와 자주 묻는 질문을 검색 엔진이 읽는 형식으로 넣습니다'],
        ['고객 질문·답변 콘텐츠 작성', '고객이 검색이나 AI에 물어볼 만한 질문을 홈페이지에서 바로 답하도록 정리합니다.'],
        ['구글 비즈니스 프로필 연결', '구글 검색과 지도에서 회사 정보를 쉽게 확인할 수 있도록 연결합니다.'] ] },
    ],
    colors: { bg: '#050507', text: '#F4F5F7', gray: '#9AA0AA', accent: '#3560FF', accentText: '#6F8DFF' }
  };
  function merge(a, b) { if (!b) return a; const o = Array.isArray(a) ? a.slice() : Object.assign({}, a); for (const k in b) o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) ? merge(a[k], b[k]) : b[k]; return o; }
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const br = (s) => esc(s).replace(/\n/g, '<br>');
  const css = (c) => `
:host{display:block;background:${c.bg};color:${c.text};font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all}
*{box-sizing:border-box}
p,h2,h3,h4,ul,ol{margin:0;padding:0;list-style:none}
.sec{max-width:1440px;margin:0 auto;padding:clamp(72px,8vw,140px) clamp(24px,6.5vw,112px) clamp(48px,5vw,88px)}
.kick{display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 22px 0 18px;border-radius:999px;border:1px solid #2a2d35;background:#0c0d11;font-size:clamp(16px,1.25vw,19px);font-weight:600;margin-bottom:clamp(28px,3vw,44px)}
.kick::before{content:'';width:8px;height:8px;border-radius:50%;background:${c.accent};box-shadow:0 0 0 5px rgba(53,96,255,.18)}
h2{font-size:clamp(36px,4.4vw,72px);font-weight:700;line-height:1.16;letter-spacing:-.045em}
.box{position:relative;margin-top:clamp(56px,6vw,96px);border-radius:28px 28px 0 0;overflow:hidden;background:linear-gradient(180deg,#0d0e12,#0a0b0e);box-shadow:inset 0 0 0 1px #1f2127;display:grid;grid-template-columns:repeat(3,1fr)}
.box::before{content:'';position:absolute;inset:0;pointer-events:none;opacity:var(--o,0);transition:opacity .4s;background:radial-gradient(420px circle at var(--x,50%) var(--y,50%),rgba(53,96,255,.13),transparent 70%)}
.box li{position:relative;display:flex;flex-direction:column;gap:14px;padding:clamp(36px,3.6vw,60px) clamp(28px,3vw,52px) clamp(40px,4vw,64px);border-right:1px solid #1a1c22;border-bottom:1px solid #1a1c22;opacity:0;transform:translateY(16px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}
.box li:nth-child(3n){border-right:0}
.in li{opacity:1;transform:none}
.wr{font-size:14px;font-weight:600;color:${c.accentText};margin-bottom:22px}
h3{font-size:clamp(22px,1.9vw,30px);font-weight:700;letter-spacing:-.03em;line-height:1.3}
.ds{font-size:clamp(15px,1.05vw,16px);line-height:1.75;color:${c.gray}}

/* 기본 포함 */
.inc{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);border-radius:0 0 28px 28px;background:#0a0b0e;box-shadow:inset 0 0 0 1px #1f2127;padding:clamp(48px,5vw,88px) clamp(28px,3vw,52px)}
.il{grid-column:1/5;align-self:start;position:sticky;top:120px;display:flex;flex-direction:column;align-items:flex-start;gap:20px}
.il .tg{font-size:14px;font-weight:600;color:${c.accentText}}
.num{display:flex;align-items:flex-end;gap:10px;line-height:.9}
.num b{font-size:clamp(96px,10vw,168px);font-weight:800;letter-spacing:-.06em;color:${c.text};font-variant-numeric:tabular-nums}
.num span{font-size:clamp(22px,2vw,30px);font-weight:700;padding-bottom:.35em;color:${c.accentText}}
.il h4{font-size:clamp(24px,2.2vw,34px);font-weight:700;line-height:1.3;letter-spacing:-.035em}
.il p{font-size:15px;line-height:1.75;color:${c.gray}}
.cta{display:inline-flex;align-items:center;height:52px;padding:0 24px;margin-top:8px;border-radius:999px;background:${c.accent};color:#fff;text-decoration:none;font-size:15px;font-weight:600;transition:background .2s}
.cta:hover{background:#4D74FF;color:#fff}
.inc.solo{margin-top:clamp(56px,6vw,96px);border-radius:28px}
.addon{display:flex;align-items:center;gap:16px;margin-top:6px;padding:16px 20px;border-radius:16px;background:rgba(53,96,255,.08);box-shadow:inset 0 0 0 1px rgba(53,96,255,.35)}
.addon b{font-size:32px;font-weight:800;letter-spacing:-.04em;color:${c.accentText};line-height:1}
.addon span{font-size:14px;line-height:1.6;color:#c4c8d0}
.gp.add{margin-top:8px;padding:28px clamp(20px,2.4vw,32px) 32px;border-top:0;border-radius:20px;background:rgba(53,96,255,.06);box-shadow:inset 0 0 0 1px rgba(53,96,255,.35)}
.gp.add .gh em{color:${c.accentText}}
.ig{grid-column:5/13;display:flex;flex-direction:column}
.gp{padding:28px 0 32px;border-top:1px solid #1d1f25}
.gp:first-child{border-top:0;padding-top:4px}
.gh{display:flex;align-items:baseline;gap:12px;margin-bottom:22px}
.gh h5{margin:0;font-size:clamp(19px,1.5vw,23px);font-weight:700;letter-spacing:-.02em}
.gh em{font-style:normal;font-size:13px;font-weight:600;color:#6f747e}
.gh{flex-wrap:wrap}
.inote{display:block;margin-top:14px;font-size:13px;color:#6f747e}
.mtag{display:none!important}
@media (max-width:860px){.mtag{display:inline-flex!important}}
.tgx{align-self:center;margin-left:auto;height:26px;padding:0 11px;border-radius:999px;background:rgba(53,96,255,.16);color:#9db2ff;font-size:12.5px;font-weight:600;display:inline-flex;align-items:center;white-space:nowrap}
.gl{display:grid;grid-template-columns:1fr 1fr;gap:18px clamp(20px,2.4vw,40px)}
.gl li{position:relative;padding-left:28px;display:flex;flex-direction:column;gap:4px;opacity:0;transform:translateY(10px);transition:opacity .6s ease,transform .6s cubic-bezier(.2,.7,.2,1)}
.gp.in .gl li{opacity:1;transform:none}
.gl li::before{content:'';position:absolute;left:0;top:2px;width:18px;height:18px;border-radius:50%;background:rgba(53,96,255,.16)}
.gl li::after{content:'';position:absolute;left:6px;top:7px;width:6px;height:3.5px;border:solid ${c.accentText};border-width:0 0 1.6px 1.6px;transform:rotate(-45deg)}
.gl b{font-size:16px;font-weight:600}
.gl span{font-size:14px;line-height:1.6;color:#7d828c}
@media (max-width:1000px){.box{grid-template-columns:1fr 1fr}.box li:nth-child(3n){border-right:1px solid #1a1c22}.box li:nth-child(2n){border-right:0}}
@media (max-width:860px){.inc{display:block}.il{position:static;margin-bottom:36px}.gl{grid-template-columns:1fr}}
@media (max-width:640px){.sec{padding:72px 20px 40px}h2{font-size:clamp(30px,8.4vw,44px)}.box{grid-template-columns:1fr;border-radius:20px 20px 0 0}.box li{border-right:0!important;padding:32px 24px}.wr{margin-bottom:8px}.ds br{display:none}.inc{border-radius:0 0 20px 20px;padding:40px 24px}}
.wm,.gt{display:none}
@keyframes fi{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@media (max-width:860px){
  .box{display:none}
  .wm{display:block;margin-top:40px}
  .wm>p{font-size:16px;font-weight:600;color:${c.gray};margin-bottom:14px}
  .wc{display:grid;grid-template-columns:1fr 1fr;gap:8px}
  .wc button{height:52px;border-radius:14px;border:1px solid #23252c;background:#0c0d11;color:#c4c8d0;font:inherit;font-size:15px;font-weight:600;cursor:pointer;transition:background .25s,border-color .25s,color .25s}
  .wc button[aria-selected="true"]{background:${c.accent};border-color:${c.accent};color:#fff}
  .wp{margin-top:12px;min-height:212px;padding:28px 24px;border-radius:20px;background:#0d0e12;box-shadow:inset 0 0 0 1px #1f2127;display:flex;flex-direction:column;gap:12px}
  .wp>div{animation:fi .45s ease both;display:flex;flex-direction:column;gap:12px}
  .wp .wr{margin:0}
  .wp .ds br{display:none}
  .inc{margin-top:16px;border-radius:20px}
  .inc.solo{margin-top:40px}
  .gt{display:flex;gap:8px;overflow-x:auto;margin:0 -24px 24px;padding:0 24px;scrollbar-width:none}
  .gt::-webkit-scrollbar{display:none}
  .gt button{flex:none;height:42px;padding:0 16px;border-radius:999px;border:1px solid #2a2d35;background:transparent;color:#c4c8d0;font:inherit;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap}
  .gt button em{font-style:normal;color:#6f747e;margin-left:6px;font-weight:500}
  .gt button[aria-selected="true"]{background:${c.text};border-color:${c.text};color:#0b0c10}
  .gt button[aria-selected="true"] em{color:#5b616c}
  .gt button em.ad{color:${c.accentText}}
  .gt button[aria-selected="true"] em.ad{color:${c.accent}}
  .gp.add{padding:0;background:none;box-shadow:none;border-radius:0}
  .gp{display:none;padding:0;border:0}
  .gp.on{display:block;animation:fi .45s ease both}
  .gp .gh{display:none}
  .gp .tgx{margin:0 0 16px;display:inline-flex}
  .gl li{opacity:1;transform:none}
}
.still li{opacity:1!important;transform:none!important;transition:none!important}
`;
  class BWWhy extends HTMLElement {
    static get observedAttributes() { return ['still']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = merge(CFG, window.BW_WHY_CONFIG);
      if (c.id && !this.id) { this.id = c.id; this.style.scrollMarginTop = '84px'; }
      const total = c.extras.filter((g) => !g.addon).reduce((n, g) => n + g.items.length, 0);
      const addN = c.extras.filter((g) => g.addon).reduce((n, g) => n + g.items.length, 0);
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${css(c.colors)}</style><div class="wrap"><section class="sec" aria-labelledby="bw-why-title">
  <p class="kick">${esc(c.kicker)}</p><h2 id="bw-why-title">${br(c.title)}</h2>
  ${c.showWorries ? `<ul class="box">${c.items.map((it, i) => `<li style="transition-delay:${(i % 3) * 0.08 + Math.floor(i / 3) * 0.12}s"><span class="wr">${esc(it.worry)}</span><h3>${esc(it.title)}</h3><p class="ds">${br(it.desc)}</p></li>`).join('')}</ul>
  <div class="wm"><p>${esc(c.askTitle)}</p><div class="wc" role="tablist">${c.items.map((it, i) => `<button type="button" role="tab" aria-selected="${i ? 'false' : 'true'}" data-i="${i}">${esc(it.worry.replace(/[이가] 걱정된다면$/, ''))}</button>`).join('')}</div><div class="wp" role="tabpanel" aria-live="polite"></div></div>` : ''}
  <div class="inc${c.showWorries ? '' : ' solo'}">
    <div class="il"><span class="tg">${esc(c.incKicker)}</span><p class="num" aria-label="${total}${esc(c.incUnit)}"><b aria-hidden="true">0</b><span aria-hidden="true">${esc(c.incUnit)}</span></p>
      <h4>${br(c.incTitle)}</h4><p>${br(c.incDesc)}</p>${addN ? `<div class="addon"><b>+${addN}</b><span>${br(c.incAddon.replace('{n}', addN))}</span></div>` : ''}</div>
    <div class="gt" role="tablist" aria-label="혜택 묶음">${c.extras.map((g, i) => `<button type="button" role="tab" aria-selected="${i ? 'false' : 'true'}" data-i="${i}">${esc(g.name)}<em${g.addon ? ' class="ad"' : ''}>${g.addon ? '+' : ''}${g.items.length}</em></button>`).join('')}</div>
    <div class="ig">${c.extras.map((g, gi) => `<div class="gp${gi ? '' : ' on'}${g.addon ? ' add' : ''}">${g.tag ? `<span class="tgx mtag">${esc(g.tag)}</span>` : ''}<div class="gh"><h5>${esc(g.name)}</h5><em>${g.addon ? '+' : ''}${g.items.length}${esc(c.incUnit)}</em>${g.tag ? `<span class="tgx">${esc(g.tag)}</span>` : ''}</div><ul class="gl">${g.items.map(([a, b], j) => `<li style="transition-delay:${j * 0.06}s"><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join('')}</ul></div>`).join('')}</div>
  </div>
</section></div>`;
      const $ = (q) => root.querySelector(q), box = $('.box'), wrap = $('.wrap'), num = $('.num b');
      const mq = ({ matches: false, addEventListener() {} });
      const still = () => mq.matches || this.getAttribute('still') === 'true';
      this.applyStill = () => { wrap.classList.toggle('still', still()); if (still()) num.textContent = total; };
      this.applyStill();
      if (box) box.addEventListener('pointermove', (e) => { const r = box.getBoundingClientRect(); box.style.setProperty('--x', (e.clientX - r.left) + 'px'); box.style.setProperty('--y', (e.clientY - r.top) + 'px'); box.style.setProperty('--o', 1); });
      if (box) box.addEventListener('pointerleave', () => box.style.setProperty('--o', 0));
      const io = new IntersectionObserver((es) => es.forEach((e) => {
        if (!e.isIntersecting) return; io.unobserve(e.target);
        e.target.classList.add('in');
        if (e.target === num && !still()) { const t0 = performance.now(); const f = (t) => { const p = Math.min(1, (t - t0) / 1200); num.textContent = Math.round(total * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }
        else if (e.target === num) num.textContent = total;
      }), { threshold: 0.2 });
      // 모바일: 걱정 선택
      const wb = [...root.querySelectorAll('.wc button')], wp = $('.wp');
      if (wp) {
      let wi = 0, touched = false, wvis = false;
      const showW = (i) => { wi = i; wb.forEach((b, j) => b.setAttribute('aria-selected', j === i)); const it = c.items[i]; wp.innerHTML = `<div><span class="wr">${esc(it.worry)}</span><h3>${esc(it.title)}</h3><p class="ds">${br(it.desc)}</p></div>`; };
      wb.forEach((b, i) => b.addEventListener('click', () => { touched = true; showW(i); }));
      showW(0);
      new IntersectionObserver((es) => { wvis = es[0].isIntersecting; }).observe($('.wm'));
      setInterval(() => { if (!touched && wvis && !document.hidden && !still()) showW((wi + 1) % wb.length); }, 3500);
      }
      // 모바일: 혜택 묶음 탭
      const gb = [...root.querySelectorAll('.gt button')], gps = [...root.querySelectorAll('.gp')];
      gb.forEach((b, i) => b.addEventListener('click', () => { gb.forEach((x, j) => x.setAttribute('aria-selected', j === i)); gps.forEach((g, j) => g.classList.toggle('on', j === i)); }));
      if (box) io.observe(box); io.observe(num); root.querySelectorAll('.gp').forEach((g) => io.observe(g));
    }
    attributeChangedCallback() { this.applyStill && this.applyStill(); }
  }
  customElements.define('bw-why', BWWhy);
})();
