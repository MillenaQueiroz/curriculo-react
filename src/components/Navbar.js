import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return (
        <div>
            <div className="navbar">
                <div className="home-link">
                    <Link to='/' className='navbar-logo'>
                        MILLENA
                    </Link>
                </div>
                <div className="navbar-container">

                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to='/Sobre' className="nav-links">
                                SOBRE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Educacao' className="nav-links">
                                EDUCAÇÃO
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Complementos' className="nav-links">
                                COMPLEMENTOS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Skills' className="nav-links">
                                SKILLS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Contato' className="nav-links">
                                CONTATO
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
