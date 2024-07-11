import React from 'react'
import '../css/Home.css'
import Navbar from './Navbar'


const Home = () => {
    return(
        <div>

<Navbar/>
        <div className='hero'>
            <div className="hero-content">
                <h1 className='hero-text'>Welcome Admin...</h1>
                <p className='hero-description'>
                Click "Products" to view available products...
                </p>
            </div>
            <div className="hero-image"></div>
         </div>
        </div>
        
    )
}
export default Home