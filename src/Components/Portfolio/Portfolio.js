import React, {Component} from 'react';
import styles from "./Portfolio.module.scss";
import ProjectWidget from './ProjectWidget/ProjectWidget';
import bc from '../../Assets/img/zen-space-web.jpg';

//import PropTypes from 'prop-types';
import content from '../../content';




class Portfolio extends Component { 
  state={
    currentSlide:0,
    slides:null
  }


componentWillMount(){
    this.setState({slides:content.portfolio});

  } 

  forward=()=>{
    this.setState(function(prevState){
      if(prevState.currentSlide<this.state.slides.length-1){
        console.log("stuff");
        return {currentSlide:prevState.currentSlide+1}
      }else{
        return {currentSlide:0}
      }
     
    })
  }
  back=()=>{
    this.setState(function(prevState){
      if(prevState.currentSlide===0){
        return {currentSlide:this.state.slides.length-1}
      }else{
        return {currentSlide:prevState.currentSlide-1}
      }
    })
    

  }

  render(){
    let display;
    if(this.props.width<768){

      display=
        <div className={styles.projectList} style={{backgroundImage: `url( ${bc})`}}>
      <li>
      <ProjectWidget  
                      title={this.state.slides[this.state.currentSlide].title}
                      image={this.state.slides[this.state.currentSlide].image}
                      alt={this.state.slides[this.state.currentSlide].alt}
                      description={this.state.slides[this.state.currentSlide].description}
                      url={this.state.slides[this.state.currentSlide].url}
                      /> 
      </li> 
      </div>
    }else{
      display=
        <ul className={styles.projectList} style={{backgroundImage: `url( ${bc})`}}>
        {content.portfolio.map((project, index)=>(
            <li key={project.id}>
               <ProjectWidget
              
              title={project.title}
              image={project.image}
              alt={project.alt}
              description={project.description}
              url={project.url}
              />
    
            </li>
            ))}
        </ul>
          
    }
    return(
    <div id={'portfolio'} className={styles.main} ref={this.props.forwardedRef}>
        <div  className={styles.prev} onClick={this.back}>&#10094;</div><h2>Portfolio</h2><div className={styles.next} onClick={this.forward} >&#10095;</div>
        {display}

        
    </div>

    )
  }
}




export default React.forwardRef((props, ref)=><Portfolio {...props} forwardedRef={ref}/>);