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
          <h2 className='aboutme'>Hey everyone! I am Malik, full stack developer based in Long Island City trying to make life for the average person a wee bit easier.</h2>
          <h2 className='aboutme-content'>I have a background in government with a focus in homeland security. My desire is to develop apps to help business owners build the foundations for success. Seeing an indivdual's success adds on to my own! </h2>
          <p className='aboutme-content2'> Feel free to contact me for any questions or even ideas!<br></br> Email: mip12793@gmail.com <br></br>Github: github.com/malikpervez  <br></br>LinkedIn: linkedin.com/in/malik-pervez/<br></br>Phone: 571-357-8763
          </p>
        </div>
        <div className='right row'>
          <h2 className='front-end'>Front End</h2>
          <img src={require('../images/html.png')}></img>
          <img src={require('../images/css.png')}></img>
          <img src={require('../images/js.png')}></img>
          <img src={require('../images/react.png')}></img>
          <h2 className='back-end'>Back End</h2>
          <img src={require('../images/node.png')}></img>
          <img src={require('../images/ruby.png')}></img>
          <img src={require('../images/rails.png')}></img>
          <img src={require('../images/postgres.png')}></img>
          <img src={require('../images/git.png')}></img>
        </div>
      </div>
    );
  }
}

export default withRouter(Aboutme);
