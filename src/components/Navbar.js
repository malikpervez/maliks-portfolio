import React,{ Component } from 'react';
import '../css/Navbar.css'

export default class Navbar extends Component {
  render(){
    return (
      <ul>
        <li><a>Home</a></li>
        <li><a>About Me</a></li>
        <li><a>My Work</a></li>
        <li><a>Resume</a></li>
        <li><a>Contact</a></li>
      </ul>
    )
  }
}
