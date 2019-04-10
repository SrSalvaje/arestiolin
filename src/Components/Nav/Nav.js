import React from 'react';
import styles from "./Nav.module.scss";
//import PropTypes from 'prop-types';




const Nav = React.forwardRef((props, ref)=>(
    <ul className={(props.verticalPosition<=-80 )?styles.main: styles.hide} ref={ref}>
        {props.links.map(link=>(
            <li key={link.name} className={styles.links} onClick={()=>{
                window.scrollTo(0,`${(window.innerHeight+100)*link.position}`); 
            }}>{link.name}</li>
        ))}
    </ul>
  

));




export default Nav;