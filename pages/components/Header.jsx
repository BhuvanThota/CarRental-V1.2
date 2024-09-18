import React from 'react'
import { Link } from 'react-router-dom'
import logoimg from "../assets/3d-car.png"

function Header() {
  return (
    <div className='navbar'>
      <Link to="/">
        <h2 className='logo gap-2'>
        <img src={logoimg} alt="car-logo" width="50px"   />
        CarRental
        </h2>
      </Link>
      <nav className='right-navbar'>
        <ul>
          <li className='page-navbar-host'>
            <Link to="host"> Host</Link>
          </li>
          <li>
            <Link to="about"> About</Link>
          </li>
          <li>
            <Link to="cars"> Our Cars </Link>
          </li>
        </ul>
      </nav>

    </div>
    
  )
}

export default Header