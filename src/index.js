import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const languages = {
  pt: 'pt',
  en: 'en',
}

const LanguageContext = React.createContext(languages)

ReactDOM.render(
  <React.StrictMode>
    <LanguageContext.Provider>
      <App />
    </LanguageContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
