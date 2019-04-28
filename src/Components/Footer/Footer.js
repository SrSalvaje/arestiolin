import React from 'react';
import styles from "./Footer.module.scss";
import RespLogo from '../RespLogo/RespLogo';
import google from '../../Assets/img/google.png';
import ReactLogo from '../../Assets/img/svg/logo.svg';
import linkedin from '../../Assets/img/011-linkedin.png';



//import PropTypes from 'prop-types';




const Footer = (props)=>{
   
    
  


    return(
        <div id={'footer' }className={props.showFooter === true && props.showNav===false? styles.show: styles.main} >         
            <p ><a href='https://www.linkedin.com/in/jon-aresti-olin/' target={"_blank"} rel={"noopener"} >Created by Jon Miren <img src={linkedin} className={styles.linkedinLogo}></img> </a></p> 
            <div className={styles.attribution}>Icons by <a href="https://www.flaticon.com/authors/smalllikeart"  target={"_blank"} rel={"noopener"} title="smalllikeart">smalllikeart </a> @ <a href="https://www.flaticon.com/"  target={"_blank"} rel={"noopener"}title="Flaticon">www.flaticon.com</a></div>
            <div className={styles.logos}>
                <RespLogo mainDivStyles={styles.googleLogo} logo={google}/>
                <RespLogo mainDivStyles={styles.reactLogo} logo={ReactLogo} animation={styles.reactLogo}/>           
            </div>
            
        </div>
        
    )
    };




export default Footer;