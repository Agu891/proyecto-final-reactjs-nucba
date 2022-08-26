import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB3Gv0tTxoliiP0ZKlWo6VkuUv3MGnG2nE',
  authDomain: 'proyecto-final-reactjs-nucba.vercel.app',
  projectId: 'proyecto-integrador-reactjs',
  storageBucket: 'proyecto-integrador-reactjs.appspot.com',
  messagingSenderId: '529039508917',
  appId: '1:529039508917:web:f304f57a5c457a45e1c5fc',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
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

export const createOrderDocument = async (order) => {
  if (!order) return;
  const orderRef = firestore.doc(`orders/${order.id}`);
  const snapShot = await orderRef.get();
  if (!snapShot.exists) {
    const createdAt = new Date();

    try {
      await orderRef.set({
        userId: order.userId,
        shippingDetails: {
          ...order.shippingDetails,
        },
        items: [...order.items],
        shippingPrice: order.shippingPrice,
        subtotal: order.subtotal,
        total: order.total,
        status: 'pendiente',
        createdAt,
      });
    } catch (error) {
      console.log('Error creating order', error.message);
    }
  }
  return orderRef;
};

export const getOrders = async (userId) => {
  const orderRef = await firestore
    .collection('orders')
    .where('userId', '==', userId)
    .orderBy('createdAt', 'desc');

  let orders = await orderRef
    .get()
    .then(function (querySnapshot) {
      let orders = [];
      querySnapshot.forEach(function (doc) {
        orders = [...orders, { id: doc.id, ...doc.data() }];
      });
      return orders;
    })
    .catch(function (error) {
      console.log('Error getting documents: ', error);
    });

  return orders;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);
