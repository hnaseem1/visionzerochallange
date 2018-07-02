import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

var rows = [];
for (var i = 0; i < 10; i++) {
    // note: we add a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    rows.push(<Marker position={{ lat: -30.397+i, lng: 155.644 }} key={i}/>);

      }

const Map = withScriptjs(withGoogleMap((props) =>

      // props now include API data in props.data
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -30.397, lng: 155.644 }}
      >

        {rows}

        
      </GoogleMap>
  ))


export default Map;
