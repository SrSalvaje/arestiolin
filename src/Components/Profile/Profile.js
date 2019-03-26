import React from 'react';
import styles from './Profile.module.scss';
import Widget from '../Widget/Widget';

const Profile = () => (

    <div className={styles.main}>
      <Widget
                class={styles.gridPos1} 
                title={"Jon Miren Aresti Olin"} 
                content={<ul >
                    <li>30 years old (22/03/1988), Spanish and Mexican Citizenship</li>
                    <li>Swedish Personal Number: 880322-1251</li>
                    <li>Front-end Web Developer</li>
                    <li>Journalist</li>
                    <li>Video Editor</li>
                    <li>PADI Certified SCUBA diving instructor</li>
                    <li>Email: jon.m.h.aresti@gmail.com</li>
                    <li>cellphone: 07 6321 82 80</li>
                </ul>} 
                />


     
    </div>

)
export default Profile