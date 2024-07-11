import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
const Navbar =() =>{
    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to="/" className='navbar-brand'>Store~Ease</Link>
            </div>
            <div className='navbar-right'>
                <Link to="/products" className='navbar-link' >Products</Link>
                
                <Link to="/addproduct" className='navbar-link' >Add Product</Link>
                <Link to="/login" className='navbar-link' >Logout</Link>           </div>

        </nav>
    )
}
export default Navbar