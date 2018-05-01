import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React from 'react' 
export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    (
        <div> 
            {console.log("map",props.results)}
        {props.results? 
            <GoogleMap
                    defaultZoom={10}
                    defaultCenter={{ lat:props.results.geometry.location.lat, lng: props.results.geometry.location.lng }}>
                    {<Marker position={{ lat:props.results.geometry.location.lat, lng:props.results.geometry.location.lng }} ></Marker>}
            </GoogleMap>
             : <div/>
        }
        </div>
    )
))

export default MyMapComponent;