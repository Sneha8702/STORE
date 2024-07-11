import React, { useState , } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/Login.css';
import axios from 'axios';
// axios.defaults.withCredentials = true;

const EditProduct =() => {

const {id} = useParams()
    const [name, setName]=useState('')
    const [number, setNumber] = useState(0);
    const [imageUrl, setImageUrl]=useState('')
    const navigate=useNavigate()

    const handleSubmit =(e) =>{
        console.log(id)
        e.preventDefault()
        axios.post(`http://localhost:3001/product/update`, {name,number,imageUrl,id})
        .then(res =>{
            console.log(res)
           
        })
        .catch(err => console.log(err))

        navigate('/products')
    }

return (
    <div className='login-page'>
        <div className="login-container">
            <h2>Edit Product</h2> <br/>
            {/* {error && <p className="error">{error}</p>} */}
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
                <button type="submit">Add</button>
            </form>
        </div> 
    </div>
);
};

export default EditProduct;