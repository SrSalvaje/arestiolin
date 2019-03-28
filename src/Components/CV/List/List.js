import React from 'react';
import styles from './List.module.scss';

const List = (props) => (
    <div className={styles.listCont}>
        <h2>{props.listTitle}</h2>
        <ul className={styles.employmentList}>
        {Object.keys(props.items).map((key, index)=>(<li key={`job${index}`} className={styles.listItem}>{props.items[key].title}</li> ))}
        </ul>

    </div>
       


    

)
export default List