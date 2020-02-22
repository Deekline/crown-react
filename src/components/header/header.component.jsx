import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {

    const currentAuthUser = useSelector( state => ({
        currentUser: state.user.currentUser,
        hidden: state.cart.hidden
    }) );

    const { currentUser, hidden } = currentAuthUser;

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                { currentUser ? (
                    <div className='option' onClick={ () => auth.signOut() }>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>) }
                <CartIcon/>
            </div>
            {
                hidden ? null : <CartDropdown/>
            }
        </div>
    );
};

export default Header;
