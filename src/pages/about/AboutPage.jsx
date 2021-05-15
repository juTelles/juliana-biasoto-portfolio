// eslint-disable-next-line no-unused-vars
import react, { useContext, useEffect, useState } from 'react';
import AboutMain from './about-main/AboutMain';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import { aboutText } from './aboutText';
import LanguageContext from '../../context/language-context';

function About() {
  const [lang, setLang] = useState('en');
  const [text, setText] = useState(aboutText.en);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setLang(language);
    setText(lang === 'en' ? aboutText.en : aboutText.pt);
  }, [lang, language]);

  return (
    <Container>
      <Header
        title={text.title}
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
