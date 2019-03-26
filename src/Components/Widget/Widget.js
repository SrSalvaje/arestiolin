import React, {Component} from 'react';
import styles from './Widget.module.scss';

class Widget extends Component {
 
    state={
          show:false
        }

  
      togleShow=()=>{
          this.setState((prevState)=>{return{show:!prevState.show}});
      }
  
    render(){
  
      let showHide = this.state.show === true ? 'block' : 'none',
      classes, classesString;
      //if a class is passed as a prop
      console.log(this.props.class)
        if(this.props.class){
            classes=[styles.widget, this.props.class];
            classesString=classes.join(' ');
        }else{
            classesString=styles.widget
        }

  
      const widget = (<article className={classesString} >
                          <h2 onClick={this.togleShow}>{this.props.title}</h2>
                          <div style={{display:showHide}}>{this.props.content}</div>
                      </article>);
      return (
          widget
      );
    }
  }
  
  export default Widget;