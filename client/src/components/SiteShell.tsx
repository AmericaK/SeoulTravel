/** Seoul Field Guide shell: wayfinding-first navigation, quiet utility links, and Seoul Vermilion only for primary actions. */
import { ReactNode, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { Link } from "wouter";
import { assets, navItems } from "@/lib/content";

export default function SiteShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="site-shell">
      <div className="utility-bar"><div className="container utility-inner"><span>서울여행 큐레이션</span><div><a href="#guide">여행 준비 가이드</a><span className="utility-divider" /><a href="#contact">고객센터</a><span className="utility-divider" /><button type="button">로그인</button><button type="button">회원가입</button></div></div></div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand"><img src={assets.mark} alt="서울국제여행사 SEOUL TRAVEL INTERNATIONAL" className="brand-logo" /></Link>
          <nav className="desktop-nav" aria-label="주요 메뉴">{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
          <div className="header-actions"><button className="header-search" type="button" onClick={() => document.getElementById("search")?.focus()}><Search size={16} /> 검색</button><a className="header-cta" href="#contact">여행 상담 <ArrowUpRight size={15} /></a><button className="mobile-menu" aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button></div>
        </div>
        {mobileOpen && <nav className="mobile-nav" aria-label="모바일 메뉴">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMobileOpen(false)}>{label}<ArrowUpRight size={15} /></a>)}<a href="#contact" onClick={() => setMobileOpen(false)}>상담 문의 <ArrowUpRight size={15} /></a></nav>}
      </header>
      {children}
      <footer className="site-footer"><div className="container footer-grid"><div><Link href="/" className="footer-brand"><img src={assets.mark} alt="서울국제여행사" className="footer-logo" /></Link><p>서울에서 시작하는<br />더 명확한 여행의 방향.</p></div><div className="footer-links"><div><b>EXPLORE</b><a href="#packages">패키지여행</a><a href="#curated">추천여행</a><a href="#destinations">여행지</a></div><div><b>SUPPORT</b><a href="#guide">여행정보</a><a href="#contact">상담 문의</a><button type="button">로그인</button></div><div><b>CONNECT</b><a href="#contact">이메일 문의</a><a href="#contact">카카오 상담</a><a href="#contact">Instagram</a></div></div></div><div className="container footer-bottom"><span>© 2026 Seoul Travel. All journeys begin with a good question.</span><span>이용약관&nbsp;&nbsp; 개인정보처리방침</span></div></footer>
    </div>
  );
}
