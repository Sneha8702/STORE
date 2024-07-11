import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Homecard = ({ product }) => {
  console.log(product); // Log the product object to verify its structure
  const { _id, name, number, imageUrl } = product;

  

  return (
    <div className='product-card'>
      <img src={imageUrl} alt={name} className='product-image' />
      <h2>{name}</h2>
      <h4>Available: {number}</h4> {/* Display the 'number' property */}
      
    </div>
  );
};

export default Homecard;
