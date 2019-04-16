import React from 'react';
import styles from "./HeroCont.module.scss";
import PropTypes from 'prop-types';




const HeroCont = React.forwardRef((props, ref)=>(
    
    <header id={'home'} className={styles.heroCont} ref={ref}>
        {/* <div style={{ backgroundImage: `url( ${bc} )`}} className={styles.heroImg} > 
        </div> */}
        <div className={styles.heroTxt}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <div className={styles.heroButton}>{props.button}</div>
        </div>
    </header>

));

HeroCont.propTypes= {
    title: PropTypes.string,
    content: PropTypes.string,
    button : PropTypes.string
};



export default HeroCont;