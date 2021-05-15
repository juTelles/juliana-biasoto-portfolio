import React from 'react';

 const LanguageContext = React.createContext({
  language: 'en',
  updateLanguage: () => {},
  getLanguage: () => {},
});

export default LanguageContext;