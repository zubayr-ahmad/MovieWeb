import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  // var(--primary - color)
  return (
    <nav className="navbar__main-block">
      <ul className="navbar__menu-bar">
      <li className="navbar__fields"><Link to='/'>Home</Link></li>
      <li className="navbar__search"><input type="text" className="navbar__search-input" placeholder="search movie" /><button id="#searchButton"><i className="fa-solid fa-magnifying-glass fa-beat navbar__search-icon" ></i></button></li>
        <li className="navbar__fields"><Link to='/upcoming'>Upcoming</Link></li>
      <li className="navbar__fields">Wish List</li>
      <li className="navbar__fields">Favorites</li>
      {/* <li className="navbar__fields">Login</li>
      <li className="navbar__fields"><Link to='https://www.themoviedb.org/signup' target='blank'>Register</Link></li> */}
    </ul>
</nav >
  )
}

export default Navbar
