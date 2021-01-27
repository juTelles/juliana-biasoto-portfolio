// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import NavBar from '../navbar/NavBar';
import Title from '../title/Title';
import styles from './styles.module.css';

function Header({ text, resume, about, portfolio, home }) {
  return (
    <header className="elements-sections">
      <div className="header-div">
        <Title text={text} />
        <NavBar
          resume={resume}
          about={about}
          portfolio={portfolio}
          home={home}
        />
      </div>
    </header>
  );
}

export default Header;
