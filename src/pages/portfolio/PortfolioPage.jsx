import react, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { useDefinedLanguage } from '../../hooks/useDefinedLanguage';
import PortfolioMain from './portfolio-main/PortfolioMain';
import { portfolioText } from './portfolioText';

function PortfolioPage() {
  const [language, setLanguage] = useState('en');
  const [text, setText] = useState(portfolioText.pt);

  const definedLanguage = useDefinedLanguage();

  useEffect(() => {
    setLanguage(definedLanguage);
    setText(language === 'en' ? portfolioText.en : portfolioText.pt);
  }, [definedLanguage, language]);

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
      <Footer />
    </main>
  );
}

export default PortfolioPage;
