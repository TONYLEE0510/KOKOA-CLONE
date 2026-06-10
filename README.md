# 2026 FIFA 월드컵 조별리그 정보 서비스

2026년 FIFA 월드컵 조별리그의 정보를 제공하고, 각 경기를 클릭하면 해당 개최도시의 호텔/맛집 정보를 보여주는 정적 웹 서비스입니다.

## ⚠️ 중요 사항

**조 편성 및 참고순위는 예시 데이터입니다.** 실제 2025년 12월 공식 조추첨 결과가 아닙니다. 실제 조추첨이 진행된 후에는 아래 "실제 조추첨 결과 반영하기" 섹션을 참고하여 데이터를 업데이트할 수 있습니다.

## 📁 폴더 구조

```
worldcup/
├── index.html           # 메인 페이지: 12개 조 선택 + 순위표 + 경기 목록
├── match.html           # 경기 상세: 팀 비교 + 호텔/맛집 링크 (?match=M001)
├── css/
│   └── style.css        # 그린/골드 월드컵 테마
├── js/
│   ├── data.js          # 데이터 로딩, 순위 계산, 외부 링크 생성
│   ├── groups.js        # 메인 페이지 로직
│   └── match.js         # 경기 상세 페이지 로직
├── data/
│   ├── teams.json       # 48개 팀 (국가명/국기/조 편성/참고순위)
│   ├── matches.json     # 72경기 (그룹/매치데이/일정/도시/팀)
│   └── cities.json      # 16개 개최도시 (실제 공개 정보)
└── README.md            # 본 파일
```

## 🚀 로컬 실행

정적 파일이므로 로컬 서버를 사용해야 합니다 (fetch() 때문에 `file://`에서는 작동 안 함):

```bash
cd /Users/tonylee/Desktop/AI_Class/worldcup
python3 -m http.server 8000
```

그 후 브라우저에서 `http://localhost:8000/index.html` 접속하면 됩니다.

## 📊 데이터 스키마

### `data/cities.json` (16개 개최도시 — 실제 정보)

```json
{
  "id": "guadalajara",
  "name": "Guadalajara",
  "stadium": "Estadio Akron",
  "country": "Mexico",
  "countryCode": "MX"
}
```

**필드 설명:**
- `id`: 내부 참조 ID (고유)
- `name`: 도시명 (호텔/맛집 검색에 사용)
- `stadium`: 경기장명
- `country`: 국가명
- `countryCode`: ISO 3166-1 alpha-2 국가 코드

**포함된 도시:**
- **미국 (11개)**: Atlanta, Boston, Dallas, Houston, Kansas City, Los Angeles, Miami, New York/New Jersey, Philadelphia, San Francisco Bay Area, Seattle
- **캐나다 (2개)**: Toronto, Vancouver
- **멕시코 (3개)**: Guadalajara, Mexico City, Monterrey

### `data/teams.json` (48개 팀 — 예시 데이터)

```json
{
  "id": "A1",
  "group": "A",
  "name": "대한민국",
  "flag": "🇰🇷",
  "ranking": 12
}
```

**필드 설명:**
- `id`: 팀 ID (`<조><슬롯>` 형식, A1~L4). **조 편성 업데이트 시 이 값은 유지** (고유 슬롯)
- `group`: 조 (A~L). **조 편성 변경 시 업데이트 필요**
- `name`: 국가명. **조 편성 변경 시 업데이트 필요**
- `flag`: 국기 이모지
- `ranking`: 참고순위 (1~48, 낮을수록 강함)

### `data/matches.json` (72경기 — 예시 일정)

```json
{
  "id": "M001",
  "group": "A",
  "matchday": 1,
  "date": "2026-06-11",
  "time": "16:00",
  "cityId": "guadalajara",
  "home": "A1",
  "away": "A2",
  "homeScore": null,
  "awayScore": null
}
```

**필드 설명:**
- `id`: 경기 ID (M001~M072)
- `group`: 조 (A~L)
- `matchday`: 라운드 (1, 2, 3)
- `date`: ISO 형식 날짜 (YYYY-MM-DD)
- `time`: 24시간 형식 시간 (HH:MM)
- `cityId`: 개최 도시 ID (cities.json 참조)
- `home`: 홈 팀 ID (teams.json 참조)
- `away`: 원정 팀 ID (teams.json 참조)
- `homeScore` / `awayScore`: 득점 (null = 미진행, 정수 = 최종 스코어)

