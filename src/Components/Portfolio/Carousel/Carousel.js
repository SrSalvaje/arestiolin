import React, {Component} from 'react';
import styles from "./Carousel.module.scss";
import ProjectWidget from '../ProjectWidget/ProjectWidget';





class Carousel extends Component {




  render(){
    return(
      <div className={styles.main}>



        <div className={styles.prev} >&#10094;</div>
        <div className={styles.next} >&#10095;</div>
      </div>
      

    )


  }
}

  {/* <div className={styles.main}>
     <div className={styles.leftC}>{props.img1} </div> 
    <div className={styles.centerC}>{props.img2} </div>
    <div className={styles.rightC}>{props.img3} </div> 
    
  </div> */}
  






export default Carousel;