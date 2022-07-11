import { Link } from 'react-router-dom'
import { useState } from 'react'

import logo from '../../assets/shared/logo.svg'
import { Burger } from '../Buttons/Burger'
import './index.scss'

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    
    function toggleBurger(value) {
        setIsActive(value);
    }

    return (
        <nav className="navbar">
            <div className='background'>
                <div className='content'>
                    <img src={logo} alt="logo" className='logo'/>
                    <span className="divider" />

                    <Burger
                        isActive={isActive}
                        toggleBurger={toggleBurger}
                    />
                    
                    {isActive &&
                        <ul className="link-list">
                            <li>
                                <Link className="link" to="/">
                                    <span className="number">00</span>
                                    <span className='name'>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/destination">
                                    <span className="number">01</span>
                                    <span className='name'>destination</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/crew">
                                    <span className="number">02</span>
                                    <span className='name'>crew</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/technology">
                                    <span className="number">04</span>
                                    <span className='name'>technology</span>
                                </Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </nav>
    )
}   