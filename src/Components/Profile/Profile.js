import React from 'react';
import styles from './Profile.module.scss';
import Widget from '../Widget/Widget';
import content from '../../content';
import ResponsiveLogo from '../RespLogo/RespLogo';
import ReactLogo from '../../Assets/img/007-react.png';
import cssLogo from '../../Assets/img/002-css.png';
import htmlLogo from '../../Assets/img/003-html-5.png';
import testLogo from '../../Assets/img/008-test.png';
import photoLogo from '../../Assets/img/004-photoshop.png';
import accessLogo from '../../Assets/img/signs.png';
import premiereLogo from '../../Assets/img/005-premiere.png';

const Profile = (props) =>{
    //let tenPercentHeight=props.height/10;
    return (
        <div id={'profile'} className={styles.main} >
            <Widget
                clickWidget={props.clickWidget}
                    openedWidget={props.openedWidget}
                    type={content.profile.widget1.type}
                    class={styles.enter/* props.verticalPosition<= (props.height*(props.width<768 ? 0.85 : 0.65))? styles.enter: styles.widget */} 
                    title={content.profile.widget1.title} 
                    content={content.profile.widget1.content} 
            />
            <Widget
                clickWidget={props.clickWidget}
                openedWidget={props.openedWidget} 
                type={content.profile.widget2.type}
                class={styles.enter/* props.verticalPosition<=(props.height*(props.width<768 ? 0.65 : 0.65))? styles.enter: styles.widget */} 
                title={content.profile.widget2.title} 
                content={content.profile.widget2.content} 
            /> 
             <Widget
                clickWidget={props.clickWidget}
                openedWidget={props.openedWidget} 
                type={content.profile.widget3.type}
                class={styles.enter/* props.verticalPosition<=(props.height*(props.width<768 ? 0.35 : 0.25))? styles.enter: styles.widget */} 
                title={content.profile.widget3.title} 
                content={content.profile.widget3.content} 
            /> 
            <Widget
                clickWidget={props.clickWidget}
                openedWidget={props.openedWidget} 
                type={content.profile.widget4.type}
                class={styles.enter/* props.verticalPosition<=(props.height*(props.width<768 ? 0.15 : 0.25))? styles.enter: styles.widget */} 
                title={content.profile.widget4.title} 
                content={<ul>
                    <li><ResponsiveLogo mainDivStyles={styles.mainDivStyles} logo={content.imgs.jsLogo.img} alt={"JavaScript Logo"}/> <span>JavaScript</span></li>
                    <li><ResponsiveLogo mainDivStyles={styles.mainDivStyles} logo={ReactLogo} alt={"React Logo"}/><span>React</span></li>
                    <li><ResponsiveLogo mainDivStyles={styles.mainDivStyles} logo={cssLogo} alt={"CSS Logo"}/><span>CSS</span></li>
                    <li><ResponsiveLogo mainDivStyles={styles.mainDivStyles} logo={htmlLogo} alt={"HTML Logo"}/><span>HTML</span></li>
                    <li><ResponsiveLogo mainDivStyles={styles.mainDivStyles} logo={testLogo} alt={"Test Logo"}/><span>Test Driven Development</span></li>
                    <li><ResponsiveLogo mainDivStyles={styles.mainDivStyles} logo={accessLogo} alt={"Two avatars using sign language"}/><span>Accesibility</span></li>
                    <li><ResponsiveLogo mainDivStyles={styles.mainDivStyles} logo={premiereLogo} alt={"PremierePro Logo"}/><span>PremierePro</span></li>
                    <li><ResponsiveLogo mainDivStyles={styles.mainDivStyles} logo={photoLogo} alt={"Photoshop Logo"}/><span>Photoshop</span></li>
                   {/*  <li><ResponsiveLogo mainDivStyles={styles.mainDivStyles} logo={content.imgs.jsLogo.img} alt={"JavaScript Logo"}/>Tools</li> */}
                </ul>} 
            /> 
    
    
         
        </div>
    
    )}

export default Profile