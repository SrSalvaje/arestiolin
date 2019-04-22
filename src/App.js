import React, { Component } from 'react';
import styles from './App.module.scss';
import content from './content'
import HeroCont from './Components/Hero/HeroCont';
import Profile from './Components/Profile/Profile';
import CV from './Components/CV/CV';
import Portfolio from './Components/Portfolio/Portfolio';
import Nav from './Components/Nav/Nav';
import bc from './Assets/img/hero.JPG';
//import GetScrollPos from './HOCS/GetScrollPos/GetScrollPos';
import Modal from './Components/Modal/Modal';
import  {throttle, debounce}from 'lodash';
import Footer  from "./Components/Footer/Footer";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      currentView:"",
      isModal:false,
      showNav:false,
      viewPortHeight:"",
      viewPortWidth:"",
      navBarHeight:"",
      profilePosition:"",
      cvPosition:"",
    }

    this.viewsRefs={hero:React.createRef(), nav:React.createRef(), 
      profile:React.createRef(), cv:React.createRef(), 
      portfolio:React.createRef(), scrollCont:React.createRef() 
  }
  
  }
  
  componentDidMount(){
    this.getViewpoertSize();
    window.addEventListener("resize", debounce(this.getViewpoertSize, 500));
  }

  componentWillUnmount(){
    window.removeEventListener("resize", debounce(this.getViewpoertSize, 500));
  }

  
  
  
  getViewpoertSize=()=>{
    this.setState({viewPortHeight:window.innerHeight, viewPortWidth:window.innerWidth, navBarHeight:this.viewsRefs.nav.current.getBoundingClientRect().height});   
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
   
        <div className={styles.App}>
          <div style={{ backgroundImage: `url( ${bc} )`}} className={styles.heroImg}></div>
          <div onScroll={debounce(this.handlesScroll, 50)} className={styles.container} ref={this.viewsRefs.scrollCont}>
            <HeroCont
              ref={this.viewsRefs.hero}
              id={"hero"}s
              title={content.hero.title}
              content={content.hero.content}
              button={content.hero.button}
              background={content.hero.background}
            />
            <Nav
              ref={this.viewsRefs.nav}
              viewPortHeight={this.state.viewPortHeight}
              viewPortWidth={this.state.viewPortWidth}
              clickedOnNav={this.clickedOnNav}
              id={"nav"}
              currentView={this.state.currentView}
              showNav={this.state.showNav}
              scrollCont={this.viewsRefs.scrollCont}
              navBarHeight={this.state.navBarHeight}
              links={[
              {name:'profile', position: 1, elementRef:this.viewsRefs.profile},
              {name:'cv', position: 2, elementRef:this.viewsRefs.cv},
              {name:'portfolio', position: 3, elementRef:this.viewsRefs.portfolio},
              {name:'contact', position:4, }
              ]}
              openModal={this.openModal}
            />
            <Profile ref={this.viewsRefs.profile} height={this.state.viewPortHeight} width={this.state.viewPortWidth} id={"profile"} verticalPosition={this.state.profilePosition}/>
            <CV ref={this.viewsRefs.cv} id={"cv"} verticalPosition={this.state.cvPosition} height={this.state.viewPortHeight}/>
            <Portfolio ref={this.viewsRefs.portfolio} id={'portfolio'}/>
          <Footer  openModal={this.openModal}></Footer>
          <Modal isModal={this.state.isModal}
          openModal={this.openModal}/>
        </div>
        </div>
    
    );
  }
}

export default App;

