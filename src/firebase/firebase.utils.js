import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDxkT2kmsv52oKuMiS4m5-ayJsL0jvgHtk",
    authDomain: "crown-react-6eeb4.firebaseapp.com",
    databaseURL: "https://crown-react-6eeb4.firebaseio.com",
    projectId: "crown-react-6eeb4",
    storageBucket: "crown-react-6eeb4.appspot.com",
    messagingSenderId: "764378908483",
    appId: "1:764378908483:web:639ff603e0fe1b49da51f6"
};

export const createUserProfileDocument = async ( userAuth, additionData ) => {
    if ( !userAuth ) return;

    const userRef = firestore.doc( `users/${ userAuth.uid }` );
    const userSnapshot = await userRef.get();

    if ( !userSnapshot.exists ) {
        const createdAt = new Date();
        const { displayName, email } = userAuth;


        try {
            await userRef.set( {
                createdAt,
                displayName,
                email,
                ...additionData
            } );
        } catch ( e ) {
            console.log( e.message );
        }
    }

    return userRef
};

firebase.initializeApp( config );

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );

export const signInWithGoogle = () => auth.signInWithPopup( provider );

export default firebase;

