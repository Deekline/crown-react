export const addItemToCart = ( cartItems, cartItemToAdd ) => {
    const existingCarItem = cartItems.find( cartItem => cartItem.id === cartItemToAdd.id );

    if ( existingCarItem ) {
        return cartItems.map( cartItem => (
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem)
        );
    }
    return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};

export const clearItemFromCart = ( cartItems, cartItemToClear ) => {
    return cartItems.filter( ( cartItem ) => cartItemToClear.id !== cartItem.id );
};

export const removeItem = ( cartItems, cartItemToRemove ) => {
    const existingCartItem = cartItems.find( cartItem => cartItem.id === cartItemToRemove.id );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter( ( cartItem ) => cartItemToRemove.id !== cartItem.id );
    }
    return cartItems.map(cartItem => (
        cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    ))
};

