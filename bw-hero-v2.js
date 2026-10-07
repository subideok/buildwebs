/* 빌드웹스 히어로 v2 — 가상 홈페이지 목업 갤러리
   사용: <bw-hero-v2></bw-hero-v2> + 이 스크립트.
   Shadow DOM 안에서만 동작하므로 아임웹의 다른 스타일과 충돌하지 않습니다.
   수정: 아래 BW_CONFIG 또는 페이지에서 window.BW_HERO_CONFIG = {...} 로 덮어쓰기. */
(function () {
  const BW_SELF_BASE = (document.currentScript && document.currentScript.src) ? new URL('./', document.currentScript.src).href : document.baseURI;
  if (customElements.get('bw-hero-v2')) return;

  const BW_CONFIG = {
    logoSrc: 'assets/logo-white.png', logoText: 'BUILD WEBS',   // 로고 이미지 주소
    menu: [
      { label: '빌드웹스', href: '#about' },
      { label: '포트폴리오', href: '#portfolio' },
      { label: '고객후기', href: '#reviews' },
      { label: '서비스', href: '#service' }
    ],
    cta: { label: '무료 견적 받기', href: '#contact' },
    eyebrow: '기업 · 전문직 · 서비스 업종 홈페이지 제작',
    titleTop: '고객사의 강점을 찾아',
    rotating: ['문의가 오는', '한눈에 이해되는', '신뢰가 느껴지는'],
    titleBottom: '홈페이지로 만듭니다',
    desc: ['마케팅·기획·카피 6년의 경험으로 고객사의 강점을 담고,', '방문자가 이해하고 문의하도록 설계합니다.'],   // 한 줄씩
    primary: { label: '무료 견적 받기', href: '#contact' },
    secondary: { label: '포트폴리오 보기', href: '#portfolio' },
    steps: ['강점 발견', '문구 설계', '디자인 · 제작'],
    rotateInterval: 2800,
    colors: { bg: '#050507', text: '#F4F5F7', gray: '#9AA0AA', accent: '#3560FF', accentHover: '#4D74FF', accentText: '#6F8DFF' },

    // 이미지 폴더 주소 — 아임웹에 올린 뒤 해당 주소로 바꾸세요. (images 항목에서 파일별 교체 가능)
    assetBase: 'assets/',
    images: {
      ongyeolHero: 'p1081.jpg', ongyeolThumb: 'p1076.jpg',
      damonHero: 'p1051.jpg', damonRoom: 'p1008.jpg',
      bareunHero: 'p192.jpg',
      orbitHero: 'p1079.jpg', orbitA: 'p1033.jpg', orbitB: 'p91.jpg',
      haramHero: 'p1031.jpg', lawHero: 'p180.jpg', saebomHero: 'p196.jpg'
    },

    gallery: {
      label: '의뢰 업체 포트폴리오',
      interval: 1500,     // 넘어가는 간격(ms)
      duration: 700,      // 넘어가는 동작 시간(ms)
      visible: 3,         // 앞장 기준 앞뒤로 보이는 장 수 (3 → 최대 7장)
      // 카드 교체: site 대신 img: '이미지주소' 를 넣으면 실제 포트폴리오 캡처(1280×800 비율 권장)로 바뀝니다.
      cards: [
        { site: 'ongyeol', name: '온결 건축', type: '건축 · 인테리어' },
        { site: 'lumion', name: '루미온 테크', type: '기술 기업' },
        { site: 'damon', name: '담온 스테이', type: '프리미엄 숙소' },
        { site: 'haram', name: '하람 치과', type: '병원 · 의료' },
        { site: 'bareun', name: '바른결 컨설팅', type: '기업 컨설팅' },
        { site: 'orbitd', name: '오르빛 스튜디오', type: '브랜드 · 영상 제작' },
        { site: 'jeongyeon', name: '정연 법률사무소', type: '법률 · 전문직' },
        { site: 'saebom', name: '새봄 아카데미', type: '교육 · 학원' }
      ]
    },
    fontCss: [
      'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css',
      'https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;600&family=IBM+Plex+Sans+KR:wght@400;500;600&display=swap'
    ]
  };

  function merge(a, b) {
    if (!b) return a;
    const o = Array.isArray(a) ? a.slice() : Object.assign({}, a);
    for (const k in b) o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) ? merge(a[k], b[k]) : b[k];
    return o;
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));

  /* ---------- 가상 홈페이지 화면 (데스크톱 1280×800, 모바일 390×844) ---------- */
  const SITES = {
    ongyeol: (I) => `<div class="site s-on">
  <header><div class="lg"><i></i>온결 건축</div><nav><span>프로젝트</span><span>스튜디오</span><span>설계 과정</span><span>저널</span></nav><b class="bt">상담 예약</b></header>
  <div class="hl"><p class="k">주거 · 상업 공간 설계</p><h2>빛과 결을<br>설계합니다</h2><p class="d">대지와 생활의 흐름을 먼저 읽고,<br>오래 머물고 싶은 공간을 짓습니다.</p>
    <div class="row"><b class="pri">프로젝트 보기</b><span class="lk">설계 상담 →</span></div>
    <ol><li><em>01</em>한남 주택<span>주거</span></li><li><em>02</em>성수 사옥<span>오피스</span></li><li><em>03</em>제주 스테이<span>숙박</span></li></ol></div>
  <div class="im" style="background-image:url('${I.ongyeolHero}')"><span class="cap">한남 주택 · 외관</span></div>
  <div class="th" style="background-image:url('${I.ongyeolThumb}')"></div>
</div>`,
    lumion: () => `<div class="site s-lu">
  <div class="glow"></div>
  <header><div class="lg"><i></i>루미온 테크</div><nav><span>제품</span><span>솔루션</span><span>도입 안내</span><span>문서</span></nav><div class="hr"><span>로그인</span><b class="bt">데모 신청</b></div></header>
  <div class="hc"><span class="tag"><b>새 기능</b>설비 이상 감지 리포트 →</span><h2>현장 데이터를<br>한 화면에서 판단합니다</h2><p>공장과 건물의 설비 상태를 실시간으로 모아, 필요한 순간에 알려드립니다.</p>
    <div class="row"><b class="pri">무료로 시작하기</b><b class="sec">제품 소개서</b></div></div>
  <div class="dash"><aside><i></i><span class="on">개요</span><span>설비</span><span>알림</span><span>보고서</span><span>설정</span></aside>
    <main><div class="kp"><div><small>연결된 설비</small><b>128<em>대</em></b></div><div><small>오늘 알림</small><b>3<em>건</em></b></div><div><small>평균 온도</small><b>21.8<em>°C</em></b></div></div>
    <div class="ch"><small>전력 사용 추이</small><svg viewBox="0 0 800 150" preserveAspectRatio="none"><defs><linearGradient id="lg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#57e6b0" stop-opacity=".35"/><stop offset="1" stop-color="#57e6b0" stop-opacity="0"/></linearGradient></defs><path d="M0 110 C60 100 90 70 150 78 S250 120 320 90 S430 30 500 52 S620 100 690 60 S770 40 800 44 V150 H0Z" fill="url(#lg1)"/><path d="M0 110 C60 100 90 70 150 78 S250 120 320 90 S430 30 500 52 S620 100 690 60 S770 40 800 44" fill="none" stroke="#57e6b0" stroke-width="2.5"/></svg></div></main></div>
</div>`,
    damon: (I) => `<div class="site s-da" style="background-image:url('${I.damonHero}')">
  <header><div class="lg">담온 스테이</div><nav><span>객실</span><span>머무는 방법</span><span>주변 안내</span><span>예약 안내</span></nav><b class="bt">예약하기</b></header>
  <div class="hc"><p class="k">가평 · 호숫가 독채 스테이</p><h2>물소리로 깨어나는<br>하루</h2></div>
  <div class="rm"><div style="background-image:url('${I.damonRoom}')"></div><p><b>호수동</b>기준 2인 · 최대 4인</p></div>
  <div class="book"><div><small>체크인</small><b>10.17 (금)</b></div><div><small>체크아웃</small><b>10.19 (일)</b></div><div><small>인원</small><b>성인 2명</b></div><div><small>객실</small><b>호수동</b></div><span>예약 가능 확인</span></div>
</div>`,
    bareun: (I) => `<div class="site s-ba">
  <header><div class="lg"><i></i>바른결 컨설팅</div><nav><span>서비스</span><span>접근 방식</span><span>인사이트</span><span>회사 소개</span></nav><b class="bt">상담 신청</b></header>
  <div class="hc"><p class="k">중견기업 · 공공기관 경영 자문</p><h2>복잡한 결정을<br>명확한 순서로</h2><p class="d">현황을 진단하고 우선순위를 정리해,<br>조직이 실행할 수 있는 계획으로 만듭니다.</p>
    <div class="row"><b class="pri">상담 신청</b><b class="sec">서비스 안내</b></div></div>
  <div class="im" style="background-image:url('${I.bareunHero}')"><div class="nt"><small>진행 방식</small><b>진단 → 우선순위 → 실행</b></div></div>
  <div class="sv"><div><em>01</em><b>조직 진단</b><span>역할과 의사결정 구조 점검</span></div><div><em>02</em><b>사업 전략</b><span>시장과 자원에 맞는 방향 수립</span></div><div><em>03</em><b>실행 관리</b><span>분기별 점검과 보완</span></div></div>
</div>`,
    orbit: (I) => `<div class="site s-or">
  <div class="sb"><b>9:41</b><span><i></i><i></i><i></i></span></div>
  <header><div class="lg"><i></i>오르빛</div><span class="bg"><i></i><i></i></span></header>
  <div class="hv" style="background-image:url('${I.orbitHero}')"><span class="pl"></span><span class="ch">브랜드 필름 · 2:14</span></div>
  <h2>장면이<br>브랜드가 되도록</h2><p class="d">브랜드 필름 · 광고 · 사진</p>
  <div class="ls"><div><i style="background-image:url('${I.orbitA}')"></i><p><b>새벽 터널</b>브랜드 필름</p></div><div><i style="background-image:url('${I.orbitB}')"></i><p><b>손의 기록</b>사진 시리즈</p></div></div>
  <span class="octa">프로젝트 문의</span>
</div>`
  ,
    orbitd: (I) => `<div class="site s-od">
  <header><div class="lg"><i></i>오르빛 스튜디오</div><nav><span>작업</span><span>필름</span><span>사진</span><span>연락</span></nav><b class="bt">프로젝트 문의</b></header>
  <h2>장면이<br>브랜드가<br>되도록</h2>
  <div class="hv" style="background-image:url('${I.orbitHero}')"><span class="pl"></span><span class="ch">브랜드 필름 · 2:14</span></div>
  <div class="gr"><div><i style="background-image:url('${I.orbitA}')"></i><b>새벽 터널</b><span>브랜드 필름</span></div><div><i style="background-image:url('${I.orbitB}')"></i><b>손의 기록</b><span>사진 시리즈</span></div></div>
  <p class="d">브랜드 필름 · 광고 · 사진</p>
</div>`,
    haram: (I) => `<div class="site s-hr">
  <header><div class="lg"><i></i>하람 치과</div><nav><span>병원 소개</span><span>진료 과목</span><span>의료진</span><span>오시는 길</span></nav><b class="bt">진료 예약</b></header>
  <div class="hc"><p class="k">서초역 3번 출구 · 평일 야간 진료</p><h2>충분히 설명하고<br>꼭 필요한 만큼만</h2><p class="d">진료 전 상태와 치료 방법을 먼저 보여드립니다.</p>
    <div class="row"><b class="pri">온라인 예약</b><b class="sec">02-000-0000</b></div></div>
  <div class="im" style="background-image:url('${I.haramHero}')"></div>
  <div class="tm"><div><b>평일</b>09:30 – 20:00</div><div><b>토요일</b>09:30 – 15:00</div><div><b>점심</b>13:00 – 14:00</div></div>
  <div class="sv"><span>일반 진료</span><span>임플란트</span><span>교정</span><span>소아 치과</span></div>
</div>`,
    jeongyeon: (I) => `<div class="site s-jy">
  <header><div class="lg">정연 법률사무소</div><nav><span>업무 분야</span><span>변호사 소개</span><span>상담 절차</span><span>오시는 길</span></nav><b class="bt">상담 신청</b></header>
  <div class="im" style="background-image:url('${I.lawHero}')"></div>
  <div class="hc"><p class="k">기업 법무 · 부동산 · 가사</p><h2>사건의 처음부터<br>끝까지 직접 맡습니다</h2>
    <div class="row"><b class="pri">상담 신청하기</b><span class="lk">업무 분야 보기 →</span></div></div>
  <div class="ar"><div><em>01</em>기업 법무</div><div><em>02</em>부동산 분쟁</div><div><em>03</em>가사 · 상속</div></div>
</div>`,
    saebom: (I) => `<div class="site s-sb">
  <header><div class="lg"><i></i>새봄 아카데미</div><nav><span>과정 안내</span><span>강사진</span><span>수업 방식</span><span>공지사항</span></nav><b class="bt">상담 신청</b></header>
  <div class="hc"><span class="tag">2027 봄학기 모집</span><h2>스스로 공부하는<br>힘을 기릅니다</h2><p class="d">중 · 고등 수학 소수 정예 수업</p>
    <div class="row"><b class="pri">레벨 테스트 신청</b><b class="sec">과정 보기</b></div></div>
  <div class="im" style="background-image:url('${I.saebomHero}')"><div class="cd"><small>이번 주 설명회</small><b>10월 18일 (토) 오후 2시</b></div></div>
  <div class="cs"><div style="background:#ffe8a3"><b>중등 심화</b><span>주 3회 · 8명</span></div><div style="background:#cfe7d6"><b>고등 내신</b><span>주 3회 · 10명</span></div><div style="background:#d9e3ff"><b>수능 대비</b><span>주 4회 · 10명</span></div></div>
</div>`
  };

  const css = (c, I) => `
:host{display:block;position:relative;--bg:${c.bg};--text:${c.text};--gray:${c.gray};--accent:${c.accent};--accent-hi:${c.accentHover};--accent-text:${c.accentText};
  background:var(--bg);color:var(--text);font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all}
*{box-sizing:border-box}
a{color:inherit;text-decoration:none}
a:focus-visible,button:focus-visible{outline:2px solid var(--accent-text);outline-offset:3px}
.nav{position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:60;width:min(1040px,calc(100% - 32px));height:60px;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:0 8px 0 24px;border-radius:999px;background:rgba(18,19,25,.55);-webkit-backdrop-filter:blur(18px) saturate(150%);backdrop-filter:blur(18px) saturate(150%);border:1px solid rgba(255,255,255,.08);transition:background .35s}
.nav.scrolled{background:rgba(11,12,16,.85)}
.logo{display:flex;align-items:center;font-weight:800;letter-spacing:.06em;font-size:15px;flex:0 0 auto}
.logo img{height:17px;width:auto;display:block}
@media (max-width:860px){.logo img{height:14px}}
.links{display:flex;gap:2px;list-style:none;margin:0;padding:0}
.links a{display:block;padding:10px 18px;border-radius:999px;font-size:15px;font-weight:500;color:#b8bcc6;transition:color .2s,background .2s}
.links a:hover{color:#fff;background:rgba(255,255,255,.06)}
.right{display:flex;align-items:center;gap:6px}
.cta{display:inline-flex;align-items:center;justify-content:center;height:44px;padding:0 22px;border-radius:999px;background:var(--accent);color:#fff;font-weight:600;font-size:15px;white-space:nowrap;transition:background .2s}
.cta:hover{background:var(--accent-hi);color:#fff}
.burger{display:none;width:44px;height:44px;border:0;border-radius:999px;background:rgba(255,255,255,.06);cursor:pointer;align-items:center;justify-content:center;flex-direction:column;gap:6px;padding:0}
.burger i{display:block;width:18px;height:1.5px;background:#fff;border-radius:2px;transition:transform .3s}
.burger[aria-expanded="true"] i:first-child{transform:translateY(3.75px) rotate(45deg)}
.burger[aria-expanded="true"] i:last-child{transform:translateY(-3.75px) rotate(-45deg)}
.panel{position:fixed;top:84px;left:50%;z-index:59;width:min(1040px,calc(100% - 32px));transform:translate(-50%,-8px);opacity:0;pointer-events:none;transition:opacity .3s,transform .3s;background:rgba(14,15,20,.96);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:8px;display:none}
.panel.open{opacity:1;transform:translate(-50%,0);pointer-events:auto}
.panel a{display:flex;align-items:center;min-height:56px;padding:0 18px;font-size:18px;font-weight:500;border-radius:16px}
.panel a:hover{background:rgba(255,255,255,.05)}

.hero{position:relative;min-height:max(760px,100svh);overflow:hidden;display:flex;align-items:center;isolation:isolate}
.bgl{display:none}
.content{position:relative;z-index:2;width:100%;padding:140px clamp(24px,6.5vw,112px) 140px;pointer-events:none}
.content a{pointer-events:auto}
.inner{max-width:min(41vw,720px)}
.eyebrow{display:flex;align-items:center;gap:10px;color:var(--gray);font-size:15px;font-weight:500;margin:0 0 30px}
.eyebrow .dot{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 4px rgba(53,96,255,.16)}
h1{margin:0;font-weight:700;font-size:clamp(40px,4.2vw,80px);line-height:1.2;letter-spacing:-.035em}
h1 .ln{display:block}
.rot{display:block;position:relative;height:1.2em;overflow:hidden;color:var(--accent-text)}
.rot span{position:absolute;left:0;top:0;white-space:nowrap;transform:translateY(100%);opacity:0;transition:transform 1s cubic-bezier(.7,0,.2,1),opacity .8s ease}
.rot span.on{transform:none;opacity:1}
.rot span.out{transform:translateY(-100%);opacity:0}
.desc span{display:block}
.desc{margin:32px 0 0;max-width:620px;font-size:clamp(16px,1.15vw,18px);line-height:1.75;color:#a7acb6;text-wrap:pretty}
.actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:44px}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;height:58px;padding:0 30px;white-space:nowrap;border-radius:999px;font-size:16px;font-weight:600;transition:background .2s,border-color .2s}
.btn.pri{background:var(--accent);color:#fff}
.btn.pri:hover{background:var(--accent-hi);color:#fff}
.btn.pri svg{transition:transform .25s}
.btn.pri:hover svg{transform:translateX(3px)}
.btn.sec{border:1px solid rgba(255,255,255,.18);color:#fff}
.btn.sec:hover{border-color:rgba(255,255,255,.45);color:#fff}
.steps{position:absolute;z-index:2;left:clamp(24px,6.5vw,112px);bottom:40px;display:flex;align-items:center;gap:14px;margin:0;padding:0;list-style:none;color:#6f747e;font-size:14px}
.steps li{display:flex;align-items:center;gap:14px}
.steps li+li::before{content:'';width:28px;height:1px;background:rgba(255,255,255,.16)}

/* 포트폴리오 스택 */
.stage{position:absolute;top:0;right:0;bottom:0;left:46%;z-index:1;overflow:hidden}
.stack{position:absolute;inset:0;--cw:min(37vw,680px)}
.card{position:absolute;left:56%;top:48%;width:var(--cw);border-radius:14px;overflow:hidden;background:#fff;container-type:inline-size;will-change:transform,opacity;box-shadow:0 40px 80px -24px rgba(0,0,0,.85),0 0 0 1px rgba(255,255,255,.06)}
.card .bar{height:3.2cqw;background:#f1f1f3;display:flex;align-items:center;gap:.7cqw;padding:0 1.6cqw;border-bottom:1px solid #e3e3e6}
.card .bar i{width:.9cqw;height:.9cqw;border-radius:50%;background:#cfd0d4}
.card .bar span{margin:0 auto;height:1.8cqw;width:34%;border-radius:99px;background:#e4e4e8}
.face{position:relative;aspect-ratio:1280/800;overflow:hidden}
.face img{width:100%;height:100%;object-fit:cover;display:block}
.shade{position:absolute;inset:0;background:#050507;pointer-events:none;z-index:4}
.ghost{position:absolute;left:56%;top:48%;width:var(--cw);aspect-ratio:1280/840;border-radius:14px;border:1px solid rgba(255,255,255,.07);background:transparent}
.fade{position:absolute;pointer-events:none;z-index:200}
.fade.t{left:0;right:0;top:0;height:120px;background:linear-gradient(var(--bg),transparent)}
.fade.b{left:0;right:0;bottom:0;height:140px;background:linear-gradient(transparent,var(--bg))}
.fade.r{top:0;bottom:0;right:0;width:80px;background:linear-gradient(90deg,transparent,var(--bg))}
.fade.l{top:0;bottom:0;left:0;width:120px;background:linear-gradient(90deg,var(--bg),transparent)}
.meta{position:absolute;z-index:210;right:clamp(24px,5vw,80px);bottom:40px;display:flex;align-items:center;gap:18px;font-size:13px;color:#9aa0aa;margin:0}
.meta .now{display:flex;align-items:baseline;gap:10px;color:#e9eaee;font-size:14px;font-weight:600;min-width:210px;justify-content:flex-end;margin:0}
.meta .now em{font-style:normal;font-weight:500;color:#9aa0aa;font-size:13px}
.meta .idx{font-variant-numeric:tabular-nums;color:#6f747e}
.meta .mk{display:flex;align-items:center;gap:8px;padding-left:18px;border-left:1px solid rgba(255,255,255,.12)}
.site{position:absolute;left:0;top:0;transform-origin:0 0;transform:scale(var(--k,.3));overflow:hidden}

/* 사이트 공통 */
.site header{position:absolute;left:0;right:0;top:0;height:84px;display:flex;align-items:center;justify-content:space-between;padding:0 56px;z-index:2}
.site header nav{display:flex;gap:36px;font-size:14px}
.site .lg{display:flex;align-items:center;gap:10px;font-size:20px;font-weight:700}
.site h2,.site p{margin:0}
.site .row{display:flex;gap:12px;align-items:center}
.site b{font-weight:600}

.s-on{width:1280px;height:800px;background:#f2f0eb;color:#1c1b19;font-family:Pretendard,sans-serif}
.s-on .lg{font-family:'Noto Serif KR',serif;font-weight:600;font-size:22px}
.s-on .lg i{width:16px;height:16px;border:2px solid #1c1b19;border-radius:0 100% 0 0}
.s-on nav{color:#5a564f}
.s-on .bt{border:1px solid #1c1b19;border-radius:999px;padding:10px 20px;font-size:13px}
.s-on .hl{position:absolute;left:56px;top:148px;width:470px}
.s-on .k{font-size:13px;font-weight:500;color:#8a857b;margin-bottom:22px}
.s-on h2{font-family:'Noto Serif KR',serif;font-size:62px;line-height:1.24;font-weight:500;letter-spacing:-.02em}
.s-on .d{font-size:16px;line-height:1.7;color:#5d5a54;margin-top:26px}
.s-on .row{gap:24px;margin-top:36px}
.s-on .pri{background:#1c1b19;color:#f2f0eb;padding:15px 26px;font-size:14px}
.s-on .lk{font-size:14px;font-weight:600;border-bottom:1px solid #1c1b19;padding-bottom:2px}
.s-on ol{list-style:none;margin:64px 0 0;padding:0;font-size:15px;width:400px}
.s-on li{display:flex;gap:18px;padding:14px 0;border-top:1px solid #d9d5cc}
.s-on li em{font-style:normal;color:#9a958a;font-size:12px;width:20px;padding-top:2px}
.s-on li span{margin-left:auto;color:#9a958a;font-size:13px}
.s-on .im{position:absolute;right:0;top:84px;width:640px;height:716px;background:center/cover}
.s-on .cap{opacity:1;transform:none;position:absolute;left:auto;right:24px;bottom:24px;border-radius:0;background:rgba(242,240,235,.92);color:#1c1b19;font-size:12px;padding:8px 12px}
.s-on .th{position:absolute;left:560px;bottom:60px;width:170px;height:210px;background:center/cover;box-shadow:0 24px 40px rgba(0,0,0,.2);border:6px solid #f2f0eb}

.s-lu{width:1280px;height:800px;background:#0a0e0d;color:#e9f1ee;font-family:'IBM Plex Sans KR',Pretendard,sans-serif}
.s-lu .glow{position:absolute;left:240px;right:240px;top:420px;height:420px;border-radius:50%;background:radial-gradient(closest-side,rgba(87,230,176,.22),transparent)}
.s-lu .lg i{width:18px;height:18px;border-radius:50%;border:2px solid #57e6b0;box-shadow:inset 0 0 0 3px #0a0e0d,inset 0 0 0 10px #57e6b0}
.s-lu nav{color:#8c9a95}
.s-lu .hr{display:flex;gap:22px;align-items:center;font-size:14px;color:#c7d3cf}
.s-lu .bt{background:#57e6b0;color:#06120d;border-radius:8px;padding:10px 18px;font-size:14px}
.s-lu .hc{position:absolute;left:0;right:0;top:136px;text-align:center}
.s-lu .tag{display:inline-flex;gap:10px;border:1px solid #23302c;border-radius:999px;padding:7px 14px;font-size:13px;color:#a9b8b2}
.s-lu .tag b{color:#57e6b0}
.s-lu h2{font-size:52px;font-weight:600;line-height:1.25;letter-spacing:-.02em;margin-top:24px}
.s-lu p{font-size:17px;color:#8c9a95;margin-top:18px}
.s-lu .row{justify-content:center;margin-top:30px}
.s-lu .pri{background:#57e6b0;color:#06120d;border-radius:8px;padding:14px 22px;font-size:15px}
.s-lu .sec{border:1px solid #2c3a35;border-radius:8px;padding:13px 22px;font-size:15px;color:#d5e0dc}
.s-lu .dash{position:absolute;left:130px;right:130px;top:540px;height:300px;background:#101716;border:1px solid #22302b;border-radius:14px 14px 0 0;display:grid;grid-template-columns:170px 1fr;box-shadow:0 -20px 60px rgba(0,0,0,.4)}
.s-lu aside{border-right:1px solid #1d2925;padding:22px 16px;display:flex;flex-direction:column;gap:6px;font-size:14px;color:#7d8b86}
.s-lu aside i{width:60px;height:8px;border-radius:4px;background:#22302b;margin:0 0 14px 10px}
.s-lu aside span{padding:9px 10px;border-radius:7px}
.s-lu aside .on{background:#18231f;color:#e9f1ee}
.s-lu main{padding:22px}
.s-lu .kp{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.s-lu .kp div{background:#141e1b;border:1px solid #1f2b27;border-radius:10px;padding:14px 16px}
.s-lu small{display:block;font-size:12px;color:#7d8b86}
.s-lu .kp b{display:block;font-size:26px;margin-top:6px}
.s-lu .kp em{font-style:normal;font-size:14px;color:#7d8b86;margin-left:4px}
.s-lu .ch{margin-top:14px;background:#141e1b;border:1px solid #1f2b27;border-radius:10px;padding:14px 16px;height:150px}
.s-lu .ch svg{width:100%;height:100px;margin-top:8px;display:block}

.s-da{width:1280px;height:800px;background:#333 center/cover;color:#fff;font-family:Pretendard,sans-serif}
.s-da::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.05) 38%,rgba(0,0,0,.15) 60%,rgba(0,0,0,.6))}
.s-da .lg{font-family:'Noto Serif KR',serif;font-weight:600;font-size:22px}
.s-da nav{color:rgba(255,255,255,.85)}
.s-da .bt{background:#fff;color:#1f241f;border-radius:999px;padding:11px 22px;font-size:14px}
.s-da .hc{position:absolute;left:72px;top:250px}
.s-da .k{font-size:15px;color:rgba(255,255,255,.85);margin-bottom:18px}
.s-da h2{font-family:'Noto Serif KR',serif;font-size:68px;line-height:1.25;font-weight:500;letter-spacing:-.02em;text-shadow:0 2px 30px rgba(0,0,0,.25)}
.s-da .rm{position:absolute;right:72px;top:200px;width:230px;background:rgba(255,255,255,.95);color:#1f241f;padding:10px;border-radius:12px}
.s-da .rm div{height:180px;border-radius:6px;background:center/cover}
.s-da .rm p{font-size:13px;color:#6b706b;padding:12px 6px 4px}
.s-da .rm b{display:block;font-size:16px;color:#1f241f;margin-bottom:2px}
.s-da .book{position:absolute;left:72px;right:72px;bottom:56px;height:96px;background:#fff;color:#1f241f;border-radius:14px;display:grid;grid-template-columns:repeat(4,1fr) 230px;align-items:center;padding-left:12px}
.s-da .book div{padding:0 22px;border-right:1px solid #e6e4df}
.s-da .book div:nth-child(4){border:0}
.s-da .book small{display:block;font-size:12px;color:#8a8d88;margin-bottom:5px}
.s-da .book b{font-size:18px}
.s-da .book span{margin:12px;height:72px;border-radius:10px;background:#2e3a2f;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:16px}

.s-ba{width:1280px;height:800px;background:#f7f6f2;color:#14213d;font-family:Pretendard,sans-serif}
.s-ba .lg i{width:14px;height:20px;border-left:4px solid #14213d;border-right:4px solid #c19a53}
.s-ba nav{color:#5b6478}
.s-ba .bt{background:#14213d;color:#fff;border-radius:6px;padding:11px 20px;font-size:14px}
.s-ba .hc{position:absolute;left:64px;top:156px;width:520px}
.s-ba .k{font-size:14px;font-weight:600;color:#a7843f;margin-bottom:20px}
.s-ba h2{font-size:56px;font-weight:700;line-height:1.25;letter-spacing:-.03em}
.s-ba .d{font-size:17px;line-height:1.7;color:#5b6478;margin-top:22px}
.s-ba .row{margin-top:34px}
.s-ba .pri{background:#14213d;color:#fff;border-radius:6px;padding:15px 24px;font-size:15px}
.s-ba .sec{border:1px solid #c9ccd4;border-radius:6px;padding:14px 24px;font-size:15px}
.s-ba .im{position:absolute;right:64px;top:116px;width:560px;height:440px;border-radius:20px;background:center/cover}
.s-ba .nt{position:absolute;left:-40px;bottom:32px;background:#fff;border-radius:12px;padding:16px 20px;box-shadow:0 16px 40px rgba(20,33,61,.14)}
.s-ba .nt small{display:block;font-size:12px;color:#8b92a2;margin-bottom:4px}
.s-ba .nt b{font-size:16px}
.s-ba .sv{position:absolute;left:64px;right:64px;bottom:48px;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;border-top:1px solid #dedbd2;padding-top:26px}
.s-ba .sv div{display:grid;grid-template-columns:34px 1fr;row-gap:6px}
.s-ba .sv em{font-style:normal;font-size:13px;color:#a7843f;font-weight:600;padding-top:3px;grid-row:span 2}
.s-ba .sv b{font-size:18px}
.s-ba .sv span{font-size:14px;color:#6c7486}

.s-or{width:390px;height:844px;background:#0d0c0b;color:#f4efe9;font-family:Pretendard,sans-serif}
.s-or .sb{height:50px;display:flex;align-items:flex-end;justify-content:space-between;padding:0 30px 6px;font-size:15px}
.s-or .sb span{display:flex;gap:4px;align-items:flex-end}
.s-or .sb i{width:4px;background:#f4efe9;border-radius:1px}
.s-or .sb i:nth-child(1){height:6px}.s-or .sb i:nth-child(2){height:9px}.s-or .sb i:nth-child(3){height:12px}
.s-or header{position:relative;height:60px;padding:0 20px}
.s-or .lg{font-size:21px;font-weight:800;letter-spacing:-.02em}
.s-or .lg i{width:10px;height:10px;border-radius:50%;background:#ff5a36}
.s-or .bg{display:flex;flex-direction:column;gap:6px}
.s-or .bg i{width:22px;height:2px;background:#f4efe9}
.s-or .hv{margin:6px 16px 0;height:300px;border-radius:18px;background:center/cover;position:relative}
.s-or .pl{position:absolute;left:50%;top:50%;width:64px;height:64px;margin:-32px 0 0 -32px;border-radius:50%;background:rgba(255,255,255,.22);box-shadow:inset 0 0 0 1px rgba(255,255,255,.4)}
.s-or .pl::after{content:'';position:absolute;left:26px;top:21px;border-left:16px solid #fff;border-top:11px solid transparent;border-bottom:11px solid transparent}
.s-or .ch{position:absolute;left:14px;bottom:14px;font-size:12px;background:rgba(0,0,0,.55);padding:6px 10px;border-radius:999px}
.s-or h2{font-size:40px;font-weight:800;line-height:1.18;letter-spacing:-.035em;margin:28px 20px 0}
.s-or .d{font-size:15px;color:#9b948c;margin:12px 20px 0}
.s-or .ls{margin:26px 20px 0;display:flex;flex-direction:column;gap:14px}
.s-or .ls div{display:flex;gap:14px;align-items:center}
.s-or .ls i{width:64px;height:64px;border-radius:12px;background:center/cover;flex:none}
.s-or .ls p{font-size:13px;color:#9b948c}
.s-or .ls b{display:block;font-size:16px;color:#f4efe9;margin-bottom:3px}
.s-or .octa{position:absolute;left:16px;right:16px;bottom:30px;height:56px;border-radius:14px;background:#ff5a36;color:#140805;font-weight:700;font-size:16px;display:flex;align-items:center;justify-content:center}

.s-od{width:1280px;height:800px;background:#0d0c0b;color:#f4efe9;font-family:Pretendard,sans-serif}
.s-od .lg{font-weight:800;font-size:21px}.s-od .lg i{width:10px;height:10px;border-radius:50%;background:#ff5a36}
.s-od nav{color:#9b948c}.s-od .bt{background:#ff5a36;color:#140805;border-radius:999px;padding:11px 20px;font-size:14px}
.s-od h2{position:absolute;left:56px;top:130px;font-size:96px;line-height:1.04;font-weight:800;letter-spacing:-.05em}
.s-od .hv{position:absolute;left:520px;right:56px;top:120px;height:420px;border-radius:20px;background:center/cover}
.s-od .pl{position:absolute;left:50%;top:50%;width:84px;height:84px;margin:-42px 0 0 -42px;border-radius:50%;background:rgba(255,255,255,.22);box-shadow:inset 0 0 0 1px rgba(255,255,255,.45)}
.s-od .pl::after{content:'';position:absolute;left:34px;top:27px;border-left:22px solid #fff;border-top:15px solid transparent;border-bottom:15px solid transparent}
.s-od .ch{position:absolute;left:18px;bottom:18px;font-size:13px;background:rgba(0,0,0,.55);padding:7px 12px;border-radius:999px}
.s-od .gr{position:absolute;left:520px;right:56px;top:568px;display:grid;grid-template-columns:1fr 1fr;gap:20px}
.s-od .gr div{display:grid;grid-template-columns:120px 1fr;column-gap:16px;align-content:center}
.s-od .gr i{grid-row:span 2;height:120px;border-radius:12px;background:center/cover}
.s-od .gr b{font-size:18px;align-self:end}.s-od .gr span{font-size:14px;color:#9b948c}
.s-od .d{position:absolute;left:56px;bottom:72px;font-size:16px;color:#9b948c}
.s-hr{width:1280px;height:800px;background:#fff;color:#14302b;font-family:Pretendard,sans-serif}
.s-hr .lg i{width:20px;height:20px;border-radius:6px 6px 10px 10px;background:#2fb39a}
.s-hr nav{color:#5f7670}.s-hr .bt{background:#2fb39a;color:#fff;border-radius:10px;padding:11px 20px;font-size:14px}
.s-hr .hc{position:absolute;left:64px;top:170px;width:520px}
.s-hr .k{font-size:14px;color:#2fb39a;font-weight:600;margin-bottom:18px}
.s-hr h2{font-size:54px;line-height:1.25;font-weight:700;letter-spacing:-.03em}
.s-hr .d{font-size:17px;color:#5f7670;margin-top:20px}.s-hr .row{margin-top:32px}
.s-hr .pri{background:#14302b;color:#fff;border-radius:10px;padding:15px 24px;font-size:15px}
.s-hr .sec{background:#eef6f4;border-radius:10px;padding:15px 24px;font-size:15px}
.s-hr .im{position:absolute;right:0;top:84px;width:560px;height:520px;border-radius:0 0 0 160px;background:center/cover}
.s-hr .tm{position:absolute;right:420px;top:470px;width:250px;background:#fff;border-radius:16px;padding:18px 20px;box-shadow:0 20px 50px rgba(20,48,43,.14);display:flex;flex-direction:column;gap:9px;font-size:14px;color:#5f7670}
.s-hr .tm b{display:inline-block;width:64px;color:#14302b}
.s-hr .sv{position:absolute;left:64px;right:64px;bottom:48px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.s-hr .sv span{background:#f3f8f7;border-radius:14px;padding:22px;font-size:17px;font-weight:600}
.s-jy{width:1280px;height:800px;background:#121417;color:#f1ede4;font-family:'Noto Serif KR',serif}
.s-jy .lg{font-size:22px;font-weight:600;letter-spacing:.02em}
.s-jy nav{color:#a8a397;font-family:Pretendard,sans-serif}
.s-jy .bt{border:1px solid #b89b62;color:#d9bd84;padding:10px 20px;font-size:14px;font-family:Pretendard,sans-serif}
.s-jy .im{position:absolute;inset:0;background:center/cover;opacity:.32;filter:grayscale(1)}
.s-jy .im::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#121417 30%,transparent)}
.s-jy .hc{position:absolute;left:72px;top:210px}
.s-jy .k{font-family:Pretendard,sans-serif;font-size:14px;color:#d9bd84;letter-spacing:.06em;margin-bottom:22px}
.s-jy h2{font-size:58px;line-height:1.3;font-weight:500}
.s-jy .row{margin-top:40px;gap:28px;font-family:Pretendard,sans-serif}
.s-jy .pri{background:#d9bd84;color:#121417;padding:16px 26px;font-size:15px}
.s-jy .lk{font-size:15px;color:#f1ede4}
.s-jy .ar{position:absolute;left:72px;right:72px;bottom:52px;display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,.14)}
.s-jy .ar div{padding:24px 0 0;font-size:20px}.s-jy .ar em{font-style:normal;font-family:Pretendard,sans-serif;font-size:13px;color:#d9bd84;margin-right:14px}
.s-sb{width:1280px;height:800px;background:#fffaf0;color:#222;font-family:Pretendard,sans-serif}
.s-sb .lg i{width:18px;height:18px;border-radius:50% 50% 50% 0;background:#ff8a3d}
.s-sb nav{color:#666}.s-sb .bt{background:#222;color:#fff;border-radius:999px;padding:11px 20px;font-size:14px}
.s-sb .hc{position:absolute;left:64px;top:150px;width:540px}
.s-sb .tag{display:inline-block;background:#ff8a3d;color:#fff;border-radius:999px;padding:7px 14px;font-size:13px;font-weight:700}
.s-sb h2{font-size:60px;line-height:1.2;font-weight:800;letter-spacing:-.04em;margin-top:22px}
.s-sb .d{font-size:18px;color:#666;margin-top:18px}.s-sb .row{margin-top:30px}
.s-sb .pri{background:#ff8a3d;color:#fff;border-radius:999px;padding:16px 26px;font-size:15px}
.s-sb .sec{border:1.5px solid #222;border-radius:999px;padding:15px 26px;font-size:15px}
.s-sb .im{position:absolute;right:64px;top:110px;width:520px;height:380px;border-radius:28px;background:center/cover}
.s-sb .cd{position:absolute;left:24px;bottom:24px;background:#fff;border-radius:16px;padding:14px 18px}
.s-sb .cd small{display:block;font-size:12px;color:#888;margin-bottom:4px}.s-sb .cd b{font-size:16px}
.s-sb .cs{position:absolute;left:64px;right:64px;bottom:52px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.s-sb .cs div{border-radius:20px;padding:24px;display:flex;flex-direction:column;gap:6px}
.s-sb .cs b{font-size:20px}.s-sb .cs span{font-size:14px;color:#555}

.anim .content>.inner>*{opacity:0;transform:translateY(18px);animation:up 1s cubic-bezier(.2,.7,.2,1) forwards}
.anim .eyebrow{animation-delay:.1s!important}.anim h1{animation-delay:.22s!important}.anim .desc{animation-delay:.4s!important}.anim .actions{animation-delay:.52s!important}
@keyframes up{to{opacity:1;transform:none}}

@media (max-width:860px){
  .nav{height:56px;top:12px;width:calc(100% - 24px);padding:0 6px 0 18px}
  .links{display:none}
  .burger{display:flex}
  .panel{display:block;top:76px;width:calc(100% - 24px)}
  .cta{height:42px;padding:0 16px;font-size:14px}
  .hero{display:flex;flex-direction:column;align-items:stretch;min-height:auto}
  .content{order:1;padding:120px 20px 0}
  .inner{max-width:none}
  .eyebrow{font-size:14px;margin-bottom:18px}
  h1{font-size:clamp(32px,9.2vw,52px)}
  .desc{margin-top:20px;font-size:16px}
  .actions{margin-top:30px}
  .btn{height:54px;flex:1 1 0;min-width:0;padding:0 14px;font-size:15px;gap:6px}
  .desc span{display:inline}
  .stage{order:2;position:relative;left:auto;right:auto;top:auto;bottom:auto;height:min(92vw,520px);margin-top:36px}
  .stack{--cw:74vw}
  .card,.ghost{left:50%;top:46%;border-radius:10px}
  .fade.t{height:30px}.fade.b{height:90px}.fade.l,.fade.r{width:20px}
  .meta{left:20px;right:20px;bottom:10px;justify-content:space-between;gap:10px}
  .meta .now{min-width:0;justify-content:flex-start}
  .meta .now em,.meta .idx{display:none}
  .meta .mk{border:0;padding:0;font-size:12px}
  .steps{display:none}
  .steps li{gap:10px}
  .steps li+li::before{width:16px}
}
@media (max-width:380px){.logo{font-size:13px}.cta{padding:0 13px}}
.still .rot span{transition:opacity .6s ease;transform:none}
.still.s-od{width:1280px;height:800px;background:#0d0c0b;color:#f4efe9;font-family:Pretendard,sans-serif}
.s-od .lg{font-weight:800;font-size:21px}.s-od .lg i{width:10px;height:10px;border-radius:50%;background:#ff5a36}
.s-od nav{color:#9b948c}.s-od .bt{background:#ff5a36;color:#140805;border-radius:999px;padding:11px 20px;font-size:14px}
.s-od h2{position:absolute;left:56px;top:130px;font-size:96px;line-height:1.04;font-weight:800;letter-spacing:-.05em}
.s-od .hv{position:absolute;left:520px;right:56px;top:120px;height:420px;border-radius:20px;background:center/cover}
.s-od .pl{position:absolute;left:50%;top:50%;width:84px;height:84px;margin:-42px 0 0 -42px;border-radius:50%;background:rgba(255,255,255,.22);box-shadow:inset 0 0 0 1px rgba(255,255,255,.45)}
.s-od .pl::after{content:'';position:absolute;left:34px;top:27px;border-left:22px solid #fff;border-top:15px solid transparent;border-bottom:15px solid transparent}
.s-od .ch{position:absolute;left:18px;bottom:18px;font-size:13px;background:rgba(0,0,0,.55);padding:7px 12px;border-radius:999px}
.s-od .gr{position:absolute;left:520px;right:56px;top:568px;display:grid;grid-template-columns:1fr 1fr;gap:20px}
.s-od .gr div{display:grid;grid-template-columns:120px 1fr;column-gap:16px;align-content:center}
.s-od .gr i{grid-row:span 2;height:120px;border-radius:12px;background:center/cover}
.s-od .gr b{font-size:18px;align-self:end}.s-od .gr span{font-size:14px;color:#9b948c}
.s-od .d{position:absolute;left:56px;bottom:72px;font-size:16px;color:#9b948c}
.s-hr{width:1280px;height:800px;background:#fff;color:#14302b;font-family:Pretendard,sans-serif}
.s-hr .lg i{width:20px;height:20px;border-radius:6px 6px 10px 10px;background:#2fb39a}
.s-hr nav{color:#5f7670}.s-hr .bt{background:#2fb39a;color:#fff;border-radius:10px;padding:11px 20px;font-size:14px}
.s-hr .hc{position:absolute;left:64px;top:170px;width:520px}
.s-hr .k{font-size:14px;color:#2fb39a;font-weight:600;margin-bottom:18px}
.s-hr h2{font-size:54px;line-height:1.25;font-weight:700;letter-spacing:-.03em}
.s-hr .d{font-size:17px;color:#5f7670;margin-top:20px}.s-hr .row{margin-top:32px}
.s-hr .pri{background:#14302b;color:#fff;border-radius:10px;padding:15px 24px;font-size:15px}
.s-hr .sec{background:#eef6f4;border-radius:10px;padding:15px 24px;font-size:15px}
.s-hr .im{position:absolute;right:0;top:84px;width:560px;height:520px;border-radius:0 0 0 160px;background:center/cover}
.s-hr .tm{position:absolute;right:420px;top:470px;width:250px;background:#fff;border-radius:16px;padding:18px 20px;box-shadow:0 20px 50px rgba(20,48,43,.14);display:flex;flex-direction:column;gap:9px;font-size:14px;color:#5f7670}
.s-hr .tm b{display:inline-block;width:64px;color:#14302b}
.s-hr .sv{position:absolute;left:64px;right:64px;bottom:48px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.s-hr .sv span{background:#f3f8f7;border-radius:14px;padding:22px;font-size:17px;font-weight:600}
.s-jy{width:1280px;height:800px;background:#121417;color:#f1ede4;font-family:'Noto Serif KR',serif}
.s-jy .lg{font-size:22px;font-weight:600;letter-spacing:.02em}
.s-jy nav{color:#a8a397;font-family:Pretendard,sans-serif}
.s-jy .bt{border:1px solid #b89b62;color:#d9bd84;padding:10px 20px;font-size:14px;font-family:Pretendard,sans-serif}
.s-jy .im{position:absolute;inset:0;background:center/cover;opacity:.32;filter:grayscale(1)}
.s-jy .im::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#121417 30%,transparent)}
.s-jy .hc{position:absolute;left:72px;top:210px}
.s-jy .k{font-family:Pretendard,sans-serif;font-size:14px;color:#d9bd84;letter-spacing:.06em;margin-bottom:22px}
.s-jy h2{font-size:58px;line-height:1.3;font-weight:500}
.s-jy .row{margin-top:40px;gap:28px;font-family:Pretendard,sans-serif}
.s-jy .pri{background:#d9bd84;color:#121417;padding:16px 26px;font-size:15px}
.s-jy .lk{font-size:15px;color:#f1ede4}
.s-jy .ar{position:absolute;left:72px;right:72px;bottom:52px;display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(255,255,255,.14)}
.s-jy .ar div{padding:24px 0 0;font-size:20px}.s-jy .ar em{font-style:normal;font-family:Pretendard,sans-serif;font-size:13px;color:#d9bd84;margin-right:14px}
.s-sb{width:1280px;height:800px;background:#fffaf0;color:#222;font-family:Pretendard,sans-serif}
.s-sb .lg i{width:18px;height:18px;border-radius:50% 50% 50% 0;background:#ff8a3d}
.s-sb nav{color:#666}.s-sb .bt{background:#222;color:#fff;border-radius:999px;padding:11px 20px;font-size:14px}
.s-sb .hc{position:absolute;left:64px;top:150px;width:540px}
.s-sb .tag{display:inline-block;background:#ff8a3d;color:#fff;border-radius:999px;padding:7px 14px;font-size:13px;font-weight:700}
.s-sb h2{font-size:60px;line-height:1.2;font-weight:800;letter-spacing:-.04em;margin-top:22px}
.s-sb .d{font-size:18px;color:#666;margin-top:18px}.s-sb .row{margin-top:30px}
.s-sb .pri{background:#ff8a3d;color:#fff;border-radius:999px;padding:16px 26px;font-size:15px}
.s-sb .sec{border:1.5px solid #222;border-radius:999px;padding:15px 26px;font-size:15px}
.s-sb .im{position:absolute;right:64px;top:110px;width:520px;height:380px;border-radius:28px;background:center/cover}
.s-sb .cd{position:absolute;left:24px;bottom:24px;background:#fff;border-radius:16px;padding:14px 18px}
.s-sb .cd small{display:block;font-size:12px;color:#888;margin-bottom:4px}.s-sb .cd b{font-size:16px}
.s-sb .cs{position:absolute;left:64px;right:64px;bottom:52px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.s-sb .cs div{border-radius:20px;padding:24px;display:flex;flex-direction:column;gap:6px}
.s-sb .cs b{font-size:20px}.s-sb .cs span{font-size:14px;color:#555}

.anim .content>.inner>*{animation:none;opacity:1;transform:none}
`;

  const arrow = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  class BWHeroV2 extends HTMLElement {
    static get observedAttributes() { return ['speed', 'still', 'captions']; }

    connectedCallback() {
      if (this._init) return;
      this._init = true;
      const cfg = this.cfg = merge(BW_CONFIG, window.BW_HERO_CONFIG);
      [].concat(cfg.fontCss || []).forEach((href) => {
        if (document.querySelector(`link[href="${href}"]`)) return;
        const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href; document.head.appendChild(l);
      });
      const I = {};
      for (const k in cfg.images) I[k] = /^(https?:|\/|data:)/.test(cfg.images[k]) ? cfg.images[k] : new URL(cfg.assetBase + cfg.images[k], (window.BW_ASSET_BASE || BW_SELF_BASE)).href;
      this.mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.mob = window.matchMedia('(max-width: 860px)');
      const root = this.attachShadow({ mode: 'open' });
      const logoUrl = cfg.logoSrc && !/^(https?:|\/|data:)/.test(cfg.logoSrc) ? new URL(cfg.logoSrc, window.BW_ASSET_BASE || BW_SELF_BASE).href : cfg.logoSrc;
      const logo = cfg.logoSrc ? `<img src="${esc(logoUrl)}" alt="${esc(cfg.logoText)}" onerror="this.replaceWith(this.alt)">` : esc(cfg.logoText);
      const links = cfg.menu.map((m) => `<li><a href="${esc(m.href)}">${esc(m.label)}</a></li>`).join('');
      root.innerHTML = `<style>${css(cfg.colors, I)}</style>
<div class="wrap anim">
  <header class="nav" part="nav">
    <a class="logo" href="#" aria-label="빌드웹스 홈">${logo}</a>
    <nav aria-label="주 메뉴"><ul class="links">${links}</ul></nav>
    <div class="right">
      <a class="cta" href="${esc(cfg.cta.href)}">${esc(cfg.cta.label)}</a>
      <button class="burger" type="button" aria-label="메뉴 열기" aria-expanded="false"><i></i><i></i></button>
    </div>
  </header>
  <div class="panel" role="menu">${cfg.menu.map((m) => `<a role="menuitem" href="${esc(m.href)}">${esc(m.label)}</a>`).join('')}</div>
  <section class="hero" aria-label="빌드웹스 소개">
    <div class="bgl" aria-hidden="true"></div>
    <div class="stage" role="img" aria-label="빌드웹스가 자체 기획한 가상 브랜드 홈페이지 시안 모음">
      <div class="stack">${cfg.gallery.cards.map((c, i) => `<div class="card" data-i="${i}"><div class="bar"><i></i><i></i><i></i><span></span></div><div class="face">${c.img ? `<img src="${esc(c.img)}" alt="${esc(c.name)} 홈페이지 시안">` : (SITES[c.site] ? SITES[c.site](I) : '')}</div><i class="shade"></i></div>`).join('')}</div>
      <i class="fade t"></i><i class="fade b"></i><i class="fade l"></i><i class="fade r"></i>
      <div class="meta"><p class="now" aria-live="polite"></p><span class="idx"></span><span class="mk">${esc(cfg.gallery.label)}</span></div>
    </div>
    <div class="content"><div class="inner">
      <p class="eyebrow"><span class="dot"></span>${esc(cfg.eyebrow)}</p>
      <h1 aria-label="${esc(cfg.titleTop + ' ' + cfg.rotating[0] + ' ' + cfg.titleBottom)}">
        <span class="ln" aria-hidden="true">${esc(cfg.titleTop)}</span>
        <span class="rot" aria-hidden="true">${cfg.rotating.map((w, i) => `<span class="${i ? '' : 'on'}">${esc(w)}</span>`).join('')}</span>
        <span class="ln" aria-hidden="true">${esc(cfg.titleBottom)}</span>
      </h1>
      <p class="desc">${[].concat(cfg.desc).map((l) => `<span>${esc(l)}</span>`).join(' ')}</p>
      <div class="actions">
        <a class="btn pri" href="${esc(cfg.primary.href)}">${esc(cfg.primary.label)}${arrow}</a>
        <a class="btn sec" href="${esc(cfg.secondary.href)}">${esc(cfg.secondary.label)}</a>
      </div>
    </div></div>
    <ol class="steps">${cfg.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
  </section>
</div>`;
      this.$ = (s) => root.querySelector(s);
      this.wrap = this.$('.wrap');
      this.applyFlags();
      this.mq.addEventListener && this.mq.addEventListener('change', () => this.applyFlags());

      const nav = this.$('.nav'), burger = this.$('.burger'), panel = this.$('.panel');
      const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
      window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
      const setOpen = (o) => { burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? '메뉴 닫기' : '메뉴 열기'); panel.classList.toggle('open', o); };
      burger.addEventListener('click', () => setOpen(burger.getAttribute('aria-expanded') !== 'true'));
      panel.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
      window.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });

      const words = [...root.querySelectorAll('.rot span')];
      let wi = 0;
      if (words.length > 1) setInterval(() => {
        if (document.hidden) return;
        const prev = words[wi]; wi = (wi + 1) % words.length; const next = words[wi];
        words.forEach((w) => { if (w !== prev && w !== next) w.className = ''; });
        prev.className = 'out'; next.className = ''; void next.offsetWidth; next.className = 'on';
      }, cfg.rotateInterval);

      this.initGallery(root);
    }

    get still() { return this.getAttribute('still') === 'true' || this.mq.matches; }
    get speed() { const v = parseFloat(this.getAttribute('speed')); return (isFinite(v) ? v : 1) * (this.cfg.gallery.speed || 1); }
    applyFlags() {
      if (!this.wrap) return;
      this.wrap.classList.toggle('still', this.still);
      this.$('.stage').classList.toggle('caps', this.getAttribute('captions') === 'always');
      this.frame && this.frame(0);
    }
    attributeChangedCallback() { if (this.cfg) this.applyFlags(); }

    initGallery(root) {
      const G = this.cfg.gallery, N = G.cards.length, stack = this.$('.stack');
      const els = [...root.querySelectorAll('.card')];
      const now = this.$('.now'), idx = this.$('.idx');
      const ghosts = [4.2, 4.9, 5.6].map((p) => { const g = document.createElement('i'); g.className = 'ghost'; g.dataset.p = -p; stack.prepend(g); return g; });
      const ro = new ResizeObserver((es) => es.forEach((e) => { const f = e.target; f.style.setProperty('--k', f.clientWidth / 1280); }));
      root.querySelectorAll('.face').forEach((f) => { const s = f.querySelector('.site'); if (s) { s.style.width = '1280px'; s.style.height = '800px'; } ro.observe(f); });

      let cur = 0, from = 0, to = 0, t0 = 0, hover = false, visible = true, last = performance.now(), acc = 0;
      const ease = (t) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const wrap = (p) => { p = ((p % N) + N) % N; return p >= N / 2 ? p - N : p; };
      const label = () => { const i = ((Math.round(to) % N) + N) % N, c = G.cards[i]; now.innerHTML = esc(c.name) + '<em>' + esc(c.type) + '</em>'; idx.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(N).padStart(2, '0'); };

      const layout = () => {
        const m = this.mob.matches, cw = els[0].offsetWidth, ch = els[0].offsetHeight;
        const vis = m ? 2 : G.visible;
        const dx = cw * (m ? 0.05 : 0.075), dy = ch * (m ? 0.12 : 0.17);
        const put = (el, p, isGhost) => {
          const a = Math.abs(p), s = 1 - a * 0.045;
          let o = a <= vis - 1 ? 1 : a <= vis ? 1 - (a - (vis - 1)) * 0.45 : Math.max(0, 0.55 - (a - vis) * 0.9);
          if (isGhost) o = m ? 0 : 1;
          el.style.transform = `translate(-50%,-50%) translate(${(p * dx).toFixed(1)}px,${(p * dy).toFixed(1)}px) scale(${s.toFixed(4)})`;
          el.style.opacity = o.toFixed(3);
          el.style.zIndex = isGhost ? 1 : 100 - Math.round(a * 10);
          el.style.visibility = o < 0.01 ? 'hidden' : 'visible';
          const sh = el.querySelector('.shade'); if (sh) sh.style.opacity = Math.min(0.78, a * 0.2).toFixed(3);
        };
        els.forEach((el, i) => put(el, wrap(i - cur), false));
        ghosts.forEach((g) => put(g, +g.dataset.p, true));
      };
      this.frame = () => layout();
      this.mob.addEventListener && this.mob.addEventListener('change', layout);
      new ResizeObserver(layout).observe(stack);
      new IntersectionObserver((es) => { visible = es[0].isIntersecting; }).observe(this.$('.stage'));
      stack.addEventListener('pointerenter', () => { hover = true; });
      stack.addEventListener('pointerleave', () => { hover = false; });
      label(); layout();

      const tick = (nowT) => {
        requestAnimationFrame(tick);
        const dt = nowT - last; last = nowT;
        if (!visible || document.hidden || this.getAttribute('still') === 'true') return;
        if (cur !== to) {
          const t = Math.min(1, (nowT - t0) / G.duration);
          cur = from + (to - from) * ease(t);
          if (t >= 1) { cur = to = ((to % N) + N) % N; from = cur; }
          layout();
        } else if (!hover) {
          acc += dt * (this.speed || 1);
          if (acc >= G.interval) { acc = 0; from = cur; to = cur + 1; t0 = nowT; label(); }
        }
      };
      requestAnimationFrame(tick);
    }
  }
    customElements.define('bw-hero-v2', BWHeroV2);
})();
