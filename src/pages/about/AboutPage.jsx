import react, { useEffect, useState } from 'react';
import AboutMain from './about-main/AboutMain';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import { aboutText } from './aboutText';
import { useDefinedLanguage } from '../../hooks/useDefinedLanguage';

function About() {
  const [language, setLanguage] = useState('en');
  const [text, setText] = useState(aboutText.en);

  const definedLanguage = useDefinedLanguage();

  useEffect(() => {
      setLanguage(definedLanguage);
      setText(language === 'en' ? aboutText.en : aboutText.pt);
    },
    [definedLanguage, language]
  );

  return (
    <Container>
      <Header
        title={text.title}
        className="about-header"
        home
        portfolio
        resume
        contact
      />
      <AboutMain text={text} />
    </Container>
  );
}

export default About;
