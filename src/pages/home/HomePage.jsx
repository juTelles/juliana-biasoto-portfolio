// eslint-disable-next-line no-unused-vars
import react, { useContext, useEffect, useState } from 'react';
import HomeHeader from './home-components/home-header/HomeHeader';
import HomeMain from './home-components/home-main/HomeMain';
import HomeFooter from './home-components/home-footer/HomeFooter';
import { homeText } from './homeText';
import LanguageContext from '../../context/language-context';
import styles from './styles.module.css';
import LanguageModal from '../../components/language-modal/LanguageModal';

function Home() {
  const [lang, setLang] = useState('en');
  const [text, setText] = useState(homeText.en);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setLang(language);
    setText(lang === 'en' ? homeText.en : homeText.pt);
  }, [lang, language]);

  const [showModal, setShowModal] = useState(false);

  const changeShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <main className={styles.mainElem}>
      {showModal ? (
        <div className={styles.modalDiv}>
          <LanguageModal changeShowModal={changeShowModal}/>
        </div>
      ) : (
        ''
      )}
      <div className={styles.mainDiv}>
        <HomeHeader
          changeShowModal={changeShowModal}
          text={text}
          about
          portfolio
          resume
          contact
          />
        <HomeMain isHome text={text} />
        <HomeFooter text={text} />
        </div>
      </main>
    </>
  );
}

export default Home;
