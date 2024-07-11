import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
const LoginNavbar =() =>{
    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to="/" className='navbar-brand'>Store~Ease</Link>
            </div>
            <div className='navbar-right'>
                <Link to="/home" className='navbar-link' >Products</Link>            
                <Link to="/login" className='navbar-link' >Login</Link>           </div>
        </nav>
    )
}
export default LoginNavbar