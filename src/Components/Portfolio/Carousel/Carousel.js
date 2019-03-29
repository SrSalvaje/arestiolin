import React from 'react';
import styles from "./Carousel.module.scss";





const Carousel =(props)=>(

  <div className={styles.main}>
    <div className={styles.left}>{props.img1} </div>
    <div className={styles.center}>{props.img2} </div>
    <div className={styles.right}>{props.img3} </div>
    <div className={styles.prev} >&#10094;</div>
    <div className={styles.next} >&#10095;</div>
  </div>
  

);




export default Carousel;