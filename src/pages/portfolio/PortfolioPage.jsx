// eslint-disable-next-line no-unused-vars
import react, { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import LanguageContext from '../../context/language-context';
import PortfolioMain from './portfolio-main/PortfolioMain';
import { portfolioText } from './portfolioText';

function PortfolioPage() {
  const [lang, setLang] = useState('en');
  const [text, setText] = useState(portfolioText.en);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setLang(language);
    setText(lang === 'en' ? portfolioText.en : portfolioText.pt);
  }, [lang, language]);

  return (
    <main>
      <Header
        title="Portfolio"
        className="portfolio-header"
        home
        about
        resume
        contact
      />
      <PortfolioMain text={text}/>
    </main>
  );
}

export default PortfolioPage;
