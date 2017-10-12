import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header'
import Lander from './components/Lander'
import Aboutme from './components/Aboutme'



class App extends Component {
  render() {
    return (
      <div className="portfoliobackground">
          <BrowserRouter>
       <div>
        <Route exact={true} path='/' render={()=>(
            <div className="container-fluid">
              <Lander />
            </div>
          )}
         />
       <Route exact={true} path='/aboutme' render={()=>(
            <div className='container-fluid'>
              <Aboutme />
            </div>
          )}/>
         </div>
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
