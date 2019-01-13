export class Map extends React.Component {
    loadMap() {
        if (this.props && this.props.google) {
            // google is available
            const {google} = this.props;
            const maps = google.maps;
    
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);
    
            let {initialCenter, zoom} = this.props;
            const {lat, lng} = initialCenter;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
            center: center,
            zoom: zoom
            })
            this.map = new maps.Map(node, mapConfig);
        }    
        Map.propTypes = {
            google: React.PropTypes.object,
            zoom: React.PropTypes.number,
            initialCenter: React.PropTypes.object
        }
        Map.defaultProps = {
            zoom: 13,
            // San Francisco, by default
            initialCenter: {
                lat: 37.774929,
                lng: -122.419416
            }
        }
    }
}