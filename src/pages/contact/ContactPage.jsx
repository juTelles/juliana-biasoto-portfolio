// eslint-disable-next-line no-unused-vars
import react, { useContext, useEffect, useState } from 'react';
import ContactMain from './contact-main/ContactMain';
import Header from '../../components/header/Header';
import { contactText } from './contactText';
import LanguageContext from '../../context/language-context';

function Contact() {

  const [language, setLanguage] = useState('en');
  const [text, setText] = useState(contactText.en);

  const { languageState } = useContext(LanguageContext);

  useEffect(() => {
    setLanguage(languageState);
    setText(language === 'en' ? contactText.en : contactText.pt);
  }, [language, languageState]);


  return (
    <main>
      <Header
        title={text.title}
        home
        portfolio
        resume
        about
      />
      <ContactMain text={text}/>
    </main>
  );
}

export default Contact;
