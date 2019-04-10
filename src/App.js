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
  render() {
    return (
   
        <div className={styles.App}>
          <div style={{ backgroundImage: `url( ${bc} )`}} className={styles.heroImg}></div>
          <GetScrollPos>     
            <HeroCont
              id={"hero"}
              title={content.hero.title}
              content={content.hero.content}
              button={content.hero.button}
              background={content.hero.background}
              scrollAt={100}
            />
            <Nav
              id={"nav"}
              links={[{name:'Profile', position: 1 },
              {name:'CV', position: 2 },
              {name:'Portfolio', position: 3 }
              ]}
              scrollAt={100}
            />
            <Profile id={"profile"} scrollAt={60}/>
            <CV  id={"cv"} scrollAt={80}/>
            <Portfolio id={'portfolio'} scrollAt={50}/>
          </GetScrollPos>
        </div>
    
    );
  }
}

export default App;
