import React from 'react'
import '../App.css'
import { Menu } from '@material-ui/icons';
import logo from '../Logo.png'

function Header() {
    return (
        <header className="navbar">
            <nav>
                <img src={logo} alt="Logo" height='60' width='60'/>
                <button class="hamburger" id="hamburger">
                    <Menu/>
                </button>
                <div className="sections-wrap">
                <ul class="sections">
                    <li><a href="/">Projects</a></li>
                    <li><a href="/research">Research</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="/resume">Resume</a></li>
                </ul>   
                </div>       
            </nav>
        </header>
    )
}

export default Header

