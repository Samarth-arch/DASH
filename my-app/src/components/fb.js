import firebase from 'firebase';
import admin from 'firebase-admin';
import serviceAccount from './jsom-c23a1-firebase-adminsdk-a4evw-b0a963f809.json';

const firebaseConfig = {
  apiKey: "AIzaSyDXI9YW8HuEkn_KVUrU-LC5m1HwN1QEgO8",
  authDomain: "jsom-c23a1.firebaseapp.com",
  databaseURL: "https://jsom-c23a1-default-rtdb.firebaseio.com",
  projectId: "jsom-c23a1",
  storageBucket: "jsom-c23a1.appspot.com",
  messagingSenderId: "737204936841",
  appId: "1:737204936841:web:7f455db2a0301887bba658",
  measurementId: "G-5KM5VJC4Q4"
};

  // Initialize the Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  const firestore = admin.firestore();
  const collectionRef = firestore.collection('users');

  // Real-time listener for Firestore collection changes
  collectionRef.onSnapshot(
    (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const documentData = change.doc.data();

        if (change.type === 'added' || change.type === 'modified') {
          console.log('New/Modified document:', documentData);
        } else if (change.type === 'removed') {
          console.log('Removed document:', documentData);
        }
      });
    },
    (error) => {
      console.error('Error in real-time listener:', error);
    }
  );

  // Function to fetch data from Firestore
 export const toFetchDataFromDb = (callback) => {
    collectionRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      callback(data);
    });
  };

  toFetchDataFromDb((data) => {
    console.log('Data fetched from Firestore:', data);
  });

export  const filterGarbage = (callback, category, toCompare) => {
    collectionRef
      .where(category, '==', toCompare)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => doc.data());
        callback(data);
      });
  };

