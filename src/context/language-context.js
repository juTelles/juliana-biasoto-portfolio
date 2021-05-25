import React from 'react';

 const LanguageContext = React.createContext({
  languageState: 'en',
  updateLocalStorageLanguage: () => {},
  getLocalStirageLanguage: () => {},
});

export default LanguageContext;