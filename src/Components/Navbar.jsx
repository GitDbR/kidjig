import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className="nav w-screen flex justify-around align-middle items-center">
        <div className="logo rounded-3xl">
            <img src={logo} alt="logo" />
        </div>
        <div className='links'>
            <ul className="nav_links flex justify-around">
                <li className="nav-item">
                    <a href="#" className="link">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="link">
                        Services
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="link">
                        Work
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="link">
                        Pricing
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className="link">
                        FAQs
                    </a>
                </li>
            
            </ul>
        </div>
        <div className="nav_btn">
            <button className='btn rounded-xl px-4 py-3 cursor-pointer'>Book a call</button>
        </div>
    </nav>
  )
}

export default Navbar
