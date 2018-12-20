import React, { Component } from 'react';
import './App.css';
import {MenuContextProvider} from './store/MenuContext';
import Composer from './components/Composer';

class App extends Component {
  render() {
    return (
      <MenuContextProvider>
        <div className="App">
          <Composer />
        </div>
      </MenuContextProvider>
    );
  }
}

export default App;
