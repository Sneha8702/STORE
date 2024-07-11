import React from "react";

const CartCard = ({ product }) => {
  const { name, quantity, imgURL } = product;

  return (
    <div className="product-card">
      <img src={imgURL} alt={name} className="product-image" />
      <h2>{name}</h2>
      <div className="product-actions">
        <label>{quantity}</label>
      </div>
    </div>
  );
};
export default CartCard;
