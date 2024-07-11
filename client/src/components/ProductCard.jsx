import React from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  console.log(product); // Log the product object to verify its structure
  const { _id, name, number, imageUrl } = product;
 const navigate = useNavigate()
  const deleteProduct = () => {
    axios.post('http://localhost:3001/product/delete', { id: _id })
      .then(res => {
        console.log(res);
        
      })
      .catch(err => console.log(err));
      window.location.reload();
  };

  return (
    <div className='product-card'>
      <img src={imageUrl} alt={name} className='product-image' />
      <h2>{name}</h2>
      <h3>Available: {number}</h3> {/* Display the 'number' property */}
      <div className="product-actions">
        <button onClick = {() => {navigate(`/product/${_id}`)}}>edit</button>
        <button onClick={deleteProduct}>delete</button>
      </div>
    </div>
  );
};

export default ProductCard;
