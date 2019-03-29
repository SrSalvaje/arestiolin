import React from 'react';
import styles from "./Portfolio.module.scss";
import ProjectWidget from './ProjectWidget/ProjectWidget';
import Carousel from './Carousel/Carousel';
import PropTypes from 'prop-types';




const Portfolio =(props)=>(
  <div className={styles.main}>
    <h2>{props.title? props.title:"Title goes here"}</h2>
    <Carousel
      img1={<ProjectWidget
        title={"img1"}
        description={"ipsolorem something lorem ipsp very long, much interestinmg ö<jklsaedfghkjkfdagkjhdfgszkhjbfdgs"}
        image={'http://via.placeholder.com/604x611'}
        alt={'ipso ipso'}
      />}

      img2={<ProjectWidget
        title={"img2"}
        description={"ipsolorem something lorem ipsp very long, much interestinmg ö<jklsaedfghkjkfdagkjhdfgszkhjbfdgs"}
        image={'http://via.placeholder.com/604x611'}
        alt={'ipso ipso'}
      />}

      img3={
        <ProjectWidget
        title={"img3"}
        description={"ipsolorem something lorem ipsp very long, much interestinmg ö<jklsaedfghkjkfdagkjhdfgszkhjbfdgs"}
        image={'http://via.placeholder.com/604x611'}
        alt={'ipso ipso'}
    />
      }
    />

    {/* <ProjectWidget
        title={"Place Holder"}
        description={"ipsolorem something lorem ipsp very long, much interestinmg ö<jklsaedfghkjkfdagkjhdfgszkhjbfdgs"}
        image={'http://via.placeholder.com/604x611'}
        alt={'ipso ipso'}
    /> */}

  </div>
  

);




export default Portfolio;