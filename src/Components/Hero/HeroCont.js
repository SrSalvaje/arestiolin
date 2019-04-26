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
            <div className={styles.arrowAnim}>
            <div className={styles.arrowSliding}>
                <div className={styles.arrow}></div>
            </div>
            <div className={[styles.arrowSliding, styles.delay1].join(" ")}>
                <div className={styles.arrow}></div>
            </div>
            <div className={[styles.arrowSliding, styles.delay2].join(" ")}>
                <div className={styles.arrow}></div>
            </div>
            <div className={[styles.arrowSliding, styles.delay3].join(" ")}>
                <div className={styles.arrow}></div>
            </div>
            </div> 
        
        </div>
       
    </header>

);

HeroCont.propTypes= {
    title: PropTypes.string,
    content: PropTypes.string,
    button : PropTypes.string
};



export default HeroCont;