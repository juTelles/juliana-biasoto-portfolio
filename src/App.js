import react, { useEffect, useState } from 'react';
import LanguageContext from './context/language-context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

function App() {

  const [language, setLanguage] = useState('en')

  const updateLanguage = (value) => {
    window.localStorage.setItem('@julianaPortfolio/language', value);
    setLanguage(value);
}

  const getLanguage = () => {
    const storedLanguage = window.localStorage.getItem(
      '@julianaPortfolio/language'
    );
    return storedLanguage !== null ? storedLanguage : 'en';
  }

  useEffect(() => {
    const lang = getLanguage();
    setLanguage(lang);
  }, [])

  return (
    <LanguageContext.Provider value={{
      language,
      updateLanguage,
      getLanguage,
    }}>
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
