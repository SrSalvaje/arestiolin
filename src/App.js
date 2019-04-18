import React, { Component } from 'react';
import styles from './App.module.scss';
import content from './content'
import HeroCont from './Components/Hero/HeroCont';
import Profile from './Components/Profile/Profile';
import CV from './Components/CV/CV';
import Portfolio from './Components/Portfolio/Portfolio';
import Nav from './Components/Nav/Nav';
import bc from './Assets/img/hero.JPG';
import GetScrollPos from './HOCS/GetScrollPos/GetScrollPos';
import Modal from './Components/Modal/Modal';
import  {debounce}from 'lodash';
import Footer  from "./Components/Footer/Footer";

class App extends Component {
  state={
    refs:[],
    currentView:"",
    isModal:false,
    viewPortHeight:"",
    viewPortWidth:""
  }

  componentDidMount=()=>{
    this.getViewpoertSize();
    window.addEventListener("resize", debounce(this.getViewpoertSize, 500));
  }

  componentWillUnmount=()=>{
    window.removeEventListener("resize", debounce(this.getViewpoertSize, 500));
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
  getRefs=(views)=>{
    this.setState({refs:views.slice(0)});
  }

  setCurrentView=()=>{
    let currentView="";
    this.state.refs.forEach((view, index)=>{
      if(index===0 && view.verticalPosition>=400){
        currentView="hero"; 
   
      }
      else if(index===2 && view.verticalPosition<=200){
        currentView="profile";
       
      }
      else if(index===3 && view.verticalPosition<=200){
        currentView="cv";
       
      }
      else if(index===4 && view.verticalPosition<=200){
       currentView="portfolio";
      
      }
    });
    this.setState({currentView:currentView});
  }
  clickedOnNav=(currentView)=>{
    this.setState({currentView:currentView})
  }

  render() {
    return (
   
        <div className={styles.App}>
          <div style={{ backgroundImage: `url( ${bc} )`}} className={styles.heroImg}></div>
          <GetScrollPos getRefs={this.getRefs} setCurrentView={this.setCurrentView}  >     
            <HeroCont
              id={"hero"}
              title={content.hero.title}
              content={content.hero.content}
              button={content.hero.button}
              background={content.hero.background}
            />
            <Nav
              viewPortHeight={this.state.viewPortHeight}
              viewPortWidth={this.state.viewPortWidth}
              clickedOnNav={this.clickedOnNav}
              id={"nav"}
              currentView={this.state.currentView}
              links={[
              {name:'profile', position: 1, elementRef:this.state.refs[2]},
              {name:'cv', position: 2, elementRef:this.state.refs[3]},
              {name:'portfolio', position: 3, elementRef:this.state.refs[4]},
              {name:'contact', position:4, }
              ]}
              openModal={this.openModal}
            />
            <Profile height={this.state.viewPortHeight} id={"profile"}/>
            <CV  id={"cv"} />
            <Portfolio id={'portfolio'}/>
          </GetScrollPos>
          <Footer  openModal={this.openModal}></Footer>
          <Modal isModal={this.state.isModal}
          openModal={this.openModal}/>
        </div>
    
    );
  }
}

export default App;
