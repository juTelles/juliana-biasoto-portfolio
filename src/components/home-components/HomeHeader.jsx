// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import Name from './Name';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';


function HomeHeader() {

  return (
    <header className="elements-sections">
      <div className="header-div">
        <Name />
        <Link to="/contact" className="nav-link" text="Home">
      </Link>
      </div>
    </header>
  );
}

export default HomeHeader;
