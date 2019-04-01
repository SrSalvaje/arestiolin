import React from 'react';
import styles from './List.module.scss';

const List = (props) => (
    <div className={styles.listCont}>
        <h2>{props.listTitle}</h2>
        <ul className={styles.employmentList}>
        {Object.keys(props.items).map((key)=>(<li onClick={(ev)=>props.openInfo(ev.target)} id= {props.items[key].id} key={props.items[key].id} className={styles.listItem}>{props.items[key].title}</li> ))}
        </ul>

    </div>
       
      


    

)
export default List