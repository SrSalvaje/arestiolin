import React from 'react';
import styles from "./Nav.module.scss";
//import PropTypes from 'prop-types';




const Nav = React.forwardRef((props, ref)=>{
   
    const goTo=(e, position, name)=>{
       e.preventDefault();
       props.scrollCont.current.scrollTo(0,`${(window.innerHeight+70)*position}`); 
       /*  console.log(`Target name ${name}`);
        console.log(`Current target id ${e.currentTarget.id}`); */
       
        props.clickedOnNav(name);
        //adjustPos(element);


    };
    //const adjustPos=(element)=>element.addRef.current.scrollIntoView(false); 

   /*  const toggleModal=(callback)=>{
        console.log("Modal");
        callback();
    }; */


    return(
        <nav id={'nav'} className={props.showNav?styles.main: styles.hide} ref={ref}>
            <ul>
            {props.links.map(link=>(
            <li value={link.name}  onClick={link.name==='contact'? (e)=>props.openModal(e) : (e)=> goTo(e, link.position, link.name )} key={link.name} className={ link.name===props.currentView? styles.liCurrent:styles.lis}><a  href={`#${link.name}`} value={link.name}className={/* link.name===props.currentView? styles.linksCurrent: */ styles.links}  >{link.name}</a></li>
            ))}
            </ul>
        </nav>

    )
    });




export default Nav;