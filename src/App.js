import { useEffect, useState } from 'react';
import LanguageContext from './context/language-context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { useLocalStorage } from './hooks/localStorage';

function App() {

  const [language, setLanguage] = useState('en')

  const changeLanguage = (value) => setLanguage(value);

  return (
    <LanguageContext.Provider value={{
      language,
      changeLanguage,
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
