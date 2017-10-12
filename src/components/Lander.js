import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Resume from './Resume'
import '../css/App.css';
class Lander extends Component{
  render(){
    return(
      <div>

      <h1 data-heading="i">Malik</h1>
      <div className='profile-box row'>
        <div className="button">Full Stack Developer</div>
        <div className='navigation col-lg-12'>
        <Link className='routes' to= '/aboutme'>About Me</Link>
        <Resume />
        <Link className='routes' to='/mywork'>My Work</Link>
        </div>

      </div>
      </div>

    )
  }
}

export default Lander;
