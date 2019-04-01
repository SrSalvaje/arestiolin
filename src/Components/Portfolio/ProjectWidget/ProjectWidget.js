import React from 'react';
import styles from "./ProjectWidget.module.scss";
import PropTypes from 'prop-types';




const ProjectWidget =(props)=>(
  <div className={styles.main}>
    <h3>{props.title}</h3>
    <div className={styles.projectImg}>
        <div className={styles.imgCont}>
            <img className={styles.img} src={props.image} alt={props.alt}/>  
        </div>
    </div>
    <div className={styles.description}>
        {props.description}
        <button className={styles.btn}>Open in new window</button>
    </div>
    
    
  </div>
  

);




export default ProjectWidget;