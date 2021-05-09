/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import ContactSticker from './contact-sticker/ContactSticker';

import styles from './styles.module.css';

function ContactStickersContainer({ text }) {

  return (
    <div className={styles.contactStickersDiv}>
      <address className={styles.contactStickersAddress}>
        <ContactSticker
          href="https://www.facebook.com/juliana.telles.96742"
          className="fa fa-facebook"
          alt={text.facebook}
        />
        <ContactSticker
          href="mailto:julianatelles.contato@gmail.com"
          className="fa fa-envelope"
          alt={text.email}
        />
        <ContactSticker
          href="https://twitter.com/JuTelles_Dev"
          className="fa fa-twitter"
          alt={text.twitter}
        />
        <ContactSticker
          href="https://www.instagram.com/jutelles_dev/"
          className="fa fa-instagram"
          alt={text.instagram}
        />
        <ContactSticker
          href="https://www.linkedin.com/in/juliana-telles-biasoto"
          className="fa fa-linkedin"
          alt={text.linkedin}
        />
        <ContactSticker
          href="https://github.com/juTelles"
          className="fa fa-github"
          alt={text.github}
        />
      </address>
    </div>
  );
}

export default ContactStickersContainer;
