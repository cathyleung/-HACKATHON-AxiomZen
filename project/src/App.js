import React, { Component } from 'react';
import { Map, InfoWindow, Marker } from 'google-maps-react'
import Container from './Container';
import Search from './Search';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        /*
        var latlon = {
            lat: 49.2827,
            lng: -123.1207
        } */
        //Map.defaultProps.initialCenter = latlon;
        this.state = { selectedPlace: {name : ''}};
        console.log('props');
        console.log(props);
    }
    onInfoWindowClose(args) {
        console.log(args);
    }
    onMarkerClick(props, marker, e) {
        console.log(props, marker, e)
    }

    searchDot(e, coords) {
        e.preventDefault();
        this.latlon = coords;
    }
  render() {
    //return (
    //  <div className="App">
    //    <div className="App-header">
    //      <img src={logo} className="App-logo" alt="logo" />
    //      <h2>Welcome to React</h2>
    //    </div>
    //    <p className="App-intro">
    //      To get started, edit <code>src/App.js</code> and save to reloadddd.
    //    </p>
    //  </div>
      //
      //
      //
      return (
          <div className="MapContainer">
                <Search />
          </div>
      )





  }
}

export default App;
