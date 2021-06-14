import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark shadow-lg">
                <div className="container">
                    <Link className="navbar-brand-link" to="/">CORONA TRACKER</Link>
                    <button 
                    className="navbar-toggler " 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarTogglerDemo02" 
                    aria-controls="navbarTogglerDemo02" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/travel">TRAVEL ALERT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/covid">WHAT IS COVID-19?</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/prevention">PREVENTION</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">ABOUT</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav> 
        </div>
    )
}

export default Navigation