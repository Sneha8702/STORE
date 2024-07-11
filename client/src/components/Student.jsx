import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard.jsx";
import "../css/Product.css";
import StudentNavbar from "./StudentNavbar.jsx";
import StudentCard from "./StudentCard.jsx";

const Student = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/product/products")
      .then((res) => {
        setProducts(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <StudentNavbar />
      <div className="product-list">
        {products.map((product) => {
          return <StudentCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Student;
