import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSeedling, FaHtml5, FaReact } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { FaSmile, FaLightbulb, FaUserFriends, FaRegTired, FaRegClock, FaRegQuestionCircle } from 'react-icons/fa';

const Section = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  min-height: 100vh;
  padding: 6rem 0 4rem 0;
  background: ${({ theme }) => theme.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;
const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.logoColor};
  margin-bottom: 2.5rem;
`;
const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 600px;
`;
const TimelineCard = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background: ${({ theme }) => theme.headerBg};
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.10);
  padding: 1.2rem 1.5rem;
  min-width: 0;
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(102,126,234,0.18);
    transform: translateY(-3px) scale(1.02);
  }
`;
const TimelineIcon = styled.div`
  font-size: 2.1rem;
  color: #667eea;
  flex-shrink: 0;
  background: #e0e7ff;
  border-radius: 50%;
  padding: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TimelineYear = styled.div`
  font-size: 1.15rem;
  font-weight: 800;
  color: #764ba2;
  margin-bottom: 0.2rem;
`;
const TimelineDesc = styled.div`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.textColor};
`;
const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TraitsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 700px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const TraitCard = styled(motion.div)`
  background: ${({ theme }) => theme.headerBg};
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
const TraitTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
`;
const TraitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;
const TraitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
`;

const timelineData = [
  {
    year: '2025.01',
    icon: <FaSeedling />,
    desc: 'C언어 입문, 본격적 코딩 시작'
  },
  {
    year: '2025.04',
    icon: <FaHtml5 />,
    desc: 'HTML, CSS, 자바스크립트 시작'
  },
  {
    year: '2025.05',
    icon: <SiSpringboot />,
    desc: '스프링부트 입문'
  },
  {
    year: '2025.07',
    icon: <FaReact />,
    desc: '리액트 입문'
  }
];

const strengths = [
  { icon: <FaSmile />, text: '책임감 있게 맡은 일은 끝까지 수행' },
  { icon: <FaLightbulb />, text: '새로운 기술을 배우는 데 거리낌 없음' },
  { icon: <FaUserFriends />, text: '팀원들과의 소통과 협업에 적극적' }
];
const weaknesses = [
  { icon: <FaRegTired />, text: '너무 꼼꼼해서 간단한 일도 오래 걸릴 때가 있음' },
  { icon: <FaRegClock />, text: '처음 보는 기술에 대한 두려움, 익숙해지는 데 시간 소요' },
  { icon: <FaRegQuestionCircle />, text: '피드백을 받으면 혼자 깊이 생각에 빠질 때가 있음' }
];

const AboutSection = () => (
  <Section id="about">
    <Title
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      성장 스토리
    </Title>
    <Timeline>
      {timelineData.map((item, i) => (
        <TimelineCard
          key={item.year}
          initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <TimelineIcon>{item.icon}</TimelineIcon>
          <TimelineContent>
            <TimelineYear>{item.year}</TimelineYear>
            <TimelineDesc>{item.desc}</TimelineDesc>
          </TimelineContent>
        </TimelineCard>
      ))}
    </Timeline>
    <TraitsGrid>
      <TraitCard
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <TraitTitle>장점</TraitTitle>
        <TraitList>
          {strengths.map((s, i) => (
            <TraitItem key={i}>{s.icon} {s.text}</TraitItem>
          ))}
        </TraitList>
      </TraitCard>
      <TraitCard
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <TraitTitle>단점</TraitTitle>
        <TraitList>
          {weaknesses.map((w, i) => (
            <TraitItem key={i}>{w.icon} {w.text}</TraitItem>
          ))}
        </TraitList>
      </TraitCard>
    </TraitsGrid>
  </Section>
);

export default AboutSection; 