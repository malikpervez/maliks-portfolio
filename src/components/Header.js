import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import '../css/App.css';

class Header extends Component{
  render(){
    return(
    <header>
      <Fade left delay={1000}>
        <a className='links' href='http://www.linkedin.com'>
          <img className='links-image' src ={require('../images/linked.png')}></img>
        </a>
      </Fade>
      <Fade left delay={1500}>
        <a className ='links' href= 'http://www.github.com'>
          <img className='links-image' src ={require('../images/github.png')}></img>
        </a>
      </Fade>
      <Fade left delay={2000}>
        <a className ='links' href= 'http://www.github.com'>
          <img className='links-image' src ={require('../images/contactme.png')}></img>
        </a>
      </Fade>
    </header>
  )
  }
}

export default Header;
