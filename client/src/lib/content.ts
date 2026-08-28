/** 서울국제여행사 content model — 1972년 창립 미주 한인 여행 전문. 상담 중심, 가격/예약 없음. */
export const assets = {
  hero: "/seoultravel-hero.jpg",
  asia: "/seoultravel-asia.jpg",
  europe: "/seoultravel-europe.jpg",
  mark: "/logo.gif",
};

export const FOUNDED = 1972;

/* 상담 연락처 — 실제 공개 정보 반영 */
export const contact = {
  phone: "770-458-2242",
  phoneHref: "tel:+17704582242",
  email: "seoultravel@gmail.com",
  address: "1291 Old Peachtree Rd. NW #228, Suwanee, GA 30024",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=1291+Old+Peachtree+Rd+NW+228+Suwanee+GA+30024",
  hours: "연중무휴 전화·이메일 상담",
};

export const navItems = [
  ["여행 상품", "#services"],
  ["지역별 여행", "#destinations"],
  ["추천 여행", "#curated"],
  ["회사 소개", "#about"],
  ["여행 상담", "#contact"],
];

/* 여행 상품 카테고리 — 실제 취급 분야. 모두 상담으로 연결 */
export const services = [
  { icon: "Mountain",    label: "미국·캐나다 관광", hint: "미서부 캐년·요세미티, 미동부 뉴욕·나이아가라, 캐나다 록키" },
  { icon: "Ship",        label: "중남미·크루즈",   hint: "멕시코·캔쿤, 페루, 쿠바, 코스타리카, 크루즈 여행" },
  { icon: "Landmark",    label: "유럽 특선",       hint: "서유럽·동유럽·북유럽 정통 및 실속 코스" },
  { icon: "Plane",       label: "아시아·한국",     hint: "한국(고국방문), 일본, 중국, 동남아시아" },
  { icon: "Ticket",      label: "최저가 항공권",   hint: "대한항공·델타 공식대리점 · ARC 정식 대리점" },
  { icon: "Stethoscope", label: "고국방문 건강검진", hint: "한국 방문 일정에 맞춘 종합 건강검진 안내" },
];

/* 상담 신청 폼 — 관심 분야 */
export const inquiryTopics = [
  "미국·캐나다 관광", "중남미·크루즈", "유럽 여행",
  "아시아·한국 여행", "최저가 항공권", "고국방문 건강검진", "기타 문의",
];

export const destinationTabs = [
  { id: "all", label: "전체", count: "04" },
  { id: "asia", label: "아시아·한국", count: "01" },
  { id: "americas", label: "미국·캐나다", count: "01" },
  { id: "europe", label: "유럽", count: "01" },
  { id: "latam", label: "중남미", count: "01" },
];

export const destinations = [
  { id: "asia", region: "ASIA / KOREA", title: "한국과 아시아", subtitle: "고국 방문부터 일본·중국·동남아까지", image: assets.asia, tone: "light", meta: "한국 · 일본 · 중국 · 동남아" },
  { id: "americas", region: "USA / CANADA", title: "미국과 캐나다", subtitle: "캐년·요세미티, 뉴욕·나이아가라, 록키", image: assets.hero, tone: "dark", meta: "미서부 · 미동부 · 캐나다" },
  { id: "europe", region: "EUROPE", title: "유럽 특선", subtitle: "서유럽·동유럽·북유럽 정통 코스", image: assets.europe, tone: "light", meta: "서유럽 · 동유럽 · 북유럽" },
  { id: "latam", region: "LATIN AMERICA", title: "중남미", subtitle: "멕시코·캔쿤, 페루, 쿠바, 코스타리카", image: assets.hero, tone: "dark", meta: "멕시코 · 페루 · 크루즈" },
];

/* 추천 여행 — 대표 코스 유형(가격 없음, 상담으로 연결) */
export const curatedTrips = [
  { eyebrow: "USA WEST", title: "미서부 대캐년 일주", description: "그랜드캐년·요세미티·라스베가스까지, 미서부의 절경을 한 번에 잇는 대표 코스입니다.", tag: "미서부 관광", image: assets.hero, index: "01" },
  { eyebrow: "EUROPE", title: "정통 서유럽 특선", description: "런던·파리·로마로 이어지는 서유럽 핵심 도시를 정통 일정으로 알차게 둘러봅니다.", tag: "유럽 특선", image: assets.europe, index: "02" },
  { eyebrow: "HOMELAND", title: "고국방문 & 건강검진", description: "한국 방문 일정에 맞춰 종합 건강검진까지 함께 안내해 드리는 미주 한인 맞춤 여행입니다.", tag: "고국방문", image: assets.asia, index: "03" },
];

/* 회사 소개 — 왜 서울국제여행사인가 (신뢰·다양·항공권) */
export const pillars = [
  ["01", "1972년, 반세기의 신뢰", "미 동남부 한인 곁에서 오랜 시간 함께해 온 경험이 서울국제여행사의 가장 큰 자산입니다."],
  ["02", "가장 다양한 여행 상품", "미주·유럽·중남미·아시아까지, 어디로든 떠날 수 있는 폭넓은 여정을 제안합니다."],
  ["03", "공식대리점 최저가 항공권", "대한항공·델타 공식대리점이자 ARC 정식 대리점으로 합리적인 항공권을 안내합니다."],
];

export const bookingUrl = "#contact";
