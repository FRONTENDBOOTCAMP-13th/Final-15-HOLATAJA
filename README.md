# ⌨️ 온라인 키보드 타건샵 - HOLATAJA

<img src="https://github.com/user-attachments/assets/43fd8171-9487-4036-88cc-99f5c3005a1e"/>

## 📍 프로젝트 소개

> 멋쟁이사자처럼 프론트엔드 부트캠프 13th Final Project<br>
> 프로젝트명: HOLATAJA<br>
> 프로젝트 기간: 2025.07.07 ~ 2025.08.08

**HOLATAJA**는 키보드를 직접 만져보지 않고도  
**타건음과 스위치 특징을 온라인에서 체험하듯 비교할 수 있는 키보드 쇼핑몰 플랫폼**입니다.

기계식 키보드 시장이 커짐에 따라 수많은 제품과 스위치가 등장했고,  
이제는 단순히 디자인이나 옵션, 가격만으로는 선택하기 어려워졌습니다.

하지만 오프라인 매장에 가지 않는 이상  
**소비자가 타건음이나 스위치 특징을 직접 확인할 수 있는 방법은 매우 제한적**입니다.

이러한 문제의식에서 출발해,
**오프라인 매장에서의 경험을 온라인으로 구현한 '타건샵' 쇼핑몰**을 만들었습니다.

---

## 🔗 배포 주소

