// eslint-disable-next-line no-unused-vars
import react, { useContext, useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import LanguageContext from '../../context/language-context';
import PortfolioMain from './portfolio-main/PortfolioMain';
import { portfolioText } from './portfolioText';

function PortfolioPage() {
  const [language, setLanguage] = useState('en');
  const [text, setText] = useState(portfolioText.en);

  const { languageState } = useContext(LanguageContext);

  useEffect(() => {
    setLanguage(languageState);
    setText(language === 'en' ? portfolioText.en : portfolioText.pt);
  }, [language, languageState]);

  return (
    <main>
      <Header
        title={text.title}
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
