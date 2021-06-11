import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';


import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItemsList }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      { 
        cartItemsList.map(cartItem => (
           <CartItem key={cartItem.id} item={cartItem}/>
        ))
      }
    </div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItemsList: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);