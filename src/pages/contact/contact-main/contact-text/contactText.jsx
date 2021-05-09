/* eslint-disable no-unused-vars */
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';

function ContactText({text}) {
  return (
        <div className={styles.textDiv}>
          <p className={styles.text}>
            {text.mainText}
          </p>
        </div>
  );
}

export default ContactText;
