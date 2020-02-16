import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './Map.css'

export class MapContainer extends Component {  
  render() {
    const {lat, lng} = this.props.data.locationsCoords;
    return (
      <Map google={this.props.google}      
      initialCenter={{
            lat,
            lng
          }}
      className={'map'}
      zoom={12}>
        <Marker          
          position={{lat, lng}} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCvaIfWd-OuN9oFNCRTuUTbInrnllrw4ao')
})(MapContainer)