import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

import './cart-icon.styles.scss';


const CartIcon = () => {

    const dispatch = useDispatch();
    const toggleCart = () => dispatch( toggleCartHidden() );


    const countItems = useSelector( state => {
        console.log("im re rendered")
        return ({
        itemCount: selectCartItemsCount(state)
    }) });

    const { itemCount } = countItems;

    return (
        <div className='cart-icon' onClick={ toggleCart }>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    );
};

export default CartIcon;




