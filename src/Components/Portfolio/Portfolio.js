import React from 'react';
import styles from "./Portfolio.module.scss";
import PropTypes from 'prop-types';




const Portfolio =(props)=>(
  <div className={styles.main}>
    <h2>{props.title}</h2>

  </div>
  

);




export default Portfolio;