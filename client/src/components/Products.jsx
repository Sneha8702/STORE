import axios from 'axios'
import React,{useEffect, useState} from 'react'
import ProductCard from './ProductCard.jsx'
import '../css/Product.css'
import Navbar from './Navbar.jsx'

const Products = () =>{
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
            <Navbar/>
        <div className='product-list'>
            {
            products.map( product =>{
                    return <ProductCard key={product.id} product={product}></ProductCard>

            })
        }
        </div>
        </div>
    )

}

export default Products