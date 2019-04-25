import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import styles from './App.module.scss';
import content from './content'
import HeroCont from './Components/Hero/HeroCont';
import Profile from './Components/Profile/Profile';
import CV from './Components/CV/CV';
import Portfolio from './Components/Portfolio/Portfolio';
import Nav from './Components/Nav/Nav';
import bc from './Assets/img/hero.JPG';

import Modal from './Components/Modal/Modal';
import  {debounce, throttle}from 'lodash';
import Footer  from "./Components/Footer/Footer";


let prevScroll = window.pageYOffset;
let currentScroll;

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state={
      showNav:true,
      showFooter:false,
      isModal:false,
      viewPortHeight:"",
      viewPortWidth:"",
      openedWidget:"",
      trigger1:false,
      trigger2:false,
      trigger3:false,
      trigger4:false

    }
    //store references to global event listeners
  this.throttledScroll = throttle(this.checkScroll, 300);
  this.debouncedViewPort = debounce(this.getViewpoertSize, 500);
  }
 
  //called when a widget is clicked in Profile
  clickWidget=(widget)=>{  
    this.setState(function(prevState){
      return {openedWidget: prevState.openedWidget===widget?"":widget};
    })
  }

  componentDidMount(){
    this.getViewpoertSize();
    window.addEventListener("resize", this.debouncedViewPort, false);
    window.addEventListener('scroll', this.throttledScroll, false);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.debouncedViewPort, false);
    window.removeEventListener('scroll', this.throttledScroll, false);
  }

  checkScroll=()=>{
    currentScroll= window.pageYOffset;
    let setNav, setFooter;
    
    if(prevScroll > currentScroll){
      setNav=true;
    }else{
      setNav=false;
    }

    if(prevScroll<currentScroll){
      setFooter=true;
    }else{
      setFooter=false;
    }
    prevScroll=currentScroll;

   this.setState({
     trigger1: currentScroll>= (this.state.viewPortWidth<768? this.state.viewPortHeight/4: this.state.viewPortHeight/2)? true: false,
     trigger2:currentScroll >= (this.state.viewPortWidth<768? this.state.viewPortHeight/2: this.state.viewPortHeight+50) ?  true: false,
     trigger3:currentScroll >= (this.state.viewPortWidth<768? this.state.viewPortHeight/1.5: this.state.viewPortHeight+400) ?  true: false,
     trigger4:currentScroll>= (this.state.viewPortWidth<768? this.state.viewPortHeight-68: this.state.viewPortHeight+800) ?  true: false,
     showNav: setNav,
     showFooter:setFooter 
    });
  }

  

  getViewpoertSize=()=>{
    this.setState({viewPortHeight:window.innerHeight, viewPortWidth:window.innerWidth});   
  }
  openModal=(e)=>{
    e.preventDefault();
    this.setState( function(prevState, prevProps){
     return {isModal:!prevState.isModal}
  })
}


 /*  clickedOnNav=(currentView)=>{
    this.setState({currentView:currentView})
  } */

  render() {
    return (
   
        <div className={styles.App} >
          <div style={{ backgroundImage: `url( ${bc} )`}} className={styles.heroImg}></div>
            <Nav
              showNav={this.state.showNav}
              viewPortHeight={this.state.viewPortHeight}
              viewPortWidth={this.state.viewPortWidth}
              id={"nav"}
              links={[
              {name:'profile', position: 1},
              {name:'cv', position: 2},
              {name:'portfolio', position: 3},
              {name:'contact', position:4 }
              ]}
              openModal={this.openModal}
            />
            <Switch>
              <Route exact ={true} path='/' render={()=>(
                  <React.Fragment>
                  <HeroCont
                    id={"hero"}
                    title={content.hero.title}
                    content={content.hero.content}
                    button={content.hero.button}
                    background={content.hero.background}
                  />
                  <Profile trigger1={this.state.trigger1}  trigger2={this.state.trigger2}   trigger3={this.state.trigger3} trigger4={this.state.trigger4}   id={"profile"} openedWidget={this.state.openedWidget} clickWidget={this.clickWidget} />
                </React.Fragment>

              )}/>   
              <Route path='/cv' render={()=>( <CV  id={"cv"}/>)}/>
              <Route path='/portfolio' render={()=>(<Portfolio id={'portfolio'} width={this.state.viewPortWidth}/>)}/>
            </Switch>
          <Footer  openModal={this.openModal} showFooter={this.state.showFooter} showNav={this.state.showNav}></Footer>
          <Modal isModal={this.state.isModal}
          openModal={this.openModal}/>
        </div>
    
    );
  }
}

export default App;
