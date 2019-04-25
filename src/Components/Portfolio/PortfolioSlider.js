import React, {Component} from 'react';
import styles from "./PortfolioSlider.module.scss";
import ProjectWidget from './ProjectWidget/ProjectWidget';
import bc from '../../Assets/img/zen-space-web.jpg';

//import PropTypes from 'prop-types';
import content from '../../content';




class PortfolioSlider extends Component { 

    state={
        projects: content.portfolio,
        project:1

    }
   
    nextProject=()=>{
        this.setState(function(prevState){
            if(prevState.project<this.state.projects.length-1){
                return { project: prevState.project+1
                }
            }else{
                return{project:prevState.project}
            }
            
        })

    }

    prevProject=()=>{
        this.setState(function(prevState){
            if(prevState.project===0){
                return {project:0}
            }else{
                return { project: prevState.project-1
                }

            }
           
        })

    }

    render(){
        const {projects, project} = this.state;
        const buzzoutleft = this.state.project===0? styles.buzzOut : "";
        const buzzoutRight= this.state.project===this.state.projects.length-1? styles.buzzOut : "";
        return(
            <div className={styles.main}>
                <div  className={[styles.prev, buzzoutleft].join(" ")} onClick={this.prevProject}>&#10094;</div> <div className={[styles.next, buzzoutRight].join(" ")} onClick={this.nextProject} >&#10095;</div>
                <div className={[styles.slideShow, ].join(" ")}>
                    
                    <div className={styles.slideShowWrapper}
                        style={{'transform':`translateX(-${this.state.project*(100/* /projects.length */)}%)`}}
                    >
                        {
                            projects.map(prj=><ProjectWidget key={prj.id} project={prj} currentCard={this.state.project+1} extraClass={styles.activeSlideShowcard}/>)
                        }
                  
                    </div>
                </div>
            </div>
            

         

        )
    }
  
}




export default PortfolioSlider;