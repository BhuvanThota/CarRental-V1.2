import React from 'react'
import {Outlet} from 'react-router-dom'

import Header from './Header.jsx'
import Footer from './Footer.jsx'

function Layout(){
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout