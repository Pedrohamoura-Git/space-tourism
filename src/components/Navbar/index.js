import { Link } from 'react-router-dom'

import logo from '../../assets/shared/logo.svg'
import './index.scss'

export default function Navbar() {

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <span className="divider" />

            <div className="burger-plc" />

            {/* <ul className="links-list">
                <li className="link">
                    <Link to="/">00 Home</Link>
                </li>
                <li className="link">
                    <Link to="/destination">01 destination</Link>
                </li>
                <li className="link">
                    <Link to="/crew">02 crew</Link>
                </li>
                <li className="link">
                    <Link to="/technology">04 technology</Link>
                </li>
            </ul> */}
        </nav>
    )
}   