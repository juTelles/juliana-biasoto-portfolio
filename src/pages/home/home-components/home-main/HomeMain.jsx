// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import MyPhoto from '../../../../components/myphoto/MyPhoto';
import styles from './styles.module.css';
import HomeNavBar from './home-navbar/HomeNavBar';

function HomeMain({ text }) {

  return (
    <section>
      <div className={styles.homeMainDiv}>
        <MyPhoto />
        <HomeNavBar isHome text={text}/>
      </div>
    </section>
  );
}

export default HomeMain;