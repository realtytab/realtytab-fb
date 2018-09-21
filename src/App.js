/*
 src/App.js
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { simpleAction } from './actions/SimpleAction';

import logo from './logo.svg';
import './App.css';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
});

class App extends Component {
  render() {
    return (
     <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to RealtyTab</h1>
    </header>
    <p className="App-intro">
     Coming soon, in late 2018
    </p>
   </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
