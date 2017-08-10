import React, { Component } from 'react';
import SearchBox from '../components/SearchBox';
import Paginator from '../components/Paginator';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox />
        <Paginator />
      </div>
    );
  }
}

export default App;
