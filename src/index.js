import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import map from './components/map';
import filter from './components/filters';



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
