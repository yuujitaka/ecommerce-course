import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClU3Hogkkg5da2mKxbVHHX-0nwAEdxRl8",
    authDomain: "crown-db-75afc.firebaseapp.com",
    projectId: "crown-db-75afc",
    storageBucket: "crown-db-75afc.appspot.com",
    messagingSenderId: "937409990648",
    appId: "1:937409990648:web:a401af1af989ed5325900d",
    measurementId: "G-8HM3DXNF3Q"
}

//https://firebase.google.com/docs/reference/js/firebase.firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
   if(!userAuth) return;

    //ref for CRUD
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const creatAt = new Date();

        try{
            await userRef.set({ displayName, email, creatAt, ...additionalData})
        } catch(error) {
            alert('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//https://firebase.google.com/docs/reference/js/firebase.auth.GoogleAuthProvider
var provider = new firebase.auth.GoogleAuthProvider();
//https://developers.google.com/identity/protocols/oauth2/openid-connect#authenticationuriparameters
provider.setCustomParameters({ prompt : 'select_account' });

export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


