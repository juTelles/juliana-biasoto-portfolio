// eslint-disable-next-line no-unused-vars
import react, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageContext from '../../context/language-context';
import PinnedNote from '../pinned-note/PinnedNote';
import styles from './styles.module.css';
import { navNotesText } from './navNotesText';

function NavNotes({
  home,
  about,
  resume,
  portfolio,
  isHome,
  contact,
  shakeNote,
}) {
  const [lang, setLang] = useState('en');
  const [text, setText] = useState(navNotesText.en);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setLang(language);
    setText(lang === 'en' ? navNotesText.en : navNotesText.pt);
  }, [lang, language]);

  return (
    <>
      <div className={isHome ? styles.homeNavNotesDiv : styles.navNotesDiv}>
        {home && (
          <Link to={'/home' || '/'} className={styles.noteLink}>
            <PinnedNote
              notPinned
              text={text.home}
              noteName="home"
              rotate="4deg"
              centerText
              shakeNote={shakeNote}
            />
          </Link>
        )}
        {about && (
          <Link to="/about" className={styles.noteLink}>
            <PinnedNote
              notPinned
              text={text.about}
              noteName="about"
              rotate="-3deg"
              shakeNote={shakeNote}
            />
          </Link>
        )}
        {resume && (
          <Link to="/resume" className={styles.noteLink}>
            <PinnedNote
              notPinned
              text={text.resume === 'Currículo' ? 'Currí-culo' : text.resume}
              noteName="resume"
              rotate="4deg"
              shakeNote={shakeNote}
            />
          </Link>
        )}
        {portfolio && (
          <Link to="/portfolio" className={styles.noteLink}>
            <PinnedNote
              notPinned
              text={
                text.portfolio === 'Portfólio'
                  ? 'Port-fólio'
                  : text.portfolio === 'Portfolio'
                  ? 'Port-folio'
                  : text.portfolio
              }
              noteName="portfolio"
              rotate="3deg"
              shakeNote={shakeNote}
            />
          </Link>
        )}
        {contact && (
          <Link to="/contact" className={styles.noteLink}>
            <PinnedNote
              notPinned
              text={text.contact}
              noteName="contact"
              rotate="-2deg"
              shakeNote={shakeNote}
            />
          </Link>
        )}
      </div>
    </>
  );
}

export default NavNotes;
