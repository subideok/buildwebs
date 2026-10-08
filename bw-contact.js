/* 빌드웹스 무료 견적 문의 <bw-contact></bw-contact>
   action 에 구글 Apps Script 웹 앱 주소를 넣으면 문의가 구글 시트 + 메일로 들어옵니다. (설정법: FORM-SETUP.md) */
(function () {
  if (customElements.get('bw-contact')) return;
  const CFG = {
    id: 'contact',
    action: 'https://script.google.com/macros/s/AKfycbwcnG9B4BmnQcdvYS2CFHmodBj1MlyfMlq9f5Qi6_mbIA2byWC3JHMqSe3IqxHtIZPRJw/exec',   // ← 구글 Apps Script 웹 앱 주소(https://script.google.com/macros/s/.../exec). 비우면 시연용
    maxFileMB: 10,   // 첨부 파일 전체 최대 용량(MB)
    kicker: '무료 견적 받기',
    title: '사업 이야기를 들려주세요.\n홈페이지 방향을\n함께 잡아드립니다.',
    points: ['남겨 주신 내용을 읽고 맞는 상품과 일정을 안내해 드립니다.', '상담과 견적은 무료입니다.', '자료가 없어도 괜찮습니다. 아는 만큼만 적어 주세요.'],
    types: ['홈페이지 신규 제작', '홈페이지 수정 제작', '아직 잘 모르겠어요'],
    budgets: ['상담 후 결정', '60만 원 미만', '100만 원 미만', '200만 원 미만', '500만 원 미만'],
    done: { title: '문의가 접수되었습니다', desc: '남겨 주신 연락처로 안내드리겠습니다.' },
    colors: { bg: '#050507', text: '#F4F5F7', gray: '#9AA0AA', accent: '#3560FF', accentText: '#6F8DFF' }
  };
  function merge(a, b) { if (!b) return a; const o = Array.isArray(a) ? a.slice() : Object.assign({}, a); for (const k in b) o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) ? merge(a[k], b[k]) : b[k]; return o; }
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const br = (s) => esc(s).replace(/\n/g, '<br>');
  const css = (c) => `
:host{display:block;background:${c.bg};color:${c.text};font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all}
*{box-sizing:border-box}
p,h2,ul,fieldset,legend{margin:0;padding:0;list-style:none;border:0}
input,textarea,button,select{font:inherit;color:inherit}
.sec{max-width:1440px;margin:0 auto;padding:clamp(64px,7vw,120px) clamp(24px,6.5vw,112px) clamp(80px,9vw,150px);display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px)}
.lf{grid-column:1/6;align-self:start;position:sticky;top:120px}
.kick{display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 22px 0 18px;border-radius:999px;border:1px solid #2a2d35;background:#0c0d11;font-size:clamp(16px,1.25vw,19px);font-weight:600;margin-bottom:clamp(28px,3vw,44px)}
.kick::before{content:'';width:8px;height:8px;border-radius:50%;background:${c.accent};box-shadow:0 0 0 5px rgba(53,96,255,.18)}
h2{font-size:clamp(34px,3.8vw,60px);font-weight:700;line-height:1.2;letter-spacing:-.045em}
.pts{margin-top:40px;display:flex;flex-direction:column;gap:14px}
.pts li{position:relative;padding-left:28px;font-size:16px;line-height:1.6;color:#c4c8d0}
.pts li::before{content:'';position:absolute;left:0;top:3px;width:18px;height:18px;border-radius:50%;background:rgba(53,96,255,.18)}
.pts li::after{content:'';position:absolute;left:6px;top:8px;width:6px;height:3.5px;border:solid ${c.accentText};border-width:0 0 1.6px 1.6px;transform:rotate(-45deg)}
form{grid-column:6/13;position:relative;padding:clamp(28px,3vw,48px);border-radius:28px;background:#0c0d11;box-shadow:inset 0 0 0 1px #1f2127;display:grid;grid-template-columns:1fr 1fr;gap:22px 18px}
.f{display:flex;flex-direction:column;gap:10px;min-width:0}
.f.w{grid-column:1/-1}
.lb{font-size:14px;font-weight:600;color:#c4c8d0}
.lb em{font-style:normal;color:${c.accentText};margin-left:4px}
.lb small{font-weight:500;color:#6f747e;margin-left:6px}
input[type=text],input[type=tel],input[type=email],input[type=url],textarea{width:100%;height:54px;padding:0 18px;border-radius:12px;border:0;background:#14161b;box-shadow:inset 0 0 0 1px #24262c;font-size:16px;outline:0;transition:box-shadow .2s}
textarea{height:132px;padding:16px 18px;resize:vertical;line-height:1.6}
input::placeholder,textarea::placeholder{color:#5d626c}
input:focus,textarea:focus{box-shadow:inset 0 0 0 1.5px ${c.accent}}
.bad{box-shadow:inset 0 0 0 1.5px #ff6b5e!important}
.ch{display:flex;flex-wrap:wrap;gap:8px}
fieldset.f legend{margin-bottom:14px}
.bg .ch{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}
.bg .ch span{justify-content:center;padding:0 6px;font-size:14px;white-space:nowrap}
.ch label{position:relative}
.ch input{position:absolute;opacity:0;inset:0;margin:0;cursor:pointer}
.ch span{display:flex;align-items:center;height:46px;padding:0 18px;border-radius:999px;background:#14161b;box-shadow:inset 0 0 0 1px #24262c;font-size:15px;font-weight:500;cursor:pointer;transition:background .2s,box-shadow .2s}
.ch input:checked+span{background:${c.accent};box-shadow:none;color:#fff;font-weight:600}
.ch input:focus-visible+span{outline:2px solid ${c.accentText};outline-offset:2px}
.fl{display:flex;align-items:center;gap:12px;height:54px;padding:0 8px 0 18px;border-radius:12px;background:#14161b;box-shadow:inset 0 0 0 1px #24262c;font-size:15px;color:#9aa0aa;cursor:pointer}
.fl input{display:none}
.fl b{margin-left:auto;height:38px;padding:0 16px;border-radius:9px;background:#22252c;color:#fff;font-size:14px;display:flex;align-items:center}
.ag{grid-column:1/-1;display:flex;align-items:flex-start;gap:12px;font-size:14px;line-height:1.6;color:#9aa0aa;cursor:pointer}
.ag input{flex:none;width:20px;height:20px;margin:1px 0 0;accent-color:${c.accent}}
.ag.bad{box-shadow:none!important;color:#ff8b80}
.sb{grid-column:1/-1;height:62px;border:0;border-radius:999px;background:${c.accent};color:#fff;font-size:17px;font-weight:700;cursor:pointer;transition:background .2s}
.sb:disabled{opacity:.6;cursor:wait}
.sb:hover{background:#4D74FF}
.err{grid-column:1/-1;font-size:14px;color:#ff8b80;min-height:0}
.ok{position:absolute;inset:0;border-radius:28px;background:#0c0d11;display:none;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;padding:40px}
.ok.on{display:flex}
.ok i{width:64px;height:64px;border-radius:50%;background:${c.accent};position:relative;margin-bottom:8px}
.ok i::after{content:'';position:absolute;left:22px;top:22px;width:20px;height:11px;border:solid #fff;border-width:0 0 3px 3px;transform:rotate(-45deg)}
.ok b{font-size:26px;font-weight:700}
.ok p{font-size:16px;color:${c.gray}}
@media (max-width:960px){.sec{display:block}.lf{position:static;margin-bottom:44px}}
@media (max-width:640px){.sec{padding:64px 20px 80px}h2{font-size:clamp(30px,8.4vw,44px)}form{grid-template-columns:1fr;padding:24px;border-radius:22px}.bg .ch{display:flex;flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;margin-right:-24px;padding-right:24px}.bg .ch label{flex:none}.bg .ch span{padding:0 16px}}
`;
  class BWContact extends HTMLElement {
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = merge(CFG, window.BW_CONTACT_CONFIG);
      if (c.id && !this.id) { this.id = c.id; this.style.scrollMarginTop = '84px'; }
      const root = this.attachShadow({ mode: 'open' });
      const inp = (name, label, type, ph, req, wide) => `<label class="f${wide ? ' w' : ''}"><span class="lb">${esc(label)}${req ? '<em>*</em>' : ''}</span><input type="${type}" name="${name}" placeholder="${esc(ph)}"${req ? ' required' : ''}></label>`;
      const chips = (name, list, type) => `<div class="ch">${list.map((t, i) => `<label><input type="${type}" name="${name}" value="${esc(t)}"${type === 'radio' && i === 0 && name === 'budget' ? ' checked' : ''}><span>${esc(t)}</span></label>`).join('')}</div>`;
      root.innerHTML = `<style>${css(c.colors)}</style><section class="sec" aria-labelledby="bw-ct-title">
  <div class="lf"><p class="kick">${esc(c.kicker)}</p><h2 id="bw-ct-title">${br(c.title)}</h2><ul class="pts">${c.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul></div>
  <form novalidate>
    <fieldset class="f w"><legend class="lb">프로젝트 유형<em>*</em></legend>${chips('type', c.types, 'radio')}</fieldset>
    ${inp('name', '성함', 'text', '홍길동', true)}${inp('company', '회사명', 'text', '회사 또는 상호명', true)}
    ${inp('position', '직책', 'text', '대표, 실장 등', false)}${inp('phone', '연락처', 'tel', '010-0000-0000', true)}
    ${inp('email', '이메일', 'email', 'name@company.com', true, true)}
    <fieldset class="f w bg"><legend class="lb">예산</legend>${chips('budget', c.budgets, 'radio')}</fieldset>
    <label class="f w"><span class="lb">원하는 사이트 구성 및 회사 소개<em>*</em></span><textarea name="about" placeholder="어떤 일을 하는 회사인지, 어떤 페이지가 필요한지 편하게 적어 주세요." required></textarea></label>
    ${inp('site', '기존 홈페이지', 'url', 'https://', false)}${inp('sns', 'SNS 주소', 'text', '블로그, 인스타그램, 유튜브 등', false)}
    ${inp('ref', '원하는 레퍼런스', 'text', '마음에 드는 사이트 주소', false, true)}
    <label class="f w"><span class="lb">관련 자료 첨부<small>회사 소개서, 로고 등 · 합계 ${c.maxFileMB}MB까지</small></span><span class="fl"><input type="file" name="files" multiple><span class="fn">선택된 파일 없음</span><b>파일 선택</b></span></label>
    <label class="ag"><input type="checkbox" name="agree" required><span>개인정보 수집 · 이용에 동의합니다. 수집 항목은 문의 답변에만 사용하며, 상담이 끝나면 지체 없이 파기합니다.</span></label>
    <p class="err" role="alert"></p>
    <button class="sb" type="submit">무료 견적 문의하기</button>
    <div class="ok" role="status"><i></i><b>${esc(c.done.title)}</b><p>${esc(c.done.desc)}</p></div>
  </form>
</section>`;
      const f = root.querySelector('form'), err = root.querySelector('.err');
      const file = f.querySelector('input[type=file]');
      file.addEventListener('change', () => { root.querySelector('.fn').textContent = file.files.length ? [...file.files].map((x) => x.name).join(', ') : '선택된 파일 없음'; });
      f.addEventListener('input', (e) => e.target.classList && e.target.classList.remove('bad'));
      f.addEventListener('submit', (e) => {
        const bad = [];
        f.querySelectorAll('[required]').forEach((el) => {
          const ok = el.type === 'checkbox' ? el.checked : el.value.trim() && (el.type !== 'email' || /.+@.+\..+/.test(el.value));
          const tgt = el.type === 'checkbox' ? el.closest('.ag') : el; tgt.classList.toggle('bad', !ok); if (!ok) bad.push(el);
        });
        const type = f.querySelector('input[name=type]:checked');
        if (!type) bad.push(f.querySelector('input[name=type]'));
        if (bad.length) { e.preventDefault(); err.textContent = !type ? '프로젝트 유형을 선택해 주세요.' : '표시된 항목을 확인해 주세요.'; bad[0].focus(); return; }
        err.textContent = '';
        e.preventDefault();
        const ok = () => root.querySelector('.ok').classList.add('on');
        if (!c.action) { ok(); return; }
        const sb = f.querySelector('.sb');
        const files = [...file.files];
        if (files.reduce((n, x) => n + x.size, 0) > c.maxFileMB * 1048576) { err.textContent = '첨부 파일은 합계 ' + c.maxFileMB + 'MB까지 보낼 수 있습니다.'; return; }
        const fd = new FormData(f), data = {};
        fd.forEach((v, k) => { if (k !== 'files') data[k] = v; });
        data.page = location.href;
        sb.disabled = true; sb.textContent = '보내는 중…';
        Promise.all(files.map((x) => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res({ name: x.name, type: x.type || 'application/octet-stream', data: String(r.result).split(',')[1] }); r.onerror = rej; r.readAsDataURL(x); })))
          .then((fl) => { data.files = fl; return fetch(c.action, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(data) }); })
          .then(() => { ok(); f.reset(); })
          .catch(() => { err.textContent = '전송에 실패했습니다. 입력하신 내용은 그대로 있으니 잠시 후 다시 눌러 주세요.'; })
          .finally(() => { sb.disabled = false; sb.textContent = '무료 견적 문의하기'; });
      });
    }
  }
  customElements.define('bw-contact', BWContact);
})();
