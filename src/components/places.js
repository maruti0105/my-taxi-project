import React, {Component} from "react";
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
import taxiData from '../jsonfile/mytaxi';
import carData from '../jsonfile/car2go';

class Map extends Component {
  render() {

    //onRightClick={()=>props.onMarkerRightClick(index)}
    const markers = taxiData.poiList;
    const carmarkers = carData.placemarks;
    console.log(carmarkers)
    //"http://maps.google.com/mapfiles/ms/icons/green-dot.png"

    return (

      <GoogleMap defaultZoom={11} defaultCenter={this.props.center}>

        {markers.map((marker, index) => (<Marker position={{
          lat: marker.coordinate.latitude,
          lng: marker.coordinate.longitude
        }} key={marker.id} icon={{
          url: "https://image.ibb.co/hJA4Yw/taxi2.png"
        }}/>))}

        {carmarkers.map((marker, index) => (<Marker position={{
          lat: marker.coordinates[1],
          lng: marker.coordinates[0]
        }} key={marker.id} icon={{
          url: "https://image.ibb.co/h4Wdtw/taxi1.png"
        }}/>))}
      </GoogleMap>

    );
  }
}

export default withGoogleMap(Map)

//   const toggleInfoWindow = (loc) => {
//   // clicking 'x' in the info window will pass null, so if we detect that, reset the position in state
//   if (loc == null) {
//     this.setState({ windowPosition: null })
//     return
//   }
//   // otherwise get coords of clicked marker and set to state
//   let markerLoc = { lat: loc.latLng.lat(), lng: loc.latLng.lng() }
//   this.setState({ windowPosition: markerLoc })
//
//   <InfoWindow
//             position={this.state.windowPosition}
//             onCloseclick={this.toggleInfoWindow}
//             options={{pixelOffset: new google.maps.Size(0,-30)}}
//             >
//             <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
//   <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
//     Hello from Taipei
//   </div>
// </div>
// </InfoWindow>
//
//
// }
