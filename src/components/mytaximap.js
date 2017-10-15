import React,{Component}  from "react";
import Map from './places'
import taxiData from '../jsonfile/mytaxi';

class Maptaxi extends Component {
  render(){
    return(
      <Map
        center={{lat:53.5741486,lng:9.940156}}
      containerElement={<div style={{ height: '600px' }}></div>}
      mapElement={<div style={{ height:100+'%' }}></div>} />

    );
  }
}

export default Maptaxi
