import react, { useEffect, useState } from 'react';
import HomeHeader from './home-components/home-header/HomeHeader';
import HomeMain from './home-components/home-main/HomeMain';
import HomeFooter from './home-components/home-footer/HomeFooter';
import { useDefinedLanguage } from '../../hooks/useDefinedLanguage';
import { homeText } from './homeText';


function Home() {

  const [language, setLanguage] = useState('en');
  const [text, setText] = useState('');

  const definedLanguage = useDefinedLanguage();

  useEffect(() => {
    setLanguage(definedLanguage);
    setText(language === 'en' ? homeText.en : homeText.pt);
  }, [definedLanguage, language]);


  return (
    <main>
      <HomeHeader text={text}/>
      <HomeMain isHome text={text}/>
      <HomeFooter text={text}/>
    </main>
  );
}

export default Home;
