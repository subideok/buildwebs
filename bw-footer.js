/* 빌드웹스 푸터 <bw-footer></bw-footer> — 사업자 정보는 CFG.info 에 실제 값으로 넣으세요. */
(function () {
  const BW_SELF_BASE = (document.currentScript && document.currentScript.src) ? new URL('./', document.currentScript.src).href : document.baseURI;
  if (customElements.get('bw-footer')) return;
  const CFG = {
    logoSrc: 'assets/logo-white.png',
    line: '매출로 이어지도록\n홈페이지를 설계합니다.',
    menu: [
      { label: '빌드웹스', href: '#about' }, { label: '포트폴리오', href: '#portfolio' }, { label: '고객후기', href: '#reviews' },
      { label: '서비스', href: '#service' }, { label: '자주 묻는 질문', href: '#faq' }, { label: '무료 견적 받기', href: '#contact' }
    ],
    contact: [['이메일', 'buildwebs@naver.com', 'mailto:buildwebs@naver.com'], ['연락처', '010-5312-2422', 'tel:01053122422'], ['상담 시간', '평일 10:00 – 18:00']],
    info: [['상호', '빌드웹스'], ['대표', '공덕영'], ['사업자등록번호', '533-20-01389'], ['주소', '부산 수영로 298 산암빌딩 10층']],
    // SNS: 주소를 바꾸거나 줄을 지우면 아이콘도 바뀝니다. (icon: kakao · instagram · youtube · blog)
    sns: [
      { icon: 'kakao', label: '카카오톡 채널', href: 'https://pf.kakao.com/_jfXFX' },
      { icon: 'instagram', label: '인스타그램', href: 'https://www.instagram.com/subi_deoki/' },
      { icon: 'youtube', label: '유튜브', href: 'https://www.youtube.com/@subideoki' },
      { icon: 'blog', label: '네이버 블로그', href: 'https://blog.naver.com/buildwebs' }
    ],
    policy: [{ label: '개인정보처리방침', href: 'https://buildwebs.co.kr/?mode=policy' }],
    copy: '© 2026 BUILD WEBS. All rights reserved.',
    colors: { bg: '#020203', text: '#F4F5F7', gray: '#7D828C', accent: '#3560FF' }
  };
  function merge(a, b) { if (!b) return a; const o = Array.isArray(a) ? a.slice() : Object.assign({}, a); for (const k in b) o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) ? merge(a[k], b[k]) : b[k]; return o; }
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const br = (s) => esc(s).replace(/\n/g, '<br>');
  const ICON = {
    kakao: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 4C7.03 4 3 7.13 3 11c0 2.5 1.68 4.7 4.2 5.94l-.86 3.13c-.08.28.24.5.48.34l3.73-2.47c.48.05.96.06 1.45.06 4.97 0 9-3.13 9-7S16.97 4 12 4z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3L10 15z"/></svg>',
    blog: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-4.6L12 21l-2.4-3H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><text x="12" y="13.6" text-anchor="middle" font-family="Arial,sans-serif" font-size="6.6" font-weight="700" fill="#020203">blog</text></svg>'
  };
  const SNS_HOVER = { kakao: ['#FEE500', '#191600'], instagram: ['#E1306C', '#fff'], youtube: ['#FF0033', '#fff'], blog: ['#03C75A', '#fff'] };
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
.sns{display:flex;gap:10px;margin-top:28px}
.sns a{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#101116;box-shadow:inset 0 0 0 1px #24262c;color:#d4d7dd;transition:background .25s,color .25s,box-shadow .25s,transform .25s}
.sns a svg{width:22px;height:22px;display:block}
.sns a:hover{background:var(--hb);color:var(--hc);box-shadow:none;transform:translateY(-2px)}
.sns a:hover text{fill:var(--hb)}
.sns a:focus-visible{outline:2px solid #6F8DFF;outline-offset:3px}
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
@media (max-width:1024px){.br a.go{display:none}}
@media (max-width:860px){.br,.m,.ct{grid-column:1/-1}.bt .pl{margin-left:0}.tp{row-gap:32px}}
`;
  class BWFooter extends HTMLElement {
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = merge(CFG, window.BW_FOOTER_CONFIG);
      const logo = /^(https?:|\/|data:)/.test(c.logoSrc) ? c.logoSrc : new URL(c.logoSrc, (window.BW_ASSET_BASE || BW_SELF_BASE)).href;
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${css(c.colors)}</style><footer class="ft">
  <div class="tp">
    <div class="br"><img src="${esc(logo)}" alt="빌드웹스"><p>${br(c.line)}</p>${(c.sns || []).length ? `<div class="sns">${c.sns.map((s) => { const h = SNS_HOVER[s.icon] || ['#3560FF', '#fff']; return `<a href="${esc(s.href)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}" style="--hb:${h[0]};--hc:${h[1]}">${ICON[s.icon] || esc(s.label)}</a>`; }).join('')}</div>` : ''}<a class="go" href="#contact">무료 견적 받기</a></div>
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
