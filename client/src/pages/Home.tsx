/** 서울국제여행사 home — 1972년 창립 미주 한인 여행 전문. 상담 중심, 가격/예약 없음. */
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock3, Compass, MailOpen, MapPin, Phone, ShieldCheck, Sparkles, User, Users } from "lucide-react";
import { assets, contact, curatedTrips, destinationTabs, destinations, FOUNDED, inquiryTopics, pillars, services } from "@/lib/content";

const extraImages = {
  americas: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1100&q=85",
  latam: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1100&q=85",
};

const YEARS = new Date().getFullYear() - FOUNDED;

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? "eyebrow--light" : ""}`}>{children}</div>;
}

function DestinationCard({ item }: { item: typeof destinations[number] }) {
  const image = item.id === "americas" ? extraImages.americas : item.id === "latam" ? extraImages.latam : item.image;
  return <article className="destination-card">
    <div className="destination-image"><img src={image} alt={`${item.region} 여행`} /><span className="destination-index">{item.region}</span></div>
    <div className="destination-card-copy"><div><h3>{item.title}</h3><p>{item.subtitle}</p></div><span className="destination-meta">{item.meta}</span><a className="circle-arrow" href="#contact" aria-label={`${item.title} 상담 신청`}><ArrowUpRight size={18} /></a></div>
  </article>;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [topic, setTopic] = useState(inquiryTopics[0]);
  const [when, setWhen] = useState("");
  const [people, setPeople] = useState("");
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const filtered = useMemo(() => activeTab === "all" ? destinations : destinations.filter((item) => item.id === activeTab), [activeTab]);

  const submitInquiry = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = `[여행 상담] ${topic}${name ? ` - ${name}` : ""}`;
    const body = [`관심 분야: ${topic}`, `여행 시기: ${when || "-"}`, `인원: ${people || "-"}`, `성함: ${name || "-"}`, `연락처: ${tel || "-"}`, "", "문의 내용:", ""].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return <main>
    <section className="travel-hero">
      <img className="hero-image" src={assets.hero} alt="서울국제여행사" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-kicker"><span>SEOUL TRAVEL INTERNATIONAL</span><span>SINCE {FOUNDED}</span></div>
        <div className="hero-copy"><Eyebrow light>미주 한인 여행 전문</Eyebrow><h1>미주 한인과 함께<br /><em>{YEARS}년의 여행</em></h1><p>{FOUNDED}년부터 미 동남부 한인 곁에서,<br />믿음직한 여행과 합리적인 항공권으로 함께해 왔습니다.</p></div>
        <div className="hero-bottom"><span className="hero-location"><Phone size={15} /> {contact.phone}</span><span className="hero-scroll"><a href="#contact">여행 상담 신청 <ArrowDownGlyph /></a></span></div>
      </div>
    </section>

    <section className="search-rail" id="packages"><div className="container search-rail-inner inquiry-rail"><div className="search-rail-label"><div><Eyebrow>여행 상담 신청</Eyebrow><strong>어떤 여행을 계획 중이신가요?</strong></div></div><form className="inquiry-form" onSubmit={submitInquiry}>
      <div className="search-field"><Compass size={18} /><label htmlFor="topic">관심 분야</label><select id="topic" value={topic} onChange={(e) => setTopic(e.target.value)}>{inquiryTopics.map((t) => <option key={t} value={t}>{t}</option>)}</select></div>
      <div className="search-field"><CalendarDays size={18} /><label htmlFor="when">여행 시기</label><input id="when" value={when} onChange={(e) => setWhen(e.target.value)} placeholder="예: 2026년 5월" /></div>
      <div className="search-field"><Users size={18} /><label htmlFor="people">인원</label><input id="people" value={people} onChange={(e) => setPeople(e.target.value)} placeholder="예: 성인 2명" /></div>
      <div className="search-field"><User size={18} /><label htmlFor="name">성함</label><input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="홍길동" /></div>
      <div className="search-field"><Phone size={18} /><label htmlFor="tel">연락처</label><input id="tel" value={tel} onChange={(e) => setTel(e.target.value)} placeholder="연락 가능한 번호" /></div>
      <button className="search-submit" type="submit">상담 신청 <ArrowUpRight size={17} /></button>
    </form></div></section>

    <section className="services-band" id="services"><div className="container"><div className="section-head"><div><Eyebrow>여행 상품</Eyebrow><h2>어디로든,<br /><em>서울국제여행사</em>와 함께</h2></div><div className="section-head-right"><p>미주·유럽·중남미·아시아까지 폭넓은 여정.<br />분야를 선택하면 상담 신청으로 이어집니다.</p></div></div><div className="services-grid">{services.map((s) => <a className="service-card" href="#contact" key={s.label}><div className="service-photo"><img src={s.image} alt={s.label} /></div><div className="service-body"><h3>{s.label}</h3><p>{s.hint}</p><span className="service-go">상담 신청 <ArrowUpRight size={14} /></span></div></a>)}</div></div></section>

    <section className="intro-section"><div className="container intro-layout"><div className="vertical-label"><span>SINCE {FOUNDED}</span><span>OUR PROMISE</span></div><div className="intro-copy"><Eyebrow>여행을 준비하는 방식</Eyebrow><h2>오래 지켜 온 신뢰가<br />좋은 여행을 <em>만듭니다.</em></h2><p>{YEARS}년 동안 미 동남부 한인과 함께하며 쌓아 온 경험으로, 지금 고객님께 꼭 맞는 여행과 항공권을 정성껏 안내해 드립니다.</p><a className="text-link" href="#contact">상담으로 시작하기 <ArrowUpRight size={16} /></a></div><div className="intro-aside"><img src="/intro-photo.jpg" alt="여행을 준비하는 서울국제여행사" /></div></div></section>

    <section className="curated-section" id="curated"><div className="container section-head"><div><Eyebrow>추천 여행</Eyebrow><h2>이런 여행은<br /><em>어떠세요.</em></h2></div><div className="section-head-right"><p>대표 코스를 먼저 살펴보고<br />원하는 일정으로 상담해 보세요.</p><a className="text-link" href="#destinations">지역별 여행 보기 <ArrowRight size={16} /></a></div></div><div className="container curated-grid">{curatedTrips.map((trip) => <article className="curated-card" key={trip.index}><div className="curated-image"><img src={trip.image} alt={trip.title} /><span>{trip.index}</span></div><div className="curated-copy"><Eyebrow>{trip.eyebrow}</Eyebrow><h3>{trip.title}</h3><p>{trip.description}</p><a href="#contact">{trip.tag} <ArrowUpRight size={15} /></a></div></article>)}</div></section>

    <section className="destinations-section" id="destinations"><div className="container"><div className="destination-heading"><div><Eyebrow>DESTINATIONS</Eyebrow><h2>가고 싶은 곳을<br /><em>지역별로.</em></h2></div><div className="heading-note"><p>지역을 살펴보고<br />상담으로 이어가세요</p></div></div><div className="destination-tabs" role="tablist" aria-label="여행지 지역 필터">{destinationTabs.map((tab) => <button key={tab.id} className={activeTab === tab.id ? "is-active" : ""} onClick={() => setActiveTab(tab.id)} role="tab" aria-selected={activeTab === tab.id}>{tab.label}<small>{tab.count}</small></button>)}</div><div className="destination-grid">{filtered.map((item) => <DestinationCard item={item} key={item.id} />)}</div></div></section>

    <section className="theme-section" id="about"><div className="container theme-layout"><div className="theme-intro"><Eyebrow light>WHY SEOUL TRAVEL</Eyebrow><h2>미주 한인이<br /><em>믿고 찾는</em><br />이유.</h2><p>{FOUNDED}년 창립 이래 지켜 온 세 가지 약속입니다.</p><div className="agent-badges"><span><ShieldCheck size={15} /> 대한항공 공식대리점</span><span><ShieldCheck size={15} /> 델타항공 공식대리점</span><span><ShieldCheck size={15} /> ARC 정식 대리점</span></div></div><div className="theme-list">{pillars.map(([number, title, detail]) => <div className="theme-item theme-item--static" key={number}><div><h3>{title}</h3><p>{detail}</p></div></div>)}</div></div></section>

    <section className="contact-cta" id="contact"><div className="container contact-layout"><div className="contact-intro"><Eyebrow>고객센터 · 여행 상담</Eyebrow><h2>여행, 어렵게<br /><em>생각 마세요.</em></h2><p>여행 시기와 인원, 가고 싶은 곳만 알려주세요.<br />항공권부터 일정까지 서울국제여행사가 함께 준비합니다.</p></div><div className="contact-channels"><a className="channel" href={contact.phoneHref}><Phone size={20} /><span><b>전화 상담</b>{contact.phone}</span></a><a className="channel" href={`mailto:${contact.email}`}><MailOpen size={20} /><span><b>이메일 문의</b>{contact.email}</span></a><a className="channel" href={contact.mapUrl} target="_blank" rel="noreferrer"><MapPin size={20} /><span><b>오시는 길</b>Suwanee, GA</span></a><div className="channel channel--static"><Clock3 size={20} /><span><b>상담 안내</b>{contact.hours}</span></div></div></div></section>
    <div className="trust-strip"><div className="container trust-inner"><span><Sparkles size={16} /> SEOUL TRAVEL INTERNATIONAL</span><span>1972년부터 함께한 미주 한인 여행</span><span>{contact.phone}&nbsp;&nbsp; · &nbsp;&nbsp;{contact.email}</span></div></div>
  </main>;
}

function ArrowDownGlyph() { return <span className="arrow-down-glyph">↓</span>; }
