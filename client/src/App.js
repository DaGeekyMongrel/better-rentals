import { useState, useEffect } from 'react';
import axios from 'axios';

import Map from './components/Map';

function App() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get('/api/listings')
      .then((res) => {
        setListings(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const onMapLoad = (map) => {
    const { Marker } = window.google.maps;
    const markers = listings.map(
      ({ lat, lng, address }) =>
        new Marker({ position: { lat, lng }, map: map, title: address })
    );
  };

  const options = {
    center: { lat: 47.49801, lng: 19.03991 },
    zoom: 12,
  };

  return (
    <div className="App">
      {listings.length > 0 && (
        <Map id="myMap" options={options} onMapLoad={onMapLoad} />
      )}
    </div>
  );
}

export default App;
