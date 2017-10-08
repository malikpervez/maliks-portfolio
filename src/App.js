import React, { Component } from 'react';
import NavbarInstance from './components/Navbar'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="portfoliobackground">
        <NavbarInstance />
        <div className="row">
          <div className='col-md-6'>
            <img className='malik' src={require('./images/Malik.png')}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
