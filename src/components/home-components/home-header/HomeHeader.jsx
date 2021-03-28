// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import PageTitle from '../../page-title/PageTitle';

function HomeHeader() {

  return (
    <header className={styles.homeHeader}>
      <div className={styles.headerDiv}>
        <PageTitle text="Juliana" hasTwoLines textLineTwo="Biastoto" margin="30px 0px 10px 0px"/>
      </div>
    </header>
  );
}

export default HomeHeader;
