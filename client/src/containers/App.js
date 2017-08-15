import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import SearchBox from '../components/SearchBox/SearchBox';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Items from '../components/Items/Items';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchBox />
          <Breadcrumb />
          <Route path='/items' component={Items} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
