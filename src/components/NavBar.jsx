import React from 'react'
import "../styles/nav.scss"
function NavBar() {
    return (
        <nav className='container'>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Details</a>
            <a href="/">Register / Login</a>
        </nav>
    )
}

export default NavBar;