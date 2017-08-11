import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetchResults from '../actions/FetchResults';
import './SearchBox.css';

class SearchBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.context = context;

    this.state = {
      term: 'ipod'
    }
  }

  updateTerm(e) {
    this.setState({
      term: e.target.value
    });
  }

  doSubmit(e) {
    e.preventDefault();

    this.context.store.dispatch(fetchResults(this.state));
  }

  render() {
    return (
      <div className="search-box">
        <form onSubmit={e => this.doSubmit(e) }>
          <input placeholder="Nunca dejes de buscar" type="text" value={this.state.term} onChange={e => this.updateTerm(e)}/>
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }
};

SearchBox.contextTypes = {
  store: PropTypes.object
}

export default SearchBox;
