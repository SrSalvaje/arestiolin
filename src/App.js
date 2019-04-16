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

class App extends Component {
  state={
    refs:[],
    currentView:""

  }

  getRefs=(views)=>{
    this.setState({refs:views.slice(0)});
  }

  setCurrentView=()=>{
    let currentView="";
    this.state.refs.forEach((view, index)=>{
      if(index===0 && view.verticalPosition>=400){
        currentView="hero"; 
        console.log(index, view);
      }
      else if(index===2 && view.verticalPosition<=200){
        currentView="profile";
        console.log(index, view);
      }
      else if(index===3 && view.verticalPosition<=200){
        currentView="cv";
        console.log(index, view);
      }
      else if(index===4 && view.verticalPosition<=200){
       currentView="portfolio";
        console.log(index, view);
      }
    });
    this.setState({currentView:currentView});
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
              id={"nav"}
              currentView={this.state.currentView}
              links={[
              {name:'profile', position: 1 },
              {name:'cv', position: 2 },
              {name:'portfolio', position: 3 },
              {name:'contact', position:4}
              ]}
            />
            <Profile id={"profile"}/>
            <CV  id={"cv"} />
            <Portfolio id={'portfolio'}/>
          </GetScrollPos>
        </div>
    
    );
  }
}

export default App;
