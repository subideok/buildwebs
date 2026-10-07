# 빌드웹스 홈페이지 — 최종 적용 설명서

## 폴더 안 파일
- bw-*.js 10개 : 섹션별 코드 (모두 GitHub에 올림)
- assets/ : 로고, 사진, 이미지 출처(CREDITS.txt)
- imweb-code-widget.txt : 아임웹 코드 위젯에 넣을 코드 전체
- README.md : 이 설명서

## 섹션 순서
1 히어로·메뉴(bw-hero-v2) → 2 빌드웹스의 방식(bw-about) → 3 포트폴리오(bw-portfolio)
→ 4 고객후기(bw-reviews) → 5 빌드웹스만의 혜택(bw-why) → 6 제작 과정(bw-process)
→ 7 서비스(bw-services) → 8 자주 묻는 질문(bw-faq) → 9 무료 견적(bw-contact) → 10 푸터(bw-footer)

---

## STEP 1. GitHub에 올리기 (subideok/buildwebs 저장소)
1. github.com/subideok/buildwebs 접속
2. Add file → Upload files
3. 이 폴더 안의 bw-*.js 10개 + assets 폴더를 끌어다 놓기 (폴더 자체가 아니라 '안의 것들')
4. '변경 사항을 커밋합니다' 클릭
5. 아래 10개 주소를 한 번씩 열기 → 'finished' 나오면 정상 (옛 파일 기억 지우기)
   https://purge.jsdelivr.net/gh/subideok/buildwebs@main/bw-hero-v2.js
   https://purge.jsdelivr.net/gh/subideok/buildwebs@main/bw-about.js
   https://purge.jsdelivr.net/gh/subideok/buildwebs@main/bw-portfolio.js
   https://purge.jsdelivr.net/gh/subideok/buildwebs@main/bw-reviews.js
   https://purge.jsdelivr.net/gh/subideok/buildwebs@main/bw-why.js
   https://purge.jsdelivr.net/gh/subideok/buildwebs@main/bw-process.js
   https://purge.jsdelivr.net/gh/subideok/buildwebs@main/bw-services.js
   https://purge.jsdelivr.net/gh/subideok/buildwebs@main/bw-faq.js
   https://purge.jsdelivr.net/gh/subideok/buildwebs@main/bw-contact.js
   https://purge.jsdelivr.net/gh/subideok/buildwebs@main/bw-footer.js

## STEP 2. 아임웹 설정
1. 상단 편집 → 기본 상단(로고·메뉴) 모두 삭제 → 게시하기 → 상단 편집 종료
2. 본문에 섹션 하나 + 코드 위젯 하나 (이미 있으면 그대로 사용)
3. 섹션 설정: 전체 폭, 위아래 여백 0, 배경 없음 (PC·모바일 모두)
4. 코드 위젯에 'imweb-code-widget.txt' 내용 전체를 붙여넣기 (기존 코드는 지우고)
5. 게시 → 실제 사이트 주소에서 Ctrl + Shift + R 로 확인
※ 고정메뉴 설정은 끈 상태로 두세요.

## STEP 3. 도메인
아임웹 관리자 → 도메인 메뉴에서 구매한 도메인 연결. 별도 호스팅은 필요 없습니다.

---

## 나중에 수정할 때
1. 이 폴더의 해당 파일을 메모장 등으로 열어 맨 위 설정(CFG / BW_CONFIG)에서 글자·링크 수정 후 저장
2. GitHub에 그 파일만 다시 올리기 (Add file → Upload files → 커밋)
3. https://purge.jsdelivr.net/gh/subideok/buildwebs@main/파일이름.js 열기
4. 사이트 새로고침

### 자주 바꿀 곳
| 바꿀 것 | 파일 | 항목 |
|---|---|---|
| 메뉴·버튼 링크, 히어로 문구 | bw-hero-v2.js | menu, cta, primary, secondary, titleTop, rotating |
| 히어로 카드 이미지 | bw-hero-v2.js | gallery.cards → img: '이미지주소' |
| 포트폴리오 카드·링크 | bw-portfolio.js | items → url(홈페이지 주소), img(캡처 이미지) |
| 포트폴리오 속도 | bw-portfolio.js | speed(PC), mobileSpeed(모바일) |
| 후기 / 후기 더보기 링크 | bw-reviews.js | items / ctaCard.href |
| 혜택 목록 | bw-why.js | items, extras |
| 제작 과정 | bw-process.js | steps |
| 가격·상품 구성 | bw-services.js | plans |
| FAQ / 카카오톡 링크 | bw-faq.js | items / more.href |
| 문의 폼 전송 주소, 예산 | bw-contact.js | action, budgets |
| 연락처·사업자 정보 | bw-footer.js | contact, info |

새 이미지는 GitHub의 assets 폴더에 올리고 'assets/파일이름.jpg' 형식으로 적으면 됩니다.

---

## 공개 전 체크리스트
- [ ] 문의 폼 전송 연결 : 지금은 시연용(전송 안 됨). bw-contact.js의 action에 폼 서비스 주소(Formspree, 구글 폼 등)를 넣거나 아임웹 기본 문의 폼으로 대체
- [ ] 카카오톡 채널 주소 : bw-faq.js → more.href
- [ ] 고객후기 6개 : 현재 예시 문구 → 실제 후기로 교체
- [ ] 포트폴리오 : 현재 업종별 설계안 → 실제 작업물(url, img)로 교체
- [ ] 후기 더보기 링크 : bw-reviews.js → ctaCard.href
- [ ] 개인정보처리방침·이용약관 링크 : bw-footer.js → policy
- [ ] 휴대폰·태블릿 실제 화면 확인
