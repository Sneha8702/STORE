import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import "../css/Product.css";
import Navbar from "./Navbar.jsx";
import StudentNavbar from "./StudentNavbar.jsx";
import StudentCard from "./StudentCard.jsx";
import CartCard from "./CartCard.jsx";
const Cart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/student/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data[0])
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <StudentNavbar />
      <div className="product-list">
        {products.map((product) => {
          return <CartCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );};export default Cart;
