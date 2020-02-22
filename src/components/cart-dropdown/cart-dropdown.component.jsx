import React from 'react';
import { useSelector } from "react-redux";

import CustomButton from '../custom-button/custom-button.component';
import { CartItem } from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const items = useSelector( state => ({
        cartItems: selectCartItems( state )
    }) );
    const { cartItems } = items;

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                { cartItems.map( item => <CartItem key={ item.id } item={ item }/> ) }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};
export default CartDropdown;
