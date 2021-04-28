// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import PageTitle from '../../page-title/PageTitle';

function HomeHeader() {

  return (
    <header className={styles.homeHeader}>
      <div className={styles.headerDiv}>
        <PageTitle text="Juliana" hasTwoLines textLineTwo="Biastoto"/>
      </div>
    </header>
  );
}

export default HomeHeader;
