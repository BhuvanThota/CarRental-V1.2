import React from 'react'
import { Link } from 'react-router-dom'

export default function HostLayout(){
    <div>
      
      <nav className='host-navbar'>
        <ul>
            <li>
                <Link to="/"> Dashboard</Link>
            </li>
            <li>
                <Link to="income"> Income</Link>
            </li>
            <li>
                <Link to="reviews"> Reviews </Link>
            </li>
        </ul>
      </nav>

    </div>
}