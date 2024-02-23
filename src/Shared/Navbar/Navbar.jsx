import React from 'react'
import './Navbar.css'
function Navbar() {
  // var(--primary - color)
  return (
    <nav className="main-block">
      <ul className="menu-bar">
        <li className="fields" >Home</li>
        <li className="fields search"><input type="text" className="search-input" placeholder="search movie" /><button id="#searchButton"><i className="fa-solid fa-magnifying-glass fa-beat search-icon" ></i></button></li>
      <li className="fields">Upcoming</li>
      <li className="fields">Wish List</li>
      <li className="fields">Favorites</li>
      <li className="fields">Login</li>
      <li className="fields">Register</li>
    </ul>
</nav >
  )
}

export default Navbar
