import React, { useMemo } from 'react';
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import './checkout.styles.scss';
import CheckoutItem from "../../components/checkout-item/checkout-item.component";


export const CheckOut = () => {

    const items = useSelector( state => ({
        cartItems: selectCartItems( state ),
        totalValue: selectCartTotal( state )
    }) );
    const memoItems = useMemo( () => items, [ items ] );

    const { cartItems, totalValue } = memoItems;

    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map( cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                ) )
            }
            <div className='total'>{ totalValue }</div>
        </div>
    );
};

