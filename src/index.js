import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map';
import Filters from './components/filters';

const api_link = 'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/KSI/FeatureServer/0/query?where=1%3D1&outFields=YEAR,DATE,TIME,Hour,STREET1,STREET2,OFFSET,ROAD_CLASS,District,LATITUDE,LONGITUDE,LOCCOORD,ACCLOC,TRAFFCTL,VISIBILITY,LIGHT,RDSFCOND,ACCLASS,IMPACTYPE,INVTYPE,INVAGE,INJURY,FATAL_NO,INITDIR,VEHTYPE,MANOEUVER,DRIVACT,DRIVCOND,PEDTYPE,PEDACT,PEDCOND,CYCLISTYPE,CYCACT,CYCCOND,PEDESTRIAN,CYCLIST,SPEEDING,REDLIGHT,ALCOHOL,DISABILITY,Division,Ward_Name,Ward_ID,Hood_ID,Hood_Name,FID,ACCNUM,Index_,AG_DRIV&outSR=4326&f=json'


const parentNode = document.querySelector('.container')

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    }
  }

  componentDidMount() {
  fetch(api_link)
    .then(response => response.json())
    .then(data => this.setState({ data: data }, function() {
      console.log(this.state.data.features);
    }));
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
