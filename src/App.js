import React, { Component } from 'react';
import NavbarInstance from './components/Navbar'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="portfoliobackground">
        <NavbarInstance />
          
            <div className='profile-box container'>
            </div>
      </div>
    );
  }
}

export default App;
