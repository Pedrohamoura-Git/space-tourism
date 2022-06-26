import { Link } from 'react-router-dom'

import logo from '../../assets/shared/logo.svg'
import './index.css'

export default function Navbar() {

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <span className="divider" />

            <ul className="links-list">
                <li className="link">
                    <Link to="/">Home</Link>
                </li>
                <li className="link">
                    <Link to="/destination">destination</Link>
                </li>
                <li className="link">
                    <Link to="/crew">crew</Link>
                </li>
                <li className="link">
                    <Link to="/technology">technology</Link>
                </li>
            </ul>
        </nav>
    )
}   