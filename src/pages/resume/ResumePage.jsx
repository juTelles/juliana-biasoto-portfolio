// eslint-disable-next-line no-unused-vars
import react, { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import ResumeMain from './resume-main/ResumeMain';
import './../../styles/index.css';
import { resumeText } from './resume-text';
import LanguageContext from '../../context/language-context';

function Resume() {
  const [lang, setLang] = useState('en');
  const [text, setText] = useState(resumeText.en);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setLang(language);
    setText(lang === 'en' ? resumeText.en : resumeText.pt);
  }, [lang, language]);

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
