// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue, off } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyDXI9YW8HuEkn_KVUrU-LC5m1HwN1QEgO8",
//   authDomain: "jsom-c23a1.firebaseapp.com",
//   databaseURL: "https://jsom-c23a1-default-rtdb.firebaseio.com",
//   projectId: "jsom-c23a1",
//   storageBucket: "jsom-c23a1.appspot.com",
//   messagingSenderId: "737204936841",
//   appId: "1:737204936841:web:7f455db2a0301887bba658",
//   measurementId: "G-5KM5VJC4Q4"
// };

// const app = initializeApp(firebaseConfig);
// const db=getDatabase(app);


// const fetchedData=(Path,OnDataChange,OnError)=>{

//     const dataref=ref(db,Path);

//     // to handle the data changes 
//     const onDataChangesCB=(snapshot)=>{
//         const data=snapshot.val();
//         OnDataChange(data);
//     }

//     // to handle the error 
//     const HandleError=(error)=>{
//         OnError(error);
//     }

//     // to fetch the intial data only once
//     onValue(dataref,onDataChangesCB,{
//         onlyonce:true,
//         error:(error)=>{
//             HandleError(error);
//         }
//     });


//     return ()=>{
//         off(dataref,"value",onDataChangesCB);
//         off(dataref,"error",HandleError);
//     }
// }

// // function to check 
// fetchData(
//     '/pid',
//     (initialData) => {
//       console.log("Initial Data:", initialData);
//     },
//     (error) => {
//       console.error("Error fetching data:", error);
//     }
//   );






//   ////////////////////////
//   import React, { useEffect, useState } from 'react';
// import { GoogleMap, libraries,useLoadScript, Marker } from '@react-google-maps/api';
// // Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyDXI9YW8HuEkn_KVUrU-LC5m1HwN1QEgO8",
//   authDomain: "jsom-c23a1.firebaseapp.com",
//   databaseURL: "https://jsom-c23a1-default-rtdb.firebaseio.com",
//   projectId: "jsom-c23a1",
//   storageBucket: "jsom-c23a1.appspot.com",
//   messagingSenderId: "737204936841",
//   appId: "1:737204936841:web:7f455db2a0301887bba658",
//   measurementId: "G-5KM5VJC4Q4"
// };



// const Map = () => {

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyAik0IVosernmdG7ppjmMbuRdsLdne3vjM',
//     libraries,
//   });


//   if(!isLoaded) {
//     return <div>Loading maps</div>
//   }

//   if(loadError) {
//     return <div>Error loading maps</div>
//   }
//   useEffect(()=>{
//        fetch('http://localhost:5000/maps/markers') .then((response) => {
//         // Check if the response is successful (status code 2xx)
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
    
//         return response.json();
//       }).catch((error) => {
//           console.error('Error fetching data:', error);
//       }).then((data) => {
        
//         const markers = data.map(marker => ({
//           id: marker.id,
//           position: {
//             lat: marker.Latitude,
//             lng: marker.Longitude,
//           }
//         }))
//         setmarkers(markers)
//       })
      
//   })
  

//   const defaultProps = {
//     center: {
//       lat: 22.7196,
//       lng: 75.8577,
//     },
//     zoom: 11,
//   };
//   const [filter, setfilter] = useState('all')

//   const [markers, setmarkers] = useState([]);

//   // useEffect(() => {
//   //   const databaseRef = ref(database, 'pid');
//   //   const fetchData = (snapshot) => {
//   //     debugger
//   //     const newData = snapshot.val();
//   //     const newMarkers = Object.keys(newData).map((key) => {
//   //       const item = newData[key];
//   //       return {
//   //         id: key,
//   //         position: { lat: parseFloat(item.latitude), lng: parseFloat(item.longitude) },
//   //       };
//   //     });
//   //     setmarkers(newMarkers);
//   //   };
  
//   //   onValue(databaseRef, fetchData);
  
//   //   return () => {
//   //     // Cleanup listener on component unmount
//   //     off(databaseRef, 'value', fetchData);
//   //   };
//   // }, [database]); // Include 'filter' as a dependency
  
//   // useEffect(() => {
//   //   // toFetchDataFromDb((data) => {
//   //   //   console.log(data)
//   //   //   debugger
//   //   // })
//   // }, [])

//   const filteredMarkers = (filter) => {
//     switch (filter) {
//       case 'unpaidWaterTax':
//         return markers?.filter((marker) => marker['Water Tax'] === 'Unpaid');
//       case 'unpaidPropertyTax':
//         return markers?.filter((marker) => marker['Property Tax'] === 'Unpaid');
//       case 'unpaidGarbageTax':
//         return markers?.filter((marker) => marker['Garbage Tax'] === 'Unpaid');
//       default:
//         return markers;
//     }
//   };
  
  
//   const getMarkerColor = (marker, filter) => {
//     const unpaidTaxes = [marker['Garbage Tax'], marker['Property Tax'], marker['Water Tax']].filter(
//       (tax) => tax === 'Unpaid'
//     );

//     if (filter === 'all') {
//         if (unpaidTaxes.length === 3) {
//           return 'red';
//         } else if (unpaidTaxes.length === 2) {
//           return 'orange';
//         } else if (unpaidTaxes.length === 1) {
//           return 'yellow';
//         } else {
//           return 'green';
//         }
//     }

//     if (filter === 'unpaidWaterTax' && marker['Water Tax'] === 'Unpaid') {
//         return 'red';
//       } else if (filter === 'unpaidPropertyTax' && marker['Property Tax'] === 'Unpaid') {
//         return 'red';
//       } else if (filter === 'unpaidGarbageTax' && marker['Garbage Tax'] === 'Unpaid') {
//         return 'red';
//       } else if (filter === 'unpaidWaterTax' && marker['Water Tax'] === 'Paid') {
//         return 'green';
//       } else if (filter === 'unpaidPropertyTax' && marker['Property Tax'] === 'Paid') {
//         return 'green';
//       } else if (filter === 'unpaidGarbageTax' && marker['Garbage Tax'] === 'Paid') {
//         return 'green';
//       }
//   };
  
//   if (markers.length === 0) {
//     return <span>No marer found</span>
//   }


//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       {/* <LoadScript googleMapsApiKey="AIzaSyAik0IVosernmdG7ppjmMbuRdsLdne3vjM" libraries={['places']} > */}
//         <GoogleMap
//           mapContainerStyle={{ height: '100%', width: '100%' }}
//           center={defaultProps.center}
//           zoom={defaultProps.zoom}
//         >
//          {markers.map((marker) => (
//           <Marker
//             key={marker.id}
//             position={marker.position}
//             icon={{
//               url: `https://maps.google.com/mapfiles/ms/icons/${getMarkerColor(marker, filter)}-dot.png`,
//               scaledSize: new window.google.maps.Size(30, 30),
//             }}
//           />
//         ))}


//         </GoogleMap>
//       {/* </LoadScript> */}
//     </div>
//   );
// };

// export default Map;
