import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCVW8NWTDVMAmKTA9GmuQrTXu8YD4R9RnE",
  authDomain: "crown-db-1b9b6.firebaseapp.com",
  databaseURL: "https://crown-db-1b9b6.firebaseio.com",
  projectId: "crown-db-1b9b6",
  storageBucket: "crown-db-1b9b6.appspot.com",
  messagingSenderId: "450524569135",
  appId: "1:450524569135:web:05c3779a42361caa9af0da"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log(err, "error creating new user");
    }
  }
  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "set_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
