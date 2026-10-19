/* 빌드웹스 두 번째 섹션 — <bw-about></bw-about>
   Shadow DOM 안에서만 동작합니다. 문구·예시는 아래 CFG(또는 window.BW_ABOUT_CONFIG)에서 수정합니다. */
(function () {
  const BW_SELF_BASE = (document.currentScript && document.currentScript.src) ? new URL('./', document.currentScript.src).href : document.baseURI;
  if (customElements.get('bw-about')) return;

  const CFG = {
    id: 'about',
    titleLines: [],   // 큰 제목은 앞 섹션(bw-statement)으로 옮겼습니다
    side: [],   // 제목 아래 보조 문단(필요할 때만). 예: { text: '문장', strong: false }
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
    exampleLabel: '제작 과정 예시',
    images: { photoA: 'assets/p1076.jpg', photoB: 'assets/p1031.jpg' },
    steps: [
      { no: '01', name: '사업 이해', title: '고객이 반응할\n강점을 찾습니다.', desc: '질문지와 인터뷰를 통해,\n업체만의 차별점을 수집합니다.', result: '핵심 고객과 차별점 정리' },
      { no: '02', name: '문구 설계', title: '우리가 하고 싶은 말보다,\n고객이 듣고 싶은 말로 바꿉니다.', desc: '업체만의 차별점을\n고객의 고민에 답하는 문장으로 바꿉니다.', result: '페이지 구성과 주요 문구' },
      { no: '03', name: '디자인 설계', title: '브랜드는 더 매력적으로,\n중요한 정보는 더 선명하게.', desc: '보기 좋은 디자인을 넘어,\n고객이 자연스럽게 행동하도록 만듭니다.', result: '방향이 다른 디자인 시안 3개' },
      { no: '04', name: '문의 전환', title: '문의할 이유를 만들었다면,\n행동하기 쉽게 만듭니다.', desc: '버튼과 입력 과정을 단순하게 설계해\n고객의 망설임을 줄입니다.', result: '문의 버튼 · 입력 폼 · 상담 연결' }
    ],
    // 장면별 동작 시점(ms). 숫자를 바꾸면 속도가 달라집니다.
    timeline: [
      [100, 250, 400, 550, 700, 850, 1000, 1100, 1200, 1400],
      [100, 320, 540, 780, 1000],
      [120, 350, 580, 820, 1050],
      [150, 300, 550, 780, 1000, 1150]
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

  const AR = '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const AR2 = '<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" fill="none" stroke="#10151c" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  /* ---------- 장면 4개 (800×600, 업종 공통 예시) ---------- */
  const scenes = (I) => [
`<div class="cv s1">
  <div class="tb"><b>강점 도출 질문지</b><span>답변 정리</span></div>
  <div class="qs">
    <div class="qq q1"><em>Q1</em><b>고객이 가장 자주 묻는 질문은?</b><i class="an"></i></div>
    <div class="qq q2"><em>Q2</em><b>다른 곳과 무엇이 다른가요?</b><i class="an"></i></div>
    <div class="qq q3"><em>Q3</em><b>고객이 다시 찾는 이유는?</b><i class="an"></i></div>
  </div>
  <p class="lb">수집한 차별점</p>
  <div class="chips"><span class="c1">대표가 직접 진행</span><span class="c2">당일 견적 안내<em>핵심 강점</em></span><span class="c3">사후 관리 포함</span></div>
</div>`,
`<div class="cv s2">
  <div class="hx h0"><div class="nv"><b>한빛건축</b><span>회사 소개</span><span>설계</span><span>프로젝트</span><span>문의</span></div>
    <div class="hc"><h4><s>고객 만족을 최우선으로 하는<br>한빛건축입니다</s></h4><p>정직과 신뢰를 바탕으로 최고의 품질을 약속드립니다.</p><b>회사 소개 보기</b></div>
    <i class="hp" style="background-image:url('${I.photoB}')"></i>
    <ul class="co bad"><li><i>✕</i>어느 회사나 쓰는 말</li><li><i>✕</i>누가, 무엇을 해주는지 없음</li><li><i>✕</i>다음 행동이 불분명</li></ul><em class="lab">바꾸기 전</em></div>
  <i class="ar">${AR}</i>
  <div class="hx h1"><div class="nv"><b>한빛건축</b><span>회사 소개</span><span>설계</span><span>프로젝트</span><span>문의</span></div>
    <div class="hc"><h4>설계부터 준공까지<br><mark>대표 건축사가 직접<sup>1</sup></mark> 맡습니다</h4><p>상담 후 <mark>3일 안에<sup>2</sup></mark> 설계 방향과 예상 비용을 받아보세요.</p><div class="pf"><span>설계 상담 무료</span><span>견적 외 추가 비용 없음</span></div><b>무료 상담 신청<sup>3</sup></b></div>
    <i class="hp" style="background-image:url('${I.photoA}')"></i>
    <ul class="co good"><li><i>1</i>누가 맡는지</li><li><i>2</i>언제 무엇을 받는지</li><li><i>3</i>바로 할 행동</li></ul><em class="lab">바꾼 후</em></div>
</div>`,
`<div class="cv s3">
  <div class="bz z0"><i></i><i></i><i></i><span>hanbit-arch.co.kr</span></div>
  <div class="bz z1"><i></i><i></i><i></i><span>hanbit-arch.co.kr</span></div>
  <div class="fr wa">
  <div class="old">
    <div class="ut"><span>홈</span><span>로그인</span><span>회원가입</span><span>사이트맵</span></div>
    <div class="oh"><b><i></i>(주)한빛건축</b><span>고객센터 <strong>02-000-0000</strong></span></div>
    <div class="on"><span>회사소개</span><span>사업분야</span><span>시공실적</span><span>고객센터</span><span>커뮤니티</span></div>
    <div class="ob" style="background-image:url('${I.photoB}')"><h4>고객과 함께 성장하는 기업</h4><p>(주)한빛건축이 여러분과 함께하겠습니다</p><i class="od"><i></i><i></i><i></i></i></div>
    <div class="oc"><div><h6>공지사항<small>더보기 +</small></h6><p>홈페이지가 새롭게 오픈하였습니다<br>2015년 하계 휴무 안내<br>시공실적 게시판 이용 안내</p></div><div><h6>시공실적<small>더보기 +</small></h6><p class="th"><i></i><i></i><i></i></p></div><div><h6>고객센터</h6><p><strong>02-000-0000</strong><br>평일 09:00 ~ 18:00<br>점심 12:00 ~ 13:00</p></div></div>
  </div>
  <em class="lab l0">바꾸기 전</em></div>
  <div class="fr wb"><div class="new" style="--bg:url('${I.photoA}')">
    <div class="nn"><span>프로젝트</span><span>설계 과정</span><span>문의</span><b>상담 신청</b></div>
    <div class="nc"><small>건축 설계 · 인테리어</small><h4>설계부터 준공까지,<br>대표 건축사가<br>직접 맡습니다.</h4><p>상담 후 3일 안에 설계 방향과<br>예상 비용을 받아보세요.</p><b>무료 상담 신청</b></div>
    <ul class="nk"><li><strong>3일</strong>설계 방향 회신</li><li><strong>1명</strong>대표 건축사 전담</li></ul>
  </div>
  <em class="lab l1">바꾼 후</em></div>
  <i class="ar">${AR}</i>
</div>`,
`<div class="cv s4">
  <div class="tb"><b>문의 전환</b><span>문의 폼 · 상담 버튼</span></div>
  <div class="lf">
    <p class="lb">입력 항목</p>
    <p class="ct"><span class="sw2"><em class="va">7</em><em class="vb">3</em></span>개</p>
    <p class="cd">꼭 필요한 것만 남깁니다</p>
    <div class="qb"><span>전화 걸기</span><span>카카오톡 상담</span></div>
  </div>
  <div class="fm">
    <span class="f f1">성함<em>홍길동</em></span>
    <span class="f x">회사명</span>
    <span class="f x">직책</span>
    <span class="f f2">연락처<em>010-1234-5678</em></span>
    <span class="f x">이메일</span>
    <span class="f x">예산</span>
    <span class="f f3">문의 내용</span>
    <b class="sb"><em class="x1">문의 보내기</em><em class="y1">접수 완료</em></b>
  </div>
  <div class="toast">문의가 접수되었습니다</div>
</div>`
  ];

  const css = (c) => `
:host{display:block;position:relative;background:${c.bg};color:${c.text};font-family:'Pretendard Variable',Pretendard,-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all;
  --accent:${c.accent};--accent-text:${c.accentText};--gray:${c.gray};--dim:${c.dim}}
*{box-sizing:border-box}
p,h2,h3,h4,h5,ul,ol{margin:0;padding:0}
ul,ol{list-style:none}
.sec{max-width:1440px;margin:0 auto;padding:clamp(72px,8vw,140px) clamp(24px,6.5vw,112px) clamp(32px,4vw,64px)}

/* 큰 문장 */
.intro{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));column-gap:clamp(16px,2vw,32px)}
.kick{grid-column:1/-1;justify-self:start;display:inline-flex;align-items:center;gap:12px;height:48px;padding:0 22px 0 18px;border-radius:999px;border:1px solid #2a2d35;background:#0c0d11;font-size:clamp(16px,1.25vw,19px);font-weight:600;color:${c.text};margin:0 0 clamp(28px,3vw,44px);width:max-content}
.kick::before{content:'';width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 5px rgba(53,96,255,.18)}
.big{grid-column:1/-1;font-size:clamp(34px,4.4vw,72px);font-weight:700;line-height:1.12;letter-spacing:-.05em}
.big .ln{display:block;opacity:0;transform:translateY(28px);filter:blur(6px);transition:opacity .9s ease,transform .9s cubic-bezier(.2,.7,.2,1),filter .9s ease}
.big .ln.on{opacity:1;transform:none;filter:none}
.big .ln:nth-child(2){transition-delay:.45s}.big .ln:nth-child(3){transition-delay:.9s}.big .ln:nth-child(4){transition-delay:1.35s}.big .ln:nth-child(5){transition-delay:1.8s}
.big .ln .ch{color:${c.text}}
.big .ln.ac .ch{color:var(--accent-text)}
.still .big .ln{opacity:1;transform:none;filter:none}
.big .ln+.ln{padding-left:0}
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
.how{display:grid;grid-template-columns:minmax(0,62fr) minmax(0,38fr);column-gap:clamp(40px,6vw,104px);margin-top:clamp(80px,9vw,140px)}
.nt .how{margin-top:clamp(8px,1vw,16px)}
.nt .kick{margin-bottom:0}
.stick{position:sticky;top:calc(50vh - var(--mh,320px)/2 + 30px);align-self:start}
.stage{position:relative;aspect-ratio:800/626}
.stage .frame{position:absolute;inset:0;opacity:0;visibility:hidden;transition:opacity .4s ease,visibility .4s}
.stage .frame.cur{opacity:1;visibility:visible;transform:none}
.frame{border-radius:14px;overflow:hidden;background:#0d0e12;container-type:inline-size;box-shadow:0 40px 90px -30px rgba(0,0,0,.9),0 0 0 1px rgba(255,255,255,.08)}
.bar0{height:3.2cqw;background:#17181d;display:flex;align-items:center;gap:.7cqw;padding:0 1.6cqw;border-bottom:1px solid #22242a}
.bar0 i{width:.9cqw;height:.9cqw;border-radius:50%;background:#33363d}
.bar0 span{margin:0 auto;height:1.8cqw;width:34%;border-radius:99px;background:#22242a}
.face{position:relative;aspect-ratio:4/3;overflow:hidden}
.prog{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:22px}
.prog li{display:flex;flex-direction:column;gap:10px;font-size:13px;color:#6f747e;transition:color .4s}
.prog li::before{content:'';height:2px;border-radius:2px;background:#24262c;transition:background .4s}
.prog li.done::before{background:#4a4e58}
.prog li.on{color:${c.text};font-weight:600}
.prog li.on::before{background:var(--accent)}
.exl{margin-top:16px;font-size:13px;color:#6f747e}

.steps>li{min-height:88vh;display:flex;flex-direction:column;justify-content:center;gap:18px;padding:40px 0}
.steps>li:last-child{min-height:64vh}
.steps>li:first-child{min-height:70vh;justify-content:flex-start;padding-top:calc(50vh - 260px)}
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
.dm,.dots{display:none}

/* 장면 공통 (800×600) */
.frame{background:#fff;box-shadow:0 40px 90px -30px rgba(0,0,0,.9),0 0 0 1px rgba(255,255,255,.1)}
.bar0{background:#eef0f3;border-bottom-color:#e1e4e8}
.bar0 i{background:#cfd3d9}.bar0 span{background:#e1e4e8}
.cv{position:absolute;left:0;top:0;width:800px;height:600px;transform-origin:0 0;transform:scale(var(--k,.5));overflow:hidden;background:#fff;color:#10151c}
.cv *{transition:opacity .6s ease,transform .6s cubic-bezier(.2,.7,.2,1),background-color .4s,color .4s,border-color .4s,box-shadow .4s}
.tb{position:absolute;left:0;right:0;top:0;height:64px;display:flex;align-items:center;gap:14px;padding:0 40px;border-bottom:1px solid #eceef1;font-size:17px;color:#8a8f97}
.tb b{color:#10151c;font-size:20px}
.lb{font-size:20px;font-weight:600;color:#8a8f97}
.cv *,.cv *::before,.cv *::after{transition:none!important;animation:none!important}

/* 1 사업 이해 */
.s1 .qs{position:absolute;left:40px;right:40px;top:92px;display:flex;flex-direction:column;gap:14px}
.s1 .qq{display:grid;grid-template-columns:56px 1fr;align-items:center;row-gap:12px;padding:20px 24px;border-radius:16px;background:#f4f5f7;opacity:0;transform:translateY(12px)}
.s1 .qq em{font-style:normal;font-size:20px;font-weight:700;color:#3560FF}
.s1 .qq b{font-size:28px;font-weight:700;letter-spacing:-.02em}
.s1 .an{grid-column:2;display:block;height:12px;border-radius:6px;background:#dfe2e7;width:0;transition:width .9s ease!important}
.s1.a1 .q1,.s1.a3 .q2,.s1.a5 .q3{opacity:1;transform:none}
.s1.a2 .q1 .an{width:72%}.s1.a4 .q2 .an{width:58%}.s1.a6 .q3 .an{width:66%}
.s1 .lb{position:absolute;left:40px;top:448px}
.s1 .chips{position:absolute;left:40px;right:40px;top:486px;display:flex;flex-wrap:wrap;gap:12px}
.s1 .chips span{position:relative;padding:14px 22px;border-radius:999px;background:#fff;box-shadow:inset 0 0 0 2px #e3e5e9;font-size:24px;font-weight:600;opacity:0;transform:translateY(10px)}
.s1 .chips em{position:absolute;right:14px;top:-16px;font-style:normal;font-size:15px;font-weight:700;padding:5px 11px;border-radius:999px;background:#10151c;color:#fff;opacity:0;transform:translateY(6px)}
.s1.a7 .c1,.s1.a8 .c2,.s1.a9 .c3{opacity:1;transform:none}
.s1.a10 .c2{background:#3560FF;color:#fff;box-shadow:none}
.s1.a10 .c2 em{opacity:1;transform:none}

/* 2 문구 설계: 같은 디자인, 문구만 바뀜 */
.s2{background:#e9ebef}
.s2 .hx{position:absolute;left:28px;right:28px;border-radius:12px;overflow:hidden;background:#f6f5f2;box-shadow:0 10px 30px -14px rgba(16,21,28,.35)}
.s2 .h0{top:18px;height:214px}
.s2 .h1{top:262px;height:320px;box-shadow:0 0 0 3px #3560FF,0 18px 40px -16px rgba(53,96,255,.45)}
.s2 .nv{position:absolute;left:0;top:0;width:462px;height:50px;display:flex;align-items:center;gap:20px;padding:0 28px;font-size:13px;color:#5b616c}
.s2 .nv b{font-size:18px;font-weight:800;letter-spacing:-.04em;color:#15171b;margin-right:auto}
.s2 .hc{position:absolute;left:28px;top:64px;width:430px;display:flex;flex-direction:column;align-items:flex-start;gap:10px}
.s2 .h1 .hc{top:74px;gap:12px}
.s2 h4{margin:0;font-size:24px;line-height:1.3;font-weight:700;letter-spacing:-.04em;color:#8a8f97}
.s2 h4 s{text-decoration:line-through;text-decoration-color:#ff6b5e;text-decoration-thickness:2.5px}
.s2 .h1 h4{font-size:31px;color:#15171b}
.s2 mark{position:relative;background:linear-gradient(transparent 62%,rgba(53,96,255,.22) 62%);color:#2848d6;font-weight:700}
.s2 sup,.s2 .co.good i{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:#3560FF;color:#fff;font-size:12px;font-weight:700;font-style:normal;line-height:1}
.s2 sup{position:relative;top:-.9em;margin-left:3px;vertical-align:baseline}
.s2 .hc p{margin:0;font-size:14px;color:#8a8f97}
.s2 .h1 .hc p{font-size:16px;color:#3a4250}
.s2 .pf{display:flex;gap:8px}
.s2 .pf span{padding:6px 11px;border-radius:999px;background:#fff;box-shadow:inset 0 0 0 1px #dde0e5;font-size:13px;font-weight:600;color:#3a4250}
.s2 .hc b{margin-top:4px;display:inline-flex;align-items:center;padding:10px 17px;border-radius:8px;font-size:14px;font-weight:600}
.s2 .h0 .hc b{box-shadow:inset 0 0 0 1.5px #aab0b9;color:#8a8f97}
.s2 .h1 .hc b{padding:13px 22px;font-size:16px;background:#3560FF;color:#fff;box-shadow:0 0 0 5px rgba(53,96,255,.16)}
.s2 .h1 .hc b sup{background:#fff;color:#3560FF;top:-1.1em;margin-left:6px}
.s2 .hp{position:absolute;right:0;top:0;bottom:0;width:250px;background:center/cover}
.s2 .h0 .hp{filter:grayscale(.6) brightness(.95)}
.s2 .co{position:absolute;right:16px;bottom:16px;width:218px;margin:0;padding:12px 14px;list-style:none;border-radius:12px;background:rgba(255,255,255,.96);box-shadow:0 10px 24px -10px rgba(0,0,0,.35);display:flex;flex-direction:column;gap:8px;z-index:2}
.s2 .co li{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600;color:#15171b}
.s2 .co.bad li{color:#5b616c}
.s2 .co.bad i{font-style:normal;width:20px;height:20px;border-radius:50%;background:#ffe9e6;color:#e5483a;font-size:11px;font-weight:700;display:inline-flex;align-items:center;justify-content:center}
.s2 .lab,.s3 .lab{position:absolute;font-style:normal;font-size:15px;font-weight:700;padding:7px 13px;border-radius:999px;background:rgba(16,21,28,.82);color:#fff;z-index:3}
.s2 .lab{right:14px;top:14px}
.s2 .h1 .lab,.s3 .l1{background:#3560FF}
.s2 .ar{position:absolute;left:382px;top:229px;width:36px;height:36px;border-radius:50%;background:#10151c;display:flex;align-items:center;justify-content:center;z-index:4}

/* 3 디자인 설계: 브라우저 창 안에서 전·후 비교 */
.s3{background:#e9ebef}
.s3 .bz{position:absolute;left:40px;width:720px;height:26px;border-radius:12px 12px 0 0;background:#f9fafb;border-bottom:1px solid #e3e5e9;display:flex;align-items:center;gap:6px;padding:0 12px;z-index:4}
.s3 .z0{top:16px}.s3 .z1{top:310px}
.s3 .bz i{width:9px;height:9px;border-radius:50%;background:#d5d8dd}
.s3 .bz span{margin-left:10px;width:240px;height:16px;border-radius:5px;background:#eceef1;font-size:10px;color:#7d828c;display:flex;align-items:center;padding:0 8px}
.s3 .fr{position:absolute;left:40px;width:800px;height:268px;transform:scale(.9);transform-origin:0 0;overflow:hidden;border-radius:0 0 14px 14px;box-shadow:0 18px 36px -18px rgba(16,21,28,.45)}
.s3 .wa{top:42px}.s3 .wb{top:336px;box-shadow:0 0 0 3px #3560FF,0 18px 40px -16px rgba(53,96,255,.5)}
.s3 .wa .oh{height:56px}
.s3 .wa .ob{height:150px}.s3 .wa .ob h4{font-size:28px}
.s3 .wa .oc{display:none}
.s3 .wb .new{inset:0;clip-path:none;background:#0c0d10 var(--bg) left center/62% auto no-repeat}
.s3 .wb .new::before{background:linear-gradient(90deg,rgba(12,13,16,0) 34%,rgba(12,13,16,.8) 54%,#0c0d10 64%)}
.s3 .wb .nn{height:52px}
.s3 .wb .nc{left:440px;top:52px;gap:10px}
.s3 .wb .nc h4{font-size:29px}
.s3 .wb .nc p{display:none}
.s3 .wb .nc b{margin-top:2px;padding:11px 20px;font-size:15px}
.s3 .wb .nk{display:none}
.s3 .ar{position:absolute;left:382px;top:276px;width:36px;height:36px;border-radius:50%;background:#10151c;display:flex;align-items:center;justify-content:center;z-index:5;transform:rotate(90deg)}
.s3 .old,.s3 .new{position:absolute;inset:0}
.s3 .old{background:#fff;font-family:Dotum,'돋움',Gulim,'굴림',sans-serif;color:#333;letter-spacing:0}
.s3 .ut{height:26px;background:#f3f3f3;border-bottom:1px solid #ddd;display:flex;justify-content:flex-end;gap:14px;padding:0 20px;align-items:center;font-size:11px;color:#777}
.s3 .oh{height:66px;display:flex;align-items:center;justify-content:space-between;padding:0 22px}
.s3 .oh b{display:flex;align-items:center;gap:8px;font-size:25px;font-weight:700;color:#1d4f9a;letter-spacing:-1px}
.s3 .oh b i{width:26px;height:26px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#5c9be6,#1d4f9a)}
.s3 .oh span{font-size:12px;color:#666}.s3 .oh strong{color:#c0392b;font-size:16px}
.s3 .on{height:40px;background:linear-gradient(#3a74c8,#1d4f9a);display:flex;align-items:center;padding:0 10px}
.s3 .on span{padding:0 18px;color:#fff;font-size:14px;font-weight:700;border-right:1px solid rgba(255,255,255,.3)}
.s3 .ob{position:relative;height:220px;background:center/cover;display:flex;flex-direction:column;justify-content:center;padding:0 40px;gap:8px}
.s3 .ob::before{content:'';position:absolute;inset:0;background:rgba(20,60,130,.45)}
.s3 .ob h4,.s3 .ob p{position:relative;margin:0;color:#fff;text-shadow:2px 2px 3px rgba(0,0,0,.6)}
.s3 .ob h4{font-size:30px;font-weight:700;letter-spacing:-1px}.s3 .ob p{font-size:14px}
.s3 .od{position:absolute;left:40px;bottom:16px;display:flex;gap:6px}.s3 .od i{width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,.6)}
.s3 .oc{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;padding:14px 18px}
.s3 .oc>div{border:1px solid #d5d5d5;border-top:2px solid #1d4f9a;padding:8px 10px;height:132px}
.s3 .oc h6{margin:0 0 8px;display:flex;justify-content:space-between;font-size:13px;color:#1d4f9a}
.s3 .oc small{font-size:10px;color:#999;font-weight:400}
.s3 .oc p{margin:0;font-size:11px;line-height:1.8;color:#666}
.s3 .oc strong{font-size:16px;color:#c0392b}
.s3 .th{display:flex;gap:5px}.s3 .th i{flex:1;height:64px;background:#ddd}
.s3 .new{clip-path:inset(0 0 0 400px);background:#0c0d10 var(--bg) left center/62% auto no-repeat;color:#f4f5f7}
.s3 .new::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,13,16,0) 30%,rgba(12,13,16,.75) 52%,#0c0d10 64%)}
.s3 .nn{position:absolute;right:30px;top:0;height:64px;display:flex;align-items:center;gap:22px;font-size:14px;color:#b8bcc6}
.s3 .nn b{padding:9px 16px;border-radius:999px;background:#f4f5f7;color:#0c0d10;font-size:14px}
.s3 .nc{position:absolute;left:440px;top:118px;display:flex;flex-direction:column;align-items:flex-start;gap:14px}
.s3 .nc small{font-size:14px;font-weight:600;color:#6f8dff}
.s3 .nc h4{margin:0;font-size:38px;line-height:1.24;font-weight:700;letter-spacing:-.045em}
.s3 .nc p{margin:0;font-size:16px;line-height:1.6;color:#9aa0aa}
.s3 .nc b{margin-top:6px;padding:13px 22px;border-radius:999px;background:#3560FF;color:#fff;font-size:16px}
.s3 .nk{position:absolute;left:440px;right:30px;bottom:72px;margin:0;padding:18px 0 0;list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:16px;border-top:1px solid #2a2d35}
.s3 .nk li{display:flex;flex-direction:column;gap:2px;font-size:13px;color:#9aa0aa}
.s3 .nk strong{font-size:24px;color:#f4f5f7;letter-spacing:-.03em}
.s3 .dv{position:absolute;left:398px;top:0;bottom:0;width:4px;background:#fff;box-shadow:0 0 18px rgba(0,0,0,.35);z-index:2}
.s3 .dv i{position:absolute;left:50%;top:50%;width:48px;height:48px;margin:-24px 0 0 -24px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px rgba(0,0,0,.3)}
.s3 .l0{left:16px;top:16px}.s3 .l1{left:16px;top:16px}

/* 4 문의 전환 */
.s4 .lf{position:absolute;left:40px;top:100px;width:300px}
.s4 .ct{font-size:96px;font-weight:800;line-height:1;letter-spacing:-.04em;margin-top:10px}
.sw2{position:relative;display:inline-block;width:.6em;height:1em;vertical-align:bottom}
.sw2 em{position:absolute;left:0;top:0;font-style:normal}
.sw2 .vb{opacity:0;transform:translateY(14px);color:#3560FF}
.s4.a2 .sw2 .va{opacity:0;transform:translateY(-14px)}
.s4.a2 .sw2 .vb{opacity:1;transform:none}
.s4 .cd{font-size:22px;color:#5b6573;margin-top:14px}
.s4 .qb{display:flex;flex-direction:column;gap:12px;margin-top:40px}
.s4 .qb span{padding:14px 20px;border-radius:12px;background:#f4f5f7;font-size:22px;font-weight:600;color:#3a4250}
.s4 .fm{position:absolute;left:380px;right:40px;top:92px;padding:20px;border-radius:18px;background:#f4f5f7;display:flex;flex-direction:column}
.s4 .f{height:44px;margin-bottom:8px;padding:0 16px;border-radius:10px;background:#fff;box-shadow:inset 0 0 0 1px #e3e5e9;display:flex;align-items:center;justify-content:space-between;font-size:19px;color:#8a8f97;overflow:hidden;transition:height .6s ease,margin .6s ease,opacity .4s ease,box-shadow .4s!important}
.s4 .f em{font-style:normal;color:#10151c;font-weight:600;opacity:0}
.s4.a1 .x{height:0;margin-bottom:0;opacity:0}
.s4.a3 .f1 em,.s4.a4 .f2 em{opacity:1}
.s4.a3:not(.a4) .f1,.s4.a4:not(.a5) .f2{box-shadow:inset 0 0 0 2px #3560FF}
.s4 .sb{position:relative;height:52px;margin-top:4px;border-radius:10px;background:#10151c;color:#fff;font-size:19px}
.s4 .sb em{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-style:normal}
.s4 .sb .y1{opacity:0}
.s4.a5 .sb{background:#3560FF}
.s4.a5 .sb .x1{opacity:0}.s4.a5 .sb .y1{opacity:1}
.s4 .toast{position:absolute;left:50%;top:84px;transform:translate(-50%,-12px);opacity:0;padding:14px 22px;border-radius:12px;background:#10151c;color:#fff;font-size:20px;font-weight:600;white-space:nowrap;box-shadow:0 16px 40px rgba(0,0,0,.2)}
.s4.a6 .toast{opacity:1;transform:translate(-50%,0)}
.s4 .f{box-shadow:inset 0 0 0 1px #e3e5e9!important}
.s4 .sb{background:#3560FF}

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
  .sec{padding:56px 20px 24px}
  .intro{display:block}
  .big{font-size:clamp(28px,8.2vw,48px)}
  .big .ln+.ln{padding-left:0}
  .rule{margin-top:44px}
  .side{display:block}
  .side p{font-size:20px;padding-top:28px}
  .side p:nth-child(2){padding-top:3.2em}
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
  .how{display:block;margin-top:48px}
  .stick{display:none}
  .exl{margin:0 0 14px;font-size:13px}
  .steps{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;margin:0 -20px;padding:0 20px 4px;scroll-padding:0 20px;scrollbar-width:none;-webkit-overflow-scrolling:touch}
  .steps::-webkit-scrollbar{display:none}
  .steps>li,.steps>li:first-child,.steps>li:last-child{flex:0 0 min(84vw,380px);min-height:0;padding:10px 10px 24px;justify-content:flex-start;gap:10px;scroll-snap-align:start;background:#0e0f13;border:1px solid #1f2127;border-radius:20px}
  .slot{display:block;margin-bottom:10px}
  .slot .frame{border-radius:12px;box-shadow:none}
  .slot .bar0{display:none}
  .steps>li>.no,.steps>li>h3,.steps>li>.dm{padding:0 8px}
  .steps>li>.no{color:var(--accent-text)!important;font-size:13px}
  .steps>li>h3{font-size:22px;color:${c.text}!important}
  .steps>li>.ds,.steps>li>.rs{display:none}
  .steps>li>.dm{display:block;font-size:15px;line-height:1.65;color:var(--gray)}
  .dots{display:flex;justify-content:center;gap:8px;margin-top:20px}
  .dots i{width:6px;height:6px;border-radius:99px;background:#2a2d35;transition:width .3s,background .3s}
  .dots i.on{width:20px;background:var(--accent)}
  .dots i{cursor:pointer}
  .steps{cursor:grab}
  .steps.drag{cursor:grabbing;scroll-snap-type:none;user-select:none}
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
      this.mq = ({ matches: false, addEventListener() {} });
      this.mob = window.matchMedia('(max-width: 860px)');
      const root = this.attachShadow({ mode: 'open' });
      const title = c.titleLines.map((l) => `<span class="ln${l.accent ? ' ac' : ''}">${[...l.text].map((ch) => ch === ' ' ? ' ' : `<span class="ch">${esc(ch)}</span>`).join('')}</span>`).join('');
      const frames = scenes(I).map((s, i) => `<div class="frame" data-i="${i}"><div class="bar0"><i></i><i></i><i></i><span></span></div><div class="face">${s}</div></div>`).join('');
      root.innerHTML = `<style>${css(c.colors)}</style>
<div class="wrap">
<section class="sec${c.titleLines.length ? '' : ' nt'}" aria-labelledby="${c.titleLines.length ? 'bw-about-title' : 'bw-st-title'}">
  <div class="intro">
    <p class="kick">${esc(c.kicker)}</p>
    ${c.titleLines.length ? `<h2 class="big" id="bw-about-title" aria-label="${esc(c.titleLines.map((l) => l.text).join(' '))}"><span aria-hidden="true">${title}</span></h2>` : ''}
    ${c.side.length ? '<i class="rule"></i>' : ''}
    <div class="side">${c.side.map((p, i) => `<p class="${p.strong ? 'st' : ''}">${br(p.text).replace(/\*\*(.+?)\*\*/g, '<mark>$1</mark>')}</p>`).join('')}</div>
  </div>
  <div class="how">
    <div class="stick" aria-hidden="true">
      <div class="stage">${frames}</div>
      <ol class="prog">${c.steps.map((s) => `<li>${esc(s.no)} ${esc(s.name)}</li>`).join('')}</ol>
      <p class="exl">${esc(c.exampleLabel)}</p>
    </div>
    <div>
      <ol class="steps">${c.steps.map((s, i) => `<li data-i="${i}"><div class="slot" aria-hidden="true"></div><span class="no">${esc(s.no)} · ${esc(s.name)}</span><h3>${br(s.title)}</h3><p class="ds">${br(s.desc)}</p><p class="dm">${br(s.mdesc || s.desc)}</p><p class="rs"><small>결과물</small>${esc(s.result)}</p></li>`).join('')}</ol>
      <div class="dots" aria-hidden="true">${c.steps.map(() => '<i></i>').join('')}</div>
    </div>
  </div>
</section></div>`;
      const $ = (q) => root.querySelector(q), $$ = (q) => [...root.querySelectorAll(q)];
      this.wrap = $('.wrap');
      const isStill = () => this.getAttribute('still') === 'true' || this.mq.matches;

      const fr = $$('.frame'), cvs = fr.map((f) => f.querySelector('.cv')), stage = $('.stage'), stick = $('.stick');
      const slots = $$('.slot'), steps = $$('.steps>li'), prog = $$('.prog li');
      const exl = $('.exl'), dots = $$('.dots i'), track = $('.steps');
      const ro = new ResizeObserver((es) => es.forEach((e) => {
        const f = e.target; f.style.setProperty('--k', f.clientWidth / 800);
        if (stick.offsetHeight) stick.style.setProperty('--mh', stick.offsetHeight + 'px');
      }));
      fr.forEach((f) => ro.observe(f.querySelector('.face')));

      // 장면 재생: 한 번 끝나면 결과 화면 유지
      // 장면 반복 재생: 보이는 동안 계속 반복
      const loops = {};
      // 왼쪽 화면은 움직이지 않고 완성된 장면만 보여줍니다
      const finish = (i) => c.timeline[i].slice(0, i === 3 ? 4 : undefined).forEach((_, j) => cvs[i].classList.add('a' + (j + 1)));
      const stop = (i) => { const l = loops[i]; if (!l) return; l.ts.forEach(clearTimeout); clearTimeout(l.nx); delete loops[i]; };
      const play = (i) => {
        return finish(i);
        const tl = c.timeline[i], l = loops[i] = { ts: [], nx: 0 };
        const cyc = () => {
          tl.forEach((_, j) => cvs[i].classList.remove('a' + (j + 1)));
          l.ts = tl.map((t, j) => setTimeout(() => cvs[i].classList.add('a' + (j + 1)), t + 200));
          l.nx = setTimeout(cyc, tl[tl.length - 1] + 200 + 2200);
        };
        cyc();
      };
      this.applyStill = () => {
        this.wrap.classList.toggle('still', isStill());
        if (isStill()) fr.forEach((_, i) => { stop(i); finish(i); });
      };
      this.applyStill();

      // PC: 고정 화면 / 모바일: 단계마다 장면 배치
      const home = () => {
        if (this.mob.matches) { fr.forEach((f, i) => slots[i].appendChild(f)); track.before(exl); }
        else { fr.forEach((f) => stage.appendChild(f)); stick.appendChild(exl); }
        onScroll();
      };

      const lines = $$('.big .ln'), side = $('.side'), big = $('.big');
      let active = -1;
      const setStep = (n) => {
        if (n === active) return; active = n;
        fr.forEach((f, i) => f.classList.toggle('cur', i === n));
        steps.forEach((s, i) => s.classList.toggle('on', i === n));
        prog.forEach((p, i) => { p.classList.toggle('on', i === n); p.classList.toggle('done', i < n); });
      };
      const onScroll = () => {
        const vh = window.innerHeight;
        if (big) { const r = big.getBoundingClientRect(); if (isStill() || r.top < vh * 0.78) lines.forEach((ln) => ln.classList.add('on')); }
        $$('.eg>li').forEach((li) => { if (li.getBoundingClientRect().top < vh * 0.85) li.classList.add('in'); });
        const rl = $('.rule'); if (rl && rl.getBoundingClientRect().top < vh * 0.85) $('.intro').classList.add('in');
        if (this.mob.matches) {
          const vw = window.innerWidth; let best = 0, bd = 1e9;
          steps.forEach((s, i) => {
            const b = s.getBoundingClientRect();
            if (b.top < vh * 0.8 && b.bottom > 0 && b.left < vw * 0.75 && b.right > vw * 0.25) { s.classList.add('on'); play(i); } else stop(i);
            const d = Math.abs(b.left - 20); if (d < bd) { bd = d; best = i; }
          });
          dots.forEach((d, i) => d.classList.toggle('on', i === best));
          return;
        }
        let n = 0;
        steps.forEach((s, i) => { if (s.getBoundingClientRect().top < vh * 0.5) n = i; });
        setStep(n);
        const hb = $('.how').getBoundingClientRect(), inView = hb.top < vh * 0.7 && hb.bottom > vh * 0.3;
        fr.forEach((_, i) => (i === n && inView) ? play(i) : stop(i));
      };
      this.mob.addEventListener && this.mob.addEventListener('change', () => { active = -1; fr.forEach((_, i) => stop(i)); home(); });
      window.addEventListener('scroll', onScroll, { passive: true });
      track.addEventListener('scroll', onScroll, { passive: true });
      // 마우스로 끌어서 넘기기 + 점 눌러 이동
      const goTo = (i) => { const li = steps[Math.max(0, Math.min(steps.length - 1, i))]; track.scrollTo({ left: li.offsetLeft - track.offsetLeft - 20, behavior: 'smooth' }); };
      dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
      let dx = null, sl = 0, moved = false;
      track.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse' || !this.mob.matches) return; dx = e.clientX; sl = track.scrollLeft; moved = false; track.classList.add('drag'); });
      window.addEventListener('pointermove', (e) => { if (dx === null) return; const d = e.clientX - dx; if (Math.abs(d) > 4) moved = true; track.scrollLeft = sl - d; });
      window.addEventListener('pointerup', (e) => {
        if (dx === null) return;
        const d = e.clientX - dx; dx = null; track.classList.remove('drag');
        const w = steps[0].offsetWidth + 12, cur = Math.round(sl / w);
        goTo(Math.abs(d) > 40 ? cur + (d < 0 ? 1 : -1) : cur);
      });
      track.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
      track.addEventListener('dragstart', (e) => e.preventDefault());
      window.addEventListener('resize', onScroll);
      home();
    }
    attributeChangedCallback() { this.applyStill && this.applyStill(); }
  }
  customElements.define('bw-about', BWAbout);
})();
