import React from 'react';
import styles from "./Nav.module.scss";
//import PropTypes from 'prop-types';




const Nav = React.forwardRef((props, ref)=>{
   
    const goTo=(e, position)=>{
        e.preventDefault();
        e.target.className=styles.linksCurrent;
        window.scrollTo(0,`${(window.innerHeight+100)*position}`);   
    }


    return(
        <nav className={(props.verticalPosition<=-80 )?styles.main: styles.hide} ref={ref}>
        <ul>
        {props.links.map(link=>(
           <li key={link.name} ><a  href={`#${link.name}`} className={link.name===props.currentView? styles.linksCurrent: styles.links}  onClick={(e)=> goTo(e, link.position)}>{link.name}</a></li>
        ))}
        </ul>
    </nav>

    )
    });




export default Nav;