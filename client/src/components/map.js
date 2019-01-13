import React, {Component} from 'react';
import { connect } from 'react-redux';

export class Map extends Component {
    componentDidMount() {
        const {google} = this.props;
        const maps = google.maps;
        const mapRef = this.refs.map
        const initialCenter = {
            lat: this.props.restaurant.location.lat,
            lng: this.props.restaurant.location.lng
        }
        const map = new maps.Map(mapRef, {
          center: initialCenter,
          zoom: 14
        })
        new maps.Marker({
          map: map,
          position: location
        })
        window.scrollTo(0,document.body.scrollHeight)
    }
    
     render() {   
        return (
            <div ref='map' className="google-map" style={style}>
            Loading Map...
            </div>
        )
    }
}

Map.defaultProps = {
    zoom: 14,
    // Downtown LA default
    initialCenter: {
        lat: 34.0544,
        lng: -118.2673
    }
}

export const Map = connect(mapStateToProps)(Map)