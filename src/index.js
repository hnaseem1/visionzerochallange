import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Componenet1 from './components/component1';



const parentNode = document.querySelector('.container')

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   // for later
    //   stateObject = null,
    // }
  }

  // render() {
  //   return (
  //     <div>
  //       <Component1 />
  //       <Component2 />
  //     </div>
  //   );
  // }
}

ReactDOM.render(<App/>, parentNode);
