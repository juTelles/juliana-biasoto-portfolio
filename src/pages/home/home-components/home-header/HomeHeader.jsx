// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import PageTitle from '../../../../components/page-title/PageTitle';

function HomeHeader({ text }) {

  return (
    <header className={styles.homeHeader}>
      <div className={styles.headerDiv}>
        <PageTitle text={text.title} hasTwoLines textLineTwo="Biastoto"/>
      </div>
    </header>
  );
}

export default HomeHeader;
