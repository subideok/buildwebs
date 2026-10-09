/* 빌드웹스 세 번째 섹션 — 포트폴리오 <bw-portfolio></bw-portfolio>
   Shadow DOM 안에서만 동작합니다. 아래 CFG(또는 window.BW_PORTFOLIO_CONFIG)에서 수정합니다.
   실제 작업으로 바꿀 때: items의 site 대신 img: '캡처 이미지 주소'(가로 1280 기준)와 url: '홈페이지 주소'를 넣으세요. */
(function () {
  const BW_SELF_BASE = (document.currentScript && document.currentScript.src) ? new URL('./', document.currentScript.src).href : document.baseURI;
  if (customElements.get('bw-portfolio')) return;

  const CFG = {
    id: 'portfolio',
    kicker: '포트폴리오',
    title: '업종에 맞게,\n홈페이지를 설계합니다.',
    desc: '강점은 한눈에 보이게.\n궁금한 점은 쉽게 풀리게.\n문의까지 자연스럽게 이어지게.',
    label: '업종별 설계안',
    speed: 26,              // PC 줄 이동 속도(px/초)
    mobileSpeed: 34,        // 모바일·태블릿 흐르는 속도(px/초)
    gap: 24,                // 카드 간격(px)
    visibleCards: 3.4,      // PC 한 줄에 보이는 카드 수(양옆 일부 포함)
    assetBase: 'assets/',
    images: {
      ongyeolHero: 'p1081.jpg', ongyeolThumb: 'p1076.jpg',
      damonHero: 'p1051.jpg', damonRoom: 'p1008.jpg',
      bareunHero: 'p192.jpg',
      orbitHero: 'p1079.jpg', orbitA: 'p1033.jpg', orbitB: 'p91.jpg',
      haramHero: 'p1031.jpg', lawHero: 'p180.jpg', saebomHero: 'p196.jpg',
      moaHero: 'p1068.jpg', nuriHero: 'p1067.jpg'
    },
    // row: 1 = 윗줄, 2 = 아랫줄 / h: 카드 높이 비율(1 = 화면 전체) / url: 클릭 시 이동할 홈페이지 주소
    items: [
      { site: 'ongyeol', name: '온결 건축', type: '건축 · 인테리어', intent: '시공 사진을 크게, 문구는 짧게. 공간이 실력을 말하도록 구성했습니다.', url: '#', row: 1, h: 1 },
      { site: 'lumion', name: '루미온 테크', type: '기술 기업', intent: '기능 나열 대신 한 화면에서 판단한다는 결과를 먼저 보여줍니다.', url: '#', row: 2, h: 0.9 },
      { site: 'haram', name: '하람 치과', type: '병원 · 의료', intent: '진료 시간과 예약 버튼을 첫 화면에 두어 망설임을 줄였습니다.', url: '#', row: 1, h: 0.88 },
      { site: 'damon', name: '담온 스테이', type: '프리미엄 숙소', intent: '첫 화면에서 바로 날짜를 고르도록 예약 입력을 올렸습니다.', url: '#', row: 2, h: 1 },
      { site: 'jeongyeon', name: '정연 법률사무소', type: '법률 · 전문직', intent: '업무 분야 세 가지를 첫 화면에서 바로 고르게 했습니다.', url: '#', row: 1, h: 0.94 },
      { site: 'moa', name: '모아 필라테스', type: '운동 · 웰니스', intent: '수업 방식 소개와 체험 신청을 한 흐름으로 묶었습니다.', url: '#', row: 2, h: 0.88 },
      { site: 'bareun', name: '바른결 컨설팅', type: '기업 컨설팅', intent: '진행 순서를 먼저 보여 무엇을 해 주는지 분명히 했습니다.', url: '#', row: 1, h: 1 },
      { site: 'saebom', name: '새봄 아카데미', type: '교육 · 학원', intent: '설명회 일정과 레벨 테스트 신청이 가장 먼저 보이게 했습니다.', url: '#', row: 2, h: 0.94 },
      { site: 'orbitd', name: '오르빛 스튜디오', type: '브랜드 · 영상 제작', intent: '작업 영상을 가장 크게, 문의 버튼은 한 곳에만 두었습니다.', url: '#', row: 1, h: 0.9 },
      { site: 'nuri', name: '누리 물류', type: '물류 · 제조', intent: '도착 시간 조회를 첫 화면에 두어 견적 문의로 바로 잇습니다.', url: '#', row: 2, h: 1 }
    ],
    colors: { bg: '#050507', text: '#F4F5F7', gray: '#9AA0AA', dim: '#3A3D45', accent: '#3560FF', accentText: '#6F8DFF' }
  };

  function merge(a, b) {
    if (!b) return a;
    const o = Array.isArray(a) ? a.slice() : Object.assign({}, a);
    for (const k in b) o[k] = (b[k] && typeof b[k] === 'object' && !Array.isArray(b[k]) && a[k]) ? merge(a[k], b[k]) : b[k];
    return o;
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[m]));
  const br = (s) => esc(s).replace(/\n/g, '<br>');

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


  SITES.moa = (I) => `<div class="site s-mo">
  <header><div class="lg"><i></i>모아 필라테스</div><nav><span>수업 안내</span><span>강사 소개</span><span>시간표</span><span>오시는 길</span></nav><b class="bt">체험 신청</b></header>
  <div class="hc"><p class="k">1:1 · 소그룹 기구 필라테스</p><h2>몸이 기억하는<br>바른 습관</h2><p class="d">자세 평가부터 시작해,<br>내 몸에 맞는 순서로 수업합니다.</p>
    <div class="row"><b class="pri">첫 체험 수업 신청</b><b class="sec">시간표 보기</b></div>
    <div class="tm"><span>평일 07:00 – 22:00</span><span>토요일 09:00 – 15:00</span></div></div>
  <div class="im" style="background-image:url('${I.moaHero}')"><div class="cd"><small>오늘 남은 자리</small><b>오후 7시 · 2자리</b></div></div>
</div>`;
  SITES.nuri = (I) => `<div class="site s-nu">
  <div class="im" style="background-image:url('${I.nuriHero}')"></div>
  <header><div class="lg"><i></i>누리 물류</div><nav><span>서비스</span><span>배송 권역</span><span>물류 센터</span><span>고객 지원</span></nav><b class="bt">견적 문의</b></header>
  <div class="hc"><p class="k">기업 전용 화물 · 창고 대행</p><h2>내일 아침까지,<br>정확하게 도착합니다</h2><p class="d">출고 마감 오후 6시. 권역별 도착 시간을 미리 안내합니다.</p></div>
  <div class="sch"><div><small>출발지</small><b>경기 이천</b></div><div><small>도착지</small><b>부산 강서구</b></div><span>도착 시간 조회</span></div>
  <div class="zn"><div><b>수도권</b>익일 오전</div><div><b>충청 · 강원</b>익일 도착</div><div><b>영남 · 호남</b>익일 오후</div></div>
</div>`;

  const css = (c) => `
:host{display:block;position:relative;background:${c.bg};color:${c.text};font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all;--accent:${c.accent};--accent-text:${c.accentText};--gray:${c.gray};--dim:${c.dim}}
*{box-sizing:border-box}
p,h2,h3{margin:0}
button{font:inherit;color:inherit}
a{color:inherit}
button:focus-visible,a:focus-visible{outline:2px solid var(--accent-text);outline-offset:4px}
.sec{padding:clamp(56px,6vw,100px) 0 clamp(64px,7vw,120px)}
.hd{max-width:1440px;margin:0 auto;padding:0 clamp(24px,6.5vw,112px);display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);align-items:end}
.kick{grid-column:1/-1;justify-self:start;display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 22px 0 18px;border-radius:999px;border:1px solid #2a2d35;background:#0c0d11;font-size:clamp(16px,1.25vw,19px);font-weight:600;color:${c.text};margin:0 0 clamp(28px,3vw,44px);width:max-content}
.kick::before{content:'';width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 5px rgba(53,96,255,.18)}
h2{grid-column:1/8;font-size:clamp(36px,4.4vw,72px);font-weight:700;line-height:1.16;letter-spacing:-.045em}
.rt{grid-column:8/13;display:flex;flex-direction:column;gap:24px;padding-bottom:.5em}
.rt p{font-size:clamp(17px,1.4vw,22px);line-height:1.65;letter-spacing:-.02em;color:#c4c8d0;font-weight:500}
.ctl{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.tag{display:inline-flex;align-items:center;height:36px;padding:0 14px;border-radius:999px;border:1px solid #2a2d35;font-size:13px;font-weight:500;color:#c4c8d0}
.cnt{font-size:13px;color:#6f747e}

.rows{margin-top:clamp(56px,6vw,88px);display:flex;flex-direction:column;gap:clamp(28px,3vw,44px);overflow:hidden;
  -webkit-mask:linear-gradient(90deg,transparent,#000 4%,#000 96%,transparent);mask:linear-gradient(90deg,transparent,#000 4%,#000 96%,transparent)}
.lane{position:relative}
.track{display:flex;align-items:flex-start;gap:var(--gap);width:max-content;will-change:transform}
.card{flex:none;width:var(--cw);padding:0;border:0;background:none;text-align:left;cursor:pointer;display:flex;flex-direction:column;gap:14px}
.scr{position:relative;width:100%;border-radius:12px;overflow:hidden;background:#111;box-shadow:0 30px 60px -30px rgba(0,0,0,.9),0 0 0 1px rgba(255,255,255,.07);transition:box-shadow .35s,transform .35s cubic-bezier(.2,.7,.2,1)}
.scr img{display:block;width:100%;height:100%;object-fit:cover;object-position:top}
.card:hover .scr,.card:focus-visible .scr{transform:translateY(-4px);box-shadow:0 36px 70px -30px rgba(0,0,0,.95),0 0 0 1px rgba(111,141,255,.55)}
.cap{display:flex;align-items:baseline;gap:10px;padding:0 2px}
.cap b{font-size:15px;font-weight:600}
.cap span{font-size:13px;color:#7d828c}
.cap i{margin-left:auto;font-style:normal;font-size:13px;color:#5d626c;transition:color .25s}
.card:hover .cap i,.card:focus-visible .cap i{color:var(--accent-text)}
.site{position:absolute;left:0;top:0;transform-origin:0 0;transform:scale(var(--k,.3));overflow:hidden}
.mrow{display:none}

/* 크게 보기 */
.vw{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;background:rgba(5,5,7,.94);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);opacity:0;visibility:hidden;transition:opacity .4s,visibility .4s}
.vw.open{opacity:1;visibility:visible}
.vt{display:flex;align-items:center;gap:16px;height:84px;padding:0 clamp(20px,4vw,56px);flex:none}
.vt .ix{font-size:14px;font-weight:600;font-variant-numeric:tabular-nums}
.vt .ix em{font-style:normal;color:#6f747e}
.vt .tag{height:30px;font-size:12px}
.x{margin-left:auto;width:48px;height:48px;border-radius:50%;border:1px solid #2a2d35;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center}
.x:hover{border-color:#4a4e58}
.vs{position:relative;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;perspective:1800px}
.mn{position:relative;width:min(1120px,72vw,calc((100vh - 280px) * 1.6));aspect-ratio:1280/800;border-radius:14px;overflow:hidden;display:block;background:#111;box-shadow:0 50px 100px -30px rgba(0,0,0,.95),0 0 0 1px rgba(255,255,255,.08);transition:opacity .35s ease,transform .45s cubic-bezier(.2,.7,.2,1)}
.mn.sw{opacity:0;transform:translateX(calc(var(--dir,1) * 40px))}
.mn .go{position:absolute;right:16px;bottom:16px;z-index:5;display:inline-flex;align-items:center;gap:8px;height:40px;padding:0 16px;border-radius:999px;background:rgba(8,9,12,.78);color:#fff;font-size:13px;font-weight:600;text-decoration:none;opacity:0;transform:translateY(6px);transition:opacity .3s,transform .3s}
.mn:hover .go,.mn:focus-visible .go{opacity:1;transform:none}
.sd{position:absolute;top:50%;width:min(560px,34vw);aspect-ratio:1280/800;border-radius:12px;overflow:hidden;opacity:.32;cursor:pointer;background:#111;transition:opacity .3s,transform .45s cubic-bezier(.2,.7,.2,1);border:0;padding:0}
.sd:hover{opacity:.5}
.sd.l{right:calc(50% + min(560px,36vw) + 0px);transform:translate(42%,-50%) rotateY(28deg) scale(.86);transform-origin:100% 50%}
.sd.r{left:calc(50% + min(560px,36vw) + 0px);transform:translate(-42%,-50%) rotateY(-28deg) scale(.86);transform-origin:0 50%}
.vi{flex:none;width:min(1120px,72vw,calc((100vh - 280px) * 1.6));margin:0 auto;padding:24px 0 36px;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:32px}
.vi .nm b{display:block;font-size:24px;font-weight:700;letter-spacing:-.02em}
.vi .nm span{font-size:14px;color:var(--gray)}
.vi .it{font-size:16px;line-height:1.6;color:#c4c8d0;padding-left:32px;border-left:1px solid #24262c}
.vi .it small{display:block;font-size:12px;color:#6f747e;margin-bottom:4px}
.nv{display:flex;gap:8px;align-items:center}
.nb{width:52px;height:52px;border-radius:50%;border:1px solid #2a2d35;background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:border-color .2s,background .2s}
.nb:hover{border-color:#4a4e58;background:rgba(255,255,255,.04)}
.lk{display:inline-flex;align-items:center;gap:8px;height:52px;padding:0 22px;margin-left:8px;border-radius:999px;background:var(--accent);color:#fff;font-size:15px;font-weight:600;text-decoration:none;transition:background .2s}
.lk:hover{background:#4D74FF;color:#fff}

@media (max-width:860px){
  .hd{display:block;padding:0 20px}
  h2{font-size:clamp(32px,9vw,48px)}
  .rt{margin-top:24px;padding:0}
  .rows{display:none}
  .mrow{display:flex;gap:14px;margin-top:40px;padding:0 20px 8px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none}
  .mrow::-webkit-scrollbar{display:none}
  .mrow .card{width:76vw}
  .vt{height:68px}
  .sd{display:none}
  .mn,.vi{width:calc(100vw - 32px)}
  .vi{grid-template-columns:1fr;gap:18px;padding:20px 0 28px}
  .vi .it{padding:16px 0 0;border-left:0;border-top:1px solid #24262c}
  .nv{justify-content:space-between}
  .lk{margin-left:auto}
  .mn .go{opacity:1;transform:none}
}
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


.s-mo{width:1280px;height:800px;background:#f1ebe4;color:#3b2f2a;font-family:Pretendard,sans-serif}
.s-mo .lg i{width:16px;height:16px;border-radius:50%;background:#c46a4a}
.s-mo nav{color:#7d6e66}.s-mo .bt{background:#c46a4a;color:#fff;border-radius:999px;padding:11px 22px;font-size:14px}
.s-mo .hc{position:absolute;left:72px;top:176px;width:540px}
.s-mo .k{font-size:15px;font-weight:600;color:#c46a4a;margin-bottom:20px}
.s-mo h2{font-size:60px;line-height:1.22;font-weight:600;letter-spacing:-.03em}
.s-mo .d{font-size:18px;line-height:1.7;color:#7d6e66;margin-top:22px}
.s-mo .row{margin-top:34px}
.s-mo .pri{background:#3b2f2a;color:#fff;border-radius:999px;padding:16px 26px;font-size:15px}
.s-mo .sec{border:1px solid #cdbfb4;border-radius:999px;padding:15px 26px;font-size:15px}
.s-mo .tm{display:flex;gap:24px;margin-top:56px;padding-top:22px;border-top:1px solid #ddd2c8;font-size:15px;color:#7d6e66}
.s-mo .im{position:absolute;left:700px;top:110px;width:500px;height:620px;border-radius:250px 250px 24px 24px;background:center/cover}
.s-mo .cd{position:absolute;left:-48px;bottom:56px;background:#fff;border-radius:16px;padding:16px 20px;box-shadow:0 18px 40px rgba(59,47,42,.14)}
.s-mo .cd small{display:block;font-size:12px;color:#9b8b82;margin-bottom:4px}.s-mo .cd b{font-size:17px}
.s-nu{width:1280px;height:800px;background:#0e1a2b;color:#fff;font-family:Pretendard,sans-serif}
.s-nu .im{position:absolute;left:560px;top:0;right:0;bottom:0;background:center/cover}
.s-nu .im::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#0e1a2b,rgba(14,26,43,.35) 45%,rgba(14,26,43,.2))}
.s-nu .lg i{width:16px;height:16px;background:#ffc53d}
.s-nu nav{color:#a9b6c8}.s-nu .bt{background:#ffc53d;color:#0e1a2b;border-radius:6px;padding:11px 20px;font-size:14px}
.s-nu .hc{position:absolute;left:72px;top:176px;width:640px}
.s-nu .k{font-size:15px;font-weight:700;color:#ffc53d;margin-bottom:20px}
.s-nu h2{font-size:60px;line-height:1.2;font-weight:800;letter-spacing:-.035em}
.s-nu .d{font-size:18px;color:#a9b6c8;margin-top:20px}
.s-nu .sch{position:absolute;left:72px;top:520px;width:680px;height:84px;background:#fff;color:#0e1a2b;border-radius:12px;display:grid;grid-template-columns:1fr 1fr 220px;align-items:center;padding-left:8px}
.s-nu .sch div{padding:0 22px;border-right:1px solid #e3e7ee}
.s-nu .sch div:nth-child(2){border:0}
.s-nu .sch small{display:block;font-size:12px;color:#7d8899;margin-bottom:4px}.s-nu .sch b{font-size:18px}
.s-nu .sch span{margin:10px;height:64px;border-radius:9px;background:#ffc53d;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:16px}
.s-nu .zn{position:absolute;left:72px;top:650px;display:flex;gap:44px;font-size:15px;color:#a9b6c8}
.s-nu .zn b{display:block;color:#fff;font-size:17px;margin-bottom:4px}
.still .track{transform:none!important}
`;

  const ICON = {
    pause: '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><rect x="3.5" y="3" width="3" height="10" rx="1"/><rect x="9.5" y="3" width="3" height="10" rx="1"/></svg>',
    play: '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M5 3.2v9.6a.6.6 0 0 0 .9.5l7.6-4.8a.6.6 0 0 0 0-1L5.9 2.7a.6.6 0 0 0-.9.5z"/></svg>',
    prev: '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    next: '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    x: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    out: '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11l6-6M6 5h5v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  class BWPortfolio extends HTMLElement {
    static get observedAttributes() { return ['still']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = this.cfg = merge(CFG, window.BW_PORTFOLIO_CONFIG);
      if (c.id && !this.id) { this.id = c.id; this.style.scrollMarginTop = '84px'; }
      const I = {};
      for (const k in c.images) I[k] = /^(https?:|\/|data:)/.test(c.images[k]) ? c.images[k] : new URL(c.assetBase + c.images[k], (window.BW_ASSET_BASE || BW_SELF_BASE)).href;
      const N = c.items.length;
      const screen = (it) => it.img ? `<img src="${esc(it.img)}" alt="" loading="lazy">` : (SITES[it.site] ? SITES[it.site](I) : '');
      const card = (it, i, clone) => `<button class="card" type="button" data-i="${i}"${clone ? ' tabindex="-1" aria-hidden="true"' : ` aria-label="${esc(it.name)} 크게 보기"`}><span class="scr" style="aspect-ratio:1280/${Math.round(800 * (it.h || 1))}">${screen(it)}</span><span class="cap"><b>${esc(it.name)}</b><span>${esc(it.type)}</span><i>크게 보기</i></span></button>`;
      const row = (r) => {
        const list = c.items.map((it, i) => [it, i]).filter(([it]) => (it.row || 1) === r);
        const set = (clone) => list.map(([it, i]) => card(it, i, clone)).join('');
        return `<div class="lane" data-r="${r}"><div class="track">${set(false)}${set(true)}${set(true)}</div></div>`;
      };
      this.mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${css(c.colors)}</style>
<div class="wrap">
<section class="sec" aria-labelledby="bw-pf-title">
  <div class="hd">
    <p class="kick">${esc(c.kicker)}</p>
    <h2 id="bw-pf-title">${br(c.title)}</h2>
    <div class="rt"><p>${br(c.desc)}</p></div>
  </div>
  <div class="rows" style="--gap:${c.gap}px">${row(1)}${row(2)}</div>
  <div class="mrow" role="list">${c.items.map((it, i) => card(it, i, false)).join('')}${c.items.map((it, i) => card(it, i, true)).join('')}</div>
</section>
<div class="vw" role="dialog" aria-modal="true" aria-label="포트폴리오 크게 보기" aria-hidden="true">
  <div class="vt"><span class="ix"></span><span class="tag">${esc(c.label)}</span><button class="x" type="button" aria-label="닫기">${ICON.x}</button></div>
  <div class="vs"><button class="sd l" type="button" tabindex="-1" aria-hidden="true"></button><a class="mn" target="_blank" rel="noopener"></a><button class="sd r" type="button" tabindex="-1" aria-hidden="true"></button></div>
  <div class="vi"><div class="nm"><b></b><span></span></div><p class="it"></p>
    <div class="nv"><button class="nb pv" type="button" aria-label="이전 시안">${ICON.prev}</button><button class="nb nx" type="button" aria-label="다음 시안">${ICON.next}</button><a class="lk" target="_blank" rel="noopener">홈페이지 바로가기${ICON.out}</a></div></div>
</div>
</div>`;
      const $ = (q) => root.querySelector(q), $$ = (q) => [...root.querySelectorAll(q)];
      const wrap = $('.wrap'), rowsEl = $('.rows');

      // 화면 크기 맞춤
      const fit = (el) => { const s = el.querySelector('.site'); if (!s) return; s.style.width = '1280px'; s.style.height = '800px'; el.style.setProperty('--k', el.clientWidth / 1280); };
      const ro = new ResizeObserver((es) => es.forEach((e) => fit(e.target)));
      const watch = (el) => { fit(el); ro.observe(el); };
      $$('.scr').forEach(watch);

      // 카드 폭: 한 줄에 visibleCards 장
      const sizeCards = () => {
        const w = rowsEl.clientWidth || this.clientWidth;
        rowsEl.style.setProperty('--cw', Math.round((w - c.gap * 3) / c.visibleCards) + 'px');
      };
      new ResizeObserver(sizeCards).observe(this); sizeCards();

      // 흐르는 두 줄
      let paused = false;
      const rows = $$('.rows > .lane').map((el, k) => ({ el, tr: el.querySelector('.track'), dir: k ? 1 : -1, x: 0, v: 1, hold: false, set: 0 }));
      rows.forEach((r, k) => {
        const on = () => { r.hold = true; }, off = () => { r.hold = r.el.matches(':hover') || r.el.contains(root.activeElement); };
        r.el.addEventListener('pointerenter', on); r.el.addEventListener('pointerleave', () => { r.hold = r.el.contains(root.activeElement); });
        r.el.addEventListener('focusin', on); r.el.addEventListener('focusout', () => setTimeout(off, 0));
      });
      const measure = () => rows.forEach((r, k) => {
        const n = r.tr.children.length / 3, a = r.tr.children[0], b = r.tr.children[n];
        r.set = b.offsetLeft - a.offsetLeft;
        if (!r.init) { r.x = k ? -r.set * 0.5 : -r.set * 0.15; r.init = true; }
      });
      new ResizeObserver(measure).observe(rowsEl);
      paused = this.getAttribute('still') === 'true';
      this.applyStill = () => { paused = this.getAttribute('still') === 'true'; };

      // 모바일 · 태블릿: 카드가 자동으로 옆으로 넘어갑니다
      const mrow = $('.mrow'), mob = window.matchMedia('(max-width: 860px)');
      // 천천히 계속 흐르기 (손으로 밀면 4초 멈춤)
      let mHold = 0, mX = 0, mLast = performance.now();
      const holdM = () => { mHold = performance.now() + 4000; };
      ['touchstart', 'pointerdown', 'wheel'].forEach((ev) => mrow.addEventListener(ev, holdM, { passive: true }));
      mrow.addEventListener('focusin', holdM);
      const mTick = (t) => {
        requestAnimationFrame(mTick);
        const dt = Math.min((t - mLast) / 1000, 0.05); mLast = t;
        if (!mob.matches || paused || viewer.open || document.hidden) return;
        const r = mrow.getBoundingClientRect(); if (r.bottom < 0 || r.top > window.innerHeight) return;
        const n = mrow.children.length / 2, half = mrow.children[n].offsetLeft - mrow.children[0].offsetLeft;
        if (t < mHold) { mX = mrow.scrollLeft; return; }
        mX += (c.mobileSpeed || 34) * dt;
        if (mX >= half) mX -= half;
        if (mrow.scrollLeft < 2 && mX > half - 2) mX = 0;
        mrow.scrollLeft = mX;
        if (mrow.scrollLeft >= half) { mX -= half; mrow.scrollLeft = mX; }
      };
      requestAnimationFrame(mTick);



      let visible = true, last = performance.now();
      new IntersectionObserver((es) => { visible = es[0].isIntersecting; }).observe(rowsEl);
      const tick = (t) => {
        requestAnimationFrame(tick);
        const dt = Math.min((t - last) / 1000, 0.05); last = t;
        if (!visible || document.hidden || !rows[0].set) return;
        rows.forEach((r) => {
          r.v += (((paused || r.hold || viewer.open) ? 0 : 1) - r.v) * Math.min(1, dt * 4);
          r.x += r.dir * c.speed * r.v * dt;
          if (r.x <= -r.set * 2) r.x += r.set; else if (r.x > 0) r.x -= r.set;
          r.tr.style.transform = `translate3d(${r.x.toFixed(2)}px,0,0)`;
        });
      };
      requestAnimationFrame(tick);

      // 크게 보기
      const vw = $('.vw'), mn = $('.mn'), sl = $('.sd.l'), sr = $('.sd.r'), lk = $('.lk');
      const viewer = { open: false, i: 0, from: null };
      const paint = (i, dir) => {
        const it = c.items[i], p = c.items[(i - 1 + N) % N], n = c.items[(i + 1) % N];
        const fill = () => {
          mn.innerHTML = screen(it) + `<span class="go">홈페이지 바로가기${ICON.out}</span>`;
          mn.href = it.url || '#'; mn.setAttribute('aria-label', `${it.name} 홈페이지 바로가기`);
          sl.innerHTML = screen(p); sr.innerHTML = screen(n);
          [mn, sl, sr].forEach(fit);
          $('.ix').innerHTML = `${String(i + 1).padStart(2, '0')} <em>/ ${String(N).padStart(2, '0')}</em>`;
          $('.nm b').textContent = it.name; $('.nm span').textContent = it.type;
          $('.it').innerHTML = `<small>기획 의도</small>${esc(it.intent)}`;
          lk.href = it.url || '#';
        };
        if (!dir) return fill();
        mn.style.setProperty('--dir', dir); mn.classList.add('sw');
        setTimeout(() => { fill(); mn.style.setProperty('--dir', -dir); requestAnimationFrame(() => mn.classList.remove('sw')); }, 220);
      };
      const go = (d) => { viewer.i = (viewer.i + d + N) % N; paint(viewer.i, d); };
      const open = (i, from) => {
        viewer.open = true; viewer.i = i; viewer.from = from; paint(i, 0);
        vw.classList.add('open'); vw.setAttribute('aria-hidden', 'false');
        this._ov = document.documentElement.style.overflow; document.documentElement.style.overflow = 'hidden';
        setTimeout(() => $('.x').focus(), 50);
      };
      const close = () => {
        viewer.open = false; vw.classList.remove('open'); vw.setAttribute('aria-hidden', 'true');
        document.documentElement.style.overflow = this._ov || '';
        viewer.from && viewer.from.focus({ preventScroll: true });
      };
      root.addEventListener('click', (e) => { const b = e.target.closest('.card'); if (b) open(+b.dataset.i, b); });
      $('.x').addEventListener('click', close);
      $('.pv').addEventListener('click', () => go(-1)); $('.nx').addEventListener('click', () => go(1));
      sl.addEventListener('click', () => go(-1)); sr.addEventListener('click', () => go(1));
      vw.addEventListener('click', (e) => { if (e.target === vw || e.target.classList.contains('vs')) close(); });
      window.addEventListener('keydown', (e) => {
        if (!viewer.open) return;
        if (e.key === 'Escape') close();
        else if (e.key === 'ArrowLeft') go(-1);
        else if (e.key === 'ArrowRight') go(1);
        else if (e.key === 'Tab') {
          const f = [$('.x'), mn, $('.pv'), $('.nx'), lk], a = root.activeElement, k = f.indexOf(a);
          e.preventDefault(); f[(k + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
        }
      });
      // 모바일 스와이프(크게 보기 안)
      let sx = null;
      mn.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
      mn.addEventListener('touchend', (e) => { if (sx == null) return; const d = e.changedTouches[0].clientX - sx; sx = null; if (Math.abs(d) > 50) { e.preventDefault(); go(d < 0 ? 1 : -1); } });
    }
    attributeChangedCallback() { this.applyStill && this.applyStill(); }
  }
  customElements.define('bw-portfolio', BWPortfolio);
})();
