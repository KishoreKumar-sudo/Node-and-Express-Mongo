import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return <>
  <nav className="navbar navbar-light bg-primary navbar-expand-lg">
     <Link to="/" className='navbar-brand text-white'>Rubixe</Link>
    <div className="ml-auto">
        <ul className='navbar-nav'>
        <li className='nav-list '><Link to="register" className='nav-link text-white'>Register</Link></li>
        <li className='nav-list'><Link to="login" className='nav-link text-white'>Login</Link></li>
        <li className='nav-list'><Link to="/" className='nav-link text-white'>Home</Link></li>
        </ul>
    </div>
  </nav>
  </>
}

export default Navbar