import React from 'react';
import styles from "./Modal.module.scss";
//import PropTypes from 'prop-types';




const Modal = (props)=>{
    return(
        <div className={props.isModal?styles.display:styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={props.openModal}>&times;</span>
                <p>Jon Miren Aresti Olin</p>
                <p>My email: jon.m.h.aresti@gmail.com</p>
                <p> My Phone: +46663218280</p>
            </div>
        </div>
        

    )
    };




export default Modal;