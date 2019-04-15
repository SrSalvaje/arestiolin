import React from 'react';
import styles from "./Portfolio.module.scss";
import ProjectWidget from './ProjectWidget/ProjectWidget';
import Carousel from './Carousel/Carousel';
//import PropTypes from 'prop-types';
import content from '../../content';




const Portfolio = React.forwardRef((props,ref)=>(
  <div className={styles.main} ref={ref}>
    <ul className={styles.projectList}>
    {content.portfolio.map((project, index)=>(
        <li key={project.id}>
           <ProjectWidget
          
          title={project.title}
          image={project.image}
          alt={project.alt}
          description={project.description}
          />

        </li>
         
        ))}

    </ul>
     
  </div>
  

));




export default Portfolio;