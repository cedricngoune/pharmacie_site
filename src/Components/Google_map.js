import React, { Component } from "react";
import { Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
    width: '100%',
    height: '100%'
};

export class GoogleMapsContainer extends Component {
    constructor(props) {
        super(props)
    }
    state = {
        showingInfoWindow: false,  
        activeMarker: {},          
        selectedPlace: {}          
      };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
  
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

    render() {
        
        return(
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 48.676121,
                        lng: 2.292630
                    }
                }
            >
            <Marker
                onClick={this.onMarkerClick}
                name={'Pharmacie du centre'}
            />
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >
            <div>
                <h4>{this.state.selectedPlace.name}</h4>
            </div>
            </InfoWindow>
        </Map>
        )
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyDnYC6odxSaxI42cNu5tTPPthEblQO6Wik"
})(GoogleMapsContainer)