/* 빌드웹스 서비스(상품) 섹션 <bw-services></bw-services>
   금액이 정해지면 plans[].price 에 넣으세요. 비워 두면 '상담 후 안내'로 표시됩니다. */
(function () {
  if (customElements.get('bw-services')) return;
  const CFG = {
    id: 'service',
    kicker: '서비스',
    title: '간결한 소개부터|상세한 구성까지.\n사업에 맞게 선택하세요.',   // | = 모바일에서만 줄바꿈
    desc: '모든 상품에 기획 질문지, 시안 3종,\n반응형 홈페이지 제작과 검색 등록이 기본 포함됩니다.',   // \n = PC 줄바꿈, | = 모바일 줄바꿈
    common: null,   // 공통 혜택 칸을 다시 보이려면 아래 _common 을 common 으로 바꾸세요
    _common: { label: '모든 상품 공통', title: '기본 혜택 18가지', link: { label: '항목별 설명 보기', href: '#why' }, groups: [
      { name: '기획 · 제작', items: ['강점 도출 질문지 · 인터뷰', '방향이 다른 시안 3개', '제작 범위 내 무제한 수정', 'PC · 모바일 · 태블릿 반응형', '이미지 준비 · AI 제작'] },
      { name: '검색 노출', items: ['네이버 · 구글 사이트 등록', '페이지별 제목 · 설명 설정', '이미지 경량화', '방문 분석 도구 설치'] },
      { name: '상담 연결', items: ['전화 걸기 버튼', '카카오톡 채널 · 네이버 톡톡 연결', '문의 폼 · 접수 알림', '지도 · 오시는 길'] },
      { name: '운영 · 브랜드', items: ['관리 화면에서 직접 수정', '팝업 관리 · 오픈 팝업 1종', '보안 연결 · 파비콘 · 공유 이미지', '상업용 라이선스 이미지 · 글꼴', '운영 가이드 제공'] } ] },
    // rows: 모든 상품이 같은 순서의 항목을 갖고, 값만 다르게 적습니다.
    plans: [
      { name: 'QUICK', kname: '퀵', sub: '한 페이지로 빠르게 시작하는 구성', price: '300,000', rows: ['1페이지 구성', '강점 도출 질문지 · 카피 작성', '시안 3개 · 무제한 수정', 'PC · 모바일 · 태블릿 반응형', '검색엔진 등록 + 기본 SEO', '전화 · 카카오톡 · 문의 폼 연결', '이미지 보정 · AI 이미지 제작', '운영 가이드 제공'] },
      { name: 'STANDARD', kname: '스탠다드', sub: '회사 소개와 서비스를 한 번에 담는 구성', price: '800,000', rows: ['최대 4페이지', '페이지별 구조 · 카피 설계', '시안 3개 · 무제한 수정', 'PC · 모바일 · 태블릿 반응형', '검색엔진 등록 + SEO + AI 검색 대응', '전화 · 카카오톡 · 문의 폼 연결', '이미지 보정 · AI 이미지 제작', '운영 가이드 제공'] },
      { name: 'PRO', kname: '프로', sub: '문의 전환까지 설계하는 구성', price: '1,500,000', badge: '추천', rows: ['최대 8페이지', '페이지별 구조 · 카피 설계', '시안 3개 · 무제한 수정', 'PC · 모바일 · 태블릿 반응형', '검색엔진 등록 + SEO + AI 검색 대응', '전화 · 카카오톡 · 문의 폼 연결', '이미지 보정 · AI 이미지 제작', '운영 가이드 제공'] },
      { name: 'PREMIUM', kname: '프리미엄', sub: '규모가 큰 사이트를 맞춤으로 만드는 구성', price: '3,000,000', rows: ['페이지 수 협의', '페이지별 구조 · 카피 설계', '시안 3개 · 무제한 수정', 'PC · 모바일 · 태블릿 반응형', '검색엔진 등록 + SEO + AI 검색 대응', '커스텀 코드 기반 맞춤 디자인', '이미지 보정 · AI 이미지 제작', '운영 가이드 제공'] }
    ],
    pricePlaceholder: '상담 후 안내',
    button: { label: '상담 신청', href: '#contact' },
    footnote: '표시 금액은 시작가입니다. 도메인 비용과 아임웹 요금제는 별도이며, 정확한 금액은 상담 후 견적서로 안내해 드립니다.',
    colors: { bg: '#050507', text: '#F4F5F7', gray: '#9AA0AA', accent: '#3560FF', accentText: '#6F8DFF' }
  };
  function merge(a, b) { if (!b) return a; const o = Array.isArray(a) ? a.slice() : Object.assign({}, a); for (const k in b) o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) ? merge(a[k], b[k]) : b[k]; return o; }
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const br = (s) => esc(s).replace(/\n/g, '<br>');
  const css = (c) => `
:host{display:block;background:${c.bg};color:${c.text};font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all}
*{box-sizing:border-box}
p,h2,h3,ul{margin:0;padding:0;list-style:none}
.sec{max-width:1440px;margin:0 auto;padding:clamp(48px,5vw,88px) clamp(24px,6.5vw,112px) clamp(80px,9vw,150px)}
br.mb{display:none}
.hd{text-align:center;display:flex;flex-direction:column;align-items:center}
.kick{display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 22px 0 18px;border-radius:999px;border:1px solid #2a2d35;background:#0c0d11;font-size:clamp(16px,1.25vw,19px);font-weight:600;margin-bottom:clamp(28px,3vw,44px)}
.kick::before{content:'';width:8px;height:8px;border-radius:50%;background:${c.accent};box-shadow:0 0 0 5px rgba(53,96,255,.18)}
h2{font-size:clamp(36px,4.4vw,72px);font-weight:700;line-height:1.16;letter-spacing:-.045em}
.hd p{margin-top:24px;font-size:clamp(15px,1.1vw,17px);line-height:1.75;color:${c.gray}}
.cm{margin-top:clamp(20px,2vw,28px);padding:clamp(24px,2.4vw,36px);border-radius:22px;background:#0c0d11;box-shadow:inset 0 0 0 1px #1f2127}
.cm .ch{display:flex;align-items:flex-end;gap:16px;flex-wrap:wrap;padding-bottom:22px;margin-bottom:24px;border-bottom:1px solid #1f2127}
.cm .ch small{display:block;font-size:13px;font-weight:600;color:${c.accentText};margin-bottom:6px}
.cm .ch b{font-size:clamp(22px,1.8vw,28px);font-weight:800;letter-spacing:-.03em}
.cm a{margin-left:auto;font-size:14px;font-weight:600;color:${c.accentText};text-decoration:none;white-space:nowrap}
.cm a:hover{color:#fff}
.cg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px clamp(16px,2vw,32px)}
.cg h4{margin:0 0 14px;font-size:15px;font-weight:700;color:${c.text}}
.cg h4 em{font-style:normal;font-weight:600;color:#6f747e;margin-left:6px}
.cg ul{display:flex;flex-direction:column;gap:10px}
.cg li{position:relative;padding-left:22px;font-size:14px;line-height:1.5;color:#c4c8d0}
.cg li::before{content:'';position:absolute;left:1px;top:6px;width:9px;height:5px;border:solid ${c.accentText};border-width:0 0 1.6px 1.6px;transform:rotate(-45deg)}
@media (max-width:1100px){.cg{grid-template-columns:1fr 1fr}}
@media (max-width:640px){.cg{grid-template-columns:1fr}.cm a{margin-left:0}}
.pl{margin-top:clamp(56px,6vw,88px);display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(12px,1.2vw,18px);align-items:stretch}
.cd{position:relative;display:flex;flex-direction:column;padding:clamp(28px,2.4vw,36px) clamp(22px,2vw,30px);border-radius:22px;background:linear-gradient(180deg,#0f1015,#0a0b0e);box-shadow:inset 0 0 0 1px #1f2127;opacity:0;transform:translateY(18px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1),box-shadow .3s}
.in .cd{opacity:1;transform:none}
.cd:hover{box-shadow:inset 0 0 0 1px #343844}
.cd.rec{background:linear-gradient(180deg,#101a46,#0a0f2a 55%,#0a0b10);box-shadow:inset 0 0 0 1px #3560FF}
.top{display:flex;align-items:center;gap:10px}
.no{font-size:13px;font-weight:700;color:${c.accentText};font-variant-numeric:tabular-nums}
.top h3{font-size:clamp(18px,1.4vw,21px);font-weight:800;letter-spacing:.04em}
.bd{margin-left:auto;font-size:12px;font-weight:700;padding:5px 10px;border-radius:999px;background:${c.accent};color:#fff}
.kn{margin-top:8px;font-size:13px;font-weight:600;color:#7d828c}
.sb{margin-top:14px;font-size:14px;line-height:1.6;color:#c4c8d0}
.pr{margin-top:26px;display:flex;align-items:baseline;gap:6px}
.pr small{font-size:18px;font-weight:700;color:#c4c8d0}
.pr em{font-style:normal;font-size:22px;font-weight:700;color:#6F8DFF}
.pr b{font-size:clamp(28px,2.4vw,38px);font-variant-numeric:tabular-nums;font-weight:800;letter-spacing:-.03em}
.pr b.ph{font-size:clamp(18px,1.4vw,22px);font-weight:700;color:#c4c8d0}
.pg{display:flex;flex-direction:column;gap:4px;margin-top:24px;font-size:clamp(24px,2vw,30px);font-weight:800;letter-spacing:-.03em;color:${c.text}}
.pg small{font-size:13px;font-weight:600;letter-spacing:0;color:#7d828c}
.cd ul{margin:24px 0 0;padding-top:24px;border-top:1px solid #1f2127;display:flex;flex-direction:column;gap:13px}
.rec ul{border-color:#22305e}
.cd li{position:relative;padding-left:26px;font-size:15px;line-height:1.5;color:#d4d7dd}
.cd li::before{content:'';position:absolute;left:0;top:2px;width:17px;height:17px;border-radius:50%;background:rgba(53,96,255,.18)}
.cd li::after{content:'';position:absolute;left:5.5px;top:7px;width:6px;height:3.5px;border:solid ${c.accentText};border-width:0 0 1.5px 1.5px;transform:rotate(-45deg)}

.bt{margin-top:auto;display:flex;align-items:center;justify-content:center;height:54px;border-radius:999px;background:#1a1c22;color:#fff;text-decoration:none;font-size:15px;font-weight:600;transition:background .2s}
.bt:hover{background:#262931;color:#fff}
.rec .bt{background:${c.accent}}
.rec .bt:hover{background:#4D74FF}
.fn{margin-top:28px;text-align:center;font-size:14px;color:#6f747e}
@media (max-width:1100px){.pl{grid-template-columns:1fr 1fr}}
@media (max-width:640px){.sec{padding:48px 20px 72px}h2{font-size:clamp(30px,8.4vw,44px)}br.mb{display:inline}.hd p{margin-top:3.2em}.hd p br{display:none}.pl{grid-template-columns:1fr}.cm{padding:22px 20px}}
.still .cd{opacity:1;transform:none;transition:none}
`;
  class BWServices extends HTMLElement {
    static get observedAttributes() { return ['still']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = merge(CFG, window.BW_SERVICES_CONFIG);
      if (c.id && !this.id) { this.id = c.id; this.style.scrollMarginTop = '84px'; }
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${css(c.colors)}</style><div class="wrap"><section class="sec" aria-labelledby="bw-sv-title">
  <div class="hd"><p class="kick">${esc(c.kicker)}</p><h2 id="bw-sv-title">${br(c.title).replace(/\|/g, ' <br class="mb">')}</h2><p>${br(c.desc).replace(/\|/g, ' <br class="mb">')}</p></div>
  <div class="pl">${c.plans.map((p, i) => `<article class="cd${p.badge ? ' rec' : ''}" style="transition-delay:${i * 0.08}s">
    <div class="top"><span class="no">${String(i + 1).padStart(2, '0')}</span><h3>${esc(p.name)}</h3>${p.badge ? `<span class="bd">${esc(p.badge)}</span>` : ''}</div>
    ${p.kname ? `<p class="kn">${esc(p.kname)}</p>` : ''}
    <p class="pr">${p.price ? `<small>₩</small><b>${esc(p.price)}</b><em>~</em>` : `<b class="ph">${esc(c.pricePlaceholder)}</b>`}</p>
    <p class="sb">${esc(p.sub)}</p>
    <ul>${(p.rows || p.items || []).map((t) => `<li>${esc(t)}</li>`).join('')}</ul></article>`).join('')}</div>
  ${c.common ? `<div class="cm"><div class="ch"><p><small>${esc(c.common.label)}</small><b>${esc(c.common.title)}</b></p>${c.common.link ? `<a href="${esc(c.common.link.href)}">${esc(c.common.link.label)} →</a>` : ''}</div><div class="cg">${c.common.groups.map((g) => `<div><h4>${esc(g.name)}<em>${g.items.length}</em></h4><ul>${g.items.map((t) => `<li>${esc(t)}</li>`).join('')}</ul></div>`).join('')}</div></div>` : ''}
  <p class="fn">${esc(c.footnote)}</p>
</section></div>`;
      const wrap = root.querySelector('.wrap'), pl = root.querySelector('.pl');
      const mq = ({ matches: false, addEventListener() {} });
      this.applyStill = () => wrap.classList.toggle('still', mq.matches || this.getAttribute('still') === 'true');
      this.applyStill();
      new IntersectionObserver((es, o) => { if (es[0].isIntersecting) { pl.classList.add('in'); o.disconnect(); } }, { threshold: 0.12 }).observe(pl);
    }
    attributeChangedCallback() { this.applyStill && this.applyStill(); }
  }
  customElements.define('bw-services', BWServices);
})();
