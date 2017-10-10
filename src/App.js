import React, { Component } from 'react';
import NavbarInstance from './components/Navbar'
import { Fade } from 'react-reveal';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="portfoliobackground">
        <header>
          <Fade left delay={1000}>
            <a className='links' href='http://www.linkedin.com'>
              <img src ={require('./images/linked.png')}></img>
            </a>
          </Fade>
          <Fade left delay={1500}>
            <a className ='links' href= 'http://www.github.com'>
              <img src ={require('./images/github.png')}></img>
            </a>
          </Fade>
          <Fade left delay={2000}>
            <a className ='links' href= 'http://www.github.com'>
              <img src ={require('./images/contactme.png')}></img>
            </a>
          </Fade>
        </header>
        <h1 data-heading="i">Malik</h1>
        <div className='profile-box container'>
          <div className="button">Full Stack Developer</div>
        </div>


      </div>
    );
  }
}

export default App;
