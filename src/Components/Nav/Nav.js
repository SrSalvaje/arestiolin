import React from 'react';
import styles from "./Nav.module.scss";
//import PropTypes from 'prop-types';




const Nav = React.forwardRef((props, ref)=>{
   
    const goTo=(e, position)=>{
       e.preventDefault();
        window.scrollTo(0,`${(window.innerHeight+100)*position}`); 
        props.clickedOnNav(e.currentTarget.id);

    };

   /*  const toggleModal=(callback)=>{
        console.log("Modal");
        callback();
    }; */


    return(
        <nav className={(props.verticalPosition<=-80 )?styles.main: styles.hide} ref={ref}>
            <ul>
            {props.links.map(link=>(
            <li id={link.name} onClick={link.name==='contact'? props.openModal : (e)=> goTo(e, link.position)} key={link.name} className={ link.name===props.currentView? styles.liCurrent:styles.lis}><a  href={`#${link.name}`} value={link.name}className={/* link.name===props.currentView? styles.linksCurrent: */ styles.links}  >{link.name}</a></li>
            ))}
            </ul>
        </nav>

    )
    });




export default Nav;