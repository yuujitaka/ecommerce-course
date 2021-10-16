import React from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  decreaseItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(decreaseItem(item))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">R${price}</span>
      <div className="remove-button" onClick={() => dispatch(removeItem(item))}>
        &#10006;
      </div>
    </div>
  );
};

export default CheckoutItem;
