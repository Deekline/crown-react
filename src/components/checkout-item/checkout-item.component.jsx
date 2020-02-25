import React from 'react';
import { useDispatch } from "react-redux";

import './checkout-item.styles.scss';
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.actions";


const CheckoutItem = ( { cartItem } ) => {
    const { imageUrl, price, name, quantity } = cartItem;

    const dispatch = useDispatch();

    const clearItemFromCart = () => {
        dispatch( clearItem( cartItem ) );
    };

    const addItemToCart = () => {
        dispatch( addItem( cartItem ) );
    };

    const removeItemFromCart = () => {
        dispatch( removeItem( cartItem ) );
    };

    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={ imageUrl } alt="item"/>
            </div>
            <span className="name">{ name }</span>
            <span className="quantity">
                <div className="arrow" onClick={ removeItemFromCart }>&#10094;</div>
                <span className="value">{ quantity }</span>
                <div className="arrow" onClick={ addItemToCart }>&#10095;</div>
            </span>
            <span className="price">{ price }</span>
            <span className="remove-button" onClick={ clearItemFromCart }>&#10005;</span>
        </div>
    );
};

export default CheckoutItem;