import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.headerBg};
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.10);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 8px 32px rgba(102,126,234,0.18);
  }
`;
const Emoji = styled.div`
  font-size: 2.2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border-radius: 12px;
  padding: 0.7rem 1.2rem;
  margin-bottom: 0.5rem;
`;
const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.logoColor};
`;
const Desc = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
  margin-bottom: 0.5rem;
`;
const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;
const Tech = styled.div`
  background: ${({ theme }) => theme.activeBg};
  color: ${({ theme }) => theme.activeColor};
  padding: 0.3rem 0.9rem;
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: 600;
`;
const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;
const ActionBtn = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #667eea;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: #764ba2;
    transform: translateY(-2px) scale(1.04);
  }
`;
const ModalBg = styled(motion.div)`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled(motion.div)`
  background: ${({ theme }) => theme.headerBg};
  border-radius: 18px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.18);
  padding: 2.5rem 2rem;
  max-width: 420px;
  width: 95vw;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
`;
const ModalClose = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #764ba2;
  cursor: pointer;
`;
const ModalTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.logoColor};
`;
const ModalDesc = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.textColor};
`;
const ModalList = styled.ul`
  padding-left: 1.2rem;
  margin: 0.5rem 0 0 0;
  color: #667eea;
  font-size: 1rem;
`;

const ProjectCard = ({ project }) => {
  const { title, description, techStack, link, emoji, details, github } = project;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        onClick={() => setOpen(true)}
      >
        <Emoji>{emoji}</Emoji>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <TechStack>
          {techStack.map((t, i) => <Tech key={i}>{t}</Tech>)}
        </TechStack>
        <Actions>
          {link && <ActionBtn href={link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt />배포</ActionBtn>}
          {github && <ActionBtn href={github} target="_blank" rel="noopener noreferrer"><FaGithub />깃허브</ActionBtn>}
        </Actions>
      </Card>
      <AnimatePresence>
        {open && (
          <ModalBg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <Modal
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalClose onClick={() => setOpen(false)}>&times;</ModalClose>
              <ModalTitle>{title}</ModalTitle>
              <ModalDesc>{description}</ModalDesc>
              {details && (
                <ModalList>
                  {details.map((d, i) => <li key={i}>{d}</li>)}
                </ModalList>
              )}
              <TechStack>
                {techStack.map((t, i) => <Tech key={i}>{t}</Tech>)}
              </TechStack>
              <Actions>
                {link && <ActionBtn href={link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt />배포</ActionBtn>}
                {github && <ActionBtn href={github} target="_blank" rel="noopener noreferrer"><FaGithub />깃허브</ActionBtn>}
              </Actions>
            </Modal>
          </ModalBg>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard; 