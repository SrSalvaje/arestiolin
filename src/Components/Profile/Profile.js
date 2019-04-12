import React from 'react';
import styles from './Profile.module.scss';
import Widget from '../Widget/Widget';
import content from '../../content'

const Profile = React.forwardRef((props, ref) => (

    <div className={styles.main} ref={ref}>
        <Widget
                type={content.profile.widget1.type}
                class={props.verticalPosition<=480? styles.enter1: styles.gridPos1} 
                title={content.profile.widget1.title} 
                content={content.profile.widget1.content} 
        />
        <Widget 
            type={content.profile.widget2.type}
            class={props.verticalPosition<=345? styles.enter2: styles.gridPos2} 
            title={content.profile.widget2.title} 
            content={content.profile.widget2.content} 
        /> 
         <Widget 
            type={content.profile.widget3.type}
            class={props.verticalPosition<=210? styles.enter3: styles.gridPos3} 
            title={content.profile.widget3.title} 
            content={content.profile.widget3.content} 
        /> 
        <Widget 
            type={content.profile.widget4.type}
            class={props.verticalPosition<=80? styles.enter4: styles.gridPos4} 
            title={content.profile.widget4.title} 
            content={content.profile.widget4.content} 
        /> 


     
    </div>

));
export default Profile