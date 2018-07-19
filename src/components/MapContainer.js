import React, { Component } from 'react';
import ReactDOM from 'react-dom'


export default class MapContainer extends Component {

  constructor(props)
{
  super(props)
  this.state={
    isOpen: false,
    data:[]
  }
}

handleToggleOpen = () => {

	this.setState({
		isOpen: true
	});
}

handleToggleClose = () => {
	this.setState({
		isOpen: false
	});
}

  componentDidMount() {

    fetch('https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then((Response)=>Response.json())
    .then((findresponse)=>
  {
    console.log(findresponse.features)
    this.setState({
      data:findresponse.features
    })
  })
    this.loadMap(); // call loadMap function to load the google map upon mounting the component
  }


  componentDidUpdate() {
    this.loadMap(); // call loadMap function to load the google map
  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: {lat: 43.658162, lng: -79.3212792}, // sets center of google map to NYC.
        zoom: 11, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

  // ==================
  // ADD MARKERS TO MAP
  // ==================
      this.state.data.forEach( features => { // iterate through locations saved in state
        const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
          position: {lat: features.attributes.LATITUDE, lng: features.attributes.LONGITUDE}, // sets position of marker to specified location
          map: this.map, // sets markers to appear on the map we just created on line 35
          title: 'test', // the title of the marker is set to the name of the location
          name: 'my test',
        });
      })
    }
  }

  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '90vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}