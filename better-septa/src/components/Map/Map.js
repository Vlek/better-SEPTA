import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: 0
};

const mapOptions = {
  fullscreenControl: false
};

export class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state = {items:[]};
  }

  componentDidMount(){
    fetch(`https://septa.p.rapidapi.com/hackathon/Stops/?req1=23`,
      {headers: {"X-RapidAPI-Key": "648efc9968msh984da544b0866a4p133036jsn68ea9f5ba707"}})
      .then(items => items.json())
      .then(items => this.setState({items}));
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14} style={mapStyles}
           initialCenter={{lat: 39.9566532, lng: -75.1970578}}
           defaultOptions={mapOptions}>

        {this.state.items.map(item =>
          <Marker
            name={item.destination}
            position={{lat: item.lat, lng: item.lng}}>
          </Marker>
        )}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyA-Hb-MGSGC7j7xAB2dJEHMzsHPM2PUGvU ")
})(MapContainer)