// import {Map, Marker,Popup, TileLayer} from "react-leaflet";
// import * as locationData from "./locations.json";


// export  function App() {

//   const [activeLocation, setActiveLocation]=React.useState(null);

//   return (
//   <Map center= {[32.947361, -96.898666]} zoom ={12}>
//      <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//     />

//      {locationData.features.map(park=>(
//       <Marker key={park.properties.PARK_ID} position={[
//         park.geometry.coordinates[0],
//         park.geometry.coordinates[1]
//       ]}

//       onclick={()=>{
//         setActiveLocation(park);
//       }}
//       />
//      ))}


//     {activeLocation && (
//       <Popup position={[activeLocation.geometry.coordinates[0],activeLocation.geometry.coordinates[1]
//       ]}
//       onClose={()=>{
//         setActiveLocation(null);
//       }}

//       >
//         <div>
//           <h2>{activeLocation.properties.NAME}</h2>
//           <p>{activeLocation.properties.DESCRIPTIO}</p>
//         </div>
//     </Popup>
//     )}

//   </Map>
//   );
// }

// export default Map;

import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import * as locationData from "./common/locations.json";
import Routing from '../components/routing/routingMachine';
import { render } from '@testing-library/react';



export default class LeafletMap extends Component {
  // const [activeLocation, setActiveLocation] = React.useState(null);

  state = {
    lat: 32.7398433,
    lng: -97.358976,
    zoom: 13,
    isMapInit: false
  };
  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };
  render(){
    const position = [this.state.lat, this.state.lng];
    return (
      <>
      
      <Map center={position} zoom='130' ref={this.saveMap}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;%3EOpenStreetMap</a> contributors"
            />
          {this.state.isMapInit && <Routing map={this.map} />}

          {/* {locationData.features.map(park => (
            <Marker key={park.properties.PARK_ID} position={[
              park.geometry.coordinates[0],
              park.geometry.coordinates[1]
            ]}
                onclick={() => {
                setActiveLocation(park);
              }}
            />
          ))}

          {activeLocation && (
            <Popup position={[activeLocation.geometry.coordinates[0], activeLocation.geometry.coordinates[1]
            ]}
              onClose={() => {
                setActiveLocation(null);
              }}

            >
              <div>
                <h2>{activeLocation.properties.NAME}</h2>
                <p>{activeLocation.properties.DESCRIPTIO}</p>
              </div>
            </Popup>
          )} */}
          
        </Map>
      </>
    )
          }
}