/* 빌드웹스 자주 묻는 질문 <bw-faq></bw-faq> — 질문은 CFG.items 에서 수정합니다. */
(function () {
  if (customElements.get('bw-faq')) return;
  const CFG = {
    id: 'faq',
    kicker: '자주 묻는 질문',
    title: '상담 전에\n먼저 확인해 보세요.',
    desc: '더 궁금한 점은 카카오톡 채널 문의\n주시면 답해 드립니다.',   // | = 모바일에서만 줄바꿈
    cats: ['전체', '제작', '비용', '운영'],
    items: [
      { cat: '제작', q: '기획이 없는 상태에서도 맡길 수 있나요?', a: '네. 기획은 빌드웹스가 맡습니다. 강점 도출 질문지에 답해 주시면, 그 답변으로 화면 구성과 문구를 설계합니다.' },
      { cat: '제작', q: '질문지는 꼭 작성해야 하나요?', a: '네, 꼭 필요합니다. 질문지는 단순한 자료 수집이 아닙니다. 사업과 고객을 이해하고, 더 설득력 있는 홈페이지를 만들기 위한 기획 과정입니다.' },
      { cat: '제작', q: '제작 기간은 얼마나 걸리나요?', a: '상품과 페이지 수에 따라 다릅니다. 상담 때 견적에 맞게 사이트 오픈 일정을 안내드리고, 진행 상황은 직접 공유드리고 있습니다.' },
      { cat: '제작', q: '어떤 자료를 준비하면 되나요?', a: '아래 자료를 보내주시면 충분합니다.\n· 강점 도출 질문지 답변\n· 회사 소개와 대표 프로필\n· 서비스·상품 설명과 가격\n· 로고, 매장·사무실 사진, 작업 사진과 영상\n· 주소, 연락처, 영업시간\n· SNS 링크\n\n문구는 질문지 답변을 바탕으로 빌드웹스가 직접 씁니다. 사진이나 영상이 부족하면 AI로 보완해 드립니다.' },
      { cat: '제작', q: '휴대폰에서도 잘 보이나요?', a: '모든 상품은 PC, 태블릿, 모바일 반응형으로 제작됩니다.' },
      { cat: '비용', q: '견적 외에 추가 비용이 생기나요?', a: '견적서에 적힌 범위 안에서는 추가 비용이 없습니다. 아래 작업은 견적과 별도로 진행됩니다.\n· 사진·영상 촬영(필요시)\n· 3D 등 별도 그래픽 제작\n· 예약, 결제, 외부 데이터 연동 같은 기능 개발\n별도 작업은 시작 전에 금액을 먼저 알려드리고, 동의하신 경우에만 진행합니다.\n\n도메인과 아임웹 요금제, SSL 보안인증서는 제작비와 별도로 발생하며 실제 이용료만 별도로 결제됩니다.\n· 도메인: 연 20,000원 내외\n· 호스팅: 아임웹 요금제 월 22,000원부터 (부가세 별도)\n· SSL 보안인증서: 연 38,500원 (부가세 포함)' },
      { cat: '비용', q: '어떤 상품을 골라야 할지 모르겠어요.', a: '업종과 원하는 구성을 문의에 남겨 주시면, 필요한 만큼만 담은 상품을 추천해 드립니다.' },
      { cat: '운영', q: '오픈 후에 내용을 직접 바꿀 수 있나요?', a: '네. 사진, 가격, 팝업처럼 자주 바뀌는 것은 운영 가이드를 보고 직접 고칠 수 있습니다. 간단한 수정은 요청하시면 비용 없이 처리해 드립니다.' },
      { cat: '운영', q: '검색에 노출되도록 해 주시나요?', a: '네. 기획 단계부터 페이지 구조, 문구, 제목과 설명을 검색엔진 최적화(SEO) 기준에 맞춰 설계하고, 네이버와 구글에 사이트 등록까지 마칩니다.\n\n스탠다드 상품부터는 AI 검색 대응도 함께 진행합니다.\n· AEO(답변 엔진 최적화): 고객이 묻는 질문에 바로 답하는 형식으로 문장을 써서, 검색 결과의 답변 영역에 노출되기 쉽게 만듭니다.\n· GEO(생성형 AI 최적화): ChatGPT, 제미나이 같은 AI가 답변할 때 우리 회사를 정확히 소개하고 인용하도록 회사 정보를 정리합니다.\n\n특정 순위를 보장하지는 않습니다.' },
      { cat: '운영', q: '기존 도메인을 그대로 쓸 수 있나요?', a: '네. 쓰시던 도메인을 새 홈페이지에 연결할 수 있고, 필요한 설정은 함께 진행합니다.' }
    ],
    more: { title: '찾는 답이 없으신가요?', label: '카카오톡 무료상담', href: 'https://pf.kakao.com/_jfXFX' },   // 카카오톡 채널 주소로 바꾸세요
    colors: { bg: '#F4F5F7', ink: '#0B0C10', gray: '#5B616C', line: '#E2E4E9', accent: '#3560FF' }
  };
  function merge(a, b) { if (!b) return a; const o = Array.isArray(a) ? a.slice() : Object.assign({}, a); for (const k in b) o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) ? merge(a[k], b[k]) : b[k]; return o; }
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const br = (s) => esc(s).replace(/\n/g, '<br>');
  const css = (c) => `
:host{display:block;background:${c.bg};color:${c.ink};font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all}
*{box-sizing:border-box}
p,h2,ul{margin:0;padding:0;list-style:none}
button{font:inherit;color:inherit}
button:focus-visible,a:focus-visible{outline:2px solid ${c.accent};outline-offset:3px}
.sec{max-width:1440px;margin:0 auto;padding:clamp(64px,7vw,120px) clamp(24px,6.5vw,112px) clamp(80px,9vw,150px);display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px)}
.hd{grid-column:1/5;align-self:start;position:sticky;top:120px}
.kick{display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 22px 0 18px;border-radius:999px;border:1px solid ${c.line};background:#fff;font-size:clamp(16px,1.25vw,19px);font-weight:600;margin-bottom:clamp(28px,3vw,44px)}
.kick::before{content:'';width:8px;height:8px;border-radius:50%;background:${c.accent};box-shadow:0 0 0 5px rgba(53,96,255,.14)}
h2{font-size:clamp(34px,3.8vw,60px);font-weight:700;line-height:1.18;letter-spacing:-.045em}
.hd p{margin-top:22px;font-size:16px;line-height:1.75;color:${c.gray}}
br.mb{display:none}
.tabs{display:flex;flex-wrap:wrap;gap:8px;margin-top:36px}
.tabs button{height:44px;padding:0 20px;border-radius:999px;border:1px solid ${c.line};background:#fff;font-size:15px;font-weight:600;cursor:pointer;transition:background .2s,color .2s,border-color .2s}
.tabs button:hover{border-color:#c9cdd6}
.tabs button[aria-selected="true"]{background:${c.ink};border-color:${c.ink};color:#fff}
.ls{grid-column:6/13;display:flex;flex-direction:column;gap:10px}
.it{border-radius:18px;background:#fff;box-shadow:0 0 0 1px ${c.line};transition:box-shadow .25s}
.it[hidden]{display:none}
.it.op{box-shadow:0 0 0 1.5px ${c.ink}}
.q{width:100%;display:flex;align-items:center;gap:16px;padding:24px 26px;border:0;background:none;text-align:left;cursor:pointer;font-size:clamp(16px,1.2vw,19px);font-weight:600;letter-spacing:-.01em}
.q i{flex:none;width:32px;height:32px;border-radius:50%;background:#e3e8ff;color:#2848d6;font-style:normal;font-size:14px;font-weight:800;display:flex;align-items:center;justify-content:center}
.q span{flex:1}
.q svg{flex:none;width:36px;height:36px;padding:10px;border-radius:50%;background:${c.bg};transition:transform .3s,background .2s}
.op .q svg{transform:rotate(180deg);background:${c.ink};color:#fff}
.an{display:grid;grid-template-rows:0fr;transition:grid-template-rows .35s ease}
.op .an{grid-template-rows:1fr}
.an>div{overflow:hidden}
.an p{padding:0 26px 26px 74px;font-size:16px;line-height:1.8;color:#3a3f48}
.mo{margin-top:14px;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:26px 28px;border-radius:18px;background:${c.ink};color:#fff}
.mo b{font-size:clamp(17px,1.3vw,20px);font-weight:600}
.mo a{flex:none;display:inline-flex;align-items:center;gap:8px;height:50px;padding:0 22px;border-radius:999px;background:${c.accent};color:#fff;text-decoration:none;font-size:15px;font-weight:600;transition:background .2s}
.mo a:hover{background:#4D74FF;color:#fff}
@media (max-width:960px){.sec{display:block}.hd{position:static;margin-bottom:40px}}
@media (max-width:640px){.sec{padding:64px 20px 80px}br.mb{display:inline}h2{font-size:clamp(30px,8.4vw,44px)}.q{padding:20px;gap:12px}.an p{padding:0 20px 22px}.mo{flex-direction:column;align-items:flex-start}.mo a{width:100%;justify-content:center}}
.still *{transition:none!important}
`;
  const CHEV = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 6l4.5 4.5L12.5 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  class BWFaq extends HTMLElement {
    static get observedAttributes() { return ['still']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = merge(CFG, window.BW_FAQ_CONFIG);
      if (c.id && !this.id) { this.id = c.id; this.style.scrollMarginTop = '84px'; }
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${css(c.colors)}</style><div class="wrap"><section class="sec" aria-labelledby="bw-fq-title">
  <div class="hd"><p class="kick">${esc(c.kicker)}</p><h2 id="bw-fq-title">${br(c.title)}</h2><p>${br(c.desc).replace(/\|/g, ' <br class="mb">')}</p>
    <div class="tabs" role="tablist">${c.cats.map((t, i) => `<button type="button" role="tab" aria-selected="${i === 0}" data-c="${esc(t)}">${esc(t)}</button>`).join('')}</div></div>
  <div class="ls">${c.items.map((it, i) => `<div class="it" data-c="${esc(it.cat)}"><button class="q" type="button" aria-expanded="false" aria-controls="a${i}"><i>Q</i><span>${esc(it.q)}</span>${CHEV}</button><div class="an" id="a${i}" role="region"><div><p>${br(it.a)}</p></div></div></div>`).join('')}
    <div class="mo"><b>${esc(c.more.title)}</b><a href="${esc(c.more.href)}"${/^https?:/.test(c.more.href) ? ' target="_blank" rel="noopener"' : ''}>${esc(c.more.label)} →</a></div></div>
</section></div>`;
      const $$ = (q) => [...root.querySelectorAll(q)], wrap = root.querySelector('.wrap');
      const mq = ({ matches: false, addEventListener() {} });
      this.applyStill = () => wrap.classList.toggle('still', mq.matches || this.getAttribute('still') === 'true');
      this.applyStill();
      $$('.q').forEach((b) => b.addEventListener('click', () => { const it = b.parentElement, o = !it.classList.contains('op'); it.classList.toggle('op', o); b.setAttribute('aria-expanded', o); }));
      $$('.tabs button').forEach((t) => t.addEventListener('click', () => {
        $$('.tabs button').forEach((x) => x.setAttribute('aria-selected', x === t));
        const k = t.dataset.c, all = k === c.cats[0];
        $$('.it').forEach((it) => { it.hidden = !(all || it.dataset.c === k); });
      }));
      const first = root.querySelector('.it .q'); if (first) first.click();
    }
    attributeChangedCallback() { this.applyStill && this.applyStill(); }
  }
  customElements.define('bw-faq', BWFaq);
})();
