import React from 'react';
import { motion } from 'framer-motion';
import styled, { useTheme } from 'styled-components';
import AboutSection from '../components/organisms/AboutSection';
import Projects from './Projects';
import SkillList from '../components/organisms/SkillList';
import Contact from './Contact';
import styles from './Home.module.css';

const HeroSection = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ theme }) =>
    theme.bg === '#22223b'
      ? 'radial-gradient(circle at 60% 30%, #373a60 0%, #22223b 100%)'
      : 'radial-gradient(circle at 60% 30%, #e0e7ff 0%, #f5f7fa 100%)'};
  color: ${({ theme }) => theme.textColor};
  text-align: center;
  overflow: hidden;
  overflow-x: hidden;
  @media (max-width: 768px) {
    padding: 4rem 1rem 2rem;
  }
`;
const BgCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: ${({ theme }) => (theme.bg === '#22223b' ? 0.25 : 0.18)};
  z-index: 0;
`;
const HeroTitle = styled(motion.h1)`
  font-size: 3.8rem;
  font-weight: 900;
  margin-bottom: 1.3rem;
  letter-spacing: -2px;
  color: ${({ theme }) =>
    theme.bg === '#22223b'
      ? 'linear-gradient(90deg, #a5b4fc 0%, #a78bfa 100%)'
      : 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)'};
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0 4px 32px rgba(102,126,234,0.13);
  line-height: 1.1;
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;
const HeroName = styled(motion.div)`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.logoSubColor};
  margin-bottom: 1.1rem;
  letter-spacing: -1px;
  text-shadow: 0 2px 16px rgba(118,75,162,0.13);
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
`;
const HeroDesc = styled(motion.p)`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 0.7rem;
  line-height: 1.5;
  max-width: 600px;
  text-shadow: 0 1px 8px rgba(102,126,234,0.07);
  z-index: 1;
  @media (max-width: 768px) {
    font-size: 0.92rem;
    max-width: 95vw;
  }
`;

const Home = () => {
  const theme = useTheme();
  return (
    <div className={styles.home}>
      <HeroSection id="hero">
        {/* 배경 블러 원/그래픽 */}
        <BgCircle
          style={{
            width: 420,
            height: 420,
            left: '-120px',
            top: '-120px',
            background: theme.bg === '#22223b'
              ? 'radial-gradient(circle, #a5b4fc 0%, #373a60 100%)'
              : 'radial-gradient(circle, #667eea 0%, #e0e7ff 100%)',
          }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        />
        <BgCircle
          style={{
            width: 260,
            height: 260,
            right: '-80px',
            bottom: '-80px',
            background: theme.bg === '#22223b'
              ? 'radial-gradient(circle, #a78bfa 0%, #373a60 100%)'
              : 'radial-gradient(circle, #764ba2 0%, #e0e7ff 100%)',
          }}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
        <HeroTitle
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          끈기 있게 성장하는 풀스택 개발자
        </HeroTitle>
        <HeroName
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          한예준
        </HeroName>
        <HeroDesc
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          열정과 책임감으로 팀과 함께 성장하는 개발자. 더 나은 개발자가 되기 위해 끊임없이 배우고 도전합니다. 프론트와 백엔드를 모두 아우르는 풀스택 개발자로 성장하여, 기술로 세상에 긍정적인 변화를 만드는 것이 목표입니다. 책임감 있게 맡은 일은 끝까지, 새로운 기술에 대한 두려움 없이 도전, 팀원과의 소통과 협업을 중시, 피드백을 성장의 기회로 삼습니다.
        </HeroDesc>
      </HeroSection>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <div style={{ padding: '6rem 2rem 4rem', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <SkillList />
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home; 