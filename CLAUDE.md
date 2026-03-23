# KMU-CS Alumni — 프로젝트 규칙

## 기술 스택 & 빌드

- **Astro 6** (SSG, Vite 7 기반)
- **React + TypeScript** (UI 컴포넌트)
- **vanilla-extract** v4.x (컴포넌트 스타일링)
  - `unstable_mode: 'transform'`은 **dev 서버 전용**. 빌드는 기본 모드 사용 (실제 .css 파일 생성)
  - v5.x는 빌드 실패하므로 사용 금지
- **Astro `<style>`** (페이지 레이아웃 스타일링) — `.astro` 파일에서는 vanilla-extract import 사용 금지 (CSS가 주입되지 않음)
- 패키지 매니저: **pnpm**

## CSS 규칙 (중요)

### .astro 파일에서 vanilla-extract를 직접 import하면 CSS가 적용되지 않는다
vanilla-extract는 React 컴포넌트(`client:load`)를 통해서만 CSS가 번들에 포함된다.
`.astro` 파일의 페이지/레이아웃 스타일은 반드시 **Astro 네이티브 `<style>` 태그**를 사용해야 한다.

```astro
<!-- 올바름 -->
<style>
  .my-grid { display: grid; }
</style>

<!-- 잘못됨 — CSS가 적용되지 않음 -->
import { myGrid } from '@/styles/pages/home.css';
```

### vanilla-extract `selectors`에서 data 속성/pseudo-class 사용 주의
`selectors`의 `&[data-*]`, `&:last-child` 등이 transform 모드에서 올바르게 동작하지 않을 수 있다.
대안: React 인라인 스타일 또는 className 토글로 상태 반영.

### `position: fixed`와 `backdrop-filter` 충돌
`backdrop-filter`가 있는 부모 안에 `position: fixed` 자식을 두면 뷰포트가 아닌 부모 기준으로 위치한다.
모바일 메뉴 등 fixed 오버레이는 해당 부모 **바깥**에 렌더링해야 한다.

### 페이지 간 CSS 보존 (View Transitions)
`ClientRouter` 사용 시 페이지 전환 시 `<link rel="stylesheet">`와 `<style>` 태그가 유실될 수 있다.
`astro:before-swap` 이벤트에서 현재 문서의 스타일을 새 문서에 복사하는 스크립트가 `BaseLayout.astro`에 있다. 제거 금지.

## 디자인 토큰

- **Primary Color**: KMU Blue `#1A5BC4` (`colors.kmuBlue[500]`)
- **서체**: 국민체(Kookminche) → Pretendard fallback
  - 국민체 woff2/ttf 파일은 `public/fonts/`에 배치
- **스페이싱**: 4px 기반 (`space` 토큰)
- **컨테이너**: max-width 1200px (`.page-container`), 640px (`.narrow-container`)

## 컴포넌트 아키텍처

- **Atomic Design**: atoms → molecules → organisms → templates
- React 컴포넌트의 `.css.ts`는 해당 컴포넌트 폴더에 위치
- 페이지 전용 스타일은 `.astro` 파일의 `<style>` 태그에 작성

## 콘텐츠

- 소식(articles): `src/content/articles/*.mdx`
- 뉴스(news): `src/content/news/*.mdx`
- 설정 JSON: `src/content/config/` (site, programs, initiatives, timeline)
- Hero 캐러셀 이미지: `public/images/hero/`에 넣으면 자동 반영 (빌드 시 fs.readdirSync)

## 레이아웃 필수 구조

```
#app-layout (min-height: 100vh, flex column)
├── Header (sticky)
├── main (flex: 1) — footer가 항상 하단에 위치하도록
└── Footer
```

## 주의사항

- `public/images/articles/` — 기사 이미지 저장 경로
- Hero 역사 년수는 timeline.json의 최소 연도에서 동적 계산됨 (하드코딩 금지)
- 모바일 메뉴는 인라인 스타일 사용 (vanilla-extract CSS 로딩 의존성 제거)
