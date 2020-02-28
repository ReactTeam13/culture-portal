import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import './index.css';

export function MapContainer(props) {
  const { data, google } = props;
  const { locationsCoords } = data;
  const { lat, lng } = locationsCoords;
  return (
    <Map
      google={google}
      initialCenter={{
        lat,
        lng,
      }}
      className="map"
      zoom={12}
    >
      <Marker
        position={{ lat, lng }}
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCvaIfWd-OuN9oFNCRTuUTbInrnllrw4ao'),
})(MapContainer);
