# 빌드웹스 홈페이지 — 아임웹 적용 가이드

## 0. 이 폴더 안의 파일
- bw-*.js 10개: 섹션별 코드 (히어로·메뉴 → 푸터 순)
- assets/: 로고, 사진, 이미지 출처(CREDITS.txt)
- README.md: 이 설명서

## 1. 올릴 파일
이 폴더 전체를 GitHub 저장소 하나에 올립니다. (예: 저장소 이름 buildwebs)
- bw-hero-v2.js, bw-about.js, bw-portfolio.js, bw-reviews.js, bw-why.js, bw-process.js, bw-services.js, bw-faq.js, bw-contact.js, bw-footer.js
- assets/ 폴더(로고, 사진)

올리면 아래 주소로 누구나 불러올 수 있습니다(무료 CDN).
https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/

## 2. 아임웹 설정
1) 사이트 설정 → 헤더 코드(HEAD)에 아래를 붙여넣기 (subideok만 바꾸기)

<script>window.BW_ASSET_BASE = 'https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/';</script>
<script defer src="https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/bw-hero-v2.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/bw-about.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/bw-portfolio.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/bw-reviews.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/bw-why.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/bw-process.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/bw-services.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/bw-faq.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/bw-contact.js"></script>
<script defer src="https://cdn.jsdelivr.net/gh/subideok/buildwebs@main/bw-footer.js"></script>
<style>html{scroll-behavior:smooth}body{background:#050507}</style>

2) 메인 페이지: 아임웹 기본 헤더·푸터는 숨기기(디자인 모드 → 헤더/푸터 사용 안 함).
   빌드웹스 메뉴와 푸터가 코드 안에 들어 있습니다.

3) 섹션 하나를 만들고 '코드' 위젯을 넣은 뒤 아래를 붙여넣기.
   섹션 설정: 전체 폭, 위아래 여백 0, 배경 없음.

<bw-hero-v2></bw-hero-v2>
<bw-about></bw-about>
<bw-portfolio></bw-portfolio>
<bw-reviews></bw-reviews>
<bw-why></bw-why>
<bw-process></bw-process>
<bw-services></bw-services>
<bw-faq></bw-faq>
<bw-contact></bw-contact>
<bw-footer></bw-footer>

순서를 바꾸고 싶으면 줄 순서만 바꾸면 됩니다.

## 3. 링크·문구 수정 방법
방법 A (추천): 파일은 그대로 두고, 헤더 코드에 덮어쓰기 설정을 추가합니다. 바꾼 항목만 적으면 됩니다.

<script>
window.BW_FAQ_CONFIG = { more: { href: 'https://pf.kakao.com/_채널주소' } };
window.BW_PORTFOLIO_CONFIG = { items: [ /* 카드 전체 목록을 다시 적어야 합니다 */ ] };
window.BW_CONTACT_CONFIG = { action: '폼 전송 주소' };
</script>

설정 이름: BW_HERO_CONFIG, BW_ABOUT_CONFIG, BW_PORTFOLIO_CONFIG, BW_REVIEWS_CONFIG, BW_WHY_CONFIG,
BW_PROCESS_CONFIG, BW_SERVICES_CONFIG, BW_FAQ_CONFIG, BW_CONTACT_CONFIG, BW_FOOTER_CONFIG
※ 목록(배열)은 일부만 바꿀 수 없고 전체를 다시 적어야 합니다.

방법 B: 각 파일 맨 위 CFG(히어로는 BW_CONFIG)를 직접 고친 뒤 GitHub에 다시 올립니다.
※ jsDelivr는 캐시 때문에 바로 반영되지 않을 수 있습니다. 바로 보려면
  https://purge.jsdelivr.net/gh/subideok/buildwebs@main/파일이름.js 에 한 번 접속하세요.

자주 바꿀 곳
- 메뉴·견적 버튼 링크: bw-hero-v2.js → menu, cta, primary, secondary
- 포트폴리오: bw-portfolio.js → items (url: 홈페이지 주소, img: 캡처 이미지)
- 히어로 카드 묶음: bw-hero-v2.js → gallery.cards (img: 캡처 이미지)
- 후기: bw-reviews.js → items
- 가격: bw-services.js → plans[].price
- 카카오톡: bw-faq.js → more.href
- 연락처·사업자 정보: bw-footer.js → contact, info

## 4. 꼭 확인할 것
- 문의 폼은 지금 시연용(전송 안 됨)입니다. bw-contact.js의 action에 폼 서비스 주소(예: 구글 폼, Formspree)를 넣거나,
  그 자리에 아임웹 기본 문의 폼 위젯을 쓰세요.
- 상단 메뉴가 스크롤할 때 따라오지 않으면, 아임웹 섹션 설정의 애니메이션 효과를 꺼 주세요.
- 헤더 코드 · 코드 위젯은 아임웹 요금제에 따라 사용이 제한될 수 있습니다.
- 후기 6개는 예시 문구입니다. 실제 후기로 바꾼 뒤 공개하세요.
- 이미지 출처: assets/CREDITS.txt

## 5. 파일을 고친 뒤 다시 올릴 때
1) GitHub 저장소에서 해당 파일을 열고 연필 아이콘 → 수정 → 저장(Commit)
2) https://purge.jsdelivr.net/gh/subideok/buildwebs@main/고친파일이름.js 접속
3) 아임웹 사이트를 새로고침해 확인

## 6. 섹션 구성 (위에서부터)
1. bw-hero-v2 — 상단 메뉴 + 첫 화면(포트폴리오 카드 묶음)
2. bw-about — 빌드웹스의 방식(스크롤 시연 4단계)
3. bw-portfolio — 포트폴리오(흐르는 두 줄 + 크게 보기)
4. bw-reviews — 고객후기
5. bw-why — 빌드웹스만의 혜택 + 기본 혜택 21가지
6. bw-process — 제작 과정 8단계
7. bw-services — 서비스(QUICK · STANDARD · PRO · PREMIUM)
8. bw-faq — 자주 묻는 질문
9. bw-contact — 무료 견적 문의
10. bw-footer — 푸터
