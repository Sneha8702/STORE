import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
const StudentNavbar =() =>{
    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to="/" className='navbar-brand'>Store~Ease</Link>
            </div>
            <div className='navbar-right'>
                <Link to="/student" className='navbar-link' >Products</Link>            
                <Link to="/cart" className='navbar-link' >Cart</Link>
                <Link to="/login" className='navbar-link' >Logout</Link>           </div>
        </nav>
    )
}
export default StudentNavbar