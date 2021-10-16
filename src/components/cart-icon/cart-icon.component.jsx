import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibility } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartItemsListCount = useSelector(selectCartItemsCount);
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleVisibility())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsListCount}</span>
    </div>
  );
};

export default CartIcon;
