import React from 'react';
import styles from './List.module.scss';

const List = (props) => (
    <div className={styles.displayList/* props.position<=350? styles.displayList : styles.listCont  */}>
        <ul className={styles.employmentList}>
        {Object.keys(props.items).map((key)=>(<li onClick={(ev)=>props.openInfo(ev.currentTarget)} id= {props.items[key].id} key={props.items[key].id} className={styles.listItem}><span>{props.items[key].title}</span></li> ))}
        </ul>

    </div>
       
      


    

)
export default List