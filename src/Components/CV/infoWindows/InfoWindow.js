import React from 'react';
import styles from './InfoWindows.module.scss';

const infoWindow = (props) => (
   
    <div className={styles.main}>
        <p>{props.location} from: {props.start} to: {props.end}</p>
        <p>{props.description}</p> 
    </div> 


    

)
export default infoWindow;