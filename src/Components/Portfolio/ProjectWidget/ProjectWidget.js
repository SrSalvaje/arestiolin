import React from 'react';
import styles from "./ProjectWidget.module.scss";
//import PropTypes from 'prop-types';




const ProjectWidget =(props)=>(
  <div className={styles.main}>
    <h3>{props.title}</h3>
{/*     <div className={styles.projectImg}> */}
        <div className={styles.imgCont}>
            <img className={styles.img} src={props.image} alt={props.alt}/>  
        </div>
  {/*   </div> */}
    <div className={styles.description}>   
        <p>{props.description}</p>
        
    </div>
    <a href={props.url} target={"_blank"} ><button className={styles.btn}/* onClick={(e)=>{console.log(e.target)}} */>Open in new window</button></a>
    
  </div>
  

);




export default ProjectWidget;