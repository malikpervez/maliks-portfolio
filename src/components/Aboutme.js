import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header'
import '../css/Aboutme.css';

class Aboutme extends Component {
  render() {
    return (
      <div className='vertical-box container'>
        <Header />
        <div className="button">Malik</div>
      </div>
    );
  }
}

export default withRouter(Aboutme);
