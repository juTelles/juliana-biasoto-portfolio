/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';

function ContactSticker({href, alt, className}) {
  return (
      <div className={styles.contactStickerDiv}>
        <a
        href={href}
        className={className}
        alt={alt}
        ></a>
      </div>
  );
}

export default ContactSticker;
