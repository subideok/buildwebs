/* 빌드웹스 네 번째 섹션 — 고르는 이유 + 기본 포함 사항 <bw-why></bw-why>
   Shadow DOM 안에서만 동작합니다. 문구는 아래 CFG(또는 window.BW_WHY_CONFIG)에서 수정합니다. */
(function () {
  if (customElements.get('bw-why')) return;
  const CFG = {
    id: 'why',
    kicker: '빌드웹스만의 혜택',
    title: '맡길 때는 안심되게\n받는 것은 확실하게.',
    items: [
      { worry: '실력이 걱정된다면', title: '대표가 직접 기획합니다', desc: '6년간 마케팅·기획·카피를 해온 대표가\n질문지부터 오픈까지 직접 맡습니다.' },
      { worry: '가격이 걱정된다면', title: '필요한 만큼만 고릅니다', desc: '네 가지 상품 중 규모에 맞는 것을 고르면\n과한 견적 없이 시작할 수 있습니다.' },
      { worry: '추가 비용이 걱정된다면', title: '견적서 금액이 끝입니다', desc: '계약한 범위 안에서는 수정과 작업에\n추가 비용을 받지 않습니다.' },
      { worry: '일정이 걱정된다면', title: '시작 전에 일정을 정합니다', desc: '단계별 마감일을 먼저 약속하고,\n진행 상황을 그때그때 공유합니다.' },
      { worry: '결과물이 걱정된다면', title: '마음에 들 때까지 고칩니다', desc: '시안 세 개 중에서 고르고,\n제작 범위 안에서는 횟수 제한 없이 수정합니다.' },
      { worry: '오픈 이후가 걱정된다면', title: '끝까지 연락이 닿습니다', desc: '간단한 수정은 비용 없이 바로 처리하고,\n막히는 부분은 화면을 보며 안내합니다.' }
    ],
    incKicker: '기본 혜택',
    incUnit: '가지',
    incTitle: '추가 요금 없이\n처음부터 포함됩니다',
    incDesc: '디자인만 넘기고 끝나지 않습니다.\n검색, 상담 연결, 운영까지 오픈 전에 모두 갖춥니다.',
    cta: { label: '무료 견적 받기', href: '#contact' },
    extras: [
      { name: '기획 · 제작', desc: '강점을 찾는 일부터\n화면 완성까지 직접 맡습니다.', items: [
        ['강점 도출 질문지 · 인터뷰', '고객, 경쟁사, 강점을 정리한 뒤 제작을 시작합니다'],
        ['방향이 다른 시안 3개', '세 가지 방향 중에서 고르고 다듬습니다'],
        ['제작 범위 내 무제한 수정', '만족하실 때까지 횟수 제한 없이 고칩니다'],
        ['모바일 반응형', '휴대폰, 태블릿, PC 모두 같은 흐름으로 읽힙니다'],
        ['이미지 준비', '보내주신 사진을 다듬고, 없으면 AI로 제작합니다'] ] },
      { name: '상담 연결', desc: '보고 바로 연락할 수 있게\n문의 통로를 모두 엽니다.', items: [
        ['전화 걸기 버튼', '모바일에서 한 번에 전화가 연결됩니다'],
        ['카카오톡 채널 · 네이버 톡톡 연결', '실시간 상담 창구를 화면에 띄웁니다'],
        ['문의 폼 · 접수 알림', '필요한 항목만 받고, 접수되면 메일로 알려드립니다'],
        ['지도 · 오시는 길', '카카오맵, 구글맵으로 위치를 보여줍니다'] ] },
      { name: '검색 노출', desc: '찾는 사람에게 보이도록\n오픈 전에 등록을 마칩니다.', items: [
        ['네이버 · 구글 사이트 등록', '서치어드바이저, 서치콘솔에 등록하고 사이트맵을 제출합니다'],
        ['페이지별 제목 · 설명 설정', '검색 결과에 보일 문장을 페이지마다 따로 씁니다'],
        ['이미지 경량화', '사진 용량을 줄여 첫 화면이 빠르게 열립니다'],
        ['방문 분석 도구 설치', '구글 애널리틱스로 유입과 문의 경로를 확인합니다'] ] },
      { name: 'AI 검색 대응', desc: 'AI가 답변할 때\n우리 회사를 인용하기 쉽게 씁니다.', items: [
        ['질문과 답변 형식의 문단', '고객이 실제로 묻는 질문에 바로 답하는 문장으로 씁니다'],
        ['구조화 데이터 삽입', '회사 정보, 자주 묻는 질문을 검색 엔진이 읽는 형식으로 넣습니다'],
        ['회사 정보 일관 표기', '상호, 주소, 연락처를 사이트 전체에 같은 형식으로 정리합니다'] ] },
      { name: '운영 · 브랜드', desc: '오픈 후에도\n대표님이 직접 관리합니다.', items: [
        ['관리 화면에서 직접 수정', '사진, 가격, 문구를 로그인 후 바로 고칩니다'],
        ['팝업 관리 + 오픈 팝업 1종 제작', '행사와 공지를 직접 올리고 내립니다'],
        ['보안 연결 · 파비콘 · 공유 이미지', '주소창 자물쇠, 탭 아이콘, 링크 공유 이미지까지 설정합니다'],
        ['상업용 라이선스 이미지 · 글꼴', '저작권 걱정 없는 자료만 사용합니다'],
        ['운영 가이드 제공', '자주 바꾸는 작업을 순서대로 정리해 드립니다'] ] }
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
.sec{max-width:1440px;margin:0 auto;padding:clamp(80px,9vw,160px) clamp(24px,6.5vw,112px) clamp(120px,12vw,200px)}
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
.ig{grid-column:5/13;display:flex;flex-direction:column}
.gp{padding:28px 0 32px;border-top:1px solid #1d1f25}
.gp:first-child{border-top:0;padding-top:4px}
.gh{display:flex;align-items:baseline;gap:12px;margin-bottom:22px}
.gh h5{margin:0;font-size:clamp(19px,1.5vw,23px);font-weight:700;letter-spacing:-.02em}
.gh em{font-style:normal;font-size:13px;font-weight:600;color:#6f747e}
.gl{display:grid;grid-template-columns:1fr 1fr;gap:18px clamp(20px,2.4vw,40px)}
.gl li{position:relative;padding-left:28px;display:flex;flex-direction:column;gap:4px;opacity:0;transform:translateY(10px);transition:opacity .6s ease,transform .6s cubic-bezier(.2,.7,.2,1)}
.gp.in .gl li{opacity:1;transform:none}
.gl li::before{content:'';position:absolute;left:0;top:2px;width:18px;height:18px;border-radius:50%;background:rgba(53,96,255,.16)}
.gl li::after{content:'';position:absolute;left:6px;top:7px;width:6px;height:3.5px;border:solid ${c.accentText};border-width:0 0 1.6px 1.6px;transform:rotate(-45deg)}
.gl b{font-size:16px;font-weight:600}
.gl span{font-size:14px;line-height:1.6;color:#7d828c}
@media (max-width:1000px){.box{grid-template-columns:1fr 1fr}.box li:nth-child(3n){border-right:1px solid #1a1c22}.box li:nth-child(2n){border-right:0}}
@media (max-width:860px){.inc{display:block}.il{position:static;margin-bottom:36px}.gl{grid-template-columns:1fr}}
@media (max-width:640px){.sec{padding:80px 20px 110px}h2{font-size:clamp(30px,8.4vw,44px)}.box{grid-template-columns:1fr;border-radius:20px 20px 0 0}.box li{border-right:0!important;padding:32px 24px}.wr{margin-bottom:8px}.ds br{display:none}.inc{border-radius:0 0 20px 20px;padding:40px 24px}}
.still li{opacity:1!important;transform:none!important;transition:none!important}
`;
  class BWWhy extends HTMLElement {
    static get observedAttributes() { return ['still']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = merge(CFG, window.BW_WHY_CONFIG);
      if (c.id && !this.id) { this.id = c.id; this.style.scrollMarginTop = '84px'; }
      const total = c.extras.reduce((n, g) => n + g.items.length, 0);
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${css(c.colors)}</style><div class="wrap"><section class="sec" aria-labelledby="bw-why-title">
  <p class="kick">${esc(c.kicker)}</p><h2 id="bw-why-title">${br(c.title)}</h2>
  <ul class="box">${c.items.map((it, i) => `<li style="transition-delay:${(i % 3) * 0.08 + Math.floor(i / 3) * 0.12}s"><span class="wr">${esc(it.worry)}</span><h3>${esc(it.title)}</h3><p class="ds">${br(it.desc)}</p></li>`).join('')}</ul>
  <div class="inc">
    <div class="il"><span class="tg">${esc(c.incKicker)}</span><p class="num" aria-label="${total}${esc(c.incUnit)}"><b aria-hidden="true">0</b><span aria-hidden="true">${esc(c.incUnit)}</span></p>
      <h4>${br(c.incTitle)}</h4><p>${br(c.incDesc)}</p></div>
    <div class="ig">${c.extras.map((g) => `<div class="gp"><div class="gh"><h5>${esc(g.name)}</h5><em>${g.items.length}${esc(c.incUnit)}</em></div><ul class="gl">${g.items.map(([a, b], j) => `<li style="transition-delay:${j * 0.06}s"><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join('')}</ul></div>`).join('')}</div>
  </div>
</section></div>`;
      const $ = (q) => root.querySelector(q), box = $('.box'), wrap = $('.wrap'), num = $('.num b');
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const still = () => mq.matches || this.getAttribute('still') === 'true';
      this.applyStill = () => { wrap.classList.toggle('still', still()); if (still()) num.textContent = total; };
      this.applyStill();
      box.addEventListener('pointermove', (e) => { const r = box.getBoundingClientRect(); box.style.setProperty('--x', (e.clientX - r.left) + 'px'); box.style.setProperty('--y', (e.clientY - r.top) + 'px'); box.style.setProperty('--o', 1); });
      box.addEventListener('pointerleave', () => box.style.setProperty('--o', 0));
      const io = new IntersectionObserver((es) => es.forEach((e) => {
        if (!e.isIntersecting) return; io.unobserve(e.target);
        e.target.classList.add('in');
        if (e.target === num && !still()) { const t0 = performance.now(); const f = (t) => { const p = Math.min(1, (t - t0) / 1200); num.textContent = Math.round(total * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); }; requestAnimationFrame(f); }
        else if (e.target === num) num.textContent = total;
      }), { threshold: 0.2 });
      io.observe(box); io.observe(num); root.querySelectorAll('.gp').forEach((g) => io.observe(g));
    }
    attributeChangedCallback() { this.applyStill && this.applyStill(); }
  }
  customElements.define('bw-why', BWWhy);
})();
