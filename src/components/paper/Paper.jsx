// eslint-disable-next-line no-unused-vars
import react, { Children, useEffect, useState } from 'react';
import Pin from '../pin/Pin';
import styles from './styles.module.css';
import { randomColor } from './../helpers/helpers';

function Paper({
  children,
  color,
  pinColor,
  sectionClassName,
  paperSize,
  doublePinned,
}) {
  // eslint-disable-next-line no-unused-vars

  return (
    <div
      style={{ width: paperSize }}
      className={`${styles.paperDiv} ${styles[sectionClassName]}`}
    >
      <div className={styles.paper} style={{ backgroundColor: color }}>
        <div
          className={doublePinned ? styles.doublePinsDiv : styles.onePindDiv}
        >
          <Pin
            className={styles.pin}
            color={pinColor === 'random' ? randomColor() : pinColor}
          />
          {doublePinned ? (
            <Pin
              className={styles.pin}
              color={pinColor === 'random' ? randomColor() : pinColor}
            />
          ) : (
            ''
          )}
        </div>
        <div className={styles.paperHeaderDiv}></div>
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
