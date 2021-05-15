// eslint-disable-next-line no-unused-vars
import react, { Children, useContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { languageModalText } from './languageModalText';
import LanguageContext from '../../context/language-context';
import Paper from '../paper/Paper';

function LanguageModal({ changeShowModal }) {
  // eslint-disable-next-line no-unused-vars

  const [lang, setLang] = useState('en');
  const [text, setText] = useState(languageModalText.en);

  const { language, updateLanguage } = useContext(LanguageContext);

  useEffect(() => {
    setLang(language);
    setText(lang === 'en' ? languageModalText.en : languageModalText.pt);
  }, [lang, language]);


  const handleClick = (lang) => {
    setLang(lang);
  };
  useEffect(() => {
    updateLanguage(lang);
  }, [lang, updateLanguage]);

  return (
    <div className={styles.languageModalDiv}>
      <div className={styles.languageModal}>
        <Paper>
          <div className={styles.languageModalHeader}>
            <p>{text.description}</p>
            <div onClick={changeShowModal} className={styles.closeIcon}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className={styles.languageModalMain}>
            <div
              className={styles.portugueseDiv}
              onClick={() => handleClick('pt')}
            >
              <p>{text.portuguese}</p>
              <i key={'pt'} className={lang === 'pt'? 'far fa-check-circle' :
              "far fa-times-circle"}
              ></i>
            </div>
            <div
              className={styles.englishDiv}
              onClick={() => handleClick('en')}
            >
              <p>{text.english}</p>
              <i key={'pt'} className={lang === 'en'? 'far fa-check-circle' :
              "far fa-times-circle"}
              ></i>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default LanguageModal;
