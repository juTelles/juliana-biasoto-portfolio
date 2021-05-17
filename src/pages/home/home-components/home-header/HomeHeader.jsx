// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import PageTitle from '../../../../components/page-title/PageTitle';
import NavBar from '../../../../components/navbar/NavBar';

function HomeHeader({ changeShowModal, text, resume, about, portfolio, home, contact }) {

  return (
    <header className={styles.homeHeader}>
      <div className={styles.headerDiv}>
        <PageTitle text={text.titleLine1} hasTwoLines textLineTwo={text.titleLine2}/>
        <NavBar
          resume={resume}
          about={about}
          portfolio={portfolio}
          home={home}
          contact={contact}
          changeShowModal={changeShowModal}
        />
      </div>
    </header>
  );
}

export default HomeHeader;
