// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import HomeLanguageStickers from './home-language-stickers/HomeLanguageStickers';
import styles from './styles.module.css';

function HomeFooter() {

  return (
    <footer className={styles.homeFooter}>
        <HomeLanguageStickers/>
    </footer>
  );
}

export default HomeFooter;
