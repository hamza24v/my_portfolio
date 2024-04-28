import React from 'react'
import logo from '../assets/hamza-logo.png'

function Navbar() {
    return (
        <nav className='flex max-w-6xl justify-around py-2'>
            <img src={logo} alt='logo' className='w-1/6' />
            <ul className='flex items-center'>
                {['Home', 'Work Experience', 'Projects', 'Skills', 'Testimonials', 'Contact'].map((item, idx, arr) => (
                    <li className={`text-white flex ${idx < arr.length - 1 ? 'mr-9' : ''}`} key={idx}>
                        <a className='nav-link' href={`#${item.replace(/\s+/g, '-')}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar