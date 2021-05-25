// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Sticker from '../../../../../components/sticker/Sticker';
import { useContext } from 'react';
import LanguageContext from './../../../../../context/language-context';

function HomeLanguageStickers() {

  const { updateLocalStorageLanguage, languageState } = useContext(LanguageContext);

  const [lang, setLang] = useState(languageState);

  const handleClick = (lang) => {
    setLang(lang);
  };

  useEffect(() => {
    updateLocalStorageLanguage(lang);
  }, [lang, updateLocalStorageLanguage]);

  return (
    <div className={styles.homeLanguageStickersDiv}>
      <div
        className={styles.languageStickerDiv}
        onClick={() => handleClick('pt')}
      >
        <Sticker
          text={'Português'}
          backgroundColor={lang === 'pt' ? 'black' : 'white'}
          fontColor={lang === 'pt' ? 'white' : 'black'}
          fontSize="0.7rem"
          width="2.9rem"
        />
      </div>
      <div
        className={styles.languageStickerDiv}
        onClick={() => handleClick('en')}
      >
        <Sticker
          text={'English'}
          backgroundColor={lang === 'en' ? 'black' : 'white'}
          fontColor={lang === 'en' ? 'white' : 'black'}
          fontSize="0.7rem"
          width="2.9rem"
        />
      </div>
    </div>
  );
}

export default HomeLanguageStickers;
