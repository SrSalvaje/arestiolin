import React from 'react';
import styles from "./Footer.module.scss";
import RespLogo from '../RespLogo/RespLogo';
import google from '../../Assets/img/google.png';
import ReactLogo from '../../Assets/img/svg/logo.svg';
//import PropTypes from 'prop-types';




const Footer = (props)=>{
   
  


    return(
        <div className={styles.main}>         
            <p ><span onClick={props.openModal}>Created by Jon Miren</span></p>
            <div className={styles.attribution}>Icons by <a href="https://www.flaticon.com/authors/smalllikeart"  target={"_blank"} rel={"noopener"} title="smalllikeart">smalllikeart</a><br></br> 
            @ <a href="https://www.flaticon.com/"  target={"_blank"} rel={"noopener"}title="Flaticon">www.flaticon.com</a></div>
            <div className={styles.logos}>
                <RespLogo mainDivStyles={styles.googleLogo} logo={google}/>
                <RespLogo mainDivStyles={styles.reactLogo} logo={ReactLogo} animation={styles.reactLogo}/>           
            </div>
            
        </div>
        
    )
    };




export default Footer;