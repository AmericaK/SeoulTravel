/** Seoul Field Guide content model: honest sample travel curation, clear wayfinding, and no fabricated reviews or ratings. */
export const assets = {
  hero: "/seoultravel-hero.jpg",
  asia: "/seoultravel-asia.jpg",
  europe: "/seoultravel-europe.jpg",
  mark: "/logo.gif",
};

export const navItems = [
  ["패키지여행", "#packages"],
  ["추천여행", "#curated"],
  ["여행지", "#destinations"],
  ["여행정보", "#guide"],
];

export const destinationTabs = [
  { id: "all", label: "전체", count: "04" },
  { id: "asia", label: "아시아·한국", count: "01" },
  { id: "americas", label: "미국·캐나다", count: "01" },
  { id: "europe", label: "유럽", count: "01" },
  { id: "latam", label: "중남미", count: "01" },
];

export const destinations = [
  { id: "asia", region: "ASIA / KOREA", title: "서울의 결을 따라", subtitle: "가장 가까운 여행의 시작", image: assets.asia, tone: "light", meta: "도시 · 미식 · 로컬" },
  { id: "americas", region: "AMERICAS", title: "도시가 만든 풍경", subtitle: "미국과 캐나다의 다음 장면", image: assets.hero, tone: "dark", meta: "도시 · 자연 · 자유일정" },
  { id: "europe", region: "EUROPE", title: "오래된 도시의 온도", subtitle: "걷고, 머물고, 다시 바라보는 유럽", image: assets.europe, tone: "light", meta: "문화 · 건축 · 미식" },
  { id: "latam", region: "LATIN AMERICA", title: "빛이 머무는 곳", subtitle: "리듬과 색으로 기억하는 여행", image: assets.hero, tone: "dark", meta: "자연 · 문화 · 탐험" },
];

export const curatedTrips = [
  { eyebrow: "CITY BREAK", title: "서울, 오늘의 취향을 발견하는 법", description: "익숙한 도시를 다르게 보는 하루. 골목, 전시, 식탁을 한 장의 여정으로 엮었습니다.", tag: "도시의 하루", image: assets.asia, index: "01" },
  { eyebrow: "LONG WEEKEND", title: "다음 주말, 가볍게 떠나는 유럽", description: "짧은 시간에도 오래 남는 장면을 고르는 여행. 처음 가는 도시를 위한 큐레이션.", tag: "처음 만나는 유럽", image: assets.europe, index: "02" },
  { eyebrow: "NATURE & CITY", title: "도시의 속도에서 잠시 벗어나기", description: "한 번의 여행 안에 자연과 도시를 함께 담는 방법을 제안합니다.", tag: "쉼이 있는 이동", image: assets.hero, index: "03" },
];

export const themes = [
  ["01", "처음 만나는 도시", "도착부터 마지막 밤까지, 여행의 흐름이 선명한 일정"],
  ["02", "내 취향의 여행", "미식, 예술, 자연 중 지금 마음이 향하는 곳"],
  ["03", "우리만의 속도", "함께 가는 사람에 맞춰 여유와 밀도를 고르는 방식"],
];

export const bookingUrl = "#contact";
