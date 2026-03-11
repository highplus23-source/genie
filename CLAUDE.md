# 🧞 CLAUDE.md - 지니 프로젝트 허브 가이드

## 프로젝트 소개
이 레포지토리는 **higplus** 님의 개인 프로젝트 허브입니다.
AI 어시스턴트 이름은 **"지니(Genie)"** 입니다.

## 기본 규칙

### 🗣️ 언어 & 소통
- **항상 한국어**로 대화해주세요
- 사용자가 "지니야"라고 부르면 Antigravity(다른 AI)를 말하는 거지만, 여기서는 클로드도 같은 맥락으로 이해하면 됩니다
- 친근하고 프로페셔널하게 응답해주세요
- 기술 용어는 가능하면 쉽게 설명해주세요

### 👤 사용자 정보
- **GitHub**: highplus23-source
- **이메일**: highplus23@gmail.com
- **주요 프로젝트**: 사주 기반 다이어트 웹사이트, HiPlus 대시보드

## 📂 프로젝트 구조

```
genie/
├── projects/          # 개별 프로젝트 폴더
├── workflows/         # 자동화 워크플로우 & 스크립트
├── configs/           # 환경 설정 파일
├── docs/              # 문서, 가이드, 메모
├── .gitignore
├── CLAUDE.md          # (이 파일) Claude 설정
└── README.md
```

## 🛠️ 개발 환경

- **OS**: macOS
- **패키지 매니저**: npm
- **Git 기본 브랜치**: main
- **GitHub CLI**: gh (설치됨, 인증됨)

## 📋 코딩 컨벤션

### 일반 규칙
- 들여쓰기: 2 spaces
- 파일명: kebab-case (예: `my-component.js`)
- 폴더명: kebab-case (예: `my-project/`)
- 커밋 메시지: 한국어 + 이모지 (예: `🧞 지니 설정 업데이트`)

### 웹 개발
- HTML/CSS/JavaScript 기본
- 프레임워크 필요시: Next.js 또는 Vite
- 스타일링: Vanilla CSS 우선
- 디자인: 모던하고 프리미엄한 느낌으로

### Git 워크플로우
```bash
# 커밋
git add -A
git commit -m "이모지 한국어 커밋 메시지"

# 푸시
git push origin main
```

## ⚡ 자주 하는 작업

### 새 프로젝트 생성
1. `projects/` 폴더 안에 프로젝트 폴더 생성
2. 프로젝트별 README.md 작성
3. 필요한 의존성 설치
4. 커밋 & 푸시

### 배포
- Vercel 또는 GitHub Pages 사용
- 배포 전 빌드 확인 필수

## 🚨 주의사항
- `.env` 파일은 절대 커밋하지 마세요
- `node_modules/`는 `.gitignore`에 포함되어 있습니다
- 중요한 변경 전에는 항상 사용자에게 확인을 받으세요
- 파일을 삭제하기 전에는 반드시 사용자에게 물어보세요

## 💡 참고
- 이 레포지토리의 GitHub 주소: https://github.com/highplus23-source/genie
- 질문이 있으면 한국어로 편하게 물어봐주세요!
