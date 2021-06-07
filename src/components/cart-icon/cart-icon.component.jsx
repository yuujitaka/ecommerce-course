import React from 'react';
import { connect } from 'react-redux';
import { toggleVisibility } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = ({ toggleCart }) => (
  <div className='cart-icon' onClick={toggleCart}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleVisibility())
});

export default connect(null,mapDispatchToProps)(CartIcon);