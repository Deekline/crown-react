import React from 'react'

import './checkout-item.styles.scss'


const CheckoutItem = ({cartItem}) => {
const {imageUrl, price, name, quantity} = cartItem;
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="price">{quantity}</span>
            <span className="quantity">{price}</span>
            <span className="remove-button">&#10005;</span>
        </div>
    )
}

export default CheckoutItem