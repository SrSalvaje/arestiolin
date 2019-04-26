import React from 'react';
import styles from "./Portfolio.module.scss";
import PortfolioSlider from './PortfolioSlider'

//import PropTypes from 'prop-types';




const Portfolio =()=>(
    <div id={'portfolio'} className={styles.main}>
  <PortfolioSlider/>   
    </div>

)
  




export default Portfolio;