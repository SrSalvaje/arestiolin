import React from 'react';
import styles from "./Modal.module.scss";
//import PropTypes from 'prop-types';




const Modal = (props)=>{
    return(
        <div className={props.isModal?styles.display:styles.modal}>
          
            <div className={styles.modalContent}>
                <p className={styles.close} onClick={props.openModal}>&times;</p>
                <p>Jon Miren Aresti Olin</p>
                <p>jon.m.h.aresti@gmail.com</p>
                <p>(+46)763218280</p>
            </div>
        </div>
        

    )
    };




export default Modal;