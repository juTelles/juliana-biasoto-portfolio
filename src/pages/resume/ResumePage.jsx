import react, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import ResumeMain from './resume-main/ResumeMain';
import './../../styles/index.css';
import { resumeText } from './resume-text';
import { useDefinedLanguage } from '../../hooks/useDefinedLanguage';

function Resume() {
  const [language, setLanguage] = useState('en');
  const [text, setText] = useState(resumeText.pt);

  const definedLanguage = useDefinedLanguage();

  useEffect(() => {
    setLanguage(definedLanguage);
    setText(language === 'en' ? resumeText.en : resumeText.pt);
  }, [definedLanguage, language]);

  return (
    <Container>
      <Header
        title={text.title}
        className="resume-header"
        home
        portfolio
        about
        contact
      />
      <ResumeMain text={text} />
    </Container>
  );
}
export default Resume;
