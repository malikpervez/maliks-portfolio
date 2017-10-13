import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Lander from './components/Lander';
import Aboutme from './components/Aboutme';
import Mywork from './components/Mywork';



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
        <Route exact={true} path='/mywork' render={()=>(
             <div className='container-fluid'>
               <Mywork />
             </div>
           )}/>
         </div>
       </BrowserRouter>
      </div>
    );
  }
}

export default App;
