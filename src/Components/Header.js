import React from 'react';
import {Link, NavLink} from 'react-router-dom'

function Header() {
    
    //        <div className="Header">
    // <p>Hiking Tracker</p>
    // </div>
    return(
    <div className="Header">
        <header>
            <nav >
                <Link exact to="/" className='title'>
                    <h1 >
                        Hiking Tracker
                    </h1>
                </Link>
                <div className="nav-link-container">
                    <NavLink className="button" exact to="/about">
                        About
                    </NavLink>
                </div>
            </nav>
        </header>
    </div> 

    )
}

export default Header;