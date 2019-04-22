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
import  {debounce}from 'lodash';
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
      navBarHeight:""
    
    }

    this.viewsRefs={hero:React.createRef(), nav:React.createRef(), 
      profile:React.createRef(), cv:React.createRef(), 
      portfolio:React.createRef() 
  }
  }
  

  componentDidMount=()=>{
    this.getViewpoertSize();
    window.addEventListener("resize", debounce(this.getViewpoertSize, 500));
  }

  componentWillUnmount=()=>{
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
 /*  getRefs=(views)=>{
    this.setState({refs:views.slice(0)});
  } */

  /* setCurrentView=()=>{
    let currentView="";
    let refsKeys= Object.keys(this.viewsRefs);
    refsKeys.forEach((key, index)=>{
      
      if(this.viewsRefs[key]==='hero')
    })
    this.viewsRefs.forEach((view, index)=>{
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
  }  */
  clickedOnNav=(currentView)=>{
    this.setState({currentView:currentView})
  }
  handlesScroll=()=>{
    /* let element =e.currentTarget;
    console.log(`scroll height:  ${element.scrollHeight}
    element scrollTop: ${element.scrollTop}
    element client height: ${element.clientHeight}
    a-b = ${element.scrollHeight-element.scrollTop}`); */
    //show nav
    //console.log(this.viewsRefs.hero.current.getBoundingClientRect());
   
    let heroPos = this.viewsRefs.hero.current.getBoundingClientRect();
 
    
    if(heroPos.top<=(-(heroPos.height/4.5)) && this.state.showNav===false) {
      this.setState({showNav:true});
    }
    if(heroPos.top>(-(heroPos.height/4.5)) && this.state.showNav===true){
      this.setState({showNav:false});
    }

     
    //console.log(this.viewsRefs.hero.current.getBoundingClientRect());
    
    
}


  render() {
    return (
   
        <div className={styles.App}  >
          <div style={{ backgroundImage: `url( ${bc} )`}} className={styles.heroImg}></div>
          <div onScroll={e=>{this.handlesScroll(e)}} className={styles.container}>
            <HeroCont
              ref={this.viewsRefs.hero}
              id={"hero"}
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
              links={[
              {name:'profile', position: 1, elementRef:this.viewsRefs.profile},
              {name:'cv', position: 2, elementRef:this.viewsRefs.cv},
              {name:'portfolio', position: 3, elementRef:this.viewsRefs.portfolio},
              {name:'contact', position:4, }
              ]}
              openModal={this.openModal}
            />
            <Profile ref={this.viewsRefs.profile} height={this.state.viewPortHeight} width={this.state.viewPortWidth} id={"profile"}/>
            <CV ref={this.viewsRefs.cv} id={"cv"} />
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
