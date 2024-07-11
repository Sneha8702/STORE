import axios from 'axios'
import React,{useEffect, useState} from 'react'
import Homecard from './Homecard.jsx'
import '../css/Product.css'
import Navbar from './Navbar.jsx'
import LoginNavbar from './LoginNavbar.jsx'

const Homeproducts = () =>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/product/products')
        .then (res=>{
            setProducts(res.data)
            console.log(res.data)
        }
        )
        .catch(err=> console.log(err))
    },[])
    return(
        <div>
            <LoginNavbar/>
        <div className='product-list'>
            {
            products.map( product =>{
                    return <Homecard key={product.id} product={product}></Homecard>

            })
        }
        </div>
        </div>
    )

}

export default Homeproducts