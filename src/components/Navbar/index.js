import { Link } from 'react-router-dom'

import logo from '../../assets/shared/logo.svg'
import { Burger } from '../Buttons/Burger'
import './index.scss'

export default function Navbar() {

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <span className="divider" />

            <Burger />

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
        </nav>
    )
}   