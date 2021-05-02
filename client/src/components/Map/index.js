import { useState, useEffect } from 'react';
import axios from 'axios';

import GMap from './GMap';

const getPosition = ({ lat, lng }) => ({ lat, lng });

function Map() {
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
    const { Marker, LatLngBounds } = window.google.maps;
    const bounds = new LatLngBounds();
    const markers = [];

    for (let i = 0; i < listings.length; i++) {
      const position = getPosition(listings[i]);
      markers.push(new Marker({ position, map, title: listings[i].address }));
      bounds.extend(position);
    }

    map.fitBounds(bounds);
  };

  const options = {};

  return (
    <div className="map-wrapper">
      {listings.length > 0 && (
        <GMap id="myMap" options={options} onMapLoad={onMapLoad} />
      )}
    </div>
  );
}

export default Map;
