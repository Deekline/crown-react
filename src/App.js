import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useDispatch, connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { CheckOut } from "./pages/checkout/checkout.component";


function App( { currentUser } ) {

    const dispatch = useDispatch();

    useEffect( () => {

        let unsubscribeFromAuth = null;

        unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

            if ( userAuth ) {
                const userRef = await createUserProfileDocument( userAuth );

                userRef.onSnapshot( snapshot => {
                    dispatch( setCurrentUser( {
                        id: snapshot.id,
                        ...snapshot.data()
                    } ) );
                } );

            } else {
                dispatch( setCurrentUser( null ) );
            }
        } );
        return () => {
            unsubscribeFromAuth();
        };
    }, [] );


    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={ HomePage }/>
                <Route path='/shop' component={ ShopPage }/>
                <Route exact path='/checkout' component={ CheckOut }/>
                <Route exact path='/signin' render={ () => {
                    return currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>);
                } }/>

            </Switch>
        </div>
    );
}


const mapStateToProps = createStructuredSelector( {
    currentUser: selectCurrentUser
} );
export default connect( mapStateToProps )( App );
