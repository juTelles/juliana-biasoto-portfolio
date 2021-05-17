/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';
import Sticker from '../../../../components/sticker/Sticker';

function ResumeLinksStickers({ text }) {
  console.log(text);
  return (
    <div className={styles.resumeLinks}>
      <a href={text.designedResumeLink} className={styles.resumeLink}>
        <Sticker
          text={text.stickerDesignResumePDF}
          fontColor="#a853cd"
          innerBorderColor="#a853cd"
          innerBorderSize="0.3rem"
          outerBorderSize="0rem"
          rotate="0.5deg"
          specialClass={'contact'}
          width="4.3rem"
        />
      </a>
      <a href={text.simpleResumeLink}
         className={styles.resumeLink}>
        <Sticker
          text={text.stickerSimpleResumePDF}
          fontColor="#2da9b1"
          innerBorderColor="#2da9b1"
          innerBorderSize="0.3rem"
          outerBorderSize="0rem"
          rotate="0.5deg"
          specialClass={'contact'}
          width="4.3rem"
        />
      </a>
    </div>
  );
}

export default ResumeLinksStickers;
