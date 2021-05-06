/* eslint-disable no-unused-vars */
import react, { useEffect, useState } from 'react';
import ContactSticker from '../contact-stickers-container/contact-sticker/ContactSticker';
import LinedPaper from '../contact-resumes/resume-links-stickers';
import styles from './styles.module.css';

function ContactText() {
  return (
        <div className={styles.textDiv}>
          <p className={styles.text}>
            Gostou do meu trabalho? Quer me contratar?
            Criticar ou elogiar algum dos meus projetos?
            Por favor, fique à vontade para se comunicar
            comigo em qualquer umas das minhas redes sociais...
          </p>
        </div>
  );
}

export default ContactText;
