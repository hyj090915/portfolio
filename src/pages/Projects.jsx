import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/organisms/ProjectCard';
import Button from '../components/atoms/Button';

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  margin-left: calc(-50vw + 50%);
  padding: 6rem 0 4rem 0;
  background: ${({ theme }) =>
    theme.bg === '#22223b'
      ? 'radial-gradient(circle at 60% 30%, #373a60 0%, #22223b 100%)'
      : 'radial-gradient(ellipse at 50% 30%, #e9edfa 60%, #f7faff 100%)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;
`;
const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #22223b;
  margin-bottom: 1rem;
  letter-spacing: -1px;
`;
const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;
const SearchSection = styled.div`
  margin-bottom: 3rem;
`;
const SearchBox = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto 1rem;
  align-items: center;
`;
const SearchInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255,255,255,0.85);
  box-shadow: 0 2px 12px rgba(102,126,234,0.07);
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;
const ClearButton = styled(Button)`
  padding: 1rem 1.5rem;
  white-space: nowrap;
`;
const SearchResult = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin: 0;
`;
const ProjectsGrid = styled.div`
  width: 92vw;
  max-width: 1700px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  gap: 2.5rem 2.5rem;
  margin: 0 auto;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;
const NoResults = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: '날씨 알림 웹 애플리케이션',
      description: '사용자가 입력한 도시의 실시간 날씨 정보를 알려주는 간단한 날씨 조회 웹앱입니다.',
      techStack: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
      link: 'https://hyj090915.github.io/m-w/',
      emoji: '🌤',
      details: [
        '도시 이름 입력 시 실시간 날씨, 기온, 체감 온도 등 출력',
        'OpenWeather API 활용',
        '간결한 UI/UX'
      ],
      github: null
    },
    {
      id: 2,
      title: '글쓰기 방명록 웹앱',
      description: '누구나 글을 남기고, 작성한 글을 삭제할 수 있는 간단한 방명록 웹 애플리케이션입니다.',
      techStack: ['Node.js', 'MySQL', 'HTML', 'CSS'],
      link: null,
      emoji: '✍️',
      details: [
        '글 작성, 삭제, 전체 목록 조회 기능',
        'Node.js + MySQL 백엔드',
        '간단한 인증/권한 처리'
      ],
      github: null
    },
    {
      id: 3,
      title: '롤 챔피언 추천 iOS 앱',
      description: '사용자가 선호하는 포지션(탑, 미드, 정글 등)을 선택하면 해당 포지션에 맞는 롤 챔피언을 추천해주는 iOS 앱입니다.',
      techStack: ['Swift', 'Xcode', 'UIKit'],
      link: null,
      emoji: '🧙',
      details: [
        '포지션 선택 → 추천 챔피언 리스트 출력',
        '직관적인 iOS 인터페이스',
        'Swift, UIKit 활용'
      ],
      github: null
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Section id="projects">
      <Header>
        <Title>프로젝트</Title>
        <Subtitle>다양한 기술 스택으로 만든 프로젝트들을 소개합니다.</Subtitle>
      </Header>
      <SearchSection>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="프로젝트 검색... (예: 롤, 날씨, 방명록)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <ClearButton
              variant="outline"
              onClick={() => setSearchTerm('')}
            >
              초기화
            </ClearButton>
          )}
        </SearchBox>
        {searchTerm && (
          <SearchResult>
            "{searchTerm}" 검색 결과: {filteredProjects.length}개 프로젝트
          </SearchResult>
        )}
      </SearchSection>
      <ProjectsGrid>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
      {filteredProjects.length === 0 && searchTerm && (
        <NoResults>
          <p>"{searchTerm}"에 해당하는 프로젝트를 찾을 수 없습니다.</p>
          <Button variant="primary" onClick={() => setSearchTerm('')}>
            전체 프로젝트 보기
          </Button>
        </NoResults>
      )}
    </Section>
  );
};

export default Projects; 