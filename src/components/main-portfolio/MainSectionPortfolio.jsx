// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import NavBar from '../navbar/NavBar';
import Photo from './MainPhoto';
import styles from './styles.module.css';

function MainSection() {

  return (
    <section className="elements-sections main-section">
      <div className="main-section-div">
        <Photo />
        <NavBar/>
      </div>
    </section>
  );
}

export default MainSection;