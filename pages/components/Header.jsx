import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='navbar'>
      <Link to="/">
        <h2 className='logo gap-2'>
        <img src="./pages/assets/3d-car.png" alt="car-logo" width="50px"   />
        CarRental
        </h2>
      </Link>
      <nav className='right-navbar'>
        <ul>
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