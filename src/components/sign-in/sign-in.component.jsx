import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument, signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';

const SignIn = ( props ) => {
    const [ form, setForm ] = useState( {
        email: '',
        password: '',
    } );

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword( form.email, form.password );
            setForm( { email: '', password: '' } );
        } catch ( e ) {
            console.log( e.message );
        }



    };

    const handleChange = event => {
        setForm( { ...form, [ event.target.name ]: event.target.value } );
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={ handleSubmit }>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={ handleChange }
                    value={ form.email }
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={ form.password }
                    handleChange={ handleChange }
                    label='password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                        { ' ' }
                        Sign in with Google { ' ' }</CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
