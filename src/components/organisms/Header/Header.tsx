import { useState, useEffect } from 'react';
import {
  header,
  headerInner,
  logo,
  logoImage,
  nav,
  navLink,
  navLinkActive,
  mobileMenuButton,
} from './Header.css';

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

interface HeaderProps {
  navigation: NavItem[];
  currentPath?: string;
}

export function Header({ navigation, currentPath = '/' }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header className={header}>
        <div className={headerInner}>
          <a href="/" className={logo}>
            <img src="/images/logo.svg" alt="KMU-CS Alumni" className={logoImage} />
            <span>KMU-CS Alumni</span>
          </a>

          <nav className={nav} aria-label="주요 내비게이션">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${navLink}${currentPath === item.href ? ` ${navLinkActive}` : ''}`}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className={mobileMenuButton}
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-label="메뉴 열기"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
      </header>

      {/* 오버레이 */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 300,
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* 사이드 메뉴 */}
      <nav
        aria-label="모바일 내비게이션"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          maxWidth: '80vw',
          backgroundColor: '#fff',
          zIndex: 400,
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 0',
          boxShadow: isOpen
            ? '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.06)'
            : 'none',
          overflowY: 'auto',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem 1.25rem 1rem',
          borderBottom: '1px solid #E9ECEF',
          marginBottom: '0.5rem',
        }}>
          <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#212529' }}>메뉴</span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="메뉴 닫기"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              borderRadius: '0.5rem',
              color: '#495057',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        {navigation.map((item, i) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '1rem 1.25rem',
              fontSize: '1.25rem',
              fontWeight: currentPath === item.href ? 700 : 500,
              color: currentPath === item.href ? '#1A5BC4' : '#212529',
              textDecoration: 'none',
              borderBottom: '1px solid #E9ECEF',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
              transition: `opacity 0.3s ease ${0.05 + i * 0.04}s, transform 0.3s ease ${0.05 + i * 0.04}s`,
            }}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}
