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
        </a>
  {/*   </div> */}
    <div className={styles.description}>   
        <p>{props.project.description}</p>
        
    </div>
     {/* <button className={styles.btn}/> <a className={styles.btn} href={props.url} target={"_blank"} rel={"noopener"} >Open in new window</a> </button> */} 
    
  </div>)

};




export default ProjectWidget;