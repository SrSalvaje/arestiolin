import React from 'react';
import styles from "./PercentageB.module.scss";
//import PropTypes from 'prop-types';




const PercentageB = (props)=>{
   
  


    return(
        <div style={{width:props.width, height:props.height, backgroundColor:props.mainColor} } className={styles.container}>
            <span style={{background: props.progressColor, width:props.progress}}className={styles.main}></span>
            <span className={styles.remaining} >{props.progress}</span>
        </div>
        
    )
    };




export default PercentageB;
/* <PercentageB width={"100%"} height={"50px"} mainColor={"white"} progressColor={"red"} progress={"70%"}/> */