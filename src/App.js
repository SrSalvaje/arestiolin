import React, { Component } from 'react';
import './App.css';
import content from './content'
import HeroCont from './Components/Hero/HeroCont';
import Profile from './Components/Profile/Profile';
import CV from './Components/CV/CV';
import Portfolio from './Components/Portfolio/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroCont
          title={content.hero.title}
          content={content.hero.content}
          button={content.hero.button}
          background={content.hero.background}
        />
        <Profile/>
        <CV/>
        <Portfolio/>
        
      </div>
    );
  }
}

export default App;
