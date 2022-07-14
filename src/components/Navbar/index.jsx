import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

import { Burger } from '../Buttons/Burger'
import logo from '../../assets/shared/logo.svg'

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);
    
    function toggleBurger(value) {
        setIsActive(value);
    }

    return (
        <nav className="navbar">
            <div className='navbar__background-effect' />
            <div className='navbar__content'>
                <img src={logo} alt="logo" className='logo'/>
                <span className="divider" />

                <Burger
                    isActive={isActive}
                    toggleBurger={toggleBurger}
                />
                
                <CSSTransition
                    in={isActive}
                    timeout={500}
                    classNames="slide"
                    className="transition-wrapper"
                    unmountOnExit
                >
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
                </CSSTransition>
            </div>
        </nav>
    )
}   