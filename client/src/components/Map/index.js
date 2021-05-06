import { createElement, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactDOMServer from 'react-dom/server';

import GMap from './GMap';
import { getListings } from '../../actions/listingsActions';
import ListingInfo from './ListingInfo';

const getPosition = ({ lat, lng }) => ({ lat, lng });

function Map({ listings, loading, getListings }) {
  useEffect(() => {
    getListings();
  }, [getListings]);

  let infoWindow;

  const openInfoWindow = (listing, marker, map) => {
    const element = createElement(ListingInfo, { listing });

    infoWindow?.close();

    infoWindow = new window.google.maps.InfoWindow({
      content: ReactDOMServer.renderToStaticMarkup(element),
    });

    infoWindow.open(map, marker);
  };

  const onMapLoad = (map) => {
    const { Marker, LatLngBounds } = window.google.maps;
    const bounds = new LatLngBounds();
    const markers = [];

    for (let i = 0; i < listings.length; i++) {
      const listing = listings[i];
      const position = getPosition(listing);
      const marker = new Marker({ position, map, title: listing.address });

      marker.addListener('click', () => {
        openInfoWindow(listing, marker, map);
      });

      markers.push(marker);

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
