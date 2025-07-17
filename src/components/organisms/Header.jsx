import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { id: 'hero', label: '홈' },
  { id: 'about', label: '프로필' },
  { id: 'projects', label: '프로젝트' },
  { id: 'skills', label: '기술스택' },
  { id: 'contact', label: '연락처' }
];

const HeaderBar = styled(motion.header)`
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.headerBg || 'rgba(255,255,255,0.95)'};
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
  transition: background 0.3s;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.logoColor || '#667eea'};
    letter-spacing: -1px;
  }
  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.logoSubColor || '#764ba2'};
    font-weight: 500;
  }
`;
const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
const NavLink = styled.a`
  font-weight: 600;
  color: ${({ active, theme }) => (active ? theme.activeColor || '#667eea' : theme.textColor || '#333')};
  padding: 8px 16px;
  border-radius: 6px;
  background: ${({ active, theme }) => (active ? theme.activeBg || 'rgba(102,126,234,0.08)' : 'none')};
  transition: all 0.2s;
  position: relative;
  cursor: pointer;
  &:hover {
    color: #764ba2;
    background: rgba(118,75,162,0.08);
  }
`;
const DarkModeBtn = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.textColor || '#333'};
  font-size: 1.3rem;
  margin-left: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: #764ba2;
  }
`;

const Header = ({ toggleTheme, isDark }) => {
  const [active, setActive] = useState('hero');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // 섹션별 active 자동 하이라이트
      let found = 'hero';
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          if (window.scrollY >= top - 10) found = link.id;
        }
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <HeaderBar
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      style={{ boxShadow: scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.10)' : 'none' }}
    >
      <Container>
        <Logo>
          <h1>한예준</h1>
          <span>Portfolio</span>
        </Logo>
        <Nav>
          {navLinks.map(link => (
            <NavLink
              key={link.id}
              active={active === link.id}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </NavLink>
          ))}
          <DarkModeBtn onClick={toggleTheme} aria-label="다크모드 토글">
            {isDark ? <FaSun /> : <FaMoon />}
          </DarkModeBtn>
        </Nav>
      </Container>
    </HeaderBar>
  );
};

export default Header; 