import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    //const closeMobileMenu = () => setClick(false)

    return (
        <div>
            <div className="navbar">
                <div className="navbar-container">
                    
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to='/sobre' className="nav-links">
                                SOBRE
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/educacao' className="nav-links">
                                EDUCAÇÃO
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/complementos' className="nav-links">
                                COMPLEMENTOS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/skills' className="nav-links">
                                SKILLS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contato' className="nav-links">
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
