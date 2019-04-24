import React, { Component } from 'react';
import {Route} from "react-router-dom";
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

class App extends Component {
  state={
  
    currentView:"",
    showNav:true,
    isModal:false,
    viewPortHeight:"",
    viewPortWidth:"",
    openedWidget:""

  
  }

  clickWidget=(widget)=>{  
    this.setState(function(prevState){
      return {openedWidget: prevState.openedWidget===widget?"":widget};
    })
  }

  componentDidMount(){
    this.getViewpoertSize();
    window.addEventListener("resize", debounce(this.getViewpoertSize, 500));
    window.addEventListener('scroll', throttle(this.showNav, 200));
  }

  componentWillUnmount(){
    window.removeEventListener("resize", debounce(this.getViewpoertSize, 500));
    window.removeEventListener('scroll', throttle(this.showNav, 200));
  }

  showNav=()=>{
    let currentScroll= window.pageYOffset;
    if(prevScroll > currentScroll){
      this.setState({showNav:true})
    }else{
      this.setState({showNav:false})
    }
    prevScroll=currentScroll;
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


  clickedOnNav=(currentView)=>{
    this.setState({currentView:currentView})
  }

  render() {
    return (
   
        <div className={styles.App} >
          <div style={{ backgroundImage: `url( ${bc} )`}} className={styles.heroImg}></div>
          
            <Nav
              showNav={this.state.showNav}
              viewPortHeight={this.state.viewPortHeight}
              viewPortWidth={this.state.viewPortWidth}
              clickedOnNav={this.clickedOnNav}
              id={"nav"}
              currentView={this.state.currentView}
              links={[
              {name:'profile', position: 1},
              {name:'cv', position: 2},
              {name:'portfolio', position: 3},
              {name:'contact', position:4 }
              ]}
              openModal={this.openModal}
            />
          <Route path='/profile' render={()=>(
            <React.Fragment>
              <HeroCont
              id={"hero"}
              title={content.hero.title}
              content={content.hero.content}
              button={content.hero.button}
              background={content.hero.background}
            />
            <Profile height={this.state.viewPortHeight} width={this.state.viewPortWidth} id={"profile"} openedWidget={this.state.openedWidget} clickWidget={this.clickWidget}/>
            </React.Fragment>
          )}
          />
          <Route path='/cv' render={()=>( <CV  id={"cv"}/>)}/>
          <Route path='/portfolio' render={()=>(<Portfolio id={'portfolio'} width={this.state.viewPortWidth}/>)}/>
          <Footer  openModal={this.openModal}></Footer>
          <Modal isModal={this.state.isModal}
          openModal={this.openModal}/>
        </div>
    
    );
  }
}

export default App;
