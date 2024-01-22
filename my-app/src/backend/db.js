const admin = require('firebase-admin');
const serviceAccount = require('./digital-door-f3ef2-firebase-adminsdk-p6wmb-d69cfab31d[1].json');

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


// // Initialize the Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// const firestore = admin.firestore();
// const collectionRef = firestore.collection('pid');

// Real-time listener for Firestore collection changes
// collectionRef.onSnapshot(
//   (snapshot) => {
//     snapshot.docChanges().forEach((change) => {
//       const documentData = change.doc.data();
//       const documentId = change.doc.id
//     });
//   },
//   (error) => {
//     console.error('Error in real-time listener:', error);
//   }
// );

// Function to fetch data from Firestore
const toFetchDataFromDb = (callback) => {
 const data= [{"Member2":"ParagJain","Water_Tax":"2500","Property_Tax":"0","Members":"apoorvJain, paragJain,seemaJain","Property Tax":"UnPaid","Water Tax":"UnPaid","Garbage Tax":"Paid","Name":"Aarav bhai ji Patelf from AITR","Member3":"RamJoshi","Latitude":"25.4486","Address":"777 Brockton Avenue, Abington MA 2351","Member1":"AdityaVinch","Longitude":"78.5685°","Garbage_Tax":"0"},{"Latitude":"22.722224","Water_Tax":"0","Member2":"AshishKumarSingh","Member1":"SeemaJain","Property_Tax":"0","Property Tax":"Unpaid","Address":"374 William S Canning Blvd, Fall River MA 2721","Garbage_Tax":"150","Water Tax":"Paid","Longitude":"75.870719","Garbage Tax":"Unpaid","Members":"apoorvJain, paragJain,seemaJain, devJain","Name":"Meera Joshi","Member3":"ParagJain"},{"Garbage Tax":"Paid","Member1":"AdityaVinchhi","Members":"apoorvJain, paragJain,seemaJain","Water Tax":"Unpaid","Latitude":"22.700439","Water_Tax":"890","Name":"Diya Kapoor","Garbage_Tax":"0","Member2":"ParagJain","Member3":"AshishKumarSingh","Property_Tax":"3500","Property Tax":"Unpaid","Longitude":"75.863411","Address":"1201 Rt 300, Newburgh NY 12550"},{"Garbage_Tax":"150","Water_Tax":"0","Latitude":"22.72145","Water Tax":"Paid","Property_Tax":"0","Longitude":"75.885265","Name":"Atharv Choudhary","Address":"255 W Main St, Avon CT 6001","Member1":"apoorvJain","Member2":"apoorvJain","Garbage Tax":"Paid","Member3":"AdityaVinchhi","Property Tax":"Unpaid","Members":"apoorvJain, paragJain,seemaJain"},{"Water Tax":"Unpaid","Latitude":"22.725971","Member1":"ParagJain","Property_Tax":"0","Members":"apoorvJain, paragJain,seemaJain, devJain","Member3":"apoorvJain","Property Tax":"Paid","Water_Tax":"900","Name":"Advika Yadav","Garbage Tax":"Paid","Member2":"SeemaJain","Address":"120 Commercial Parkway, Branford CT 6405","Garbage_Tax":"0","Longitude":"75.862747"},{"Member3":"ParagJain","Water Tax":"Paid","Garbage Tax":"Unpaid","Water_Tax":"1000","Property Tax":"Paid","Address":"1400 Farmington Ave, Bristol CT 6010","Name":"Aaradhya Nair","Members":"apoorvJain, paragJain,seemaJain, devJain","Longitude":"75.894991","Member1":"apoorvJain","Latitude":"22.733601","Property_Tax":"4800","Garbage_Tax":"150","Member2":"AshishKumarSingh"},{"Garbage_Tax":"0","Member2":"AdityaVinchhi","Garbage Tax":"Paid","Member3":"apoorvJain","Property_Tax":"1200","Name":"Rishi Joshi","Member1":"SeemaJain","Property Tax":"Unpaid","Latitude":"22.720083","Members":"apoorvJain, paragJain,seemaJain","Water_Tax":"0","Longitude":"75.87959","Address":"161 Berlin Road, Cromwell CT 6416","Water Tax":"Unpaid"},{"Property_Tax":"0","Longitude":"75.863606","Garbage Tax":"Unpaid","Member3":"SeemaJain","Name":"Aishani Thakur","Water_Tax":"0","Water Tax":"Paid","Latitude":"22.731768","Garbage_Tax":"150","Member1":"AshishKumarSingh","Member2":"apoorvJain","Property Tax":"Unpaid","Address":"67 Newton Rd, Danbury CT 6810","Members":"apoorvJain, paragJain,seemaJain"},{"Members":"apoorvJain, paragJain,seemaJain","Property Tax":"Unpaid","Member1":"AdityaVinchhi","Member3":"AshishKumarSingh","Garbage Tax":"Paid","Garbage_Tax":"0","Water_Tax":"2500","Water Tax":"Paid","Property_Tax":"0","Member2":"ParagJain","Latitude":"22.726199","Address":"656 New Haven Ave, Derby CT 6418","Name":"Aryan Kapoor","Longitude":"75.888394"},{"Members":"apoorvJain, paragJain,seemaJain","Member3":"AdityaVinchhi","Garbage Tax":"Paid","Longitude":"75.878016","Garbage_Tax":"150","Property_Tax":"3500","Address":"69 Prospect Hill Road, East Windsor CT 6088","Latitude":"22.722407","Member1":"apoorvJain","Member2":"apoorvJain","Property Tax":"Paid","Water_Tax":"0","Name":"Arushi Patel","Water Tax":"Unpaid"},{"Water Tax":"Unpaid","Latitude":"22.718465","Name":"Aarav Iyer","Water_Tax":"0","Property_Tax":"0","Garbage Tax":"Unpaid","Member3":"apoorvJain","Property Tax":"Unpaid","Member1":"ParagJain","Address":"150 Gold Star Hwy, Groton CT 6340","Garbage_Tax":"0","Member2":"SeemaJain","Longitude":"75.865667","Members":"apoorvJain, paragJain,seemaJain"},{"Property_Tax":"0","Latitude":"22.727952","Garbage_Tax":"0","Members":"apoorvJain, paragJain,seemaJain","Member3":"ParagJain","Property Tax":"Unpaid","Water Tax":"Paid","Member2":"AshishKumarSingh","Name":"Ananya Saxena","Member1":"apoorvJain","Address":"900 Boston Post Road, Guilford CT 6437","Garbage Tax":"Paid","Water_Tax":"360","Longitude":"75.89169"},{"Water_Tax":"0","Property_Tax":"0","Latitude":"22.731408","Member2":"RamJoshi","Address":"121 Worcester Rd, Framingham MA 1701","Member3":"apoorvJain","Garbage_Tax":"0","Longitude":"75.895187","Member1":"AshishKumarSingh","Property Tax":"Unpaid","Garbage Tax":"Paid","Water Tax":"Paid","Members":"apoorvJain, paragJain,seemaJain, devJain","Name":"Advait Desai"},{"Member2":"AdityaVinchhi","Garbage_Tax":"150","Property Tax":"Paid","Longitude":"75.870474","Property_Tax":"4800","Members":"apoorvJain, paragJain,seemaJain","Member1":"SeemaJain","Garbage Tax":"Paid","Member3":"apoorvJain","Address":"2300 Dixwell Ave, Hamden CT 6514","Water Tax":"Unpaid","Water_Tax":"0","Latitude":"22.72324","Name":"Advay Sharma"},{"Garbage Tax":"Unpaid","Address":"495 Flatbush Ave, Hartford CT 6106","Members":"apoorvJain, paragJain,seemaJain","Water Tax":"Unpaid","Name":"Yashvi Khanna","Member2":"apoorvJain","Garbage_Tax":"0","Water_Tax":"890","Longitude":"75.861111","Property Tax":"Unpaid","Member1":"AshishKumarSingh","Latitude":"22.732348","Property_Tax":"1200","Member3":"SeemaJain"},{"Member3":"AshishKumarSingh","Members":"apoorvJain, paragJain,seemaJain","Property Tax":"Paid","Name":"Aryan Kumar","Water_Tax":"0","Member2":"ParagJain","Water Tax":"Paid","Longitude":"75.875872","Garbage_Tax":"150","Garbage Tax":"Paid","Address":"180 River Rd, Lisbon CT 6351","Member1":"ParagJain","Property_Tax":"0","Latitude":"22.72195"},{"Member1":"apoorvJain","Longitude":"75.859042","Member2":"apoorvJain","Garbage_Tax":"0","Name":"Anaya Verma","Water_Tax":"900","Member3":"AdityaVinchhi","Garbage Tax":"Unpaid","Latitude":"22.726602","Property_Tax":"0","Property Tax":"Unpaid","Water Tax":"Paid","Members":"apoorvJain, paragJain,seemaJain","Address":"420 Buckland Hills Dr, Manchester CT 6040"},{"Longitude":"75.89884","Property Tax":"Paid","Member1":"SeemaJain","Property_Tax":"3500","Garbage Tax":"Unpaid","Garbage_Tax":"150","Member3":"apoorvJain","Water_Tax":"1000","Water Tax":"Unpaid","Member2":"SeemaJain","Name":"Vihaan Gupta","Members":"apoorvJain, paragJain,seemaJain","Latitude":"22.730171","Address":"1365 Boston Post Road, Milford CT 6460"},{"Member2":"AshishKumarSingh","Property Tax":"Unpaid","Name":"Advaita Naidu","Longitude":"75.888896","Latitude":"22.719257","Member1":"AshishKumarSingh","Member3":"ParagJain","Water Tax":"Unpaid","Water_Tax":"0","Garbage Tax":"Paid","Members":"apoorvJain, paragJain,seemaJain","Address":"1100 New Haven Road, Naugatuck CT 6770","Property_Tax":"0","Garbage_Tax":"0"},{"Member3":"apoorvJain","Latitude":"22.724184","Water Tax":"Paid","Name":"Avani Desai","Property_Tax":"0","Members":"apoorvJain, paragJain,seemaJain","Address":"315 Foxon Blvd, New Haven CT 6513","Garbage Tax":"Unpaid","Water_Tax":"0","Member1":"AdityaVinchhi","Garbage_Tax":"150","Property Tax":"Paid","Member2":"RamJoshi","Longitude":"75.868176"},{"Latitude":"22.728457","Members":"apoorvJain, paragJain,seemaJain","Longitude":"75.873891","Member3":"SeemaJain","Water Tax":"Unpaid","Member2":"AdityaVinchhi","Name":"Arjun Yadav","Garbage_Tax":"0","Garbage Tax":"Paid","Member1":"apoorvJain","Water_Tax":"2500","Property Tax":"Paid","Property_Tax":"4800","Address":"164 Danbury Rd, New Milford CT 6776"},{"Members":"apoorvJain, paragJain,seemaJain","Longitude":"75.881702","Garbage_Tax":"150","Water Tax":"Unpaid","Member2":"apoorvJain","Member1":"ParagJain","Latitude":"22.734012","Garbage Tax":"Unpaid","Water_Tax":"0","Member3":"AshishKumarSingh","Name":"Anvi Bansal","Property_Tax":"1200","Address":"3164 Berlin Turnpike, Newington CT 6111","Property Tax":"Unpaid"},{"Property_Tax":"0","Latitude":"22.725774","Member1":"apoorvJain","Property Tax":"Paid","Member2":"ParagJain","Address":"474 Boston Post Road, North Windham CT 6256","Garbage Tax":"Paid","Longitude":"75.864437","Members":"apoorvJain, paragJain,seemaJain","Name":"Aarav Shah","Water Tax":"Paid","Garbage_Tax":"0","Member3":"RamJoshi","Water_Tax":"0"},{"Member1":"RiyaPatel","Property_Tax":"4800","Address":"677 Timpany Blvd, Gardner MA 1440","Garbage Tax":"Unpaid","Garbage_Tax":"250","Latitude":"22.7269","Members":"apoorvJain, paragJain,seemaJain","Member2":"AdityaVinchhi","Longitude":"75.869646","Water_Tax":"2500","Name":"Shruti Trivedi","Water Tax":"Unpaid","Member3":"SeemaJain","Property Tax":"Paid"},{"Water_Tax":"360","Longitude":"75.890986","Garbage_Tax":"250","Water Tax":"Unpaid","Address":"650 Main Ave, Norwalk CT 6851","Member2":"apoorvJain","Property Tax":"Paid","Name":"Ananya Joshi","Members":"apoorvJain, paragJain,seemaJain","Property_Tax":"0","Garbage Tax":"Paid","Member3":"AdityaVinchhi","Latitude":"22.71781","Member1":"SeemaJain"},{"Member3":"apoorvJain","Name":"Arnav Malhotra","Address":"680 Connecticut Avenue, Norwalk CT 6854","Water_Tax":"0","Member1":"AshishKumarSingh","Longitude":"75.867788","Members":"apoorvJain, paragJain,seemaJain, devJain","Garbage Tax":"Unpaid","Latitude":"22.731409","Garbage_Tax":"0","Property Tax":"Unpaid","Member2":"SeemaJain","Property_Tax":"3500","Water Tax":"Unpaid"},{"Address":"220 Salem Turnpike, Norwich CT 6360","Latitude":"22.722121","Water_Tax":"890","Name":"Aishwarya Thakur","Garbage Tax":"Paid","Longitude":"75.879385","Member1":"AdityaVinchhi","Member3":"ParagJain","Property_Tax":"0","Garbage_Tax":"250","Members":"apoorvJain, paragJain,seemaJain","Water Tax":"Paid","Property Tax":"Unpaid","Member2":"AshishKumarSingh"},{"Name":"Advay Singh","Property_Tax":"0","Latitude":"22.72776","Water Tax":"Paid","Member1":"apoorvJain","Address":"655 Boston Post Rd, Old Saybrook CT 6475","Member3":"apoorvJain","Property Tax":"Unpaid","Longitude":"75.860825","Water_Tax":"0","Garbage_Tax":"0","Garbage Tax":"Unpaid","Members":"apoorvJain, paragJain,seemaJain","Member2":"AdityaVinchhi"}]
  
  callback(data);
  // collectionRef.get().then((snapshot) => {
  //   const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //   callback(data);
  // });
};

toFetchDataFromDb((data) => {
  console.log('Data fetched from Firestore:', data);
});

const filterGarbage = (callback, category, toCompare) => {
  collectionRef
    .where(category, '==', toCompare)
    .get()
    .then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      callback(data);
    })
    .catch((error) => {
      console.error('Error filtering data:', error);
    });
};

module.exports = {
  toFetchDataFromDb,
  filterGarbage,
};
