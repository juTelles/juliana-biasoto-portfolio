// eslint-disable-next-line no-unused-vars
import react from 'react';
import Title from '../page-title/PageTitle';
import styles from './styles.module.css';
import NavBar from '../navbar/NavBar';

function Header({ title, resume, about, portfolio, home, contact }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerDiv}>
        <Title text={title} />
        <NavBar
          resume={resume}
          about={about}
          portfolio={portfolio}
          home={home}
          contact={contact}
        />
      </div>
    </header>
  );
}

export default Header;
