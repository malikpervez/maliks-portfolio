import React, { Component } from 'react';
import NavbarInstance from './components/Navbar'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container portfoliobackground">
        <NavbarInstance />
      </div>
    );
  }
}

export default App;
