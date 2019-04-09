import React, { Component } from 'react';
import './App.css';
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
   
        <div className="App">
          <div style={{ backgroundImage: `url( ${bc} )`}} className="heroImg"></div>
          {/* <GetScrollPos> */}
            <HeroCont
              title={content.hero.title}
              content={content.hero.content}
              button={content.hero.button}
              background={content.hero.background}
              scrollAt={100}
            />
            
            <Nav
              links={[{name:'Profile', position: 1 },
              {name:'CV', position: 2 },
              {name:'Portfolio', position: 3 }
              ]}
              scrollAt={100}
            />
            <Profile
              scrollAt={60}/>
            <CV
            scrollAt={80}
            />
            <Portfolio
            scrollAt={50}/>
          {/* </GetScrollPos>  */}
        </div>
    
    );
  }
}

export default App;
