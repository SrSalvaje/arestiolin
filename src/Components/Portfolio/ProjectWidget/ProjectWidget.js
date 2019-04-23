import React from 'react';
import styles from "./ProjectWidget.module.scss";
//import PropTypes from 'prop-types';




const ProjectWidget =(props)=>(
  <div className={styles.main}>
    <h3>{props.title}</h3>
{/*     <div className={styles.projectImg}> */}
        <a href={props.url} target={"_blank"} rel={"noopener"} className={styles.imgCont}>
            <img className={styles.img} src={props.image} alt={props.alt}/>  
        </a>
  {/*   </div> */}
    <div className={styles.description}>   
        <p>{props.description}</p>
        
    </div>
     {/* <button className={styles.btn}/> <a className={styles.btn} href={props.url} target={"_blank"} rel={"noopener"} >Open in new window</a> </button> */} 
    
  </div>
  

);




export default ProjectWidget;