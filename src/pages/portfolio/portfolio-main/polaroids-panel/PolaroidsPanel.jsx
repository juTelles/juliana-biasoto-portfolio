// eslint-disable-next-line no-unused-vars
import react, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Polaroid from '../../../../components/polaroid/Polaroid';
import magic8ball from '../../../../img/magic8ball-polaroid.png';
import unpluggedRetreat from '../../../../img/unplugged-retreat-polaroid.png';
import colorMachine from '../../../../img/color-machine-polaroid.png';
import codingAdvice from '../../../../img/coding-advice-polaroid.png';
import mySheet from '../../../../img/my-sheet-polaroid.png';
import roguePickings from '../../../../img/rogue-pickings-polaroid.png';
import covidSurvey from '../../../../img/covid-survey-polaroid.png';
import jsDocumentation from '../../../../img/js-doc-polaroid.png';
import adaLovelace from '../../../../img/ada-love-lace-polaroid.png';
import salaryCalculator from '../../../../img/salary-calculator-polaroid.png';
import compoundInterestCalculator from '../../../../img/compound-interest-calculator-polaroid.png';
import searchBox from '../../../../img/search-users-polaroid.png';
import gradesApp from '../../../../img/grades-app-polaroid.png';
import jubilleAusten from '../../../../img/jubille-austen-polaroid.png';

function PolaroidsPanel() {
  return (
    <div className={styles.panelDiv}>
      <Polaroid
        linkTo="https://jutelles.github.io/my-sheet-website/"
        src={mySheet}
        alt="Link to MySheet website"
      />
      <Polaroid
        src={unpluggedRetreat}
        linkTo="https://jutelles.github.io/unplugged-retreat-website/"
        alt="Link to Unplugged Retreat project"
      />
      <Polaroid
        linkTo="https://jutelles.github.io/covid-survey/"
        src={covidSurvey}
        alt="Link to Covid-19 Survey form page"
      />
      <Polaroid
        linkTo="https://jutelles.github.io/salary-calculator/"
        src={salaryCalculator}
        alt="Link to Salary Calculator App"
      />
      <Polaroid
        linkTo="https://jutelles.github.io/compound-interest-calculator/"
        src={compoundInterestCalculator}
        alt="Link to Compound Interest Calculator Web App"
      />
      <Polaroid
        linkTo="https://jutelles.github.io/search-box/"
        src={searchBox}
        alt="Link to Search Box Web App"
      />
      <Polaroid
        linkTo="https://grades-app-front-end.herokuapp.com/grade/"
        src={gradesApp}
        alt="Link to Grades App"
      />
      <Polaroid
        src={colorMachine}
        linkTo="https://jutelles.github.io/color-picker-ranges/"
        alt="Link to Color Machine project"
      />
      <Polaroid
        linkTo="https://jutelles.github.io/jubilee-austen-repo/"
        src={jubilleAusten}
        alt="Link to Jubille Austen Portfolio Page"
      />
      <Polaroid
        linkTo="https://jutelles.github.io/js-documentation-page/"
        src={jsDocumentation}
        alt="Link to JavaScript Documentation page"
      />
      <Polaroid
        linkTo="https://jutelles.github.io/ada-lovelace-tribute-page/"
        src={adaLovelace}
        alt="Link to Ada Lovelace Tribute page"
      />
      <Polaroid
        linkTo="https://jutelles.github.io/rogue-pickings/"
        src={roguePickings}
        alt="Link to Rogue Pickings website"
      />
      <Polaroid
        src={magic8ball}
        linkTo="https://jutelles.github.io/magic8ball/"
        alt="Link to Magic8ball project"
      />
      <Polaroid
        src={codingAdvice}
        linkTo="https://jutelles.github.io/jutelles-advice-page/"
        alt="Link to Coding Advice project"
      />
    </div>
  );
}

export default PolaroidsPanel;
