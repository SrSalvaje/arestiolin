import React from 'react';
import styles from "./Modal.module.scss";
import ResponsiveImg from '../RespLogo/RespLogo';
import myface from '../../Assets/img/myFace.jpeg'
//import PropTypes from 'prop-types';




const Modal = (props)=>{
    return(
        <div className={props.isModal?styles.display:styles.modal}>
          
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={props.openModal}>&times;</span>
                <ResponsiveImg animation={styles.pictureShadow}logo={myface} alt={"A Picture of me and my dogs."} mainDivStyles={styles.myPicture} />
                <p className={styles.myName}><span>Jon Miren Aresti Olin</span></p>
                <p className={styles.myEmail}><span>jon.m.h.aresti@gmail.com</span></p>
                <p className={styles.myPhone}><span>(+46)763218280</span></p>
            </div>
        </div>
        

    )
    };




export default Modal;