/** Seoul Field Guide home: search-led discovery, asymmetric editorial rails, honest sample content, and vermilion action signals. */
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, Check, ChevronDown, Clock3, Compass, Heart, MapPin, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { assets, curatedTrips, destinationTabs, destinations, themes } from "@/lib/content";

const extraImages = {
  americas: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1100&q=85",
  latam: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1100&q=85",
};

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? "eyebrow--light" : ""}`}><span className="eyebrow-line" />{children}</div>;
}

function DestinationCard({ item }: { item: typeof destinations[number] }) {
  const image = item.id === "americas" ? extraImages.americas : item.id === "latam" ? extraImages.latam : item.image;
  return <article className="destination-card">
    <div className="destination-image"><img src={image} alt={`${item.region} 여행 풍경`} /><button type="button" className="save-button" aria-label="여행지 찜하기"><Heart size={17} /></button><span className="destination-index">{item.region}</span></div>
    <div className="destination-card-copy"><div><h3>{item.title}</h3><p>{item.subtitle}</p></div><span className="destination-meta">{item.meta}</span><button className="circle-arrow" type="button" aria-label={`${item.title} 살펴보기`}><ArrowUpRight size={18} /></button></div>
  </article>;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const filtered = useMemo(() => activeTab === "all" ? destinations : destinations.filter((item) => item.id === activeTab), [activeTab]);
  const handleSearch = (event: React.FormEvent) => { event.preventDefault(); setSubmittedQuery(query.trim()); document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" }); };
  return <main>
    <section className="travel-hero">
      <img className="hero-image" src={assets.hero} alt="한강과 서울의 저녁 풍경" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-kicker"><span>SEOUL TRAVEL INTERNATIONAL</span><span>EST. 2008</span></div>
        <div className="hero-copy"><Eyebrow light>여행의 방향을 찾는 시간</Eyebrow><h1>다음 여행의 방향을,<br /><em>서울에서.</em></h1><p>도시를 아는 사람의 시선으로 고른 여행.<br />당신의 다음 장면을 더 선명하게 만듭니다.</p></div>
        <div className="hero-bottom"><span className="hero-location"><MapPin size={15} /> SEOUL, KOREA</span><span className="hero-scroll">SCROLL TO EXPLORE <ArrowDownGlyph /></span></div>
      </div>
    </section>

    <section className="search-rail" id="packages"><div className="container search-rail-inner"><div className="search-rail-label"><span className="rail-number">01</span><div><Eyebrow>여행 검색</Eyebrow><strong>어디로 떠나볼까요?</strong></div></div><form className="trip-search" onSubmit={handleSearch}><div className="search-field search-field--destination"><Search size={19} /><label htmlFor="search">목적지 또는 상품명을 입력하세요</label><input id="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="예: 유럽, 서울, 캐나다" /></div><div className="search-field"><CalendarDays size={18} /><label>여행 기간</label><button type="button">기간을 선택하세요 <ChevronDown size={15} /></button></div><button className="search-submit" type="submit">검색하기 <ArrowUpRight size={17} /></button></form></div></section>

    <section className="intro-section"><div className="container intro-layout"><div className="vertical-label"><span>SEOUL TRAVEL</span><span>OUR APPROACH</span></div><div className="intro-copy"><Eyebrow>여행을 고르는 새로운 기준</Eyebrow><h2>잘 고른 여행은<br />도착하기 전부터 <em>시작됩니다.</em></h2><p>수많은 선택지 대신, 지금의 당신에게 필요한 방향을 먼저 생각합니다. 서울에서 시작해 세계로 이어지는 여행의 첫 장면을 만나보세요.</p><a className="text-link" href="#guide">서울여행이 고르는 방식 <ArrowUpRight size={16} /></a></div><div className="intro-aside"><span>02 / 04</span><Compass size={34} strokeWidth={1.2} /><p>목적지보다 먼저<br />여행의 이유를 찾습니다.</p></div></div></section>

    <section className="curated-section" id="curated"><div className="container section-head"><div><Eyebrow>이번 달의 편집</Eyebrow><h2>여행의 <em>장면</em>을<br />고르는 일.</h2></div><div className="section-head-right"><p>계절과 취향, 함께 떠나는 사람에 따라<br />이번 여행의 장면을 골라보세요.</p><a className="text-link" href="#destinations">전체 여행지 보기 <ArrowRight size={16} /></a></div></div><div className="container curated-grid">{curatedTrips.map((trip) => <article className="curated-card" key={trip.index}><div className="curated-image"><img src={trip.image} alt={trip.title} /><span>{trip.index}</span></div><div className="curated-copy"><Eyebrow>{trip.eyebrow}</Eyebrow><h3>{trip.title}</h3><p>{trip.description}</p><a href="#contact">{trip.tag} <ArrowUpRight size={15} /></a></div></article>)}</div></section>

    <section className="destinations-section" id="destinations"><div className="container"><div className="destination-heading"><div><Eyebrow>DESTINATIONS</Eyebrow><h2>가고 싶은 곳을<br /><em>다시 발견하는 법.</em></h2></div><div className="heading-note"><span>03 / 04</span><p>서울여행이 고른 지역별<br />첫 번째 여행의 이유</p></div></div><div className="destination-tabs" role="tablist" aria-label="여행지 지역 필터">{destinationTabs.map((tab) => <button key={tab.id} className={activeTab === tab.id ? "is-active" : ""} onClick={() => setActiveTab(tab.id)} role="tab" aria-selected={activeTab === tab.id}>{tab.label}<small>{tab.count}</small></button>)}</div>{submittedQuery && <div className="search-result-note"><Check size={16} /> “{submittedQuery}”에 맞는 여행지를 둘러보고 있어요. <button onClick={() => { setSubmittedQuery(""); setQuery(""); }}>검색 초기화</button></div>}<div className="destination-grid">{filtered.map((item) => <DestinationCard item={item} key={item.id} />)}</div></div></section>

    <section className="theme-section" id="guide"><div className="container theme-layout"><div className="theme-intro"><Eyebrow light>TRAVEL BY FEELING</Eyebrow><h2>이번 여행,<br /><em>어떤 마음으로</em><br />떠나나요?</h2><p>여행의 목적이 분명해지면, 선택은 더 쉬워집니다.</p></div><div className="theme-list">{themes.map(([number, title, detail]) => <button type="button" className="theme-item" key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div><ArrowUpRight size={19} /></button>)}</div></div></section>

    <section className="contact-cta" id="contact"><div className="container contact-cta-inner"><div><Eyebrow>TRAVEL DESK</Eyebrow><h2>아직 정해지지 않아도<br /><em>괜찮습니다.</em></h2><p>여행의 이유와 기간, 함께하는 사람을 알려주세요.<br />서울여행이 다음 방향을 함께 찾아드립니다.</p></div><div className="cta-actions"><a className="primary-button" href="mailto:seoultravel@gmail.com">상담 문의하기 <ArrowUpRight size={17} /></a><span><Clock3 size={15} /> 상담 후 상품 및 일정 안내</span></div></div></section>
    <div className="trust-strip"><div className="container trust-inner"><span><Sparkles size={16} /> SEOUL TRAVEL INTERNATIONAL</span><span>여행을 더 명확하게 고르는 방법</span><span>770-458-2242&nbsp;&nbsp; · &nbsp;&nbsp;seoultravel@gmail.com</span></div></div>
  </main>;
}

function ArrowDownGlyph() { return <span className="arrow-down-glyph">↓</span>; }
