import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";


function App() {
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
                <Route path='/signin' component={ SignInAndSignUpPage }/>
            </Switch>
        </div>
    );
}

export default App;
