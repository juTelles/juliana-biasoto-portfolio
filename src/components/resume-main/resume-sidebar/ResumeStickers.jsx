// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import Sticker from '../../sticker/Sticker';
import styles from './styles.module.css';

function ResumeSideBar() {
  return (
    <div className={styles.resumeStickersDiv}>
      <Sticker
        text="Curriculo pt - PDF"
        fontSize="16px"
        fontColor="#166cf7"
        innerBorder="#166cf7"
        rotate="3deg"
        outerBorderSize="1.5px"
        innerPadding="2px"
        width="78px"
        fontFamily="'Acme', sans-serif"
      />
      <Sticker
        text="Curriculo en - PDF"
        fontSize="16px"
        fontColor="#e8127d"
        innerBorder="#e8127d"
        rotate="2deg"
        outerBorderSize="1.5px"
        innerPadding="2px"
        width="78px"
        fontFamily="'Acme', sans-serif"
      />
    </div>
  );
}

export default ResumeSideBar;
