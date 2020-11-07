import { MapLayer, LeafletProvider } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    let leafletElement = L.Routing.control({
        waypoints: 
        [
            L.latLng(32.643232547166306,-97.18632459640503),
            L.latLng(32.947360, -96.898670)
        ],
        formatter: new L.Routing.Formatter({units: 'imperial'})
    
    
    }).addTo(map.leafletElement);

    leafletElement.hide();
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);