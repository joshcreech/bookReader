import React, { Component } from 'react';
import 'react-native-gesture-handler';
import Navigations from './src/navigations';

//=== main ===
class App extends Component {
  render() {
    return (
      <Navigations/>
    );
  }
}

//===  make components available outside ===
export default App;