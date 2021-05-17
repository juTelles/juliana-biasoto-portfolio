// eslint-disable-next-line no-unused-vars
import react, { useContext, useEffect, useState } from 'react';
import ContactMain from './contact-main/ContactMain';
import Header from '../../components/header/Header';
import { contactText } from './contactText';
import LanguageContext from '../../context/language-context';

function Contact() {

  const [lang, setLang] = useState('en');
  const [text, setText] = useState(contactText.en);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setLang(language);
    setText(lang === 'en' ? contactText.en : contactText.pt);
  }, [lang, language]);


  return (
    <main>
      <Header
        title={text.title}
        className="contact-header"
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
