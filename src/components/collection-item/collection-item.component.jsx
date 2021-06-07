import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addCart }) => {
  const { imageUrl, name, price } = item;

  return(
    <div className='collection-item'>
      <div 
        className='image'
        style={{ backgroundImage: `url(${imageUrl})`}}
      />    
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
  
        <CustomButton inverted onClick={() => addCart(item)}>ADD</CustomButton>
    </div>
  )
}


const mapDispatchToProps = dispatch => ({
  addCart: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);