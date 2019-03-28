import React from 'react';
import styles from "./ProjectWidget.module.scss";
import PropTypes from 'prop-types';




const ProjectWidget =(props)=>(
  <div className={styles.main}>
    <h3>{props.title}</h3>
    <div className={styles.description}>
        {props.description}
    </div>
    <div className={styles.leftColumn}>
        <div className={styles.imgCont}>
            <img class={styles.img} src={props.image} alt={props.alt}/>  
        </div>
        <button className={styles.btn}>Open in new window</button>
    </div>
    
  </div>
  

);




export default ProjectWidget;