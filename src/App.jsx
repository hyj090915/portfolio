import React, { useState } from 'react';
import MainLayout from './templates/MainLayout';
import Home from './pages/Home';
import './App.css';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const lightTheme = {
  headerBg: 'rgba(255,255,255,0.95)',
  textColor: '#222',
  logoColor: '#667eea',
  logoSubColor: '#764ba2',
  activeColor: '#667eea',
  activeBg: 'rgba(102,126,234,0.08)',
  bg: '#f5f7fa',
};
const darkTheme = {
  headerBg: 'rgba(34,34,34,0.98)',
  textColor: '#f5f7fa',
  logoColor: '#a5b4fc',
  logoSubColor: '#a78bfa',
  activeColor: '#a5b4fc',
  activeBg: 'rgba(102,126,234,0.18)',
  bg: '#22223b',
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.textColor};
    transition: background 0.3s, color 0.3s;
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <MainLayout toggleTheme={toggleTheme} isDark={isDark}>
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
