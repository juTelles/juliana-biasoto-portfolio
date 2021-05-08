import AboutMain from '../../components/about-main/AboutMain';
import Header from '../../components/header/Header';
import Container from '../../components/container/Container';
import { useContext } from 'react';
import LanguageContext from '../../context/language-context';
import { aboutText } from './aboutText';

function About() {
  const { language } = useContext(LanguageContext);
  // console.log([lang.changeLang(),lang.language]);
  // console.log(lang.language)
  const text = language === 'en' ? aboutText.en : aboutText.pt;
  console.log(text);
  return (
    <Container>
      <Header title={text.title} className="about-header" home portfolio resume contact/>
      <AboutMain text={text}/>
    </Container>
  );
}

export default About;
