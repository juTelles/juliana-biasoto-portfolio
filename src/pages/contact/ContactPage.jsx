import react, { useEffect, useState } from 'react';
import ContactMain from './contact-main/ContactMain';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useDefinedLanguage } from '../../hooks/useDefinedLanguage';
import { contactText } from './contactText';

function Contact() {

  const [language, setLanguage] = useState('en');
  const [text, setText] = useState('');

  const definedLanguage = useDefinedLanguage();

  useEffect(() => {
    setLanguage(definedLanguage);
    setText(language === 'en' ? contactText.en : contactText.pt);
  }, [definedLanguage, language]);


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
      <Footer />
    </main>
  );
}

export default Contact;
