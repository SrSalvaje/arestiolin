import React from 'react';
import styles from "./HeroCont.module.scss";
import PropTypes from 'prop-types';
import bc from '../../Assets/img/hero.JPG'



const HeroCont =(props)=>(
  
    <header className={styles.heroCont}>
        <div style={{ backgroundImage: `url( ${bc} )`}} className={styles.heroImg} > 
        </div>
        <div className={styles.heroTxt}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className={styles.heroButton}>{props.button}</div>
        </div>
    </header>

);

HeroCont.propTypes= {
    background: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    button : PropTypes.string

};



export default HeroCont;