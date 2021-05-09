/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import ResumeLinksStickers from './contact-resumes/resume-links-stickers';
import ContactStickersContainer from './contact-stickers-container/ContactStickersContainer';
import ContactText from './contact-text/contactText';
import styles from './styles.module.css';

function ContactMain({text}) {
  return (
    <section className={styles.contactPageSection}>
      <ResumeLinksStickers text={text}/>
      <ContactText text={text}/>
      <ContactStickersContainer text={text}/>
    </section>
  );
}

export default ContactMain;
