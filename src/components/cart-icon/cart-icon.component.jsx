import React  from 'react';
import { connect, useDispatch } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import './cart-icon.styles.scss';
import { createStructuredSelector } from "reselect";


const CartIcon = ( { itemCount } ) => {

    const dispatch = useDispatch();
    const toggleCart = () => dispatch( toggleCartHidden() );

    return (
        <div className='cart-icon' onClick={ toggleCart }>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{ itemCount }</span>
        </div>
    );
};
const mapStateToProps = createStructuredSelector( {
    itemCount: selectCartItemsCount
} );

export default connect( mapStateToProps )( CartIcon );




