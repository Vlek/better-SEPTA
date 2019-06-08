import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import RouteStore from '../stores/RouteStore.js';


const mapStyles = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: 0,
  height: "500px",
  width: "1000px"
};

const mapOptions = {
  fullscreenControl: false
};

export class MapContainer extends Component {

  constructor(props){
    super(props);
    this._onChange = this._onChange.bind(this);
    this.getAppState = this.getAppState.bind(this);
    this.state = this.getAppState();

  }

  getAppState() {
      return {
        items: RouteStore.getRouteResults()
      }
    }

  componentDidMount(){
    RouteStore.addChangeListener(this._onChange);
  }

//  componentWillUnmount() {
//      RouteStore.removeChangeListener(this._onChange);
//    }

    _onChange() {
        this.setState(this.getAppState);
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
  apiKey: ("AIzaSyBddYBQ0PFba2mh55J1fNoUI5W5CXNeyvo")
})(MapContainer)