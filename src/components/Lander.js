import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';
class Lander extends Component{
  render(){
    return(
      <div>
      <h1 data-heading="i">Malik</h1>
      <div className='profile-box container'>
        <div className="button">Full Stack Developer</div>
        <Link className='routes' to= '/aboutme'>About Me</Link>
        <Link className='routes' to='/mywork'>My Work</Link>
      </div>
      </div>

    )
  }
}

export default Lander;
