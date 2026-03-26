# KMU-CS Alumni

국민대학교 소프트웨어융합대학 졸업 동문회 웹사이트입니다.

## 기술 스택

- **Framework**: Astro 6 (SSG)
- **UI**: React + TypeScript
- **Styling**: vanilla-extract (컴포넌트), Astro scoped styles (페이지)
- **Content**: MDX (Astro Content Collections)
- **Design**: Atomic Design (atoms / molecules / organisms / templates)
- **Font**: 국민체(Kookminche) + Pretendard
- **Hosting**: GitHub Pages

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버
pnpm dev

# 빌드
pnpm build

# 빌드 미리보기
pnpm preview
```

## 프로젝트 구조

```
src/
├── components/          # React 컴포넌트 (Atomic Design)
│   ├── atoms/           # Button, Badge, Heading, Text, Tag
│   ├── molecules/       # ArticleCard, ProgramCard, TimelineItem, SectionHeader
│   ├── organisms/       # Header, Footer, Hero
│   └── templates/       # MainLayout
├── content/
│   ├── articles/        # 소식 MDX 파일
│   ├── news/            # 뉴스 MDX 파일
│   └── config/          # site.json, programs.json, timeline.json, initiatives.json
├── layouts/             # BaseLayout, ArticleLayout
├── pages/               # Astro 페이지 라우팅
├── styles/              # 디자인 토큰, 테마
│   ├── tokens/          # colors, typography, spacing
│   └── pages/           # 페이지별 스타일 (레거시)
└── content.config.ts    # Content Collections 스키마
public/
├── fonts/               # 국민체 woff2
└── images/              # 로고, hero, articles 이미지
```

## 콘텐츠 작성

### 소식 (Articles)

`src/content/articles/`에 MDX 파일을 추가합니다.

```yaml
---
title: "제목"
excerpt: "요약"
publishedAt: "2025-03-24"
author: "작성자"
coverImage: "/images/articles/photo.jpg"  # 선택
tags: ["태그1", "태그2"]
category: "notice"  # notice | interview | event | story | column | news
---
```

### 뉴스 (News)

`src/content/news/`에 MDX 파일을 추가합니다.

```yaml
---
title: "뉴스 제목"
excerpt: "요약"
publishedAt: "2025-03-24"
author: "편집팀"
tags: ["태그"]
source: "출처 이름"       # 선택
sourceUrl: "https://..."  # 선택
---
```

### 이미지

- 대표 이미지: frontmatter의 `coverImage` 필드
- 본문 이미지: `![설명](/images/articles/photo.jpg)`
- Hero 캐러셀: `public/images/hero/`에 이미지를 넣으면 자동 반영

## 주요 설정 파일

| 파일 | 설명 |
|------|------|
| `src/content/config/site.json` | 사이트 메타, 네비게이션, 외부 링크 |
| `src/content/config/programs.json` | 동문회 프로그램 목록 |
| `src/content/config/initiatives.json` | 대학 주요 사업 목록 |
| `src/content/config/timeline.json` | 연혁 타임라인 |
