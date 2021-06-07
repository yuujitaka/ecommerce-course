export const addItemToCart = (cartItems, itemAdd) => {
  const existItem = cartItems.find(cartItem => cartItem.id === itemAdd.id);

  if(existItem){
    return cartItems.map(
      cartItem => cartItem.id === itemAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem 
    ) 
  }

  return [...cartItems, {...itemAdd, quantity: 1} ];
}