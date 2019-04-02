import React from 'react';
import styles from "./Portfolio.module.scss";
import ProjectWidget from './ProjectWidget/ProjectWidget';
import Carousel from './Carousel/Carousel';
import PropTypes from 'prop-types';
import content from '../../content';




const Portfolio =(props)=>(
  <div className={styles.main}>
    <h2>{props.title? props.title:"Title goes here"}</h2>
    <Carousel
      content={content.portfolio}
    />
  </div>
  

);




export default Portfolio;