import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaSwift, FaJava, FaCuttlefish } from 'react-icons/fa';
import { SiSpring, SiMysql, SiPostman } from 'react-icons/si';

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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 900px;
`;
const Card = styled(motion.div)`
  background: ${({ theme }) => theme.headerBg};
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 8px 32px rgba(102,126,234,0.18);
  }
`;
const Icon = styled.div`
  font-size: 2.5rem;
  color: #667eea;
`;
const SkillName = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.textColor};
`;
const BarBg = styled.div`
  width: 100%;
  height: 12px;
  background: #e9ecef;
  border-radius: 6px;
  margin: 0.7rem 0 0.2rem 0;
  overflow: hidden;
`;
const Bar = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 6px;
  transition: width 0.7s;
`;
const Level = styled.div`
  font-size: 0.95rem;
  color: #764ba2;
  font-weight: 600;
`;
const Desc = styled.div`
  font-size: 0.95rem;
  color: #888;
  text-align: center;
`;

const skills = [
  {
    name: 'JavaScript',
    icon: <FaJs />, level: 30, desc: '웹 개발의 핵심 언어, 다양한 프로젝트에서 사용',
  },
  {
    name: 'React',
    icon: <FaReact />, level: 25, desc: 'SPA, 컴포넌트 기반 UI, 상태 관리 경험',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />, level: 40, desc: 'REST API, 서버 개발, 실시간 서비스 경험',
  },
  {
    name: 'HTML5',
    icon: <FaHtml5 />, level: 60, desc: '웹 표준, 시맨틱 마크업, 접근성 고려',
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt />, level: 65, desc: '반응형, Flex/Grid, 모던 UI 스타일링',
  },
  {
    name: 'MySQL',
    icon: <SiMysql />, level: 55, desc: '관계형 데이터베이스 설계/쿼리/최적화',
  },
  {
    name: 'Spring Boot',
    icon: <SiSpring />, level:30, desc: 'Java 기반 백엔드 프레임워크 경험',
  },
  {
    name: 'Swift',
    icon: <FaSwift />, level: 40, desc: 'iOS 앱 개발, UIKit 활용',
  },
  {
    name: 'Java',
    icon: <FaJava />, level: 25, desc: '객체지향, 알고리즘, 백엔드 기초',
  },
  {
    name: 'C',
    icon: <FaCuttlefish />, level: 70, desc: '프로그래밍 기초, 자료구조, 시스템 이해',
  },
  {
    name: 'Postman',
    icon: <SiPostman />, level: 40, desc: 'API 테스트/문서화/자동화 경험',
  },
  {
    name: 'DB/툴',
    icon: <FaDatabase />, level: 20, desc: 'DB 설계, 쿼리, 데이터 관리, 협업 툴 활용',
  },
];

const SkillList = () => (
  <Section id="skills">
    <Title
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      기술 스택 & 경험치
    </Title>
    <Grid>
      {skills.map((s, i) => (
        <Card
          key={s.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.07 }}
          viewport={{ once: true }}
        >
          <Icon>{s.icon}</Icon>
          <SkillName>{s.name}</SkillName>
          <BarBg>
            <Bar style={{ width: `${s.level}%` }} />
          </BarBg>
          <Level>{s.level}%</Level>
          <Desc>{s.desc}</Desc>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default SkillList; 