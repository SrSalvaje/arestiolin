import React from 'react';
import styles from "./Footer.module.scss";
import RespLogo from '../RespLogo/RespLogo';
import google from '../../Assets/img/google.png';
import ReactLogo from '../../Assets/img/svg/logo.svg';
import inst from '../../Assets/img/instagram.png'
//import PropTypes from 'prop-types';




const Footer = (props)=>{
   
    
  


    return(
        <div id={'footer' }className={props.showFooter === true && props.showNav===false? styles.show: styles.main} >         
            <p ><span onClick={props.openModal}>Created by Jon Miren</span></p>
            <div className={styles.attribution}>Icons by <a href="https://www.flaticon.com/authors/smalllikeart"  target={"_blank"} rel={"noopener"} title="smalllikeart">smalllikeart </a> @ <a href="https://www.flaticon.com/"  target={"_blank"} rel={"noopener"}title="Flaticon">www.flaticon.com</a></div>
            <div className={styles.attribution1}>Cosmonaut by <a href="https://www.instagram.com/oxxzyc/"  target={"_blank"} rel={"noopener"} title="smalllikeart"> @oxxyc <RespLogo mainDivStyles={styles.instLogo} logo={inst}/></a></div>
            
            <div className={styles.logos}>
                <RespLogo mainDivStyles={styles.googleLogo} logo={google}/>
                <RespLogo mainDivStyles={styles.reactLogo} logo={ReactLogo} animation={styles.reactLogo}/>           
            </div>
            
        </div>
        
    )
    };




export default Footer;