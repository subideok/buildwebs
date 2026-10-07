/* 빌드웹스 푸터 <bw-footer></bw-footer> — 사업자 정보는 CFG.info 에 실제 값으로 넣으세요. */
(function () {
  if (customElements.get('bw-footer')) return;
  const CFG = {
    logoSrc: 'assets/logo-white.png',
    line: '선택받을 이유를 설계하는\n홈페이지 제작',
    menu: [
      { label: '빌드웹스', href: '#about' }, { label: '포트폴리오', href: '#portfolio' }, { label: '고객후기', href: '#reviews' },
      { label: '서비스', href: '#service' }, { label: '자주 묻는 질문', href: '#faq' }, { label: '무료 견적 받기', href: '#contact' }
    ],
    contact: [['이메일', 'buildwebs@naver.com', 'mailto:buildwebs@naver.com'], ['연락처', '010-5312-2422', 'tel:01053122422'], ['상담 시간', '평일 10:00 – 18:00']],
    info: [['상호', '빌드웹스'], ['대표', '공덕영'], ['사업자등록번호', '533-20-01389'], ['주소', '부산 수영로 298 산암빌딩 10층']],
    policy: [{ label: '개인정보처리방침', href: '#' }, { label: '이용약관', href: '#' }],
    copy: '© 2026 BUILD WEBS. All rights reserved.',
    colors: { bg: '#020203', text: '#F4F5F7', gray: '#7D828C', accent: '#3560FF' }
  };
  function merge(a, b) { if (!b) return a; const o = Array.isArray(a) ? a.slice() : Object.assign({}, a); for (const k in b) o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) ? merge(a[k], b[k]) : b[k]; return o; }
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const br = (s) => esc(s).replace(/\n/g, '<br>');
  const css = (c) => `
:host{display:block;background:${c.bg};color:${c.text};font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all;border-top:1px solid #15161b}
*{box-sizing:border-box}
p,ul{margin:0;padding:0;list-style:none}
a{color:inherit;text-decoration:none;transition:color .2s}
a:hover{color:#6F8DFF}
.ft{max-width:1440px;margin:0 auto;padding:clamp(64px,7vw,104px) clamp(24px,6.5vw,112px) 40px}
.tp{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);row-gap:40px}
.br{grid-column:1/6}
.br img{height:22px;width:auto;display:block}
.br p{margin-top:22px;font-size:clamp(18px,1.5vw,22px);font-weight:600;line-height:1.5;letter-spacing:-.02em;color:#c4c8d0}
.br a.go{display:inline-flex;align-items:center;height:48px;padding:0 22px;margin-top:28px;border-radius:999px;background:${c.accent};color:#fff;font-size:15px;font-weight:600}
.br a.go:hover{background:#4D74FF;color:#fff}
.col{display:flex;flex-direction:column;gap:14px}
.col h4{margin:0 0 6px;font-size:13px;font-weight:600;color:${c.gray}}
.m{grid-column:7/9}
.ct{grid-column:9/13}
.col li{font-size:15px;color:#d4d7dd}
.ct li{display:flex;gap:16px}
.ct li span{flex:none;width:70px;color:${c.gray};font-size:14px}
.bt{margin-top:clamp(56px,6vw,88px);padding-top:28px;border-top:1px solid #15161b;display:flex;flex-wrap:wrap;align-items:center;gap:12px 28px;font-size:13px;color:${c.gray}}
.bt .in{display:flex;flex-wrap:wrap;gap:6px 20px}
.bt .in b{font-weight:500;color:#5d626c;margin-right:6px}
.bt .pl{margin-left:auto;display:flex;gap:20px}
.bt .pl a:first-child{color:#c4c8d0;font-weight:600}
.cp{margin-top:18px;font-size:13px;color:#5d626c}
@media (max-width:860px){.br,.m,.ct{grid-column:1/-1}.bt .pl{margin-left:0}}
`;
  class BWFooter extends HTMLElement {
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = merge(CFG, window.BW_FOOTER_CONFIG);
      const logo = /^(https?:|\/|data:)/.test(c.logoSrc) ? c.logoSrc : new URL(c.logoSrc, (window.BW_ASSET_BASE || document.baseURI)).href;
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${css(c.colors)}</style><footer class="ft">
  <div class="tp">
    <div class="br"><img src="${esc(logo)}" alt="빌드웹스"><p>${br(c.line)}</p><a class="go" href="#contact">무료 견적 받기</a></div>
    <nav class="col m" aria-label="바닥 메뉴"><h4>메뉴</h4><ul class="col">${c.menu.map((m) => `<li><a href="${esc(m.href)}">${esc(m.label)}</a></li>`).join('')}</ul></nav>
    <div class="col ct"><h4>문의</h4><ul class="col">${c.contact.map(([k, v, h]) => `<li><span>${esc(k)}</span>${h ? `<a href="${esc(h)}">${esc(v)}</a>` : esc(v)}</li>`).join('')}</ul></div>
  </div>
  <div class="bt"><p class="in">${c.info.map(([k, v]) => `<span><b>${esc(k)}</b>${esc(v)}</span>`).join('')}</p>
    <p class="pl">${c.policy.map((p) => `<a href="${esc(p.href)}">${esc(p.label)}</a>`).join('')}</p></div>
  <p class="cp">${esc(c.copy)}</p>
</footer>`;
    }
  }
  customElements.define('bw-footer', BWFooter);
})();
