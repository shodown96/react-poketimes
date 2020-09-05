import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
const Navbar = () => {
  // console.log(props);
  // setTimeout(() => {
  //   props.history.push("/about")
  // }, 2000);
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="left">Poke' Times</a>
        <ul className="right">
          {/* <li><a href="/">Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/contact'>Contact</a></li> */}
          {/* purpose of this is like e.preventDefault() for links */}
          {/* Navlinks add class active to present Link */}
          <li><Link to="/">Home</Link></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar);