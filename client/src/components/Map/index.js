import { useEffect } from 'react';
import { connect } from 'react-redux';

import GMap from './GMap';
import { getListings } from '../../actions/listingsActions';

const getPosition = ({ lat, lng }) => ({ lat, lng });

function Map({ listings, loading, getListings }) {
  useEffect(() => {
    getListings();
  }, [getListings]);

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
      {loading === false && (
        <GMap id="myMap" options={options} onMapLoad={onMapLoad} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  listings: state.listings.listings,
  loading: state.listings.loading,
});

export default connect(mapStateToProps, { getListings })(Map);
