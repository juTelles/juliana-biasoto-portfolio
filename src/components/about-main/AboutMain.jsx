// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import MyPhoto from '../myphoto/MyPhoto';
import styles from './styles.module.css';

function AboutMain() {

  return (
    <section className="elements-sections main-section">
      <div className="main-section-div">
        <MyPhoto />
      </div>
    </section>
  );
}

export default AboutMain;