import axios from "axios";
import React, { useState } from "react";

const StudentCard = ({ product }) => {
  const { name,number , imageUrl } = product;
  const [quantity, setInputValue] = useState("0");
  // console.log(imageUrl);

  const handleSubmit = async () => {
    if(number<quantity)
      {
        alert("Quantity exceeded the limit..")
        return
      }

    try {
      // Here you can send a request to add a product using axios
      // For simplicity, let's assume you have an endpoint for adding products
      const response = await axios.post("http://localhost:3001/student/add", {
        name, number,
        id:product._id,
        quantity,
        imgURL: imageUrl,
      });
      // Assuming successful response means the product was added
      // You can handle the success case here, such as redirecting or showing a success message
      console.log(response.data); // Logging the response for demonstration
      //   navigate("/dashboard"); // Redirecting to the dashboard after adding the product
    } catch (err) {
      console.error(err);
      //   setError("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h2>{name}</h2>
      <h3>{number}</h3>
      <div className="product-actions">
        <input
          type="text"
          value={quantity}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => handleSubmit()}>Add</button>
      </div>
    </div>
  );
};
export default StudentCard;
