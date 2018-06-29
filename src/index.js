import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map';
import Filters from './components/filters';



const parentNode = document.querySelector('.container')

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   // for later
    //   stateObject = null,
    // }
  }

  render() {
    return (
      <div>
        <Map
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <Filters />
      </div>
    );
  }
}

ReactDOM.render(<App/>, parentNode);
