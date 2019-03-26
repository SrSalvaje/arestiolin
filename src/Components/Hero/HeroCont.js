import React, { Component } from 'react';
import styles from "./HeroCont.module.scss";


const HeroCont =(props)=>(
    <header className={styles.heroCont}>
        <div className={styles.heroImg} > 
        </div>
        <div className={styles.heroTxt}>
        <h1>Hi, I am Jon Miren</h1>
        <p>And I'm a Front-End Web Developer</p>
        <div className={styles.heroButton}>Checkout my portfolio</div>
        </div>
    </header>

);




export default HeroCont