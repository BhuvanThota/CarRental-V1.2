import React from 'react'
import {Outlet, NavLink, Link} from 'react-router-dom'

function HostCarLayout(){
    const base = {}
    
    const activecolor = {
        color: "#049fff",
        textDecoration: "underline"
    }
    return(
        <>
            
            <nav className='hostcar-navbar'>
                <ul>
                    <li>
                        <NavLink 
                            to="" 
                            end
                            style={({isActive}) => isActive ? activecolor : base}
                        >
                            Details
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="pricing"
                        style={({isActive}) => isActive ? activecolor : base}
                        >
                            Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to="photos"
                        style={({isActive}) => isActive ? activecolor : base}
                        >
                            Photos
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <section>
                <Outlet />
            </section>

            <Link to="../cars" >
            <p className='hostcars-back text-lg font-semibold hover:underline hover:text-[#da5700] ' >&larr; Back to your cars  </p>
            </Link>
        </>
    )
}

export default HostCarLayout