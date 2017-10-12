import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header'
import '../css/Aboutme.css';

class Aboutme extends Component {
  render() {
    return (
      <div id='about container-fluid'>
        <div className='vertical-box row'>
          <Header />
          <img className='malik' src={require('../images/Malik.png')}></img>
        </div>
        <div className= 'front-end col-md-6'>
          <div className='button text'>Front End</div>
          <img src={require('../images/html.png')} alt='html5'></img>
          <img src={require('../images/css.png')} alt='css3'></img>
          <img src={require('../images/js.png')} alt='javascript'></img>
          <img src={require('../images/react.png')} alt='reactjs'></img>
        </div>
        <div className= 'back-end col-md-6'>
          <div className='button text'>Back End</div>
          <img src={require('../images/node.png')} alt='node'></img>
          <img src={require('../images/postgres.png')} alt='pg'></img>
          <img src={require('../images/ruby.png')} alt='ruby'></img>
          <img src={require('../images/rails.png')} alt='nodejs'></img>
          <img src={require('../images/git.png')}></img>
        </div>
        <div className='aboutme row'>
          <h2>Developer based in Long Island City</h2>
        </div>
      </div>
    );
  }
}

export default withRouter(Aboutme);
