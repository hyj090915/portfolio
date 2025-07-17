export const projects = [
  {
    id: 1,
    title: '날씨 알림 웹 애플리케이션',
    description: '사용자가 입력한 도시의 실시간 날씨 정보를 알려주는 간단한 날씨 조회 웹앱입니다.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    link: 'https://hyj090915.github.io/m-w/',
    emoji: '🌤'
  },
  {
    id: 2,
    title: '글쓰기 방명록 웹앱',
    description: '누구나 글을 남기고, 작성한 글을 삭제할 수 있는 간단한 방명록 웹 애플리케이션입니다.',
    techStack: ['Node.js', 'MySQL', 'HTML', 'CSS'],
    link: null,
    emoji: '✍️'
  },
  {
    id: 3,
    title: '롤 챔피언 추천 iOS 앱',
    description: '사용자가 선호하는 포지션(탑, 미드, 정글 등)을 선택하면 해당 포지션에 맞는 롤 챔피언을 추천해주는 iOS 앱입니다.',
    techStack: ['Swift', 'Xcode', 'UIKit'],
    link: null,
    emoji: '🧙'
  }
];

export const filterProjects = (searchTerm) => {
  if (!searchTerm) return projects;
  
  return projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.techStack.some(tech => 
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
}; 