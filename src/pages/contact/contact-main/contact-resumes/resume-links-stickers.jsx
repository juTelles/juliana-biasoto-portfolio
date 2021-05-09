/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';
import Sticker from '../../../../components/sticker/Sticker';

function ResumeLinksStickers({text}) {
  return (
    <div className={styles.resumeLinks}>
      <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:8c80e203-26bb-40f0-abd5-4d3ead5a30d5" className={styles.resumeLink}>
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
      <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:65371fb9-7c36-4f16-8929-84e67a20f6ec" className={styles.resumeLink}>
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
