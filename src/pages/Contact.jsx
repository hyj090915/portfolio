import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';

const Section = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  min-height: 80vh;
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
const Socials = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;
`;
const SocialBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: #667eea;
  color: #fff;
  padding: 1rem 1.7rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: #764ba2;
    transform: translateY(-2px) scale(1.04);
  }
`;
const EmailBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;
const Email = styled.div`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textColor};
  background: ${({ theme }) => theme.headerBg};
  padding: 0.7rem 1.3rem;
  border-radius: 8px;
  font-weight: 600;
`;
const CopyBtn = styled.button`
  background: #667eea;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s;
  &:hover {
    background: #764ba2;
  }
`;
const QRBox = styled.div`
  margin-bottom: 2.5rem;
  text-align: center;
`;
const QRImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(102,126,234,0.12);
  margin-bottom: 0.5rem;
`;
const Form = styled.form`
  background: ${({ theme }) => theme.headerBg};
  border-radius: 14px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  padding: 2rem 1.5rem;
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const Input = styled.input`
  padding: 0.9rem 1.2rem;
  border-radius: 8px;
  border: 1.5px solid #e9ecef;
  font-size: 1rem;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textColor};
`;
const Textarea = styled.textarea`
  padding: 0.9rem 1.2rem;
  border-radius: 8px;
  border: 1.5px solid #e9ecef;
  font-size: 1rem;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.textColor};
  min-height: 100px;
`;
const SubmitBtn = styled.button`
  background: #667eea;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 1rem 1.7rem;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #764ba2;
  }
`;
const SuccessMsg = styled.div`
  color: #22c55e;
  font-weight: 700;
  text-align: center;
`;

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('hyj090915@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact">
      <Title
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        연락처 & 소셜
      </Title>
      <Socials>
        <SocialBtn href="mailto:hyj090915@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope /> 이메일
        </SocialBtn>
        <SocialBtn href="https://www.instagram.com/hyj.090915/" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> 인스타그램
        </SocialBtn>
        <SocialBtn href="https://github.com/hyj090915" target="_blank" rel="noopener noreferrer">
          <FaGithub /> 깃허브
        </SocialBtn>
      </Socials>
      <EmailBox>
        <Email>hyj090915@gmail.com</Email>
        <CopyBtn onClick={handleCopy} type="button">
          {copied ? <FaCheck /> : <FaCopy />} 복사
        </CopyBtn>
      </EmailBox>
      <QRBox>
        <QRImg src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://github.com/hyj090915" alt="깃허브 QR" />
        <div style={{ color: '#888', fontSize: '0.95rem' }}>깃허브 QR</div>
      </QRBox>
      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="이름" value={form.name} onChange={handleChange} required />
        <Input name="email" placeholder="이메일" value={form.email} onChange={handleChange} required type="email" />
        <Textarea name="message" placeholder="메시지" value={form.message} onChange={handleChange} required />
        <SubmitBtn type="submit">메시지 보내기</SubmitBtn>
        {sent && <SuccessMsg>메시지가 전송되었습니다! (실제 전송은 구현 필요)</SuccessMsg>}
      </Form>
    </Section>
  );
};

export default Contact; 