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
  
      let showHide = this.state.show === false ? styles.widget : styles.clicked,
      classes, classesString;
     
        if(this.props.class){
            classes=[showHide, this.props.class];
            classesString=classes.join(' ');
        }else{
            classesString=showHide;
        }

  
      const widget = (<article className={classesString} >
                          <h2 onClick={this.togleShow}>{this.props.title}</h2>
                          <div /* style={{display:showHide}} */>
                            {/* if its a list, wrap all props in a UL and return LI, else return the content */}
                            {(this.props.type==='list'? <ul>{this.props.content.map((li, index) =>( <li key={`item${index}`}>{li}</li>))}</ul> : this.props.content)}
                          </div>
                      </article>);
      return (
          widget
      );
    }
  }
  
  export default Widget;