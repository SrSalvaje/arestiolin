import React from 'react';
import styles from "./ProjectWidget.module.scss";
//import PropTypes from 'prop-types';




const ProjectWidget =(props)=>{
  const extraClass= props.currentCard===props.project.index? props.extraClass : "";
  return(
  <div className={[styles.main, extraClass].join(" ")} id={props.project.id}>
    <h3>{props.project.title}</h3>
{/*     <div className={styles.projectImg}> */}
        <a href={props.project.url} target={"_blank"} rel={"noopener"} className={styles.imgCont}>
            <img className={styles.img} src={props.project.image} alt={props.project.alt}/>
            <div className={styles.imageText}><span >Click to open in new window</span></div>
        </a>
  {/*   </div> */}
    <div className={styles.description}>   
        <p>{props.project.description}</p>
        
    </div>
     
    
  </div>)

};




export default ProjectWidget;