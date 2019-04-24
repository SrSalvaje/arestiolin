import React, {Component} from 'react';
import styles from "./Portfolio.module.scss";
import PortfolioSlider from './PortfolioSlider'

//import PropTypes from 'prop-types';




const Portfolio =()=>(
    <div id={'portfolio'} className={styles.main}>
        <h2>Portfolio</h2>
         <PortfolioSlider/> 
    </div>

)
  




export default Portfolio;