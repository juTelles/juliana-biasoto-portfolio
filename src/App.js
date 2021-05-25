// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import LanguageContext from './context/language-context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  const getLocalStorageLanguage = () => {
    const storedLanguage = window.localStorage.getItem(
      '@julianaPortfolio/language'
    );
    return storedLanguage;
  };
  const updateLocalStorageLanguage = (value) => {
    window.localStorage.setItem('@julianaPortfolio/language', value);
    setLanguageState(value);
  };

  const browserLang = window.navigator.language;
  const storedLanguage = getLocalStorageLanguage();

  const initialLang =
    storedLanguage !== null
      ? storedLanguage
      : browserLang === 'pt-BR'
      ? 'pt'
      : 'en';

  const [languageState, setLanguageState] = useState(initialLang);


  useEffect(() => {
    const lang = getLocalStorageLanguage();
    setLanguageState(lang);
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        languageState,
        updateLocalStorageLanguage,
        getLocalStorageLanguage,
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
