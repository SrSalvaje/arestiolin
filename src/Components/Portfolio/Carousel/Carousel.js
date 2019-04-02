import React, {Component} from 'react';
import styles from "./Carousel.module.scss";
import ProjectWidget from '../ProjectWidget/ProjectWidget';





class Carousel extends Component {
  constructor(props){
    super(props);
    this.state={
      /* inLine:this.props.content.slice(2, this.props.content.length-1), */
      displayed:[...this.props.content]
    }

  }

nextWidget=()=>{
  const tempDisplayed = [...this.state.displayed];
  const firstElement =tempDisplayed.shift();
  tempDisplayed.push(firstElement);
  this.setState({displayed:tempDisplayed});
    console.log("next");

}    

prevWidget = ()=>{
  const tempDisplayed = [...this.state.displayed];
  const lastElement= tempDisplayed.pop();
  tempDisplayed.splice(0,0, lastElement);
  this.setState({displayed:tempDisplayed});
  console.log("prev");

}




  render(){ 
   
    


    return(
      <div className={styles.main}>
        {this.state.displayed.map((project, index)=>(
          <div key={project.id} className={index===0? styles.centerC : index===1? styles.rightC : index === this.state.displayed.length-1? styles.leftC: styles.inLine}>
          <ProjectWidget
          title={project.title}
          image={project.image}
          alt={project.alt}
          description={project.description}
  
          />
        </div> 


        ))

        } 
        <div onClick={this.prevWidget} className={styles.prev} >&#10094;</div>
        <div onClick={this.nextWidget} className={styles.next} >&#10095;</div>
      </div>
      

    )


  }
}


  






export default Carousel;