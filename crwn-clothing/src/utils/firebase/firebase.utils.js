import { initializeApp } from 'firebase/app';
import {
    getAuth, signInWithRedirect,
    signInWithPopup, GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc, getDoc, setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFKcI35WXq6sLr8KFsrzQElocSRIYKAwA",
    authDomain: "crwn-db-v2-274e5.firebaseapp.com",
    projectId: "crwn-db-v2-274e5",
    storageBucket: "crwn-db-v2-274e5.appspot.com",
    messagingSenderId: "931826781401",
    appId: "1:931826781401:web:f279e00581f3e0474502c8",
    measurementId: "G-3PR5V73QHL"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot.exists());

    // if user data does not exist
    // create /set the document with the data from userAuth in my collection

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.mssage);
        }
    }

    // if user data exists
    // return userDocRef
    return userDocRef;
}