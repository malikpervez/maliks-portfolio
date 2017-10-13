import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import '../css/Mywork.css'

class Mywork extends Component {
  render(){
    return(
      <div id='mywork container-fluid'>
        <Link className='back' to='/aboutme'>About me</Link>
        <Link className='myworklink' to='/'>Home</Link>
        <div className='bwcol'>
          <div className='wrapper'>
            <div className= 'ontheflytitle'>On the Fly(in progress)</div>
            <div className= 'ontheflytech'>Tech: React Js, Firebase</div>
            <div className='ontheflybody'>On the fly is a application that takes the tedious tasks of owning a restuarant and simplifies them.
              Taking reservations and managing bar as well as kitchen inventory is crticial when running a business in hospitality. Why not make it easy?
            </div>
            <ul className='ontheflybody2'>Features
              <li>realtime database</li>
              <li>inventory tracking</li>
              <li>booking reservations</li>
            </ul>
          </div>
          <div className='wrapper'>
            <div className='teacherspettitle'>Teacher's Assistant</div>
            <div className='teacherspettech'>Tech: Ruby on Rails, PostgreSQL</div>
            <div className='teacherspetbody'>Are you a teacher tired of keeping track of grades, behavior, attendance and participation notes on pen and paper?
              Have you gotten tired of creating a new email for weekly emails with parents, struggling to find the right words to use?
              With Teacher's Assistant you no longer have to. Mark individual students with different reports and send a template generated email at the click of a button. What will you do with those extra hours each week? You decide.
            </div>
            <ul className='teacherspetbody2'>Features
              <li>Charts and graphs for data tracking</li>
              <li>Generated Reports</li>
              <li>Templated Emails</li>
            </ul>
          </div>
        </div>
        <div className='colorcol'>
          <img className='onthefly' src={require('../images/onthefly.jpg')}></img>
          <a href='https://github.com/malikpervez/On_the_fly'>github</a>
          <img className='teacherspet' src={require('../images/teacherpet.jpg')}></img>
          <a href= 'https://github.com/Dramalho7/teachers-pet'>github</a>        </div>
      </div>
    )
  }
}

export default withRouter(Mywork);
