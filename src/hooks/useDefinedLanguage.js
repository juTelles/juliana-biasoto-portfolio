import { useState, useContext, useEffect } from 'react';
import LanguageContext from '../context/language-context';

export const useDefinedLanguage = () => {
  const [lang, setLang] = useState('en');

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const storedlanguage = window.localStorage.getItem(
      '@julianaPortfolio/language'
    );
    const choosedLanguage = storedlanguage === null ? language : storedlanguage;
    setLang(choosedLanguage);
  }, [language]);

  return lang;
};
