// eslint-disable-next-line no-unused-vars
import react, { Children, useEffect, useState } from 'react';
import Pin from '../pin/Pin';
import styles from './styles.module.css';

function Paper({
  children,
  title,
  color,
  pinColor,
  sectionClassName,
  textClassName,
  paperSize,
}) {
  // eslint-disable-next-line no-unused-vars

  return (
    <div
      style={{ width: paperSize }}
      className={`${styles.paperDiv} ${styles[sectionClassName]}`}
    >
      <div className={styles.paper} style={{ backgroundColor: color }}>
        <div className={styles.pinsDiv}>
          <Pin className={styles.pin} color={pinColor} />
          <Pin className={styles.pin} color={pinColor} />
        </div>
        <div className={styles.paperHeaderDiv}>
          <h2 className={styles.paperTitle}>{title}</h2>
        </div>
        <div
          className={`${styles.paperContentDiv} ${styles[sectionClassName]}`}
        >
          {children}
        </div>
      </div>
      <div className={styles.paperShadow}></div>
    </div>
  );
}

export default Paper;
