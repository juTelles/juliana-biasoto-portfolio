// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Sticker from '../../sticker/Sticker';
import { useContext } from 'react';
import LanguageContext from './../../../context/language-context';

function HomeLanguageStickers() {

  const [lang, setLang] = useState('en');

  const { changeLanguage } = useContext(LanguageContext);

  const handleClick = (lang) => {
    setLang(lang);
  }
  useEffect(() => {
    changeLanguage(lang)
    window.localStorage.setItem('@julianaPortfolio/language', lang)
    console.log(window.localStorage.getItem('@julianaPortfolio/language'));
  }, [lang, changeLanguage])

  return (
    <div className={styles.homeLanguageStickersDiv}>
      <div onClick={() => handleClick('pt')}>
        <Sticker text={'Portugues'} />
      </div>
      <div onClick={() => handleClick('en')}>
        <Sticker text={'English'} />
      </div>
    </div>
  );
}

export default HomeLanguageStickers;
