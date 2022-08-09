import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB3Gv0tTxoliiP0ZKlWo6VkuUv3MGnG2nE',
  authDomain: 'proyecto-integrador-reactjs.firebaseapp.com',
  projectId: 'proyecto-integrador-reactjs',
  storageBucket: 'proyecto-integrador-reactjs.appspot.com',
  messagingSenderId: '529039508917',
  appId: '1:529039508917:web:f304f57a5c457a45e1c5fc',
};

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({ displayName, email, createAt, ...additionalData });
    } catch (error) {
      console.log('Error al crear el usuario', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