[👉 HOLATAJA 바로가기](https://final-15-holataja.vercel.app/)

## 👥 We are

<table>
  <tr>
    <td colspan="4" align="center" style="background-color:  padding: 15px; font-weight: bold; font-size: 20px; border-bottom: 2px solid #e1e4e8;">
      🚀 TEAM XV 🚀
    </td>
  </tr>
  <tr>
    <td align="center"><strong>임지윤</strong></td>
    <td align="center"><strong>최동환</strong></td>
    <td align="center"><strong>배희정</strong></td>
    <td align="center"><strong>황수곤</strong></td>
  </tr>

  <tr>
    <td align="center">
      <a href="https://github.com/whynotKeys" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/dong-fa" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hjb0304" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/sugonhwang" target="_blank" rel="noopener noreferrer">
        <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center"><strong>팀장 · PM</strong></td>
    <td align="center"><strong>팀원 · PL</strong></td>
    <td align="center"><strong>팀원</strong></td>
    <td align="center"><strong>팀원</strong></td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>상품 목록 화면/기능</li>
        <li>북마크 기능</li>
        <li>타건 사운드 체험 기능</li>
        <li>구매 내역 화면/기능</li>
        <li>일정 조율 및 문서 관리</li>
        <li>발표 자료 준비</li>
      <ul>
    </td>
    <td>
      <ul>
        <li>로그인 화면/기능</li>
        <li>회원가입 화면/기능</li>
        <li>회원 정보 화면/기능</li>
        <li>장바구니 비우기 기능</li>
        <li>구매 결제 기능</li>
      <ul>
    </td>
    <td>
      <ul>
        <li>상품 상세 화면/기능</li>
        <li>리뷰 화면/기능</li>
        <li>Q&A 화면/기능</li>
        <li>상품 검색 및 정렬 기능</li>
      <ul>
    </td>
    <td>
      <ul>
        <li>결제 페이지 화면</li>
        <li>장바구니 화면</li>
        <li>장바구니 수량 기능</li>
        <li>사운드 편집</li>
        <li>기획 및 발표</li>
      <ul>
    </td>
  </tr>
</table>

## 💡 기획 구조도

### 🎯 프로젝트 컨셉

온라인 쇼핑몰에서는 흔히 접하기 어려운 인터랙티브한 경험을 제공합니다.<br>
고객은 상품 상세 페이지에서 스위치의 정보를 확인하고, **타건음을 직접 들어보며 마치 오프라인 매장에서처럼 다양한 스위치를 비교 체험할 수 있습니다.**

### 🔀 사용자 플로우

메인 페이지 → 로그인/회원가입 → 상품 목록 탐색 → 상품 상세 페이지 → 축 정보 확인 및 타건음 청취 → 장바구니 담기 → 구매 → 마이페이지에서 구매/찜 내역 관리

---

## 💻 서비스 소개

### 🖥 메인 화면

![메인화면](https://github.com/user-attachments/assets/c897b62a-b4c3-43f4-9d73-ae6b26fee9af)

- 쇼핑몰 접속 시 현재 판매중인 상품이 케러셀 형태로 노출됩니다.
- 모든 주요 기능은 로그인 사용자만 이용 가능하며, 화면 우측 상단에서 로그인 및 회원가입을 진행할 수 있습니다.

---

### 🔐 로그인 & 회원가입

![I로그인화면1](https://github.com/user-attachments/assets/3e3acfec-fc6c-4d19-a233-0e1ab17d63d2)
![로그인화면2](https://github.com/user-attachments/assets/e11d5055-b40d-4b23-a12d-0f204e805a4d)

- 이메일, 비밀번호, 이름, 휴대폰번호, 주소 등 모든 항목에 대한 **유효성 검사** 처리
- **중복 계정 방지**, 비밀번호 일치 확인 등 UX 요소 구현
- 로그인 성공 시 **accessToken은 HTTP only, secure, sameSite 설정**으로 보안을 강화한 뒤<br> 쿠키에 저장 및 유저데이터와 분리하여 관리
- 가입 완료 시 로그인 모달이 실행되며, 사용자 이름이 출력됩니다.

---

### 👤 마이페이지

![마이페이지](https://github.com/user-attachments/assets/2d0b6745-0524-486a-ba35-8871d7418379)

- 로그인한 사용자만 접근 가능
- **회원 정보 수정, 구매 내역, 찜한 상품, 나의 Q&A, 구매 후기 내역** 등 사용자의 모든 활동 이력을 확인 및 관리 가능

---

### 🛒 상품 목록 & 상세 페이지

![상품상세1](https://github.com/user-attachments/assets/a6aa3d54-37a9-43c1-ac46-b88f802c6701)
![상품상세2](https://github.com/user-attachments/assets/5852712f-54ed-4434-ac18-53c0acd7e62c)

- 상품을 탭 또는 검색을 통해 필터링
- 상세 페이지에서는 다음과 같은 기능을 제공합니다.
  - 수량 조절 및 옵션 선택
  - 찜하기
  - 장바구니 담기 & 구매하기
  - 구매 후기 작성 및 Q&A 작성

**✅ 핵심 기능 - ‘타건 사운드 체험’**  
→ 해당 키보드에 내장된 스위치의 **타건음을 직접 들어볼 수 있습니다.**

---

### 🧺 장바구니

![장바구니](https://github.com/user-attachments/assets/218298da-936e-4adf-a6fa-e0fc977e9703)

- 로그인 사용자만 접근 가능
- 수량 조절, 상품 삭제, 쇼핑 계속하기 버튼 등 기능 제공
- 주문하기를 누르면 결제 페이지로 상품이 전달됩니다.

---

### 💳 결제하기

![결제](https://github.com/user-attachments/assets/6ab672e9-b5da-4268-ac26-7c4a7273ccc1)

- 배송지 정보는 로그인한 회원의 정보로 자동 입력되며 수정도 가능합니다.
- 다양한 결제 수단
  - 간편 결제(토스페이, 네이버 페이)
  - 신용/체크카드
  - 무통장 입금

---

### 📦 구매 내역

![구매내역1](https://github.com/user-attachments/assets/480efbb3-c302-47f5-b58f-92859b67f0af)
![구매내역2](https://github.com/user-attachments/assets/19b25dd5-8fcf-4b47-978b-67d1b208b826)

- 결제 완료 후, 구매 내역 페이지에서 다음 정보를 확인할 수 있습니다.
  - 제품 정보
  - 배송 상태
  - 결제 수단 등 확인 가능

---

## 🧪 QA 결과

각 페이지 별 데스크탑 / 모바일에 따른 성능, 접근성, 권장 사항, SEO 최적화 테스트 진행

### 🔍 측정 및 분석 결과 요약

| 항목            | 웹     | 모바일 | 요약 내용                                                                                    |
| --------------- | ------ | ------ | -------------------------------------------------------------------------------------------- |
| **성능**        | 99.075 | 90.275 | 모바일 성능 개선 필요                                                                        |
| **SEO**         | 93.3   | 93.6   | ※ 보안을 위해 서치 제한 걸어둔 페이지 제외                                                   |
| **접근성**      | 73.3   | 71.35  | - aria-label 없는 아이콘 버튼에 aria-label 추가 필요 <br> - 라벨 없는 Input에 라벨 추가 필요 |
| **권장사항**    | 100    | 100    |                                                                                              |
| **반응형**      | 양호   | 양호   | 모든 기기에서 정상 동작                                                                      |
| **코드 유효성** | O      | O      |                                                                                              |

### 📌 향후 개선 계획

- 모바일 성능 개선
- 접근성 강화
  - Label 없는 Input 수정
  - aria-label 없는 아이콘 버튼 수정

---

## 🛠 기술 스택

|       <div align="left">분류</div>       | <div align="left">도구</div>                                                                                                                                                                                                                                                                                                              |
| :--------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    <div align="left">개발 언어</div>     | ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)                                                                                                                                                                                                                         |
|    <div align="left">프레임워크</div>    | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)                                                                                                                               |
|  <div align="left">Design / Style</div>  | ![Figma](https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2306B6D4?style=for-the-badge&logo=Tailwind%20CSS&logoColor=white) ![Lucide](https://img.shields.io/badge/Lucide-%23F56565?style=for-the-badge&logo=Lucide&logoColor=black) |
|    <div align="left">협업 도구</div>     | ![Discord](https://img.shields.io/badge/Discord-%235865F2?style=for-the-badge&logo=Discord&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-%23000000?style=for-the-badge&logo=Notion&logoColor=white)                                                                                                                      |
|    <div align="left">버전 관리</div>     | ![Github](https://img.shields.io/badge/Github-%23181717?style=for-the-badge&logo=Github&logoColor=white)                                                                                                                                                                                                                                  |
|  <div align="left">상태 관리 도구</div>  | ![Zustand](https://img.shields.io/badge/Zustand-%23FF7E29?style=for-the-badge)                                                                                                                                                                                                                                                            |
|        <div align="left">DB</div>        | ![MongoDB](https://img.shields.io/badge/MongoDB-%2347A248?style=for-the-badge&logo=MongoDB&logoColor=black)                                                                                                                                                                                                                               |
| <div align="left">유효성 검증 도구</div> | ![Zod](https://img.shields.io/badge/Zod-%233E67B1?style=for-the-badge&logo=Zod&logoColor=black)                                                                                                                                                                                                                                           |
|    <div align="left">개발 환경</div>     | ![VSCode](https://img.shields.io/badge/VSCode-%232F80ED?style=for-the-badge&logoColor=white)                                                                                                                                                                                                                                              |
|       <div align="left">배포</div>       | ![Vercel](https://img.shields.io/badge/Vercel-%23000000?style=for-the-badge&logo=Vercel&logoColor=white&color=black)                                                                                                                                                                                                                      |

## 📂 프로젝트 구조 및 기타

```
.
├── 📁 app
├── ├── 🔐 auth
├── │   └── 🔓 login
├── │   │   ├── 📄 page.tsx
├── │   │   ├── 🧾 LoginForm.tsx
├── │   └── 📝 signup
├── │       ├── 📄 page.tsx
├── │       └── 🧾 LoginForm.tsx
├── ├── 🛒 carts
├── │   ├── 📄 page.tsx
├── │   └── 🧩 components
├── │       ├── 🧺 CartContainer.tsx
├── │       └── 🃏 CartProductCard.tsx
├── │       └── 💳 CartSummary.tsx
├── ├── 💰 checkout
├── │   └── 📄 page.tsx
├── ├── 🧪 components-preview
├── │   └── 📄 page.tsx
├── ├── 👤 my
├── │   ├── 📄 page.tsx
├── │   ├── 🆔 [id]
├── │   │   └── 📄 page.tsx
├── │   └── 🧩 components
├── │       ├── 📦 OrderTab.tsx
├── │       ├── ❤️ BookmarkTab.tsx
├── │       ├── 📝 ReviewTab.tsx
├── │       └── ❓ QnATab.tsx
├── ├── 🏷️ products
├── │   ├── 📄 page.tsx
├── │   └── 🆔 [id]
├── │   │   └── 📄 page.tsx
├── │   └── 🧩 components
└── └── 🏠 page.tsx
```
