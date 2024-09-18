import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import '/pages/styles/host.css'

function HostLayout() {
    return (
    <div className='host'>
        <nav className='host-navbar'>
            <ul>
                <li>
                    <Link to=""> Dashboard</Link>
                </li>
                <li>
                    <Link to="income"> Income </Link>
                </li>
                <li>
                    <Link to="reviews"> Reviews</Link>
                </li>
            </ul>
        </nav>

        <section>
            <Outlet />
        </section>

    </div>)
}


export default HostLayout