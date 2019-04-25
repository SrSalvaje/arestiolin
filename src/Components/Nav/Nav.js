import React from 'react';
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom"
//import PropTypes from 'prop-types';




const Nav = (props)=>{
    return(
        <nav id={'nav'} className={props.showNav?styles.main: styles.hide}>
            <ul>
                {props.links.map(link=>(
                    link.name!=='contact' ?
                    <li value={link.name}   key={link.name}  className={ styles.lis}><NavLink activeClassName={styles.liCurrent} className={styles.links} exact to={link.name==='profile'? "/":`/${link.name}`}>
                       <span>{link.name}</span>
                    </NavLink ></li> : 
                    <li value={link.name}  onClick={ (e)=>props.openModal(e)} key={link.name} className={styles.lis}><a  href={`#${link.name}`} value={link.name}className={/* link.name===props.currentView? styles.linksCurrent: */ styles.links}  >{link.name}</a></li>

                ))}
            </ul>
        </nav>

    )      
};


export default Nav;

