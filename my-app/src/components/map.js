import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF as Marker } from '@react-google-maps/api';
import Sidebar from './dropdown';

const Map = () => {

  const [filter, setfilter] = useState('');
  const [markers, setMarkers] = useState([]);
  const libraries = ['places'];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/maps/markers');

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        const newMarkers = data.map((marker) => {
          const latitude = parseFloat(marker.Latitude);
          const longitude = parseFloat(marker.Longitude);

          if (isNaN(latitude) || isNaN(longitude)) {
            console.error('Invalid latitude or longitude:', marker);
            return null; // Skip marker if  position is not valid
          }
          
          debugger
          return {
            id: marker.Address,
            position: {
              lat: latitude,
              lng: longitude,
            },
            ...marker
          };
        });

        console.log('New markers:', newMarkers);
        // Remove markers with invalid positions
        const validMarkers = newMarkers.filter((marker) => marker !== null);
        if(validMarkers.length===0) {console.log("no valid markers")}
        setMarkers(validMarkers);
        console.log('valid markers',validMarkers);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // fetchData();
    setInterval(fetchData, 1000)

  }, []);

  const defaultProps = {
    center: {
      lat: 22.7196,
      lng: 75.8577,
    },
    zoom: 11,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAik0IVosernmdG7ppjmMbuRdsLdne3vjM',
    libraries: libraries,

  });

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  if (loadError) {
    return <div>Error loading maps</div>;
  }


  const getMarkerColor = (marker, filter) => {
    const unpaidTaxes = [marker['Garbage Tax'], marker['Property Tax'], marker['Water Tax']].filter(
      (tax) => tax === 'Unpaid'
    );

    if (filter === 'all') {
      if (unpaidTaxes.length === 3) {
        return 'red';
      } else if (unpaidTaxes.length === 2) {
        return 'orange';
      } else if (unpaidTaxes.length === 1) {
        return 'yellow';
      } else {
        return 'green';
      }
    }

    if (filter === 'unpaidWaterTax' && marker['Water Tax'] === 'Unpaid') {
      return 'red';
    } else if (filter === 'unpaidPropertyTax' && marker['Property Tax'] === 'Unpaid') {
      return 'red';
    } else if (filter === 'unpaidGarbageTax' && marker['Garbage Tax'] === 'Unpaid') {
      return 'red';
    } else if (filter === 'unpaidWaterTax' && marker['Water Tax'] === 'Paid') {
      return 'green';
    } else if (filter === 'unpaidPropertyTax' && marker['Property Tax'] === 'Paid') {
      return 'green';
    } else if (filter === 'unpaidGarbageTax' && marker['Garbage Tax'] === 'Paid') {
      return 'green';
    }

    return 'green'
  };

  
  if (markers.length === 0) {
    return <span>No marker found</span>
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
            <Sidebar onFilterChange={(newFilter) => {setfilter(newFilter); console.log(newFilter)}} />
            

      <GoogleMap
      key={markers.length}
        mapContainerStyle={{ height: '100%', width: '100%' }}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
      >
        {  markers?.map((marker) => (
          <Marker
            key={`${marker.id}-${getMarkerColor(marker,filter)}`}
            position={marker.position}
            icon={{
              url: `https://maps.google.com/mapfiles/ms/icons/${getMarkerColor(marker,filter)}-dot.png`,
              scaledSize: new window.google.maps.Size(20, 20),
            }}
            
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
