import React, { Component } from 'react';
import './App.css';
import content from './content'
import HeroCont from './Components/Hero/HeroCont';
import Profile from './Components/Profile/Profile';
import CV from './Components/CV/CV';
import Portfolio from './Components/Portfolio/Portfolio';
import Nav from './Components/Nav/Nav';
import bc from './Assets/img/hero.JPG';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ backgroundImage: `url( ${bc} )`}}></div>
        <HeroCont
          title={content.hero.title}
          content={content.hero.content}
          button={content.hero.button}
          background={content.hero.background}
        />
       {/*  <Nav
          links={[{name:'Profile', position: 1 },
          {name:'CV', position: 2 },
          {name:'Portfolio', position: 3 }
          ]}
        /> */}
        <Profile/>
        <CV/>
        <Portfolio/>
        
      </div>
    );
  }
}

export default App;
