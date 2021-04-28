// eslint-disable-next-line no-unused-vars
import react from 'react';
import styles from './styles.module.css';

function PageTitle({
  text,
  hasTwoLines,
  textLineTwo,
  fontSize,
  alignText,
  width,
  margin
}) {

  const doubleLinedTitle = hasTwoLines? 'doubleLined' : '';
  return (
    <div
      className={`${styles.titleDiv} ${styles[doubleLinedTitle]}`}
      style={{ alignItems: alignText, width: width, margin: margin }}
    >
      <h1 className={styles.titleText} style={{ fontSize: fontSize }}>
        {text}
      </h1>
      {hasTwoLines && (
        <h1 className={styles.titleTextLineTwo}>{textLineTwo}</h1>
      )}
    </div>
  );
}

export default PageTitle;
