import React from 'react';
import navClasses from "./styles/Nav.module.css"
import logo from "../assets/images/logo-bg.png"
import Account from './Account';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className={navClasses.nav}>
            <ul>
                <li>
                    <Link to="/" className={navClasses.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    );
}

export default Nav;
