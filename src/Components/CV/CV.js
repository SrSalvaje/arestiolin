import React from 'react';
import styles from './CV.module.scss';
import List from './List/List';
import content from '../../content';
import Map from '../Map/MapLoader';

const CV = (props) => ( 
    <div className={styles.main}>
        <div className={styles.list}>
        <List
            items={content.CV}
            listTitle={'Employment History'}
        />

        </div>
       
        <div className={styles.map}>
            <Map/>
        </div>
        
    </div>
)
export default CV