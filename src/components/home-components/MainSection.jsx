// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import NavBar from '../navbar/NavBar';
import MyPhoto from '../myphoto/MyPhoto';
import styles from './styles.module.css';


function MainSection() {

  return (
    <section className="elements-sections main-section">
      <div className="main-section-div">
        <MyPhoto />
        <NavBar resume about portfolio className="home"/>
      </div>
    </section>
  );
}

export default MainSection;