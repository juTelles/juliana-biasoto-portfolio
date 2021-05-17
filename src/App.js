// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import LanguageContext from './context/language-context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  const getLanguage = () => {
    const storedLanguage = window.localStorage.getItem(
      '@julianaPortfolio/language'
    );
    return storedLanguage;
  };

  const browserLang = window.navigator.language;
  const storedLanguage = window.localStorage.getItem(
    '@julianaPortfolio/language'
  );
  console.log([browserLang, storedLanguage]);
  const initialLang =
    storedLanguage !== null
      ? storedLanguage
      : browserLang === 'pt-BR'
      ? 'pt'
      : 'en';

  const [language, setLanguage] = useState(initialLang);

  const updateLanguage = (value) => {
    window.localStorage.setItem('@julianaPortfolio/language', value);
    setLanguage(value);
  };

  useEffect(() => {
    const lang = getLanguage();
    setLanguage(lang);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        updateLanguage,
        getLanguage,
      }}
    >
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
