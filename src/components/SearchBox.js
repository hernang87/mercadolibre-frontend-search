import React, { Component } from 'react';
import store from '../store';
import search from '../actions/Search';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  updateTerm(e) {
    this.setState({
      term: e.target.value
    });
  }

  doSubmit(e) {
    e.preventDefault();

    store.dispatch(search(this.state));
  }

  render() {
    return (
      <div className="search-box-container">
        <form onSubmit={e => this.doSubmit(e) }>
          <input type="text" value={this.state.term} onChange={e => this.updateTerm(e)}/>
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
