import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBDOWC7kixq0E3wnNHVHBMigi0f3nOZvaQ",
    authDomain: "crwn-clothing-db-2074d.firebaseapp.com",
    projectId: "crwn-clothing-db-2074d",
    storageBucket: "crwn-clothing-db-2074d.appspot.com",
    messagingSenderId: "1024114263302",
    appId: "1:1024114263302:web:5d6a1e405e0cf9fa2d4a87"
};
  
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);