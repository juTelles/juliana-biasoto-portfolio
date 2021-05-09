// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import PolaroidsPanel from './polaroids-panel/PolaroidsPanel';
import styles from './styles.module.css';

function PortfolioMain() {
  return (
    <section className="elements-sections main-section">
      <div className="main-section-div">
        <PolaroidsPanel />
      </div>
    </section>
  );
}


export default PortfolioMain;
