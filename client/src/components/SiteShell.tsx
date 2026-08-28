/** 서울국제여행사 shell — 1972년 창립 미주 한인 여행 전문. 상담 중심. */
import { ReactNode, useState } from "react";
import { ArrowUpRight, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Link } from "wouter";
import { assets, contact, FOUNDED, navItems } from "@/lib/content";

export default function SiteShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="site-shell">
      <div className="utility-bar"><div className="container utility-inner"><span>Since {FOUNDED} · 미주 한인 여행 전문</span><div><a href={contact.phoneHref}><Phone size={12} /> {contact.phone}</a><span className="utility-divider" /><a href="#services">여행 상품</a><span className="utility-divider" /><a href="#contact">고객센터</a></div></div></div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand"><img src={assets.mark} alt="서울국제여행사 SEOUL TRAVEL INTERNATIONAL" className="brand-logo" /></Link>
          <nav className="desktop-nav" aria-label="주요 메뉴">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
          <div className="header-actions"><a className="header-phone" href={contact.phoneHref}><Phone size={15} /> {contact.phone}</a><a className="header-cta" href="#contact">여행 상담 <ArrowUpRight size={15} /></a><button className="mobile-menu" aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button></div>
        </div>
        {mobileOpen && <nav className="mobile-nav" aria-label="모바일 메뉴">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}<ArrowUpRight size={15} /></a>)}<a href={contact.phoneHref} onClick={() => setMobileOpen(false)}>전화 상담 {contact.phone}<Phone size={15} /></a></nav>}
      </header>
      {children}
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="footer-brand"><img src={assets.mark} alt="서울국제여행사" className="footer-logo" /></Link>
            <p>1972년부터 미 동남부 한인과<br />함께해 온 여행 전문 여행사.</p>
            <div className="footer-contact">
              <a href={contact.phoneHref}><Phone size={14} /> {contact.phone}</a>
              <a href={`mailto:${contact.email}`}><MessageCircle size={14} /> {contact.email}</a>
              <a href={contact.mapUrl} target="_blank" rel="noreferrer"><MapPin size={14} /> {contact.address}</a>
            </div>
          </div>
          <div className="footer-links">
            <div><b>여행 상품</b><a href="#services">미국·캐나다</a><a href="#services">중남미·크루즈</a><a href="#services">유럽 특선</a><a href="#services">아시아·한국</a></div>
            <div><b>안내</b><a href="#services">최저가 항공권</a><a href="#services">고국방문 건강검진</a><a href="#about">회사 소개</a></div>
            <div><b>상담</b><a href="#contact">여행 상담 신청</a><a href={contact.phoneHref}>전화 상담</a><a href={`mailto:${contact.email}`}>이메일 문의</a></div>
          </div>
        </div>
        <div className="container footer-bizinfo">상호 서울국제여행사 (SEOUL TRAVEL INTERNATIONAL) &nbsp;·&nbsp; 대한항공·델타항공 공식대리점 · ARC 정식 대리점 &nbsp;·&nbsp; {contact.address}</div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} 서울국제여행사. All rights reserved.</span><span>이용약관&nbsp;&nbsp; 개인정보처리방침</span></div>
      </footer>
    </div>
  );
}
