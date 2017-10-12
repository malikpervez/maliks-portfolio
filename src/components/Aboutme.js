import React,{ Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import '../css/Aboutme.css';

class Aboutme extends Component {
  render() {
    return (
      <div id='about'>
        <Link className='back' to='/'>back</Link>
        <Link className='myworklink' to='/mywork'>My Work</Link>
        <div className='vertical-box row'>
          <img className='malik' src={require('../images/Malik.png')} alt='Malik'></img>
          <h2 className='aboutme'>Hey everyone! I am Malik, full stack developer based in Long Island City just trying to make life for the average person just a wee bit easier.</h2>
          <h2 className='aboutme-content'>I have a background in government with a focus in homeland security. My desire is to develop apps to help business owners build the foundations for success. Seeing an indivdual's success adds on to my own! </h2>
          <p className='aboutme-content2'> Feel free to contact me for any questions or even ideas!<br></br> Email: mip12793@gmail.com <br></br> Phone: 571-357-8763
          </p>
        </div>
        <div className='right row'>
          <h1 className='front-end'>Front End</h1>
        
        </div>
      </div>
    );
  }
}

export default withRouter(Aboutme);
