# Tomneng's Blog

Jekyll과 Hydejack 테마를 사용해서 만든 개인 블로그입니다.

## 🚀 특징

- **모던한 디자인**: Hydejack 테마 기반의 깔끔하고 모던한 디자인
- **반응형 레이아웃**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- **빠른 로딩**: 정적 사이트 생성으로 빠른 로딩 속도
- **검색 기능**: 블로그 포스트 검색 및 카테고리 필터링
- **다크/라이트 테마**: 사용자 선호에 따른 테마 전환
- **SEO 최적화**: 검색 엔진 최적화

## 🛠️ 기술 스택

- **Jekyll**: 정적 사이트 생성기
- **Hydejack**: Jekyll 테마
- **HTML5/CSS3**: 마크업 및 스타일링
- **JavaScript**: 인터랙티브 기능
- **GitHub Pages**: 호스팅

## 📁 프로젝트 구조

```
Tomneng.github.io/
├── _config.yml          # Jekyll 설정 파일
├── Gemfile              # Ruby 의존성 관리
├── index.html           # 메인 페이지
├── about.html           # About 페이지
├── blog.html            # 블로그 목록 페이지
├── _layouts/            # 레이아웃 템플릿
│   ├── default.html     # 기본 레이아웃
│   └── post.html        # 포스트 레이아웃
├── _posts/              # 블로그 포스트
│   └── 2024-01-15-welcome-to-my-blog.md
├── assets/              # 정적 자산
│   ├── css/
│   │   └── main.css     # 메인 스타일시트
│   └── js/
│       └── main.js      # 메인 JavaScript
└── README.md            # 프로젝트 설명
```

## 🚀 로컬 개발

### 사전 요구사항

- Ruby 2.5 이상
- Jekyll 4.0 이상

### 설치 및 실행

1. **의존성 설치**
   ```bash
   bundle install
   ```

2. **로컬 서버 실행**
   ```bash
   bundle exec jekyll serve
   ```

3. **브라우저에서 확인**
   ```
   http://localhost:4000
   ```

## 📝 새 포스트 작성

`_posts/` 폴더에 새로운 Markdown 파일을 생성하세요:

```markdown
---
layout: post
title: "포스트 제목"
date: 2024-01-15
author: Tomneng
categories: [카테고리]
tags: [태그1, 태그2]
excerpt: "포스트 요약"
---

포스트 내용...
```

## 🎨 커스터마이징

### 색상 테마 변경

`assets/css/main.css`에서 CSS 변수를 수정하세요:

```css
.hydejack-theme {
    --accent-color: #667eea;
    --accent-color-dark: #5a6fd8;
    /* 추가 색상 변수들... */
}
```

### 새로운 페이지 추가

1. 루트 디렉토리에 새로운 HTML 파일 생성
2. Front Matter 추가:

```html
---
layout: default
title: 페이지 제목
---
```

## 📦 배포

### GitHub Pages 배포

1. **저장소 설정**
   - GitHub 저장소 생성
   - Settings > Pages에서 GitHub Pages 활성화

2. **자동 배포**
   - `main` 브랜치에 푸시하면 자동으로 배포됩니다

3. **도메인 설정** (선택사항)
   - Settings > Pages에서 Custom domain 설정

## 🔧 설정

### _config.yml 주요 설정

```yaml
# 사이트 정보
title: Tomneng's Blog
email: your-email@example.com
description: 블로그 설명

# URL 설정
url: "https://tomneng.github.io"
baseurl: ""

# 테마 설정
theme: jekyll-theme-cayman

# 플러그인
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여

버그 리포트나 기능 제안은 언제든지 환영합니다!

## 📞 연락처

- **GitHub**: [github.com/tomneng](https://github.com/tomneng)
- **이메일**: your-email@example.com

---

**Happy Blogging!** 🎉 