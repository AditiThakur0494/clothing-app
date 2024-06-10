// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";

import {
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
  getAuth,
  EmailAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjUIj7_nmGiXzH5Ztmvkjfdh5JPzafwGo",
  authDomain: "crwn-clothing-db-2b2ce.firebaseapp.com",
  projectId: "crwn-clothing-db-2b2ce",
  storageBucket: "crwn-clothing-db-2b2ce.appspot.com",
  messagingSenderId: "854323338520",
  appId: "1:854323338520:web:99983078133b85927f926d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (err) {
      console.log("error creating the user in db", err.message);
    }
  }
  return userDocRef;
};

// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, provider);
