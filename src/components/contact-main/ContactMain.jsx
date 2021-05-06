/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import Sticker from '../sticker/Sticker';
import ResumeLinksStickers from './contact-resumes/resume-links-stickers';
import ContactStickersContainer from './contact-stickers-container/ContactStickersContainer';
import ContactText from './contact-text/contactText';
import styles from './styles.module.css';

function ContactMain() {
  return (
    <section className={styles.contactPageSection}>
      <ResumeLinksStickers/>
      <ContactText/>
      <ContactStickersContainer/>
    </section>
  );
}

export default ContactMain;
