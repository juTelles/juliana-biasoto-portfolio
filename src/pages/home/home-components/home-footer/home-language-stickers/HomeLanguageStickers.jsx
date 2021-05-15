// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Sticker from '../../../../../components/sticker/Sticker';
import { useContext } from 'react';
import LanguageContext from './../../../../../context/language-context';

function HomeLanguageStickers() {

  const [lang, setLang] = useState('en');

  const { updateLanguage } = useContext(LanguageContext);

  const handleClick = (lang) => {
    setLang(lang);
  }
  useEffect(() => {
    updateLanguage(lang)
  }, [lang, updateLanguage])

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
