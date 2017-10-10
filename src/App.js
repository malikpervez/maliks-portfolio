import React, { Component } from 'react';
import NavbarInstance from './components/Navbar'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="portfoliobackground">
        <header>
          <a href='http://www.linkedin.com'>
            <img src ={require('./images/linked.png')}></img>
          </a>
          <a href= 'http://www.github.com'>
          <img src ={require('./images/github.png')}></img>
          </a>
        </header>
          <h1 data-heading="i">Malik</h1>
            <div className='profile-box container'>
            </div>

      </div>
    );
  }
}

export default App;
