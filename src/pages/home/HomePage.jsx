// eslint-disable-next-line no-unused-vars
import react, { useContext, useEffect, useState } from 'react';
import HomeHeader from './home-components/home-header/HomeHeader';
import HomeMain from './home-components/home-main/HomeMain';
import HomeFooter from './home-components/home-footer/HomeFooter';
import { homeText } from './homeText';
import LanguageContext from '../../context/language-context';
import styles from './styles.module.css';

function Home() {
  const [lang, setLang] = useState('en');
  const [text, setText] = useState(homeText.en);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setLang(language);
    setText(lang === 'en' ? homeText.en : homeText.pt);
  }, [lang, language]);

  return (
    <>
      <main className={styles.mainElem}>
      <div className={styles.mainDiv}>
        <HomeHeader
          text={text}
          about
          portfolio
          resume
          contact
          />
        <HomeMain isHome text={text} />
        <HomeFooter text={text} />
        </div>
      </main>
    </>
  );
}

export default Home;
