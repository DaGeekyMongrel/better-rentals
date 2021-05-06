import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap-v5';

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
    <section className="container map-wrapper">
      <h2>Map</h2>
      {loading === false && (
        <GMap id="myMap" options={options} onMapLoad={onMapLoad} />
      )}
    </section>
  );
}

const mapStateToProps = (state) => ({
  listings: state.listings.listings,
  loading: state.listings.loading,
});

export default connect(mapStateToProps, { getListings })(Map);
