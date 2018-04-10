import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Repos from "./components/repos";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Repos />
      </div>
    );
  }
}

export default App;
