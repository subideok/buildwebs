/* 빌드웹스 두 번째 섹션 — <bw-about></bw-about>
   Shadow DOM 안에서만 동작합니다. 문구·예시는 아래 CFG(또는 window.BW_ABOUT_CONFIG)에서 수정합니다. */
(function () {
  const BW_SELF_BASE = (document.currentScript && document.currentScript.src) ? new URL('./', document.currentScript.src).href : document.baseURI;
  if (customElements.get('bw-about')) return;

  const CFG = {
    id: 'about',
    titleLines: [
      { text: '선택할 이유가 보여야,', accent: false },
      { text: '문의도 매출도 늘어납니다.', accent: true }
    ],
    side: [
      { text: '고객이 궁금한 건\n무엇을 하는 회사인지보다\n왜 이곳에 맡겨야 하는지입니다.', strong: false },
      { text: '빌드웹스는 디자인 전에,\n**고객이 선택할 이유**부터 정리합니다.', strong: true }
    ],
    kicker: '빌드웹스의 방식',
    extrasKicker: '포함 사항',
    extrasTitle: '제작에는\n이것까지 포함됩니다',
    extrasDesc: '디자인만 넘기고 끝나지 않습니다.\n검색, 상담 연결, 운영까지 오픈 전에 모두 갖춥니다.',
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
    extrasCta: { label: '무료 견적 받기', href: '#contact' },
    exampleLabel: '예시 · 세무사무소 사례',
    images: { photoA: 'assets/p1076.jpg', photoB: 'assets/p1031.jpg' },
    steps: [
      { no: '01', name: '사업 이해', title: '고객이 우리를 고를\n이유부터 찾습니다', desc: '질문지와 인터뷰로 고객, 고민, 경쟁사를 정리합니다. 그중 고객이 가장 반응할 강점 하나를 고릅니다.', result: '핵심 고객과 강점 정리' },
      { no: '02', name: '문구 설계', title: '모호한 소개 대신\n고객의 질문에 답합니다', desc: '찾은 강점을 제목과 설명으로 바꿉니다. 문장마다 놓일 자리까지 페이지 구성으로 정합니다.', result: '페이지 구성과 주요 문구' },
      { no: '03', name: '문의 동선', title: '이해한 순간,\n망설임 없이 문의하도록', desc: '서비스를 확인한 방문자가 누를 버튼을 하나로 정리합니다. 입력 항목은 꼭 필요한 것만 남깁니다.', result: '서비스에서 문의까지의 흐름' },
      { no: '04', name: '직접 관리', title: '오픈 후에도\n끝까지 함께 관리합니다', desc: '간단한 수정은 비용 없이 바로 처리해 드립니다. 사진, 가격, 팝업처럼 자주 바뀌는 것은 직접 고칠 수 있게 안내합니다.', result: '무상 수정 지원과 운영 가이드' }
    ],
    // 장면별 동작 시점(ms). 숫자를 바꾸면 속도가 달라집니다.
    timeline: [
      [300, 650, 1000, 1500, 1850, 2200, 2550, 3200],
      [400, 1100, 1600, 2200, 2900, 3400],
      [500, 1200, 2400, 3000, 3400, 4000, 4500, 4900, 5400, 5700, 6200, 6500, 7000, 7400],
      [600, 1100, 1900, 2400, 3300, 3700, 4500, 4900]
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
  const PTR = '<svg class="ptr" width="34" height="34" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 2l15 9-6.5 1.6L9.6 19z" fill="#111" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/></svg>';

  /* ---------- 예시 홈페이지 첫 화면 (1280×800) ---------- */
  const hero = (I, opt) => `<div class="sh">
  ${opt.header ? `<div class="hd"><b class="lg"><i></i>한결 세무회계</b><nav><span>사무소 소개</span><span>업무 분야</span><span>기장료 안내</span><span>오시는 길</span></nav><span class="hb">무료 절세 진단</span></div>` : ''}
  <div class="tx"><p class="k">개인사업자 · 법인 전환 전문</p><h4>법인 전환,<br>언제 해야 이득인지부터</h4><p class="d">상담 당일, 예상 세금을 숫자로 비교해 드립니다.</p>
    <div class="bt"><b class="p">무료 절세 진단 받기</b><b class="s">업무 분야 보기</b></div>
    <div class="fq"><small>자주 묻는 질문</small><span>상담 비용이 있나요?</span><span>세무사를 옮길 수 있나요?</span><span>기장만 맡겨도 되나요?</span></div></div>
  <div class="ph"><i class="pa" style="background-image:url('${I.photoA}')"></i><i class="pb" style="background-image:url('${I.photoB}')"></i></div>
  <div class="pr"><small>기장료</small><b>월 <span class="sw"><em class="va">12</em><em class="vb">10</em></span>만 원부터</b><span>매출 구간별 안내 →</span></div>
  ${opt.popup ? `<div class="pop"><small>공지</small><b>5월 종합소득세<br>신고 접수 중</b><span>신고 대행 문의 →</span></div>` : ''}
</div>`;

  /* ---------- 장면 4개 ---------- */
  const scenes = (I) => [
`<div class="cv dk s1">
  <div class="tb"><b>기획 노트</b><span>한결 세무회계 · 질문지 답변 정리</span><em class="ex">기획 과정 예시</em></div>
  <div class="c1"><p class="lb">대표님 답변</p>
    <p class="q q1">“상담 오시면 <mark>그 자리에서 세금 계산</mark>을 해 드려요.”</p>
    <p class="q q2">“요즘은 법인 전환 문의가 제일 많습니다.”</p>
    <p class="q q3">“다른 사무소 홈페이지도 다 비슷한 소개만 하더라고요.”</p></div>
  <div class="c2"><p class="lb">정리</p>
    <div class="rw r1"><span>주요 고객</span><b>매출이 늘어 법인 전환을 고민하는 개인사업자</b></div>
    <div class="rw r2"><span>고객의 고민</span><b>언제 바꿔야 세금이 줄어드는지 모른다</b></div>
    <div class="rw r3"><span>회사의 강점</span><b>상담 당일, 예상 세금을 숫자로 비교</b><em>핵심 강점</em></div>
    <div class="rw r4"><span>경쟁사와의 차이</span><b>경쟁사는 ‘신뢰’만 말하고 근거가 없다</b></div></div>
</div>`,
`<div class="cv dk s2">
  <div class="tb"><b>문구 설계</b><span>첫 화면 제목 · 페이지 구성 초안</span><em class="ex">기획 과정 예시</em></div>
  <div class="c1">
    <p class="lb">수정 전</p><p class="old"><span>고객 만족을 최우선으로 하는<br>신뢰의 세무 파트너</span></p>
    <p class="lb nl">수정 후</p><p class="nw">법인 전환,<br>언제 해야 이득인지부터</p>
    <p class="ns">상담 당일, 예상 세금을 숫자로 비교해 드립니다.</p>
    <p class="why"><b>달라진 점</b>막연한 약속 → 고객이 실제로 묻는 질문과 근거</p></div>
  <div class="c2"><p class="lb">페이지 구성 초안</p>
    <div class="bk k1"><span>01 첫 화면</span><b class="ph0">제목 · 설명 · 상담 버튼</b><b class="ph1">법인 전환, 언제 해야 이득인지부터</b></div>
    <div class="bk k2"><span>02 법인 전환 비교</span><b>개인과 법인, 예상 세금 비교표</b></div>
    <div class="bk k3"><span>03 자주 묻는 질문</span><b>상담 비용 · 세무사 변경 · 기장만 맡기기</b></div>
    <div class="bk k4"><span>04 기장료 안내</span><b>매출 구간별 월 기장료</b></div>
    <div class="bk k5"><span>05 상담 신청</span><b>무료 절세 진단 신청</b></div></div>
</div>`,
`<div class="cv s3">
  <div class="pg">
    ${hero(I, { header: false })}
    <div class="sv"><h5>업무 분야</h5><p class="sd">사업 단계에 맞춰 필요한 일만 제안합니다.</p>
      <div class="cd cd1"><em>01</em><b>법인 전환 컨설팅</b><span>전환 시점과 예상 세금을 비교해 드립니다.</span><i>자세히 보기 →</i></div>
      <div class="cd cd2"><em>02</em><b>기장 · 신고 대행</b><span>매달 장부와 신고 일정을 대신 챙깁니다.</span><i>자세히 보기 →</i></div>
      <div class="cd cd3"><em>03</em><b>세무 조사 대응</b><span>자료 준비부터 소명까지 함께합니다.</span><i>자세히 보기 →</i></div>
      <div class="band"><b>우리 사업엔 어떤 방법이 맞을까요?</b><span>상담 당일 예상 세금을 비교해 드립니다.</span><i class="go">무료 절세 진단 받기</i></div></div>
    <div class="fm"><div class="fl"><small>상담 신청</small><h5>무료 절세 진단 신청</h5><p>영업일 기준 하루 안에 연락드립니다.</p></div>
      <div class="pn">
        <span class="l" style="top:36px">성함</span><span class="in i1" style="top:64px"><em class="pl">이름을 입력하세요</em><em class="v">김민수</em></span>
        <span class="l" style="top:140px">연락처</span><span class="in i2" style="top:168px"><em class="pl">010-0000-0000</em><em class="v">010-2481-5730</em></span>
        <span class="l" style="top:244px">상담 분야</span><span class="chs" style="top:272px"><i class="c1">법인 전환</i><i>기장 · 신고</i><i>세무 조사</i><i>기타</i></span>
        <span class="ag" style="top:352px"><i></i>개인정보 수집 · 이용에 동의합니다</span>
        <span class="sb" style="top:400px"><em class="x">신청하기</em><em class="y">접수 완료</em></span>
        <span class="nt" style="top:480px">시연 화면 · 실제로 전송되지 않습니다</span></div></div>
  </div>
  <div class="hd fx"><b class="lg"><i></i>한결 세무회계</b><nav><span>사무소 소개</span><span class="nv">업무 분야</span><span>기장료 안내</span><span>오시는 길</span></nav><span class="hb">무료 절세 진단</span></div>
  <div class="toast"><b>상담 신청이 접수되었습니다</b><span>시연 화면</span></div>
  ${PTR}
</div>`,
`<div class="cv dk s4">
  <div class="ed">
    <div class="eh"><b>관리 화면</b><em>관리 방법 개념 시연</em></div>
    <span class="el" style="top:100px">대표 사진</span>
    <span class="th ta" style="top:132px;left:28px;background-image:url('${I.photoA}')"></span>
    <span class="th tb2" style="top:132px;left:204px;background-image:url('${I.photoB}')"></span>
    <span class="el" style="top:268px">기장료</span>
    <span class="ei" style="top:300px">월 <span class="sw"><em class="va">12</em><em class="vb">10</em></span>만 원부터</span>
    <span class="el" style="top:392px">팝업</span>
    <span class="tg" style="top:424px"><i></i></span><span class="tt" style="top:426px">5월 종합소득세 신고 접수 중</span>
    <span class="es" style="top:636px"><em class="x">저장하기</em><em class="y">저장 완료</em></span>
  </div>
  <p class="pvl">홈페이지 화면</p>
  <div class="pv"><div class="pvi">${hero(I, { header: true, popup: true })}</div></div>
  <ul class="lg4"><li class="g1">대표 사진 교체</li><li class="g2">기장료 월 12만 → 10만 원</li><li class="g3">팝업 게시</li><li class="g4">저장 즉시 홈페이지에 반영</li></ul>
  ${PTR}
</div>`
  ];

  const css = (c) => `
:host{display:block;position:relative;background:${c.bg};color:${c.text};font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all;
  --accent:${c.accent};--accent-text:${c.accentText};--gray:${c.gray};--dim:${c.dim}}
*{box-sizing:border-box}
p,h2,h3,h4,h5,ul,ol{margin:0;padding:0}
ul,ol{list-style:none}
.sec{max-width:1440px;margin:0 auto;padding:clamp(120px,14vw,220px) clamp(24px,6.5vw,112px) clamp(80px,10vw,160px)}

/* 큰 문장 */
.intro{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px)}
.kick{grid-column:1/-1;justify-self:start;display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 22px 0 18px;border-radius:999px;border:1px solid #2a2d35;background:#0c0d11;font-size:clamp(16px,1.25vw,19px);font-weight:600;color:${c.text};margin:0 0 clamp(28px,3vw,44px);width:max-content}
.kick::before{content:'';width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 5px rgba(53,96,255,.18)}
.big{grid-column:1/-1;font-size:clamp(40px,6.4vw,108px);font-weight:700;line-height:1.12;letter-spacing:-.05em}
.big .ln{display:block}
.big .ln+.ln{padding-left:clamp(0px,8vw,150px)}
.big .ch{color:var(--dim);transition:color .5s ease}
.big .ch.on{color:${c.text}}
.big .ac .ch.on{color:var(--accent-text)}
.rule{grid-column:1/-1;display:block;height:1px;margin-top:clamp(56px,6vw,96px);background:#24262c;transform-origin:0 50%;transform:scaleX(0);transition:transform 1.4s cubic-bezier(.2,.7,.2,1)}
.side{display:contents}
.side p{grid-row:4;padding-top:clamp(36px,3.4vw,56px);font-size:clamp(19px,1.75vw,28px);line-height:1.6;letter-spacing:-.02em;color:#7d828c;opacity:0;transform:translateY(14px);transition:opacity .9s ease,transform .9s cubic-bezier(.2,.7,.2,1)}
.side p:nth-child(1){grid-column:1/7}
.side p:nth-child(2){grid-column:7/13}
.side .st{color:${c.text};font-weight:600}
.side mark{background:none;color:var(--accent-text)}
.in .rule{transform:none}
.in .side p{opacity:1;transform:none}
.in .side p+p{transition-delay:.18s}

/* 작업 방식 */
.how{display:grid;grid-template-columns:minmax(0,62fr) minmax(0,38fr);column-gap:clamp(40px,6vw,104px);margin-top:clamp(120px,14vw,220px)}
.stick{position:sticky;top:calc(50vh - var(--mh,320px)/2 + 30px);align-self:start}
.stage{position:relative;aspect-ratio:1280/841}
.stage .frame{position:absolute;inset:0;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .6s ease,transform .6s ease,visibility .6s}
.stage .frame.cur{opacity:1;visibility:visible;transform:none}
.frame{border-radius:14px;overflow:hidden;background:#0d0e12;container-type:inline-size;box-shadow:0 40px 90px -30px rgba(0,0,0,.9),0 0 0 1px rgba(255,255,255,.08)}
.bar0{height:3.2cqw;background:#17181d;display:flex;align-items:center;gap:.7cqw;padding:0 1.6cqw;border-bottom:1px solid #22242a}
.bar0 i{width:.9cqw;height:.9cqw;border-radius:50%;background:#33363d}
.bar0 span{margin:0 auto;height:1.8cqw;width:34%;border-radius:99px;background:#22242a}
.face{position:relative;aspect-ratio:1280/800;overflow:hidden}
.prog{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:22px}
.prog li{display:flex;flex-direction:column;gap:10px;font-size:13px;color:#6f747e;transition:color .4s}
.prog li::before{content:'';height:2px;border-radius:2px;background:#24262c;transition:background .4s}
.prog li.done::before{background:#4a4e58}
.prog li.on{color:${c.text};font-weight:600}
.prog li.on::before{background:var(--accent)}
.exl{margin-top:16px;font-size:13px;color:#6f747e}

.steps li{min-height:88vh;display:flex;flex-direction:column;justify-content:center;gap:18px;padding:40px 0}
.steps li:first-child{min-height:70vh;justify-content:flex-start;padding-top:calc(50vh - 260px)}
.steps .no{font-size:14px;font-weight:600;color:var(--dim);transition:color .5s}
.steps h3{font-size:clamp(28px,2.6vw,42px);font-weight:700;line-height:1.3;letter-spacing:-.035em;color:var(--dim);transition:color .5s}
.steps .ds{font-size:clamp(16px,1.15vw,18px);line-height:1.75;color:var(--dim);max-width:440px;transition:color .5s}
.steps .rs{display:flex;gap:16px;align-items:baseline;margin-top:14px;padding-top:18px;border-top:1px solid #1d1f25;font-size:16px;font-weight:600;color:var(--dim);transition:color .5s,border-color .5s}
.steps .rs small{font-size:13px;font-weight:500;flex:none}
.steps li.on .no{color:var(--accent-text)}
.steps li.on h3{color:${c.text}}
.steps li.on .ds{color:var(--gray)}
.steps li.on .rs{color:${c.text};border-color:#2a2d35}
.steps li.on .rs small{color:var(--gray)}
.slot{display:none}

/* 장면 공통 */
.cv{position:absolute;left:0;top:0;width:1280px;height:800px;transform-origin:0 0;transform:scale(var(--k,.5));overflow:hidden}
.cv *{transition:opacity .6s ease,transform .6s cubic-bezier(.2,.7,.2,1),background-color .4s,color .4s,border-color .4s,box-shadow .4s}
.dk{background:#0d0e12;color:#e9eaee}
.tb{position:absolute;left:0;right:0;top:0;height:72px;display:flex;align-items:center;gap:18px;padding:0 56px;border-bottom:1px solid #1f2127;font-size:18px;color:#7d828c}
.tb b{color:#e9eaee;font-size:20px}
.lb{font-size:19px;font-weight:600;color:#7d828c;margin-bottom:22px}
.ptr{position:absolute;left:1180px;top:840px;z-index:20;transition:left .8s cubic-bezier(.45,0,.2,1),top .8s cubic-bezier(.45,0,.2,1),transform .15s;filter:drop-shadow(0 4px 8px rgba(0,0,0,.35))}

/* 1 사업 이해 */
.s1 .c1{position:absolute;left:56px;top:124px;width:460px}
.s1 .q{background:#16181e;border-radius:16px;padding:26px 28px;font-size:27px;line-height:1.55;color:#c9ccd3;margin-bottom:16px;opacity:0;transform:translateY(14px)}
.s1 mark{background:none;color:inherit;transition:box-shadow .6s}
.s1 .c2{position:absolute;left:580px;top:124px;width:644px}
.s1 .rw{position:relative;display:grid;grid-template-columns:180px 1fr;align-items:center;column-gap:20px;padding:30px 22px;border-top:1px solid #23252c;border-radius:0;opacity:0;transform:translateY(14px)}
.s1 .rw span{font-size:20px;color:#7d828c}
.s1 .rw b{font-size:28px;font-weight:600;line-height:1.45}
.s1 .rw em{position:absolute;right:20px;top:-15px;font-style:normal;font-size:15px;font-weight:700;padding:6px 12px;border-radius:999px;background:#3560FF;color:#fff;opacity:0;transform:translateY(6px)}
.a1 .q1,.a2 .q2,.a3 .q3,.a4 .r1,.a5 .r2,.a6 .r3,.a7 .r4{opacity:1;transform:none}
.a8 .r3{background:rgba(53,96,255,.13);border-color:transparent;border-radius:14px;box-shadow:inset 0 0 0 2px #3560FF}
.a8 .r3 b{color:#fff}
.a8 .r3 em{opacity:1;transform:none}
.a8 .r4{border-color:transparent}
.s1.a8 mark{box-shadow:inset 0 -12px 0 rgba(53,96,255,.45);color:#fff}

/* 2 문구 설계 */
.s2 .c1{position:absolute;left:56px;top:124px;width:580px}
.s2 .old{position:relative;display:inline-block;font-size:34px;line-height:1.45;color:#7d828c}
.s2 .old span{position:relative;background:linear-gradient(#ff6b5e,#ff6b5e) 0 55%/0 2px no-repeat;transition:background-size .9s ease}
.a1 .old span{background-size:100% 2px}
.s2 .nl{margin-top:48px}
.s2 .nl,.s2 .nw,.s2 .ns,.s2 .why{opacity:0;transform:translateY(14px)}
.s2 .nw{font-size:56px;font-weight:700;line-height:1.3;letter-spacing:-.03em;color:#fff}
.s2 .ns{font-size:25px;color:#b4b8c0;margin-top:16px}
.s2 .why{margin-top:44px;display:flex;flex-direction:column;gap:10px;font-size:23px;color:#c9ccd3}
.s2 .why b{font-size:15px;color:#6F8DFF}
.a2 .nl,.a2 .nw,.a3 .ns,.a6 .why{opacity:1;transform:none}
.s2 .c2{position:absolute;left:700px;top:124px;width:524px}
.s2 .bk{position:relative;background:#16181e;border-radius:14px;padding:18px 22px;margin-bottom:12px;display:flex;flex-direction:column;gap:6px;opacity:0;transform:translateY(14px)}
.s2 .bk span{font-size:17px;color:#7d828c;font-weight:600}
.s2 .bk b{font-size:23px;font-weight:600;color:#c9ccd3}
.s2 .k1{min-height:104px}
.s2 .ph1{position:absolute;left:22px;top:48px;opacity:0;color:#fff!important;font-size:24px!important}
.a4 .bk{opacity:1;transform:none}
.a4 .k2{transition-delay:.1s}.a4 .k3{transition-delay:.2s}.a4 .k4{transition-delay:.3s}.a4 .k5{transition-delay:.4s}
.a5 .k1{box-shadow:inset 0 0 0 2px #3560FF;background:rgba(53,96,255,.13)}
.a5 .ph0{opacity:0}
.a5 .ph1{opacity:1}

/* 홈페이지 공통 */
.sh{position:absolute;left:0;top:0;width:1280px;height:800px;background:#f6f5f1;color:#1d2b3a;overflow:hidden}
.hd{position:absolute;left:0;right:0;top:0;height:88px;display:flex;align-items:center;padding:0 72px;background:#f6f5f1;border-bottom:1px solid #e4e1d9;z-index:3;color:#1d2b3a}
.lg{display:flex;align-items:center;gap:10px;font-size:22px;font-weight:700}
.hd .lg i{width:18px;height:18px;border-radius:4px;background:#1d2b3a}
.hd nav{position:absolute;left:420px;display:flex;gap:40px;font-size:16px;color:#5b6573}
.hd nav span{position:relative;padding:6px 0}
.hd nav span::after{content:'';position:absolute;left:0;right:0;bottom:0;height:2px;background:#1d2b3a;transform:scaleX(0);transition:transform .4s}
.hd .hb{margin-left:auto;background:#1d2b3a;color:#fff;border-radius:8px;height:46px;padding:0 22px;display:flex;align-items:center;font-size:15px;font-weight:600}
.sh .tx{position:absolute;left:72px;top:150px;width:580px}
.sh .k{font-size:16px;font-weight:600;color:#8a8f97}
.sh h4{font-size:52px;line-height:1.3;font-weight:700;letter-spacing:-.03em;margin-top:20px}
.sh .d{font-size:19px;color:#5b6573;margin-top:20px}
.sh .bt{display:flex;gap:12px;margin-top:40px}
.sh .bt b{display:flex;align-items:center;height:60px;padding:0 28px;border-radius:8px;font-size:17px;font-weight:600}
.sh .bt .p{background:#1d2b3a;color:#fff}
.sh .bt .s{border:1px solid #c9c6bd}
.sh .fq{display:flex;flex-wrap:wrap;gap:10px;margin-top:44px}
.sh .fq small{width:100%;font-size:14px;color:#8a8f97;margin-bottom:2px}
.sh .fq span{padding:12px 18px;border-radius:999px;background:#ebe8e0;font-size:15px;font-weight:500}
.sh .ph{position:absolute;left:700px;top:132px;width:508px;height:420px;border-radius:16px;overflow:hidden}
.sh .ph i{position:absolute;inset:0;background:center/cover}
.sh .ph .pb{opacity:0}
.sh .pr{position:absolute;left:740px;top:470px;width:300px;padding:22px 24px;border-radius:14px;background:#fff;box-shadow:0 20px 50px rgba(29,43,58,.16);display:flex;flex-direction:column;gap:6px}
.sh .pr small,.sh .pop small{font-size:13px;color:#8a8f97}
.sh .pr b{font-size:26px}
.sh .pr span{font-size:14px;color:#5b6573}
.sw{position:relative;display:inline-block;width:1.25em;height:1.2em;vertical-align:bottom}
.sw em{position:absolute;left:0;top:0;font-style:normal}
.sw .vb{opacity:0;transform:translateY(8px)}
.sh .pop{position:absolute;left:930px;top:156px;width:250px;padding:22px 24px;border-radius:14px;background:#1d2b3a;color:#fff;display:flex;flex-direction:column;gap:8px;box-shadow:0 24px 60px rgba(0,0,0,.25);opacity:0;transform:translateY(16px)}
.sh .pop b{font-size:22px;line-height:1.35}
.sh .pop span{font-size:14px;color:#b9c3cf}

/* 3 문의 동선 */
.s3{background:#f6f5f1;color:#1d2b3a}
.s3 .pg{position:absolute;left:0;top:0;width:1280px;height:2400px;transition:transform 1.1s cubic-bezier(.65,0,.35,1)}
.s3 .sv{position:absolute;left:0;top:800px;width:1280px;height:800px;background:#fff}
.s3 h5{font-size:40px;font-weight:700;letter-spacing:-.03em}
.s3 .sv h5{position:absolute;left:72px;top:60px}
.s3 .sd{position:absolute;left:72px;top:122px;font-size:18px;color:#5b6573}
.s3 .cd{position:absolute;top:190px;width:376px;height:300px;padding:32px;border-radius:16px;background:#f6f5f1;display:flex;flex-direction:column;gap:12px;box-shadow:inset 0 0 0 1.5px transparent}
.s3 .cd1{left:72px}.s3 .cd2{left:452px}.s3 .cd3{left:832px}
.s3 .cd em{font-style:normal;font-size:15px;color:#8a8f97;font-weight:600;margin-bottom:40px}
.s3 .cd b{font-size:26px;font-weight:700}
.s3 .cd span{font-size:16px;line-height:1.6;color:#5b6573}
.s3 .cd i{margin-top:auto;font-style:normal;font-size:15px;font-weight:600}
.s3 .band{position:absolute;left:72px;right:72px;top:540px;height:140px;border-radius:18px;background:#1d2b3a;color:#fff;padding:36px 40px;display:flex;flex-direction:column;gap:10px}
.s3 .band b{font-size:28px}
.s3 .band span{font-size:16px;color:#b9c3cf}
.s3 .go{position:absolute;right:28px;top:38px;width:260px;height:64px;border-radius:10px;background:#fff;color:#1d2b3a;font-style:normal;font-size:18px;font-weight:700;display:flex;align-items:center;justify-content:center}
.s3 .fm{position:absolute;left:0;top:1600px;width:1280px;height:800px;background:#f6f5f1}
.s3 .fl{position:absolute;left:72px;top:96px;display:flex;flex-direction:column;gap:14px}
.s3 .fl small{font-size:15px;color:#8a8f97;font-weight:600}
.s3 .fl p{font-size:18px;color:#5b6573}
.s3 .pn{position:absolute;left:600px;top:60px;width:608px;height:540px;background:#fff;border-radius:18px;box-shadow:0 20px 50px rgba(29,43,58,.1)}
.s3 .pn>span{position:absolute;left:36px}
.s3 .l{font-size:15px;font-weight:600;color:#5b6573}
.s3 .in{width:536px;height:56px;border-radius:10px;box-shadow:inset 0 0 0 1px #d9d6ce;font-size:18px}
.s3 .in em{position:absolute;left:18px;top:16px;font-style:normal}
.s3 .in .pl{color:#a8abb1}
.s3 .in .v{opacity:0;color:#1d2b3a}
.s3 .chs{display:flex;gap:10px}
.s3 .chs i{height:48px;padding:0 20px;border-radius:999px;box-shadow:inset 0 0 0 1px #d9d6ce;display:flex;align-items:center;font-style:normal;font-size:16px}
.s3 .ag{display:flex;align-items:center;gap:12px;font-size:15px;color:#5b6573}
.s3 .ag i{width:22px;height:22px;border-radius:6px;box-shadow:inset 0 0 0 1.5px #c9c6bd;position:relative}
.s3 .ag i::after{content:'';position:absolute;left:7px;top:3px;width:6px;height:11px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg);opacity:0;transition:opacity .3s}
.s3 .sb{width:536px;height:60px;border-radius:10px;background:#1d2b3a;color:#fff;font-size:18px;font-weight:700}
.s3 .sb em{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-style:normal}
.s3 .sb .y{opacity:0}
.s3 .nt{width:536px;text-align:center;font-size:13px;color:#8a8f97}
.s3 .fx{position:absolute}
.s3 .toast{position:absolute;left:50%;top:116px;transform:translate(-50%,-14px);opacity:0;z-index:10;display:flex;align-items:center;gap:14px;padding:18px 26px;border-radius:14px;background:#1d2b3a;color:#fff;font-size:18px;box-shadow:0 20px 50px rgba(0,0,0,.25)}
.s3 .toast span{font-size:13px;padding:4px 10px;border-radius:999px;background:rgba(255,255,255,.14);color:#c7d0da}
.s3 .ptr{left:760px;top:600px}
.s3.a1 .ptr{left:570px;top:44px}
.s3.a1:not(.a2) .nv::after{transform:none}
.s3.a2 .pg{transform:translateY(-712px)}
.s3.a2 .ptr{left:250px;top:400px}
.s3.a2:not(.a3) .cd1{background:#fff;box-shadow:inset 0 0 0 1.5px #1d2b3a,0 20px 40px rgba(29,43,58,.12);transform:translateY(-6px)}
.s3.a3 .ptr{left:1040px;top:694px}
.s3.a4:not(.a5) .go{transform:scale(.96);background:#dfe5ff}
.s3.a5 .pg{transform:translateY(-1512px)}
.s3.a5 .ptr{left:700px;top:232px}
.s3.a6 .i1{box-shadow:inset 0 0 0 2px #3560FF}
.s3.a6 .i1 .pl{opacity:0}.s3.a6 .i1 .v{opacity:1}
.s3.a7 .i1{box-shadow:inset 0 0 0 1px #d9d6ce}
.s3.a7 .ptr{left:700px;top:336px}
.s3.a8 .i2{box-shadow:inset 0 0 0 2px #3560FF}
.s3.a8 .i2 .pl{opacity:0}.s3.a8 .i2 .v{opacity:1}
.s3.a9 .i2{box-shadow:inset 0 0 0 1px #d9d6ce}
.s3.a9 .ptr{left:680px;top:438px}
.s3.a10 .c1{background:#1d2b3a;color:#fff;box-shadow:none}
.s3.a11 .ptr{left:652px;top:504px}
.s3.a12 .ag i{background:#1d2b3a;box-shadow:none}
.s3.a12 .ag i::after{opacity:1}
.s3.a13 .ptr{left:900px;top:572px}
.s3.a14 .sb{background:#3560FF}
.s3.a14 .sb .x{opacity:0}.s3.a14 .sb .y{opacity:1}
.s3.a14 .toast{opacity:1;transform:translate(-50%,0)}
.s3.a4:not(.a5) .ptr{transform:scale(.9)}
.s3.a14 .ptr{left:1010px;top:650px}

/* 4 직접 관리 */
.s4 .ed{position:absolute;left:40px;top:40px;width:420px;height:720px;border-radius:18px;background:#f4f5f7;color:#1d2b3a}
.s4 .ed>span{position:absolute;left:28px}
.s4 .eh{position:absolute;left:28px;right:28px;top:28px;display:flex;align-items:center;justify-content:space-between}
.s4 .eh b{font-size:22px}
.s4 .eh em{font-style:normal;font-size:14px;font-weight:600;padding:6px 12px;border-radius:999px;background:#e3e8ff;color:#2848d6}
.s4 .el{font-size:16px;font-weight:600;color:#5b6573}
.s4 .th{width:160px;height:100px;border-radius:10px;background:center/cover;box-shadow:0 0 0 0 #3560FF}
.s4 .ta{box-shadow:0 0 0 3px #3560FF}
.s4 .ei{width:364px;height:56px;border-radius:10px;background:#fff;box-shadow:inset 0 0 0 1px #d6d9df;padding:0 18px;display:flex;align-items:center;gap:4px;font-size:19px;font-weight:600}
.s4 .tg{width:52px;height:30px;border-radius:99px;background:#c9cdd4}
.s4 .tg i{position:absolute;left:3px;top:3px;width:24px;height:24px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.2)}
.s4 .tt{left:96px!important;font-size:17px;color:#5b6573}
.s4 .es{width:364px;height:56px;border-radius:10px;background:#1d2b3a;color:#fff;font-size:18px;font-weight:700}
.s4 .es em{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-style:normal}
.s4 .es .y{opacity:0}
.s4 .pvl{position:absolute;left:500px;top:40px;font-size:17px;font-weight:600;color:#7d828c}
.s4 .pv{position:absolute;left:500px;top:76px;width:740px;height:462px;border-radius:12px;overflow:hidden;box-shadow:0 0 0 1px #23252c}
.s4 .pvi{position:absolute;left:0;top:0;width:1280px;height:800px;transform-origin:0 0;transform:scale(.578)}
.s4 .lg4{position:absolute;left:500px;top:566px;display:flex;flex-direction:column;gap:12px;font-size:23px;color:#c9ccd3}
.s4 .lg4 li{display:flex;align-items:center;gap:12px;opacity:0;transform:translateY(10px)}
.s4 .lg4 li::before{content:'';width:8px;height:8px;border-radius:50%;background:#3560FF}
.s4 .lg4 .g4{color:#fff;font-weight:600}
.s4 .ptr{left:760px;top:840px}
.s4.a1 .ptr{left:316px;top:212px}
.s4.a2 .ta{box-shadow:0 0 0 0 #3560FF}.s4.a2 .tb2{box-shadow:0 0 0 3px #3560FF}
.s4.a2 .ph .pb{opacity:1}
.s4.a2 .ph{box-shadow:0 0 0 5px #3560FF}
.s4.a2 .g1{opacity:1;transform:none}
.s4.a3 .ptr{left:200px;top:356px}
.s4.a3 .ei{box-shadow:inset 0 0 0 2px #3560FF}
.s4.a4 .sw .va{opacity:0;transform:translateY(-8px)}
.s4.a4 .sw .vb{opacity:1;transform:none}
.s4.a4 .pr{box-shadow:0 0 0 5px #3560FF,0 20px 50px rgba(29,43,58,.16)}
.s4.a4 .g2{opacity:1;transform:none}
.s4.a5 .ei{box-shadow:inset 0 0 0 1px #d6d9df}
.s4.a5 .ptr{left:84px;top:470px}
.s4.a6 .tg{background:#3560FF}
.s4.a6 .tg i{transform:translateX(22px)}
.s4.a6 .tt{color:#1d2b3a}
.s4.a6 .pop{opacity:1;transform:none;box-shadow:0 0 0 5px #3560FF,0 24px 60px rgba(0,0,0,.25)}
.s4.a6 .g3{opacity:1;transform:none}
.s4.a7 .ptr{left:230px;top:692px}
.s4.a8 .ptr{left:330px;top:744px}
.s4.a8 .es{background:#3560FF}
.s4.a8 .es .x{opacity:0}.s4.a8 .es .y{opacity:1}
.s4.a8 .g4{opacity:1;transform:none}
.s4.a8 .ph,.s4.a8 .pr,.s4.a8 .pop{box-shadow:0 20px 50px rgba(29,43,58,.16)}

/* 밝은 화면으로 통일 */
.frame{background:#fff;box-shadow:0 40px 90px -30px rgba(0,0,0,.9),0 0 0 1px rgba(255,255,255,.1)}
.bar0{background:#eef0f3;border-bottom-color:#e1e4e8}
.bar0 i{background:#cfd3d9}.bar0 span{background:#e1e4e8}
.dk{background:#fff;color:#1d2b3a}
.tb{border-bottom-color:#eceef1;color:#8a8f97}
.tb b{color:#1d2b3a}
.tb .ex{margin-left:auto;font-style:normal;font-size:15px;font-weight:600;padding:7px 14px;border-radius:999px;background:#e3e8ff;color:#2848d6}
.lb{color:#8a8f97}
.s1 .q{background:#f4f5f7;color:#3a4250}
.s1 .rw{border-top-color:#eceef1}
.s1 .rw span{color:#8a8f97}
.a8 .r3{background:rgba(53,96,255,.07)}
.a8 .r3 b{color:#10151c}
.s1.a8 mark{box-shadow:inset 0 -12px 0 rgba(53,96,255,.28);color:#10151c}
.s2 .old{color:#9aa0aa}
.s2 .nw{color:#10151c}
.s2 .ns{color:#5b6573}
.s2 .why{color:#3a4250}
.s2 .why b{color:#2848d6}
.s2 .bk{background:#f4f5f7}
.s2 .bk span{color:#8a8f97}
.s2 .bk b{color:#1d2b3a}
.s2 .ph1{color:#10151c!important}
.a5 .k1{background:rgba(53,96,255,.07)}
.s4 .ed{background:#f4f5f7}
.s4 .pvl{color:#8a8f97}
.s4 .pv{box-shadow:0 0 0 1px #e3e5e9,0 20px 50px rgba(29,43,58,.12)}
.s4 .lg4{color:#3a4250}
.s4 .lg4 .g4{color:#10151c}

/* 포함 서비스 */
.exs{margin-top:clamp(120px,12vw,200px)}
.eh{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);align-items:end}
.eh .kick{grid-column:1/-1}
.eh h3{grid-column:1/8;font-size:clamp(36px,4.4vw,72px);font-weight:700;line-height:1.16;letter-spacing:-.045em}
.er{grid-column:8/13;display:flex;flex-direction:column;align-items:flex-start;gap:24px;padding-bottom:.5em}
.er p{font-size:clamp(15px,1.1vw,17px);line-height:1.75;color:var(--gray)}
.exs .cta{display:inline-flex;align-items:center;height:52px;padding:0 24px;border-radius:999px;background:var(--accent);color:#fff;text-decoration:none;font-size:15px;font-weight:600;transition:background .2s}
.exs .cta:hover{background:#4D74FF;color:#fff}
.eg{margin-top:clamp(56px,6vw,96px);border-top:1px solid #24262c}
.eg>li{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px);padding:clamp(36px,3.6vw,56px) 0;border-bottom:1px solid #1d1f25;opacity:0;transform:translateY(16px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}
.eg>li.in{opacity:1;transform:none}
.gn{grid-column:1/2;font-size:14px;font-weight:600;color:var(--accent-text);padding-top:.7em}
.eg h4{grid-column:2/5;margin:0;font-size:clamp(24px,2.2vw,36px);font-weight:700;letter-spacing:-.035em;line-height:1.25}
.gd{grid-column:5/8;font-size:clamp(15px,1.05vw,17px);line-height:1.75;color:var(--gray);padding-top:.35em}
.eg ul{grid-column:8/13;display:flex;flex-direction:column;gap:18px}
.eg ul li{position:relative;padding-left:26px;display:flex;flex-direction:column;gap:4px}
.eg ul li::before{content:'';position:absolute;left:2px;top:7px;width:9px;height:5px;border:solid var(--accent-text);border-width:0 0 1.6px 1.6px;transform:rotate(-45deg)}
.eg ul b{font-size:clamp(15px,1.1vw,17px);font-weight:600}
.eg ul span{font-size:14px;line-height:1.6;color:#7d828c}
.still .eg>li{opacity:1;transform:none}

@media (max-width:860px){
  .sec{padding:120px 20px 80px}
  .intro{display:block}
  .big{font-size:clamp(34px,9.6vw,56px)}
  .big .ln+.ln{padding-left:0}
  .rule{margin-top:44px}
  .side{display:block}
  .side p{font-size:20px;padding-top:28px}
  .side p:nth-child(2){padding-top:20px}
  .exs{margin-top:110px}
  .eh{display:block}
  .eh h3{font-size:clamp(30px,8.4vw,44px)}
  .er{margin-top:22px}
  .er p br{display:none}
  .eg{margin-top:40px}
  .eg>li{display:block;padding:32px 0}
  .gn{display:block;padding:0 0 10px}
  .eg h4{font-size:26px}
  .gd{padding:10px 0 22px}
  .gd br{display:none}
  .how{display:block;margin-top:100px}
  .stick{display:none}
  .slot{display:block;margin-bottom:28px}
  .steps li,.steps li:first-child{min-height:0;padding:0 0 88px;justify-content:flex-start;gap:14px}
  .steps h3{font-size:26px}
  .steps .ds{font-size:16px}
  .steps .rs{font-size:15px}
  .frame{border-radius:10px}
  .exl{margin:0 0 28px}
}
.still *{transition:none!important}
.still .side p{opacity:1;transform:none}
.still .rule{transform:none}
`;

  class BWAbout extends HTMLElement {
    static get observedAttributes() { return ['still']; }
    connectedCallback() {
      if (this._init) return; this._init = true;
      const c = this.cfg = merge(CFG, window.BW_ABOUT_CONFIG);
      if (c.id && !this.id) { this.id = c.id; this.style.scrollMarginTop = '84px'; }
      const I = {};
      for (const k in c.images) I[k] = /^(https?:|\/|data:)/.test(c.images[k]) ? c.images[k] : new URL(c.images[k], (window.BW_ASSET_BASE || BW_SELF_BASE)).href;
      this.mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.mob = window.matchMedia('(max-width: 860px)');
      const root = this.attachShadow({ mode: 'open' });
      const title = c.titleLines.map((l) => `<span class="ln${l.accent ? ' ac' : ''}">${[...l.text].map((ch) => ch === ' ' ? ' ' : `<span class="ch">${esc(ch)}</span>`).join('')}</span>`).join('');
      const frames = scenes(I).map((s, i) => `<div class="frame" data-i="${i}"><div class="bar0"><i></i><i></i><i></i><span></span></div><div class="face">${s}</div></div>`).join('');
      root.innerHTML = `<style>${css(c.colors)}</style>
<div class="wrap">
<section class="sec" aria-labelledby="bw-about-title">
  <div class="intro">
    <p class="kick">${esc(c.kicker)}</p>
    <h2 class="big" id="bw-about-title" aria-label="${esc(c.titleLines.map((l) => l.text).join(' '))}"><span aria-hidden="true">${title}</span></h2>
    <i class="rule"></i>
    <div class="side">${c.side.map((p, i) => `<p class="${p.strong ? 'st' : ''}">${br(p.text).replace(/\*\*(.+?)\*\*/g, '<mark>$1</mark>')}</p>`).join('')}</div>
  </div>
  <div class="how">
    <div class="stick" aria-hidden="true">
      <div class="stage">${frames}</div>
      <ol class="prog">${c.steps.map((s) => `<li>${esc(s.no)} ${esc(s.name)}</li>`).join('')}</ol>
      <p class="exl">${esc(c.exampleLabel)}</p>
    </div>
    <div>
      <ol class="steps">${c.steps.map((s, i) => `<li data-i="${i}"><div class="slot" aria-hidden="true"></div><span class="no">${esc(s.no)} · ${esc(s.name)}</span><h3>${br(s.title)}</h3><p class="ds">${esc(s.desc)}</p><p class="rs"><small>결과물</small>${esc(s.result)}</p></li>`).join('')}</ol>
    </div>
  </div>
</section></div>`;
      const $ = (q) => root.querySelector(q), $$ = (q) => [...root.querySelectorAll(q)];
      this.wrap = $('.wrap');
      const isStill = () => this.getAttribute('still') === 'true' || this.mq.matches;

      const fr = $$('.frame'), cvs = fr.map((f) => f.querySelector('.cv')), stage = $('.stage'), stick = $('.stick');
      const slots = $$('.slot'), steps = $$('.steps li'), prog = $$('.prog li');
      const exl = $('.exl');
      const ro = new ResizeObserver((es) => es.forEach((e) => {
        const f = e.target; f.style.setProperty('--k', f.clientWidth / 1280);
        if (stick.offsetHeight) stick.style.setProperty('--mh', stick.offsetHeight + 'px');
      }));
      fr.forEach((f) => ro.observe(f.querySelector('.face')));

      // 장면 재생: 한 번 끝나면 결과 화면 유지
      const played = [], timers = [];
      const finish = (i) => { c.timeline[i].forEach((_, j) => cvs[i].classList.add('a' + (j + 1))); played[i] = true; };
      const play = (i) => {
        if (played[i]) return; played[i] = true;
        if (isStill()) return finish(i);
        c.timeline[i].forEach((t, j) => timers.push(setTimeout(() => cvs[i].classList.add('a' + (j + 1)), t)));
      };
      this.applyStill = () => {
        this.wrap.classList.toggle('still', isStill());
        if (isStill()) { timers.forEach(clearTimeout); fr.forEach((_, i) => finish(i)); }
      };
      this.applyStill();

      // PC: 고정 화면 / 모바일: 단계마다 장면 배치
      const home = () => {
        if (this.mob.matches) { fr.forEach((f, i) => slots[i].appendChild(f)); slots[0].after(exl); }
        else { fr.forEach((f) => stage.appendChild(f)); stick.appendChild(exl); }
        onScroll();
      };

      const chars = $$('.big .ch'), side = $('.side'), big = $('.big');
      let active = -1;
      const setStep = (n) => {
        if (n === active) return; active = n;
        fr.forEach((f, i) => f.classList.toggle('cur', i === n));
        steps.forEach((s, i) => s.classList.toggle('on', i === n));
        prog.forEach((p, i) => { p.classList.toggle('on', i === n); p.classList.toggle('done', i < n); });
        play(n);
      };
      const onScroll = () => {
        const vh = window.innerHeight;
        const r = big.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (vh * 0.88 - r.top) / (r.height + vh * 0.32)));
        const lit = isStill() ? chars.length : Math.round(p * chars.length);
        chars.forEach((ch, i) => ch.classList.toggle('on', i < lit));
        $$('.eg>li').forEach((li) => { if (li.getBoundingClientRect().top < vh * 0.85) li.classList.add('in'); });
        if ($('.rule').getBoundingClientRect().top < vh * 0.85) $('.intro').classList.add('in');
        if (this.mob.matches) {
          steps.forEach((s, i) => { const b = fr[i].getBoundingClientRect(); if (b.top < vh * 0.7 && b.bottom > 0) { s.classList.add('on'); play(i); } });
          return;
        }
        let n = 0;
        steps.forEach((s, i) => { if (s.getBoundingClientRect().top < vh * 0.5) n = i; });
        setStep(n);
      };
      this.mob.addEventListener && this.mob.addEventListener('change', () => { active = -1; home(); });
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      home();
    }
    attributeChangedCallback() { this.applyStill && this.applyStill(); }
  }
  customElements.define('bw-about', BWAbout);
})();
