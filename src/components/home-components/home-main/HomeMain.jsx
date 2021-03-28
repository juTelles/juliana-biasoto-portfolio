// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import MyPhoto from '../../myphoto/MyPhoto';
import styles from './styles.module.css';
import HomeNavBar from '../home-navbar/HomeNavBar';

function HomeMain() {

  return (
    <section>
      <div className={styles.homeMainDiv}>
        <MyPhoto />
        <HomeNavBar isHome />
      </div>
    </section>
  );
}

export default HomeMain;