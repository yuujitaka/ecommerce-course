export const addItemToCart = (cartItems, itemAdd) => {
  const existItem = cartItems.find(cartItem => cartItem.id === itemAdd.id);

  if(existItem){
    return cartItems.map(
      cartItem => cartItem.id === itemAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem 
    ) 
  }

  return [...cartItems, {...itemAdd, quantity: 1} ];
}


export const decreaseItemFromCart = (cartItems, itemDecrease) => {

  if(itemDecrease.quantity > 1){
    cartItems = cartItems.map(cartItem => cartItem.id === itemDecrease.id ? {...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
    return cartItems
  }

  return cartItems.filter(cartItem => cartItem.id !== itemDecrease.id)
    
}