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
        <Map />
        <Filters />
      </div>
    );
  }
}

ReactDOM.render(<App/>, parentNode);
