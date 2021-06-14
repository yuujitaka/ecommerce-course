import React from 'react';
import { connect } from 'react-redux';
import { addItem, decreaseItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ item, removeCartItem, addCartItem, decreaseCartItem}) => {
  const { imageUrl, name, price, quantity } = item;

  return(
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseCartItem(item)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addCartItem(item)}>&#10095;</div>
      </span>
      <span className='price'>R${price}</span>
      <div className='remove-button' onClick={() => removeCartItem(item)}>&#10006;</div>
    </div>
  )
  
}

const mapDispatchToProps = dispatch => ({
  removeCartItem: item => dispatch(removeItem(item)),
  addCartItem: item => dispatch(addItem(item)),
  decreaseCartItem: item => dispatch(decreaseItem(item))
});

export default connect(null,mapDispatchToProps)(CheckoutItem);