import React from 'react';
import styles from "./RespLogo.module.scss";
//import PropTypes from 'prop-types';




const RespLogo = (props)=>{
   
    const allStyles=[styles.logo, props.animation];
    const mainDivStyles=props.mainDivStyles


    return(
        <div  className={mainDivStyles}>
            <img className={allStyles.join(" ")} src={props.logo} alt={props.alt}></img>
        </div>
        
    )
    };




export default RespLogo;