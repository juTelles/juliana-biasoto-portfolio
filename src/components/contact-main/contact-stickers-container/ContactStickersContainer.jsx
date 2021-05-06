/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import ContactSticker from './contact-sticker/ContactSticker';

import styles from './styles.module.css';

function ContactStickersContainer() {
  return (
    <div className={styles.contactStickersDiv}>
      <address className={styles.contactStickersAddress}>
        <ContactSticker
          href="https://www.facebook.com/juliana.telles.96742"
          className="fa fa-facebook"
          alt="My Facebook page link"
        />
        <ContactSticker
          href="mailto:julianatelles.contato@gmail.com"
          className="fa fa-envelope"
          alt="My email link"
        />
        <ContactSticker
          href="https://twitter.com/JuTelles_Dev"
          className="fa fa-twitter"
          alt="My Twitter link"
        />
        <ContactSticker
          href="https://www.instagram.com/jutelles_dev/"
          className="fa fa-instagram"
          alt="My Instagram link"
        />
        <ContactSticker
          href="https://www.linkedin.com/in/juliana-telles-biasoto"
          className="fa fa-linkedin"
          alt="My LinkedIn link"
        />
        <ContactSticker
          href="https://github.com/juTelles"
          className="fa fa-github"
          alt="My GitHub page link"
        />
      </address>
    </div>
  );
}

export default ContactStickersContainer;