## 🔄 실제 조추첨 결과 반영하기

2025년 12월에 공식 조추첨이 진행된 후 다음과 같이 업데이트하면 됩니다:

### 1단계: 팀 데이터 업데이트 (`data/teams.json`)

각 팀의 `name` 필드를 실제 국가명으로 교체합니다. `id`와 `group`은 **유지**합니다.

예시:
```json
// 변경 전
{ "id": "A1", "group": "A", "name": "대한민국", "flag": "🇰🇷", "ranking": 12 }

// 변경 후 (예: 포르투갈이 A조에 배치된 경우)
{ "id": "A1", "group": "A", "name": "포르투갈", "flag": "🇵🇹", "ranking": 10 }
```

### 2단계: 경기 일정 업데이트 (`data/matches.json`)

공식 일정이 발표되면:
- `date`, `time`: 실제 경기 일정으로 업데이트
- `cityId`: 해당 경기의 개최 도시로 변경
- `home`, `away`: 해당 조의 팀 ID로 변경

### 3단계: 경기 결과 업데이트 (경기 진행 후)

각 경기가 진행된 후:
```json
// 변경 전
{ "homeScore": null, "awayScore": null }

// 변경 후 (예: 3:1로 홈팀 승리)
{ "homeScore": 3, "awayScore": 1 }
```

## 🌐 외부 링크

### 호텔 검색 (Booking.com)

```
https://www.booking.com/searchresults.html?ss=<도시명, 국가명>
```

예: `https://www.booking.com/searchresults.html?ss=Guadalajara%2C%20Mexico`

### 맛집 검색 (Google Maps)

```
https://www.google.com/maps/search/?api=1&query=<도시명 맛집>
```

예: `https://www.google.com/maps/search/?api=1&query=Guadalajara%20%EB%A7%9B%EC%A7%91`

**API 키 불필요** — 검색 URL만 사용하므로 외부 서비스 가입이나 인증이 필요 없습니다.

## 📱 기능

### 메인 페이지 (`index.html`)

- **12개 조 선택**: A~L 조를 그리드로 표시, 클릭 시 활성화
- **순위표**: 각 조의 4팀 순위 (대회 시작 전엔 모두 0점)
- **경기 목록**: 각 조의 6경기를 카드로 표시 (매치데이, 일시, 팀, 도시)
- **URL 해시**: 마지막 선택한 조가 저장됨 (`#group-A`, `#group-B` 등)

### 경기 상세 페이지 (`match.html?match=M001`)

- **경기 정보**: 조, 매치데이, 일시
- **팀 비교**: 홈/원정 팀의 국기, 이름, 참고순위
- **개최지**: 도시, 경기장, 국가
- **외부 링크**: 호텔 검색(Booking.com), 맛집 검색(Google Maps)

## 🎨 디자인

- **색상**: 피치 그린 (#0a8754) + 트로피 골드 (#ffd700)
- **반응형**: 데스크탑, 태블릿, 모바일 모두 지원
- **기술**: 순수 HTML/CSS/JavaScript (프레임워크 없음)

## 🐛 알려진 제한사항

- 조 편성은 예시 데이터 (실제 조추첨 결과 아님)
- 참고순위는 설명 목적의 숫자 (실제 FIFA 랭킹 아님)
- 경기 결과는 모두 미진행 (null) 상태
- 순위 계산 시 헤드-투-헤드 같은 고급 타이브레이커는 적용 안 함

## 💡 커스터마이징

### 색상 변경

`css/style.css`의 `:root` 섹션을 수정:

```css
:root {
    --primary-color: #0a8754;  /* 원하는 색으로 변경 */
    --accent-color: #ffd700;
    /* ... */
}
```

### 블로그 제목 변경

HTML 파일들의 `<h1>` 요소 수정

## 📚 기술 스택

- HTML5
- CSS3 (Grid, Flexbox, 반응형 디자인)
- Vanilla JavaScript (ES6+)
- JSON (데이터 저장소)

---

**마지막 업데이트**: 2026년 6월 10일  
**조추첨 예상**: 2025년 12월 (실제 데이터로 업데이트 필요)
