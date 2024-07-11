import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import axios from 'axios';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState();
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name,number,imageUrl,"here")
        try {
           
            const response = await axios.post('http://localhost:3001/product/add', { name, number,imageUrl });
            console.log(response.data); 
            navigate('/dashboard'); 
        } catch (err) {
            console.error(err);
             setError('Failed to add product. Please try again.');
        }
    };

    return (
        <div className='login-page'>
            <div className="login-container">
                <h2>Add Product</h2> <br/>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Product Name:</label>
                        <input 
                            type="text" 
                            placeholder='Enter Product Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Availability:</label>
                        <input 
                            type="number" 
                            placeholder=''
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input 
                            type="text" 
                            placeholder="Enter Image URL"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <button className='btn-add' type="submit">Add Product</button>
                </form>
            </div> 
        </div>
    );
};

export default ProductForm;
