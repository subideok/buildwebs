/* 빌드웹스 모바일 플로팅 카카오톡 버튼 <bw-float></bw-float>
   kakaoUrl 을 채우기 전까지는 화면에 나타나지 않습니다. */
(function () {
  if (customElements.get('bw-float')) return;
  const CFG = {
    kakaoUrl: '',            // ← 카카오톡 채널 채팅 주소 (예: https://pf.kakao.com/_xxxxx/chat)
    label: '카카오톡 상담',
    showOn: 1024,            // 이 폭(px) 이하에서만 보임 (모바일·태블릿)
    hideNear: '#contact'     // 이 섹션이 화면에 보이면 버튼 숨김
  };
  const c = Object.assign({}, CFG, window.BW_FLOAT_CONFIG || {});
  class BWFloat extends HTMLElement {
    connectedCallback() {
      if (this._init || !c.kakaoUrl) return; this._init = true;
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>
:host{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:9000;font-family:'Pretendard Variable',Pretendard,-apple-system,sans-serif}
a{display:flex;align-items:center;gap:8px;height:52px;padding:0 20px 0 16px;border-radius:999px;background:#FEE500;color:#191919;text-decoration:none;font-size:15px;font-weight:700;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:opacity .3s,transform .3s}
a.off{opacity:0;transform:translateY(16px);pointer-events:none}
svg{width:22px;height:22px}
@media (min-width:${c.showOn + 1}px){:host{display:none}}
</style><a href="${c.kakaoUrl}" target="_blank" rel="noopener" aria-label="${c.label}"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#191919" d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.7 6.7-.2.8-.7 2.8-.8 3.2-.1.5.2.5.4.4.2-.1 2.9-2 4.1-2.8.5.1 1 .1 1.6.1 5.5 0 10-3.6 10-8S17.5 3 12 3z"/></svg>${c.label}</a>`;
      const a = root.querySelector('a');
      const target = document.querySelector(c.hideNear) || document.querySelector('bw-contact');
      if (target && 'IntersectionObserver' in window) new IntersectionObserver((es) => a.classList.toggle('off', es[0].isIntersecting), { threshold: 0.05 }).observe(target);
    }
  }
  customElements.define('bw-float', BWFloat);
})();
