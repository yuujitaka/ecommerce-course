import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartVisibility } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

//https://blog.logrocket.com/how-to-use-svgs-in-react/
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hiddenCart }) => {
  return (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>

      <Link className='option' to='/shop'>
        CONTACT
      </Link>

      {
        currentUser ? 
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }

      <CartIcon />

    </div>

      { 
        !hiddenCart && <CartDropdown />
      }
    
  </div>
)};

//https://github.com/reduxjs/reselect#createstructuredselectorinputselectors-selectorcreator--createselector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hiddenCart: selectCartVisibility
});

export default connect(mapStateToProps)(Header);