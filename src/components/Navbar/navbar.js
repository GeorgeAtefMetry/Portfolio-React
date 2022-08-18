import React from 'react';
import Toggle from '../toggle/toggle';
import navbarClasses from './navbar.module.css'
import { Link } from 'react-scroll';
const Navbar = () => {
    return (
        <div className={navbarClasses.nWrapper} id='Home'>
            <div className={navbarClasses.Left}>
                <div className={navbarClasses.Name}>George</div>
                <Toggle></Toggle>
            </div>
            
            <div className={navbarClasses.Right}>   
                <div className={navbarClasses.List}>
                    <ul style={{listStyleType:'none'}}>
                        <Link spy={true} to='Intro' smooth={true} >
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true} >
                        <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} >
                        <li>Experience</li>
                        </Link>
                        <Link spy={true} to='ًWorks' smooth={true} >
                        <li>ًWorks</li>
                        </Link>
                        <Link spy={true} to='Projects' smooth={true} >
                        <li>Projects</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true} activeClass="activeClass">
                <button className={navbarClasses.NavbarButton +  ' button'}>
                    Contact
                </button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
