// eslint-disable-next-line no-unused-vars
import react from 'react';
import StickNote from '../../sticknote/StickNote';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import Sticker from '../../sticker/Sticker';

function HomeLanguageStickers() {

  return (
     <div className={styles.homeLanguageStickersDiv}>
       <Sticker text={'Portugues'}/>
       <Sticker text={'English'}/>
  </div>
  )}

export default HomeLanguageStickers;
