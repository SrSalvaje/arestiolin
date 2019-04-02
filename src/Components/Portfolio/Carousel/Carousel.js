import React, {Component} from 'react';
import styles from "./Carousel.module.scss";
import ProjectWidget from '../ProjectWidget/ProjectWidget';





class Carousel extends Component {

    state={
      isFirst:true
    }

    componentDidMount(){
      this.setState({isFirst:false});
    }
  





  render(){
    

    return(
      <div className={styles.main}>
        { this.props.content.map((project, index)=>(
        
          <div className={this.state.isFirst? (index===0? styles.centerC : index===1? styles.rightC : index=== this.props.content.length-1? styles.leftC: styles.inLine ) : "inLine"  }>
            <ProjectWidget
            title={project.title}
            image={project.image}
            alt={project.alt}
            description={project.description}

            />
          </div>
        )
          
        )}



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