import React from 'react'
import '../css/Home.css'
import LoginNavbar from "./LoginNavbar.jsx";

const Home = () => {
    return(
        <div>

            <LoginNavbar/>
        <div className='hero'>
            <div className="hero-content">
                <h1 className='hero-text'>Store ~ Ease</h1>
                <p className='hero-description'>
                Browse the collection of our Best top products...
                </p>
            </div>
            <div className="hero-image"></div>
         </div>
        </div>
        
    )
}
export default Home