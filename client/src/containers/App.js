import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBox from '../components/SearchBox';
import ProductList from '../components/ProductList';
import './App.css';


class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.context = context;
  }

  render() {
    return (
      <div className="App">
        <SearchBox />
        <ProductList />
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object
}

export default App;
