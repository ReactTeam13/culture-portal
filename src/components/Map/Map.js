import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import data from '../../data/people';
import './Map.css'

export class MapContainer extends Component {
  state = {
    lat: this.props.data.locationsCoords.lat,
    lng: this.props.data.locationsCoords.lng,
  }
  render() {
    return (
      <Map google={this.props.google}      
      initialCenter={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
      className={'map'}
      zoom={11}>
        <Marker
          title={'Belarus'}
          name={'Minsk'}
          position={{lat: this.state.lat, lng: this.state.lng}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCvaIfWd-OuN9oFNCRTuUTbInrnllrw4ao')
})(MapContainer)