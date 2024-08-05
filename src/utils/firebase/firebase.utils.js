// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

import {
  GoogleAuthProvider,
  // signInWithRedirect,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider);
// export const signInWithGoogleRedirect = () =>
// signInWithRedirect(auth, googleprovider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  // console.log(collectionRef);
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  // console.log(querySnapshot, "querySnapshot");
  const categoryMap = querySnapshot.docs.reduce((acc, docsnapshot) => {
    const { title, items } = docsnapshot.data();
    acc[title.toLowerCase()] = items;
    // console.log(acc, "accumulator");
    // console.log(docsnapshot, "docsnapshot");
    return acc;
  }, {});
  return categoryMap;
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalinformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  // console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalinformation,
      });
    } catch (err) {
      console.log("error creating the user in db", err.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
