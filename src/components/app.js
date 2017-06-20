import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Cart from './Cart.js';
export default class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div>
      
      <Cart />
      </div>
      </MuiThemeProvider>
    );
  }
}
