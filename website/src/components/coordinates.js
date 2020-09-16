import React from 'react';
import { Button } from 'baseui/button';


class coordinate extends React.Component{

    constructor(props){
        super(props);
        this.getLocation = this.getLocation.bind(this);
    }

    // get current location
    getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position){
                alert('Latitude: ' + position.coords.latitude
                    + '\nLongitude: ' + position.coords.longitude)     
            });            
        } else {
            alert('browser does not support geolocation');
        }
    }

    render(){
        return(
        <div>
            <Button onClick={this.getLocation}>Click to get Location</Button>
        </div>
        );
    }
}

export default coordinate;