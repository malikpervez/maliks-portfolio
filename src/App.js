import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container portfoliobackground">
        <Navbar />
      </div>
    );
  }
}

export default App;
