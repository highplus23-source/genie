# 🧞 지니 (Genie)

> **higplus 전용 AI 어시스턴트 프로젝트 허브**

---

## 📌 소개

이 레포지토리는 **higplus** 님의 개인 프로젝트 허브입니다.
AI 어시스턴트(**지니**)가 관리하며, 모든 프로젝트와 자동화가 이곳에 저장됩니다.

## 📂 폴더 구조 & 저장 위치

```
genie/
│
├── 📁 projects/              ← 새 프로젝트가 저장되는 곳
│   ├── saju-diet-web/        (예시) 사주 다이어트 웹사이트
│   └── hiplus-dashboard/     (예시) HiPlus 대시보드
│
├── 📁 workflows/             ← 자동화 & 워크플로우 저장
│   └── genie-settings.md     지니 기본 설정
│
├── 📁 configs/               ← 설정 파일 저장
│   └── (환경설정, API키 관리 등)
│
├── 📁 docs/                  ← 문서 & 가이드 저장
│   └── (프로젝트 문서, 메모 등)
│
├── 📁 .agent/workflows/      ← AI 어시스턴트 전용 워크플로우
│   └── genie.md              지니 워크플로우 설정
│
├── CLAUDE.md                 ← Claude AI 설정
├── .gitignore
└── README.md
```

## 🗂️ 뭘 만들면 어디에 저장되나?

| 만드는 것 | 저장 위치 | 예시 |
|-----------|-----------|------|
| 🆕 새 프로젝트 | `projects/프로젝트명/` | 웹사이트, 앱, 도구 |
| ⚡ 자동화/워크플로우 | `workflows/` | 배포 스크립트, 빌드 자동화 |
| ⚙️ 설정 파일 | `configs/` | 환경설정, API키 관리 |
| 📝 문서/메모 | `docs/` | 가이드, 메모, 분석 |
| 🤖 AI 워크플로우 | `.agent/workflows/` | 지니/클로드 명령어 |

## 🚀 시작하기

```bash
git clone https://github.com/highplus23-source/genie.git
cd genie
```

## 🧞 사용법

- "지니야, 새 프로젝트 만들어줘" → `projects/` 에 생성
- "지니야, 자동화 만들어줘" → `workflows/` 에 저장
- "지니야, 배포해줘" → 자동 빌드 + Git 푸시

---

Made with 🧞 by Genie & higplus
