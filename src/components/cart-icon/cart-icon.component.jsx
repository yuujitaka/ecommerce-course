import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleVisibility } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


import { ReactComponent as ShoppingIcon } from '../../assets/images/shopping-bag.svg';
import './cart-icon.styles.scss';


const CartIcon = ({ toggleCart, cartItemsListCount }) => {
  return(
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartItemsListCount}</span>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleVisibility())
});

const mapStateToProps = createStructuredSelector({
  cartItemsListCount: selectCartItemsCount
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);