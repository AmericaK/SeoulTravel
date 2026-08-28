/** Seoul Field Guide destinations chapter: destination-first hierarchy, regional filtering, route codes, and Han River metadata. */
import { useMemo, useState } from "react";
import { ArrowUpRight, Heart, MapPin, SlidersHorizontal } from "lucide-react";
import { destinations, destinationTabs } from "@/lib/content";

const imageOverrides: Record<string, string> = {
  americas: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=85",
  latam: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85",
};

export default function Destinations() {
  const [activeTab, setActiveTab] = useState("all");
  const [showGuide, setShowGuide] = useState(false);
  const filtered = useMemo(() => activeTab === "all" ? destinations : destinations.filter((item) => item.id === activeTab), [activeTab]);
  return <main className="destinations-page">
    <section className="destinations-mast"><div className="container destinations-mast-inner"><div className="chapter-code"><span>CHAPTER 03</span><span>DESTINATIONS / INDEX</span></div><div className="mast-copy"><div className="eyebrow"><span className="eyebrow-line" />여행지 인덱스</div><h1>어디로 갈지보다,<br /><em>어떻게 만날지.</em></h1><p>서울에서 출발하는 네 가지 방향을<br />지역과 여행의 기분으로 찾아보세요.</p></div><div className="mast-route"><span className="route-line route-line--vertical" /><MapPin size={18} /><span>SEOUL<br />GATEWAY</span></div></div></section>
    <section className="destination-index-section"><div className="container"><div className="index-toolbar"><div><span className="index-count">04</span><span>개의 방향, 지금의 여행</span></div><button className={showGuide ? "is-active" : ""} onClick={() => setShowGuide(!showGuide)}><SlidersHorizontal size={15} /> 여행 방식 {showGuide ? "닫기" : "열기"}</button></div>{showGuide && <div className="guide-panel"><span>FILTER BY FEELING</span><button>도시의 리듬</button><button>자연의 속도</button><button>문화의 결</button><button>나만의 일정</button></div>}<div className="destination-tabs destination-tabs--large" role="tablist" aria-label="여행지 지역 필터">{destinationTabs.map((tab) => <button key={tab.id} className={activeTab === tab.id ? "is-active" : ""} onClick={() => setActiveTab(tab.id)} role="tab" aria-selected={activeTab === tab.id}>{tab.label}<small>{tab.count}</small></button>)}</div><div className="destination-index-grid">{filtered.map((item, index) => <article className="index-card" key={item.id}><div className="index-card-media"><img src={imageOverrides[item.id] || item.image} alt={`${item.region} 여행 풍경`} /><div className="index-card-top"><span>0{index + 1}</span><button aria-label="여행지 찜하기"><Heart size={16} /></button></div><span className="index-card-code">{item.region}</span></div><div className="index-card-body"><div><span className="card-route-meta"><i /> SEOUL → {item.id === "asia" ? "ASIA" : item.id === "europe" ? "EUROPE" : item.id === "americas" ? "AMERICAS" : "LATIN AMERICA"}</span><h2>{item.title}</h2><p>{item.subtitle}</p></div><div className="index-card-bottom"><span>{item.meta}</span><button aria-label={`${item.title} 상세 보기`}><ArrowUpRight size={18} /></button></div></div></article>)}</div></div></section>
    <section className="destination-note"><div className="container destination-note-inner"><span className="note-code">FIELD NOTE / 03</span><div><h2>여행은 목적지가 아니라<br /><em>시선의 이동</em>입니다.</h2><p>상세 일정과 출발일은 상담을 통해 안내합니다. 지금 떠오르는 지역이나 여행의 기분을 알려주시면, 당신에게 맞는 다음 방향을 함께 찾겠습니다.</p><a href="#contact" className="text-link">여행 상담 시작하기 <ArrowUpRight size={16} /></a></div></div></section>
  </main>;
}
