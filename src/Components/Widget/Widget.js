import React, {Component} from 'react';
import styles from '../Profile/Profile.module.scss';

class Widget extends Component {
 
    state={
          show:false
        }

  
      togleShow=()=>{
          this.setState((prevState)=>{return{show:!prevState.show}});
      }
  
    render(){
  
      let showHide = this.state.show === false ? this.props.class : styles.clicked;
      

  
      const widget = (<article className={showHide} >
                          <h2 onClick={this.togleShow}>{this.props.title}</h2>
                          <div className={styles.contDiv} >
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