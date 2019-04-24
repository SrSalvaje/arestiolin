import React, {Component} from 'react';
import styles from '../Profile/Profile.module.scss';

const Widget =(props)=>{
  let showHide = props.openedWidget === props.title ? styles.clicked : props.class ;

  return(
    <article className={showHide} >
        <h2 onClick={()=>{props.clickWidget(props.title)}}>{props.title}</h2>
        <div className={styles.contDiv} >
          {/* if its a list, wrap all props in a UL and return LI, else return the content */}
          {(props.type==='list'? <ul>{props.content.map((li, index) =>( <li key={`item${index}`}>{li}</li>))}</ul> : props.content)}
        </div>
    </article>

  )
}

   
  
  export default Widget;