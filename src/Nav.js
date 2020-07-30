import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="nav-links">
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/todos'>
                <li>Todos</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
