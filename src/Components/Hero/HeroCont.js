import React from 'react';
import styles from "./HeroCont.module.scss";
import PropTypes from 'prop-types';




const HeroCont = (props)=>(
    
    <header id={'home'} className={styles.heroCont} >
        {/* <div style={{ backgroundImage: `url( ${bc} )`}} className={styles.heroImg} > 
        </div> */}
        <div className={styles.heroTxt}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <p className={styles.heroButton}>{props.button}</p>
        </div>
    </header>

);

HeroCont.propTypes= {
    title: PropTypes.string,
    content: PropTypes.string,
    button : PropTypes.string
};



export default HeroCont;